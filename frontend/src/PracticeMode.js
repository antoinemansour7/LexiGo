import React from 'react';
import { useNavigate } from 'react-router-dom';

function PracticeMode() {
  const navigate = useNavigate();

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
    boxShadow: '0 0 8px rgba(0,0,0,0.2)'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={buttonStyle} onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
      <h1>Practice Mode</h1>
      <p>Here is the frontend logic for practicing your words.</p>
    </div>
  );
}

export default PracticeMode;
