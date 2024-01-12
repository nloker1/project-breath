import React from 'react';
import Header from './Header';
import './BreathWork.css';


const BreathWork = () => {
  return (
    <div className="breathwork-container">
      <Header />
      <h1>Guided Breath Work</h1>
      <div className="links-container">
        <a href="/energy">Breath Work for Energy</a>
        <a href="/relaxation">Breath Work for Relaxation</a>
      </div>
    </div>
  );
}

export default BreathWork;