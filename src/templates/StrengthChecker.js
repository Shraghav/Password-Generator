import React, { useState } from 'react';

const { passwordStrength } = require('check-password-strength');

const StrengthChecker = () => {
    const [label, setLabel] = useState(' ');
    const [strength, setStrength] = useState(' ');
    const strengthPassword = async (e) => {
        e.preventDefault();
        setStrength(passwordStrength(label).value);
        // try {
        //     await axios.get(`http://localhost:5000/strengthChecker/${label}`);
        // }
        // catch (error) {
        //     alert("Cannot fetch password!");
        // }
    }
    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <form onSubmit={strengthPassword} className="mb-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Check your password strength!</h1>
                <div className="mb-4">
                    <label htmlFor="label" className="block text-gray-700">Label:</label>
                    <input
                        id="label"
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Check Strength
                </button>
                <div>
                    {strength}
                </div>
            </form>
            
        </div>
    )
}

export default StrengthChecker;