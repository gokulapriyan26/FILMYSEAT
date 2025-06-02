// src/pages/BookingPage.js

import React, { useState } from 'react';
import './BookingPage.css'; // Optional: if you create a CSS file
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { movieId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalSeats = 201;

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBooking = () => {
    alert(`Booked seats: ${selectedSeats.join(', ')}`);
    // In future: Add actual backend API or WhatsApp message feature
  };

  return (
    <div className="booking-page">
      <h1>Book Your Seats 🎟️</h1>
      <p>Movie ID: {movieId}</p>

      <div className="seats-container">
        {[...Array(totalSeats)].map((_, i) => {
          const seatNumber = i + 1;
          const isSelected = selectedSeats.includes(seatNumber);
          return (
            <button
              key={seatNumber}
              className={`seat ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </button>
          );
        })}
      </div>

      <div className="booking-actions">
        <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
        <button onClick={handleBooking} className="confirm-button">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
