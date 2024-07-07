import React, { useState } from 'react';
import axios from 'axios';

const PasswordPostResult = () => {
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [passwordCurrent, setPasswordCurrent] = useState([]);
    const [label, setLabel] = useState('');

    const generatePassword = async (e) => {
        e.preventDefault(); // Prevent form submission
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const specialCharacters = '!@#$%^&*';
        let password = '';

        const allCharacters = includeSpecialChars ? characters + specialCharacters : characters;
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters[randomIndex];
        }

        const newPasswordEntry = { password, label };
        setPasswordCurrent(newPasswordEntry);

        try {
            await axios.put(`http://localhost:5000/submitData/${label}`, newPasswordEntry);
            console.log('Password saved successfully.');
        } catch (error) {
            console.error('Error saving password:', error);
        }
    };
    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Generate your own Password</h1>
            <form onSubmit={generatePassword}>
                <div className="mb-4">
                    <label htmlFor="passwordLength" className="block text-gray-700">Password Length:</label>
                    <input
                        id="passwordLength"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="number"
                        min="4"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                    />
                </div>

                <div className="mb-4">
                    <div className="flex items-center">
                        <input
                            id="includeSpecialChars"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            type="checkbox"
                            checked={includeSpecialChars}
                            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                        />
                        <label htmlFor="includeSpecialChars" className="ml-2 block text-gray-700">
                            Include Special Characters
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="label" className="block text-gray-700">Label:</label>
                    <input
                        id="label"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Generate Password
                </button>

                <div className="mt-4 text-center text-gray-700">
                    Current Password: {passwordCurrent.password}
                </div>
            </form>
        </div>

    );
}

export default PasswordPostResult;