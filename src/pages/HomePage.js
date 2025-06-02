import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Optional if you want to create custom styles here

const nowShowing = [
  { title: 'Furiosa', poster: '/posters/furiosa.jpg' },
  { title: 'Deadpool 3', poster: '/posters/deadpool.jpg' },
  { title: 'Inside Out 2', poster: '/posters/insideout2.jpg' },
];

const upcoming = [
  { title: 'Avatar 3', poster: '/posters/avatar3.jpg' },
  { title: 'Batman: The Brave and the Bold', poster: '/posters/batman.jpg' },
];

function HomePage() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book');
  };

  return (
    <div className="container">
      <h1 style={{ color: '#fbbf24' }}>Welcome to FILMYSEAT 🎬</h1>
      <p>Book tickets at Abreeza Ayala Cinemas, Davao City</p>

      <section>
        <h2>🎥 Now Screening</h2>
        <div className="scroll-banner">
          {nowShowing.map((movie, index) => (
            <img key={index} src={movie.poster} alt={movie.title} className="movie-poster" />
          ))}
        </div>
      </section>

      <section>
        <h2>🎞️ Upcoming Releases</h2>
        <div className="scroll-banner">
          {upcoming.map((movie, index) => (
            <img key={index} src={movie.poster} alt={movie.title} className="movie-poster" />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#e50914' }}>🔥 Exclusive Discounts This Week!</h2>
        <p>Save up to 20% on weekday shows. Limited time offer!</p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <button onClick={handleBookNow}>Book Tickets Now</button>
      </section>

      <section style={{ marginTop: '40px' }}>
        <p>📸 Join our <a href="https://instagram.com/filmyseat" target="_blank" rel="noreferrer">Instagram community</a> for latest updates!</p>
      </section>
    </div>
  );
}

export default HomePage;
