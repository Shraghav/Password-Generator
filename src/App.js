import React, { useState } from 'react';
import './App.css';


const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [passwordHistory, setPasswordHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [label, setLabel] = useState('');

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const specialCharacters = '!@#$%^&*';
    let password = '';

    if (includeSpecialChars) {
      const allCharacters = characters + specialCharacters;
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
      }
    } else {
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
    }

    const newPasswordEntry = {
      password: password,
      label: label
    };

    setPasswordHistory([...passwordHistory, newPasswordEntry]);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
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

      {/* special characters */}
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
          <br />
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
      <br />
      <button className="btn btn-primary" onClick={generatePassword}>
        Generate Password
      </button>
      <br />
      <button className="btn btn-secondary mt-3" onClick={toggleHistory}>
        {showHistory ? 'Hide History' : 'Show History'}
      </button>
      {showHistory && (
        <div className="password-history mt-3">
          <h3>Password History:</h3>
          <ul className="list-group">
            {passwordHistory.map((entry, index) => (
              <li key={index} className="list-group-item">
                <span className="label">{entry.label}: </span>
                <span className="password">{entry.password}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
