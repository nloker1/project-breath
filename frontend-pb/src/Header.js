// Header.js
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <header className="App-header">
      <Link to="/">
        <img src="/pb-logo.jpg" className="logo" alt="Project Breath Logo" />
      </Link>
      <nav className="navbar">
        <button className="hamburger" onClick={togglePanel}>
          ☰ {/* Hamburger Icon */}
        </button>
        <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={togglePanel}>×</button> {/* Close button */}

          <a href="/start-here">Start Here</a>
          <a href="/audio-recording">Audio Recordings</a>
          <a href="/education">Education</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          {/* Add other menu items here */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
