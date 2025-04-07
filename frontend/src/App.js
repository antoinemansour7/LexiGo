import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch from the backend API
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>LexiGO! Vocabulary Builder</h1>
      <p>{message ? message : 'Loading...'}</p>
    </div>
  );
}

export default App;