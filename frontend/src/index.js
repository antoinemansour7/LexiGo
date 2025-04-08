import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './dashboard';
import MyWords from './MyWords';
import PracticeMode from './PracticeMode';
import FlashcardsQuizzes from './FlashcardsQuizzes';
import Achievements from './Achievements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mywords" element={<MyWords />} />
        <Route path="/practicemode" element={<PracticeMode />} />
        <Route path="/flashcardsquizzes" element={<FlashcardsQuizzes />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);