import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this prototype, simply log the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/dashboard'); // redirect to dashboard page
  };

  // Inline styles for an aesthetic login page
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const formStyle = {
    background: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  };

  const titleStyle = {
    marginBottom: '30px',
    fontSize: '2.5em',
    color: '#2575fc',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1em'
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#2575fc',
    color: 'white',
    padding: '14px 20px',
    margin: '16px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={titleStyle}>LexiGO!</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;