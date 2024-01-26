import React from 'react';
import Header from './Header';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="hero-section">
        <div className="overlay-text">
          <h1>Welcome to Project Breath</h1>
          <p>The Art and Science of Breathing better</p>
          {/*<button className="subscribe-button">Start Your Free Trial</button>*/}
        </div>
      </div>

    </div>
  );
}

export default Home;