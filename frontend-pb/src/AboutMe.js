import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="about-content">
      <h1>About Nate</h1>
      <img src="/headshot.jpg" alt="Nate" className="profile-picture" />
      <p>
        I am a software engineer turned real estate agent.
        I love using technology to make the real estate process more efficient and save you money on commission fees.
        I am grounded in the local Gorge community and love sharing this beautiful place with other wonderful people.
      </p>
      {/* Add more content about yourself here */}
      </div>
    </div>

  );
}

export default AboutMe;