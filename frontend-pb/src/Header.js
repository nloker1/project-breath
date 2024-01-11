// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-content">
        <Link to="/">
          <img src="pb_logo.jpg" className="logo" alt="Project Breath Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Start Here</Link>
          </li>
          <li className="dropdown">
            <Link to="/guides">Breath Guides</Link>
            <div className="dropdown-content">
              <Link to="/basic-guide">Breath Basics</Link>
              <Link to="/advanced-guide">Managing Stress</Link>
            </div>
          </li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* other links */}
        </ul>
      </nav>
      {/* Any other header content */}
    </header>
  );
}

export default Header;