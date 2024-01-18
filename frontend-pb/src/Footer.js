import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create a Footer.css file for styling
import SubscriptionForm from './SubscriptionForm'


const Footer = () => {
  return (
    <footer className="App-footer">
    <SubscriptionForm />  

    </footer>
  );
}

export default Footer;
      // <Link to="/">
      //   <img src="pb-logo.jpg" className="logo" alt="Project Breath Logo" />
      // </Link>