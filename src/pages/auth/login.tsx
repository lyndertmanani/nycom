import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import Logo from "/logo-x.png";
// import bg from "/assets/gradient/docs-left.svg";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("home");
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'An error occurred during login.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User is logged in:', user);
        navigate("home"); // Redirect to home if the user is already logged in
      } else {
        console.log('User is logged out');
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div className="relative w-full h-screen">
      {/* <img src={bg} alt="" className="w-full h-full object-cover object-center absolute" /> */}
      {/* <div className="bg-gradient-to-b from-transparent to-black opacity-90 w-full h-full absolute top-0 left-0 z-0"></div> */}
      
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-sm text-black">
          <div className="flex items-center justify-center mb-4">
            <img src={Logo} className="h-28" alt="PashoyoMw_logo" />
          </div>
          
          {errorMessage && (
            <div className="mb-4 text-center text-[#cb2121]">
              {errorMessage}
            </div>
          )}
          
          <div className="flex justify-center mt-3 px-3">
            <div className="inline w-full">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-2 border-none outline-none  bg-[#6d6d6d] bg-opacity-40 rounded-lg"
                placeholder="Email"
                required
              />
              <div className="relative mb-2">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-none outline-none  bg-[#6d6d6d] bg-opacity-40 rounded-lg"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-4 top-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IconEye size={24} className='text-gray-500'/> : <IconEyeClosed size={24} className='text-gray-500' />}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-1">
            <button
              type="submit"
              disabled={isLoading}
              className="w-3/4 px-4 py-1.5 mb-2 border-none outline-none rounded-lg cursor-pointer bg-[#222222] text-gray-50 hover:text-slate-300 hover:bg-[#0b0b0bb7] hover:bg-opacity-40 duration-700"
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
          
          <div className="flex justify-center">
            <div className="inline-flex">
              <p className="mr-2 ">Don't have an account? <Link className="hover:underline" to="/signup">Sign up</Link></p>
              {/* <p className="mr-2 hover:underline"><Link to="/forgot">Forgot Password?</Link> |</p> */}
              {/* <p className="mr-2 hover:underline"><Link to="#">Help</Link></p> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
