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
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 0 8px rgba(0,0,0,0.2)',
  };

  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    width: '80%',
    marginBottom: '60px'
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

  // New progress bar section positioned below the grid
  const progressWrapperStyle = {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const progressTextStyle = {
    marginBottom: '10px',
    fontSize: '1.4em',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  };

  const progressContainerStyle = {
    width: '100%',
    background: '#f0f0f0',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
  };

  const progressBarStyle = {
    width: '50%', // example progress value
    height: '25px',
    background: 'linear-gradient(to right, #2575fc, #6a11cb)',
    borderRadius: '10px 0 0 10px',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={logoutButtonStyle} onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
      <div style={gridContainer}>
        <div style={boxStyle} onClick={() => navigate('/mywords')}>
          My Words!
        </div>
        <div style={boxStyle} onClick={() => navigate('/practicemode')}>
          Practice Mode
        </div>
        <div style={boxStyle} onClick={() => navigate('/flashcardsquizzes')}>
          Flashcards / Quizzes
        </div>
        <div style={boxStyle} onClick={() => navigate('/achievements')}>
          Achievements / Daily Motivation
        </div>
      </div>
      <div style={progressWrapperStyle}>
        <div style={progressTextStyle}>
          Progress: You're crushing it!
        </div>
        <div style={progressContainerStyle}>
          <div style={progressBarStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
