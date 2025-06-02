import React from 'react';
import { useParams } from 'react-router-dom';
import './BookingPage.css';

function BookingPage() {
  const { movieId } = useParams();

  return (
    <div className="booking-container">
      <h2>Booking for Movie ID: {movieId}</h2>
      <p>Select your seats and proceed to payment.</p>
    </div>
  );
}

export default BookingPage;
