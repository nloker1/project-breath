import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="hero-section">
        <div className="overlay-text">
          <h1>Welcome to Project Breath</h1>
          <p>Guided Breath Work from the World's Leading Experts</p>
          <button className="subscribe-button">Start Your Free Trial</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;