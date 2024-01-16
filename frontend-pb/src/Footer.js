import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create a Footer.css file for styling

const Footer = () => {
  return (
    <footer className="App-footer">

      <Link to="/">
        <img src="pb-logo.jpg" className="logo" alt="Project Breath Logo" />
      </Link>

    </footer>
  );
}

export default Footer;
