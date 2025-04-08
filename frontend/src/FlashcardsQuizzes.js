import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FlashcardsQuizzes() {
  const navigate = useNavigate();

  // Array of 5 dummy quiz questions based on easy English vocabulary
  const questions = [
    {
      text: "Choose the synonym for 'fast'",
      options: ["Quick", "Slow", "Steady", "Lazy"],
      answer: "Quick"
    },
    {
      text: "Choose the antonym for 'happy'",
      options: ["Sad", "Joyful", "Elated", "Cheerful"],
      answer: "Sad"
    },
    {
      text: "Choose the synonym for 'big'",
      options: ["Large", "Tiny", "Small", "Short"],
      answer: "Large"
    },
    {
      text: "Choose the antonym for 'hot'",
      options: ["Warm", "Cold", "Wet", "Dry"],
      answer: "Cold"
    },
    {
      text: "Choose the synonym for 'easy'",
      options: ["Simple", "Complex", "Hard", "Difficult"],
      answer: "Simple"
    }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState('');
  
  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setFeedback('Correct! Well done.');
    } else {
      setFeedback('Wrong answer. Try again!');
    }
  };

  const handleNext = () => {
    setFeedback('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFeedback("Quiz Completed!");
    }
  };
  
  // ...existing container styles...
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
    boxShadow: '0 0 8px rgba(0,0,0,0.2)',
    margin: '0 5px'
  };

  const quizContainerStyle = {
    background: '#fff',
    color: '#2575fc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    marginTop: '20px'
  };

  const optionButtonStyle = {
    ...buttonStyle,
    margin: '10px',
    minWidth: '100px'
  };

  const feedbackStyle = {
    marginTop: '15px',
    fontSize: '1.2em',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={buttonStyle} onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
      <h1>Practice Mode</h1>
      <p>Start a quick practice session using a multiple-choice quiz!</p>
      <div style={quizContainerStyle}>
        <h2>{questions[currentQuestion].text}</h2>
        <div>
          {questions[currentQuestion].options.map((option, index) => (
            <button 
              key={index} 
              style={optionButtonStyle}
              onClick={() => handleAnswer(option)}
              disabled={feedback !== '' && feedback !== "Quiz Completed!"}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && <div style={feedbackStyle}>{feedback}</div>}
        {feedback && feedback !== "Quiz Completed!" && (
          <button style={buttonStyle} onClick={handleNext}>Next Question</button>
        )}
      </div>
    </div>
  );
}

export default FlashcardsQuizzes;