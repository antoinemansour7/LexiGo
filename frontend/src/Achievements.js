import React from 'react';
import { useNavigate } from 'react-router-dom';

function Achievements() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Achievements / Daily Motivation</h1>
      <p>Here is the frontend logic for tracking your achievements and daily motivation.</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}

export default Achievements;
