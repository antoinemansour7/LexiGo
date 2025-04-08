import React from 'react';
import { useNavigate } from 'react-router-dom';

function PracticeMode() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Practice Mode</h1>
      <p>Here is the frontend logic for practicing your words.</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}

export default PracticeMode;
