import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Inline styles for aesthetics
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
    marginBottom: '20px',
  };

  const logoutButtonStyle = {
    background: '#fff',
    color: '#2575fc',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 0 8px rgba(0,0,0,0.2)',
  };

  const progressContainerStyle = {
    width: '80%',
    margin: '20px auto 40px',
    background: '#f0f0f0',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
  };

  const progressBarStyle = {
    width: '50%', // example progress value
    height: '20px',
    background: 'linear-gradient(to right, #2575fc, #6a11cb)',
    borderRadius: '10px 0 0 10px',
  };

  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    width: '80%',
    margin: '0 auto',
  };

  const boxStyle = {
    background: '#fff',
    color: '#2575fc',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.2em'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={logoutButtonStyle} onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
      <div style={progressContainerStyle}>
        <div style={progressBarStyle}></div>
      </div>
      <div style={gridContainer}>
        <div style={boxStyle} onClick={() => console.log('My Words! clicked')}>
          My Words!
        </div>
        <div style={boxStyle} onClick={() => console.log('Practice Mode clicked')}>
          Practice Mode
        </div>
        <div style={boxStyle} onClick={() => console.log('Flashcards / Quizzes clicked')}>
          Flashcards / Quizzes
        </div>
        <div style={boxStyle} onClick={() => console.log('Achievements / Daily Motivation clicked')}>
          Achievements / Daily Motivation
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
