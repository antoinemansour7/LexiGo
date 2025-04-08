import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyWords() {
  const navigate = useNavigate();
  const [newWord, setNewWord] = useState('');
  const [words, setWords] = useState([]);

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headerStyle = {
    alignSelf: 'flex-end',
    marginBottom: '20px'
  };

  const buttonStyle = {
    background: '#fff',
    color: '#2575fc',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 0 8px rgba(0,0,0,0.2)',
    marginLeft: '10px'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '4px',
    border: 'none',
    marginRight: '10px'
  };

  const wordCardStyle = {
    background: '#fff',
    color: '#2575fc',
    padding: '10px 15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
    margin: '10px',
    fontWeight: 'bold'
  };

  const addWord = (e) => {
    e.preventDefault();
    if (newWord.trim()) {
      setWords([...words, newWord.trim()]);
      setNewWord('');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={buttonStyle} onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
      <h1>My Words</h1>
     
      {/* New word input form */}
      <form onSubmit={addWord} style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Enter a word" 
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Word</button>
      </form>
      {/* Display added words */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {words.map((word, index) => (
          <div key={index} style={wordCardStyle}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWords;
