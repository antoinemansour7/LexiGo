import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Container and header styles remain unchanged
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

  // New title style for LexiGO
  const titleStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    marginBottom: '40px'
  };

  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // increased min width
    gap: '30px', // increased gap
    width: '80%',
    marginBottom: '0'
  };

  const boxStyle = {
    background: '#fff',
    color: '#2575fc',
    padding: '30px', // increased padding
    borderRadius: '15px', // increased border radius
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', // enhanced box shadow
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.5em', // increased font size
    transition: 'transform 0.3s, box-shadow 0.3s'
  };

  const boxHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.4)' // enhanced hover shadow
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={logoutButtonStyle} onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
      <div style={titleStyle}>LexiGO</div>
      <div style={gridContainer}>
        <div
          style={boxStyle}
          onClick={() => navigate('/mywords')}
          onMouseEnter={e => e.currentTarget.style.transform = boxHoverStyle.transform}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}
        >
          My Words!
        </div>
        <div
          style={boxStyle}
          onClick={() => navigate('/practicemode')}
          onMouseEnter={e => e.currentTarget.style.transform = boxHoverStyle.transform}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}
        >
          Practice Mode
        </div>
        <div
          style={boxStyle}
          onClick={() => navigate('/flashcardsquizzes')}
          onMouseEnter={e => e.currentTarget.style.transform = boxHoverStyle.transform}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}
        >
          Flashcards / Quizzes
        </div>
        <div
          style={boxStyle}
          onClick={() => navigate('/achievements')}
          onMouseEnter={e => e.currentTarget.style.transform = boxHoverStyle.transform}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}
        >
          Achievements / Daily Motivation
        </div>
      </div>
      {/* Progress bar section removed */}
    </div>
  );
}

export default Dashboard;
