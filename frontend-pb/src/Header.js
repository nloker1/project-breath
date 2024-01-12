// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="App-header">
      <div className="header-content">
        <Link to="/">
          <img src="pb_logo.jpg" className="logo" alt="Project Breath Logo" />
        </Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={`header-nav ${showMenu ? 'show-menu' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/breath-work">Breath Work</Link>
            <div className="dropdown-content">
              <Link to="/Energy">Energy</Link>
              <Link to="/Relaxation">Relaxation</Link>
            </div>
          </li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* other links */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;