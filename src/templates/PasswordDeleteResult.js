import React, { useState } from 'react';
import axios from 'axios';

const PasswordDeleteResult = () => {
    const [label, setLabel] = useState(' ');
    const deletePassword = async (e) => {
        e.preventDefault();
        console.log(label);
        try {
            await axios.delete(`http://localhost:5000/deleteData/${label}`);
        }
        catch (error) {
            console.error('Error fetching password:', error);
        }
    }
    return (
        <div>
            <form onSubmit={deletePassword}>
                <label htmlFor="label" className="block text-gray-700">Label:</label>
                <input
                    id="label"
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
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