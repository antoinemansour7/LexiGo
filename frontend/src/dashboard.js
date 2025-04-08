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
    marginBottom: '20px',
    letterSpacing: '2px',
  };

  // New tagline and divider styles for decoration
  const taglineStyle = {
    fontSize: '1.5em',
    fontWeight: 'normal',
    color: '#fff',
    textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
    marginBottom: '20px',
    fontStyle: 'italic',
    textAlign: 'center',
  };

  const dividerStyle = {
    width: '50%',
    border: '1px solid rgba(255,255,255,0.3)',
    marginBottom: '40px',
  };

  // Replace the grid layout with a flex container for boxes
  const boxContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  // Redefine each box's style for a modern card look
  const boxStyle = {
    background: 'linear-gradient(135deg, #ffffff, #f2f2ff)',
    border: '2px solid #4a00e0',
    borderRadius: '20px',
    width: '280px',
    height: '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: '#4a00e0',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const boxHoverStyle = {
    transform: 'translateY(-8px) scale(1.05)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={logoutButtonStyle} onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
      <div style={titleStyle}>LexiGO</div>
      <div style={taglineStyle}>
        Your journey to mastery begins here.
      </div>
      <hr style={dividerStyle} />
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
