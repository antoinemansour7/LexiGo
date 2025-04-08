import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyWords() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>My Words</h1>
      <p>Here is the frontend logic for displaying your words.</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}

export default MyWords;
