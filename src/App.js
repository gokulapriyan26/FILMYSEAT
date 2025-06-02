// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import NotFoundPage from './pages/NotFoundPage'; // Optional
import './App.css'; // Optional: for global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking/:movieId" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Optional 404 route */}
      </Routes>
    </Router>
  );
}

export default App;
