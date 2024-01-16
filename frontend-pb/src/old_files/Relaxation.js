import React from 'react';
import Header from './Header';
import './Relaxation.css'; // Assuming you have a CSS file for styling

const Energy = () => {
  return (
    <div className="energy-container">
      <Header />
      <h1>Relaxation</h1>
      <p>Listen to this audio track to wind down and relax.</p>
      
      <audio controls>
        <source src="/energy.m4a" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Energy;