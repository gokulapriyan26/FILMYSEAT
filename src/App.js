import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage'; // ✅ Correct import
import NotFoundPage from './pages/NotFoundPage'; // Optional: if you have a 404 page
import './App.css'; // Optional: your styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking/:movieId" element={<BookingPage />} /> {/* ✅ Booking route */}
        <Route path="*" element={<NotFoundPage />} /> {/* Optional: fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
