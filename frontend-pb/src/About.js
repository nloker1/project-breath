import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import './About.css';

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="about-content">
      <h1>Project Breath Members</h1>
      <h2> Nate Loker </h2>
      <img src="/headshot.jpg" alt="Nate" className="profile-picture" />
      <p>
        I am a breath work enthusiast and software engineer.
        I love sharing my knowledge of the benefits of breathing better while using technology to make it accessible to everyone. 
        My journey into breath work started a number of years ago. I have been influenced in my breath work practice
        by James Nestor, Chuck McGee, Patrick Mckeown, Moshe Feldenkrais, Nick Straus-Klein, Kaspar Van Der Muelen, and others. 
      </p>
      </div>
    </div>

  );
}

export default AboutMe;