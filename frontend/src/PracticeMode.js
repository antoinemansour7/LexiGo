import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PracticeMode() {
  const navigate = useNavigate();

  // Array of flashcards with vocabulary word and definition
  const flashcards = [
    { word: "Fast", definition: "Moving or capable of moving at high speed." },
    { word: "Happy", definition: "Feeling or showing pleasure or contentment." },
    { word: "Big", definition: "Of considerable size, extent, or intensity." },
    { word: "Hot", definition: "Having a high degree of heat or a high temperature." },
    { word: "Easy", definition: "Achieved without great effort; presenting few difficulties." }
  ];
  
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    setFlipped(false);
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
  };

  // Container style for the page
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

  // Card container with perspective for the 3D effect
  const cardContainerStyle = {
    perspective: '1000px',
    marginTop: '20px'
  };

  // The inner container for the card that rotates on flip
  const flipInnerStyle = {
    position: 'relative',
    width: '300px',
    height: '200px',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  };

  // Style for each card face (front and back)
  const cardFaceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '10px',
    background: '#fff',
    color: '#2575fc',
    fontSize: '1.5em',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={buttonStyle} onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
      <h1>Practice Mode</h1>
      <p>Practice with flashcards: click the card to flip it!</p>
      <div style={cardContainerStyle} onClick={handleFlip}>
        <div style={flipInnerStyle}>
          {/* Front face: shows the word */}
          <div style={cardFaceStyle}>
            {flashcards[currentCard].word}
          </div>
          {/* Back face: shows the definition and is rotated */}
          <div style={{ ...cardFaceStyle, transform: 'rotateY(180deg)' }}>
            {flashcards[currentCard].definition}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '60px' }}>
        <button style={buttonStyle} onClick={handleNext}>Next Card</button>
      </div>
    </div>
  );
}

export default PracticeMode;