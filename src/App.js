import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [passwordHistory, setPasswordHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
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

    setPasswordHistory([...passwordHistory, newPasswordEntry]);

    try {
      await axios.post('http://localhost:5000/api/submitData', newPasswordEntry);
      console.log('Password saved successfully.');
    } catch (error) {
      console.error('Error saving password:', error);
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
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
      </form>
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



// // src/App.js
// import React, { useEffect, useState } from 'react';
// import { fetchGreeting } from './api';

// const App = () => {
//   const [greeting, setGreeting] = useState('');

//   useEffect(() => {
//     const getGreeting = async () => {
//       try {
//         const data = await fetchGreeting();
//         setGreeting(data.message);
//       } catch (error) {
//         console.error('Error fetching greeting:', error);
//       }
//     };

//     getGreeting();
//   }, []);

//   return (
//     <div className="App">
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// export default App;

