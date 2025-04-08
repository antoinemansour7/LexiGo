import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '60px 20px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    alignSelf: 'flex-end',
    marginBottom: '20px',
  };

  const logoutButtonStyle = {
    background: '#fff',
    color: '#4a00e0',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 0 8px rgba(0,0,0,0.2)',
    transition: 'background 0.3s ease, color 0.3s ease',
  };

  const titleStyle = {
    fontSize: '3.5em',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    marginBottom: '40px',
    letterSpacing: '2px',
  };

  const boxContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const boxStyle = {
    background: 'linear-gradient(135deg, #ffffff, #ececff)',
    color: '#4a00e0',
    width: '300px',
    height: '200px',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6em',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const boxHoverStyle = {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={logoutButtonStyle} onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
      <div style={titleStyle}>LexiGO</div>
      <div style={boxContainerStyle}>
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
      {/* Removed progress bar section */}
    </div>
  );
}

export default Dashboard;
