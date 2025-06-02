import React, { useState } from 'react';

const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const totalSeats = 201;
  const seatsPerRow = 15;

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
    } else {
      alert(`Booking confirmed for seats: ${selectedSeats.join(', ')}`);
      // Placeholder for actual payment or ticket confirmation logic
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push(
        <button
          key={i}
          onClick={() => handleSeatClick(i)}
          className={`w-10 h-10 m-1 rounded-md text-sm font-semibold
            ${selectedSeats.includes(i) ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}
          `}
        >
          {i}
        </button>
      );
    }
    return seats;
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-[#111827] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">🎟️ Book Your Seats</h1>
        <p className="text-lg mb-4 text-gray-300">Click on the seats below to select your preferred ones.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#1f2937] rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Selected Seats:</h2>
            <p className="text-green-400">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
          </div>
          <div className="bg-[#1f2937] rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Selected:</h2>
            <p className="text-yellow-400">{selectedSeats.length}</p>
          </div>
        </div>

        <div className="flex justify-center flex-wrap max-w-4xl mx-auto bg-white p-4 rounded-lg text-black">
          {renderSeats()}
        </div>

        <button
          onClick={handleConfirmBooking}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
