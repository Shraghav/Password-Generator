import React, { useState } from 'react';
import axios from 'axios';

const PasswordPostResult = () => {
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    // const [passwordHistory, setPasswordHistory] = useState([]);
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
        <div className="container">
            <h1>Password Generator</h1>
            <form onSubmit={generatePassword}>
                <div className="form-group">
                    <label htmlFor="passwordLength">Password Length:</label>
                    <input
                        id="passwordLength"
                        className="form-control"
                        type="number"
                        min="4"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                    />
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input
                            id="includeSpecialChars"
                            className="form-check-input"
                            type="checkbox"
                            checked={includeSpecialChars}
                            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="includeSpecialChars">
                            Include Special Characters
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="label">Label:</label>
                    <input
                        id="label"
                        className="form-control"
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Generate Password
                </button>
                <div className='password-current'>
                    Current Password: {passwordCurrent.password}
                </div>
            </form>
        </div>
    );
}

export default PasswordPostResult;