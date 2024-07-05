import React, { useState } from 'react';
import axios from 'axios';

const PasswordUserCreate = () => {
    const [passwordCurrent, setPasswordCurrent] = useState([]);
    const [label, setLabel] = useState('');
    const [password, setPassword] = useState('');

    const generatePassword = async (e) => {
        e.preventDefault(); // Prevent form submission

        const newPasswordEntry = { password, label };
        setPasswordCurrent(newPasswordEntry);

        try {
            await axios.put(`http://localhost:5000/submitData/${label}`, newPasswordEntry);
            console.log('Password saved successfully.');
        } catch (error) {
            console.error('Error saving password:', error);
        }
        return false;
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Create your own password!</h1>
            <form onSubmit={generatePassword}>
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

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input
                        id="password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

export default PasswordUserCreate;