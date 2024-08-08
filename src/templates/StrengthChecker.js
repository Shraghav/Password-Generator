import React, { useState } from 'react';
import '../Style/strengthCheck.css';

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);
    const [criteria, setCriteria] = useState({
        length: false,
        upperCase: false,
        lowerCase: false,
        number: false,
        specialChar: false,
    });

    const calculateStrength = (password) => {
        const lengthCriteria = password.length >= 8;
        const lengthCriteriaMax = password.length >= 13;
        const upperCaseCriteria = /[A-Z]/.test(password);
        const lowerCaseCriteria = /[a-z]/.test(password);
        const numberCriteria = /[0-9]/.test(password);
        const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        let strength = 0;
        if (lengthCriteriaMax) strength += 20;
        if (lengthCriteria) strength += 20;
        if (upperCaseCriteria && lengthCriteria) strength += 20;
        if (lowerCaseCriteria && lengthCriteria) strength += 20;
        if (numberCriteria && lengthCriteria) strength += 20;
        if (specialCharCriteria && lengthCriteria) strength += 20;

        setCriteria({
            length: lengthCriteria,
            upperCase: upperCaseCriteria,
            lowerCase: lowerCaseCriteria,
            number: numberCriteria,
            specialChar: specialCharCriteria,
        });

        return strength;
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(calculateStrength(newPassword));
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Password Strength Checker</h1>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="mt-1 w-80 block p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="progress-bar">
                <div className="progress" style={{ width: `${strength}%` }}></div>
            </div>
            <div className='passwordStrength'>Password Strength: {strength}%</div>
            <div className="criteria">
                <p style={{ color: criteria.length ? 'green' : 'red' }}>
                    Minimum 8 characters
                </p>
                <p style={{ color: criteria.upperCase ? 'green' : 'red' }}>
                    At least one uppercase letter
                </p>
                <p style={{ color: criteria.lowerCase ? 'green' : 'red' }}>
                    At least one lowercase letter
                </p>
                <p style={{ color: criteria.number ? 'green' : 'red' }}>
                    At least one number
                </p>
                <p style={{ color: criteria.specialChar ? 'green' : 'red' }}>
                    At least one special character
                </p>
            </div>
        </div>
    );
};

export default PasswordStrengthChecker;
