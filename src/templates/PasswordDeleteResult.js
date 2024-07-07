import React, { useState } from 'react';
import axios from 'axios';

const PasswordDeleteResult = () => {
    const [label, setLabel] = useState(' ');
    const deletePassword = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/deleteData/${label}`);
        }
        catch (error) {
            alert("Cannot fetch password!");
            console.error('Error fetching password:', error);
        }
    }
    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <form onSubmit={deletePassword}>
                <h1 className="text-2xl font-bold mb-4 text-center">Delete your password!</h1>
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
                    Delete
                </button>
            </form>
        </div>
    )
}

export default PasswordDeleteResult;