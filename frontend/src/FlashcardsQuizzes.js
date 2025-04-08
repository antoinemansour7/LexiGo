
import React from 'react';
import { useNavigate } from 'react-router-dom';

function FlashcardsQuizzes() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Flashcards / Quizzes</h1>
      <p>Here is the frontend logic for flashcards and multiple-choice quizzes.</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}

export default FlashcardsQuizzes;