import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, AuthError } from "firebase/auth";
import { auth } from '../../config/firebase';
import Logo from '/logo-x.png';
// import Imagebg from '/assets/gradient/docs-left.svg';
import { IconEyeClosed, IconEye } from '@tabler/icons-react';
import { PasswordStrengthChecker } from './hooks/passwords';

// Define interface for form data
interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [strength, setStrength] = useState<number>(0);
    const [showProgressBar, setShowProgressBar] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name as keyof FormData]: value }));

        if (name === 'password') {
            PasswordStrengthChecker.handleTyping(setShowProgressBar, setStrength, value);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordType(prev => prev === 'password' ? 'text' : 'password');
    };

    const validateForm = (): boolean => {
        if (!formData.email || !formData.password) {
            setMessage('Please fill in all required fields.');
            setMessageType('error');
            return false;
        }
        if (strength < 2) {
            setMessage('Please use a stronger password.');
            setMessageType('error');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match.');
            setMessageType('error');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (!validateForm()) {
            setIsLoading(false);
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Update user profile
            await updateProfile(user, {
                displayName: formData.email,
            });

            setMessage('Sign up successful! Please check your email for confirmation.');
            setMessageType('success');
            navigate(`/login?email=${encodeURIComponent(formData.email)}`);
        } catch (error: unknown) {
            let errorMessage = 'Oops, something went wrong.';
            
            if (error instanceof Error) {
                const authError = error as AuthError;
                switch (authError.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'Oops, this email is already in use.';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'Please choose a stronger password.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'The email address is invalid.';
                        break;
                    default:
                        errorMessage = authError.message;
                }
                console.error('Error signing up:', authError.message);
            }
            
            setMessage(errorMessage);
            setMessageType('error');
        } finally {
            setIsLoading(false);
        }
    };

    const progressBarColor = PasswordStrengthChecker.getColor(strength);
    const strengthLabel = PasswordStrengthChecker.getLabel(strength);

    return (
        <div className="relative w-full h-screen">
            {/* <img src={Imagebg} alt="" className="w-full h-full object-cover object-center absolute" /> */}
            {/* <div className="bg-gradient-to-b from-transparent to-black opacity-90 w-full h-full absolute top-0 left-0 z-0"></div> */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-sm text-black">
                    <div className="flex items-center justify-center mb-4">
                        <img src={Logo} className="h-28" alt="PashoyoMw_logo" />
                    </div>
                    {message && (
                        <div className={`mb-4 text-center ${messageType === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                            {message}
                        </div>
                    )}
                    <div className="flex justify-center mt-3 px-3">
                        <div className="inline w-full">
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 mb-2 border-none outline-none  bg-[#6d6d6d] bg-opacity-40 rounded-lg"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="flex px-4 py-2 mb-2 border-none  bg-[#6d6d6d] bg-opacity-40 rounded-lg">
                                <input
                                    type={passwordType}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent outline-none"
                                    placeholder="Password"
                                    required
                                />
                                <span className="flex justify-center items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                    {passwordType === 'password' ? <IconEyeClosed stroke={2} className='text-gray-500' /> : <IconEye stroke={2} className='text-gray-500' />}
                                </span>
                            </div>
                            {showProgressBar && (
                                <div className="px-2 mb-2">
                                    <div className="h-1 bg-gray-300 rounded-full">
                                        <div
                                            className={`h-full rounded-full transition-all duration-700 ${progressBarColor}`}
                                            style={{ width: `${(strength / 4) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="mt-1 text-xsm text-gray-600 font-semibold">
                                        Password Strength: <span className="font-semibold">{strengthLabel}</span>
                                    </p>
                                </div>
                            )}
                            <input
                                type={passwordType}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 mb-2 border-none outline-none  bg-[#6d6d6d] bg-opacity-40 rounded-lg"
                                placeholder="Confirm Password"
                                required
                            />
                            <div className="flex justify-center mt-1">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-3/4 px-4 py-1.5 mb-2 border-none outline-none cursor-pointer bg-[#099dad] text-gray-50 hover:text-slate-300 hover:bg-[#099dadb7] hover:bg-opacity-40 duration-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Signing up...' : 'Sign up'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3">
                        <span>Already have an account?&nbsp;</span>
                        <a href="/login" className="text-primary-button hover:underline">
                            Login here
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
