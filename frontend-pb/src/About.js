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
      <h1>What is Project Breath?</h1>
      <p>Project Breath is a platform for breathwork from experienced teachers and guides. 
        We believe everyone should have access to improve their life through breathwork.  </p>
      <h1>Project Breath Team</h1>
  
      <h2> Chuck McGee III </h2>
      <img src="/chuck_mcgee_iii.jpeg" alt="Chuck" className="chuck-photo" />
      <p>
        Practicing the Wim Hof Method has changed my life. As a Type 1 Diabetic, I have a unique perspective on health.
         The method has given me the tools to keep me healthy and to know I will be there for my kids as they grow up.
        Meeting and training with Wim Hof was a privilege. His energy, passion and care, not to mention his amazing physical feats showed me that I was capable of more than I ever imagined. Since then I have known that I want to teach others to go beyond what they thought was possible and to help them realize their inner strength. 
      </p>
      <h2> Nate Loker </h2>
      <img src="/headshot.jpg" alt="Nate" className="profile-picture" />
      <p>
        I am a breath work enthusiast and software engineer.
        I love sharing my knowledge of the benefits of breathing better while using technology to make it accessible to everyone. 
        My journey into breath work started a number of years ago. I have been influenced in my breath work practice
        by James Nestor, Chuck McGee, Patrick Mckeown, Moshe Feldenkrais, Nick Straus-Klein, Kaspar Van Der Muelen, and others. 
      </p>
      </div>
      <Footer />
    </div>

  );
}

export default AboutMe;