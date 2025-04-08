import React from 'react';
import { useNavigate } from 'react-router-dom';

function AchievementPage() {
  const navigate = useNavigate();
  
  // Sample achievement data
  const achievements = [
    "Completed 10 flashcards",
    "Mastered the Basics",
    "Achieved 7-day login streak",
    "Learned 50 new words",
    "Completed Practice Mode session"
  ];
  
  // Reused styles
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

  const progressWrapperStyle = {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px'
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
    width: '60%', // Example progress value
    height: '25px',
    background: 'linear-gradient(to right, #2575fc, #6a11cb)',
    borderRadius: '10px 0 0 10px',
  };

  const cardStyle = {
    background: 'linear-gradient(135deg, #ffffff, #e6e6ff)',
    color: '#4a00e0',
    padding: '20px 30px',
    borderRadius: '12px',
    border: '2px solid #4a00e0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    margin: '15px',
    minWidth: '280px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s'
  };

  const cardHoverStyle = {
    transform: 'scale(1.07)',
    boxShadow: '0 6px 18px rgba(0,0,0,0.3)'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={buttonStyle} onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
      <h1>Achievements</h1>
      <div style={progressWrapperStyle}>
        <div style={progressTextStyle}>
          Progress: 60% Complete!
        </div>
        <div style={progressContainerStyle}>
          <div style={progressBarStyle}></div>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            style={cardStyle}
            onMouseEnter={e => e.currentTarget.style.transform = cardHoverStyle.transform}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            {ach}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementPage;
