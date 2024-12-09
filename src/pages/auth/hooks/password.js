let typingTimer;

export class PasswordStrengthChecker {
    static getStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength;
    }

    static getColor(strength) {
        switch (strength) {
            case 0:
            case 1:
                return 'bg-red-600';
            case 2:
                return 'bg-yellow-500';
            case 3:
            case 4:
                return 'bg-green-500';
            default:
                return 'bg-gray-400';
        }
    }

    static getLabel(strength) {
        switch (strength) {
            case 0:
            case 1:
                return 'Weak';
            case 2:
                return 'Moderate';
            case 3:
            case 4:
                return 'Strong';
            default:
                return 'Invalid';
        }
    }

    // Handle the typing timer to show/hide the progress bar
    static handleTyping(setShowProgressBar, setStrength, password) {
        setStrength(this.getStrength(password));

        // Show progress bar when typing
        setShowProgressBar(true);

        // Clear any existing timeout
        clearTimeout(typingTimer);

        // Set timeout to hide progress bar after 10 seconds
        typingTimer = setTimeout(() => {
            setShowProgressBar(false);
        }, 10000);
    }
}