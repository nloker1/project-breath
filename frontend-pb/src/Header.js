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
        <img src="pb_logo.jpg" className="logo" alt="Project Breath Logo" />
      </Link>
      <nav className="navbar">
        <button className="hamburger" onClick={togglePanel}>
          ☰ {/* Hamburger Icon */}
        </button>
        <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
          <a href="/why">Why Breath Work?</a>
          <a href="/breath-work">Guided Sessions</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          {/* Add other menu items here */}
        </div>
      </nav>
      {/* Any other header content */}
    </header>
  );
}

export default Header;