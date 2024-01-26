import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Home.css'; // Uncomment this line to use the CSS

const Home = () => {

  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  let interval;

  useEffect(() => {
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    clearInterval(interval);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getMilliseconds = `0${(timer % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((timer / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((timer / 60000) % 60)}`.slice(-2);
    return `${minutes} : ${seconds} : ${getMilliseconds}`;
  };
  return (
    <div>
      <Header /> {/* This includes the navigation and any other header content */}
      <div className="home-content"> 

        <h2> Welcome! </h2> 
        <ul>
        <li>  Our goal is to provide you with simple, scientifically proven ways to improve your breathing. 
             The benefits of breathing better are clear and everyone has the potential to improve. Let's get started!   
        </li>
        </ul>
        <h3> Step 1: Measure your Breath Ability</h3> {/* Add an ID to the header */}
        <ul>
          <li>Take three easy, calm breaths in and out through the nose.</li>
          <li>Take one full nasal inhale, filling the abdomen, upper chest, and lungs.</li>
          <li>Start the timer below as you exhale through pursed lips, as slow as possible.</li>
          <li>Stop the timer when you run out of air, swallow, or feel that you must take a breath in.</li>
        </ul>    
        <div className="stopwatch-container">
          <div className="stopwatch">
            <div className="time">{formatTime()}</div>
            <button onClick={handleStart} disabled={isActive}>Start</button>
            <button onClick={handlePauseResume} disabled={!isActive}>{isPaused ? 'Resume' : 'Pause'}</button>
            <button onClick={handleReset} disabled={!isActive}>Reset</button>
          </div>
        </div>
        <h3> Step 2: Assess your Breath Ability</h3> {/* Add an ID to the header */}
        <ul>
          <li> 80+ seconds –> Elite. Reflects an advanced pulmonary adaptation, excellent motor control, and low stress sensitivity.</li>
          <li>60-80 seconds –> Advanced. Reflects a healthy pulmonary system, good motor control, and relatively low arousal.</li>
          <li>40-60 seconds –> Intermediate. This range generally improves quickly with a focus on CO2 tolerance training.</li>
          <li>20-40 seconds –> Average. Moderate to high arousal state. Breathing mechanics may need improvement.</li>
          <li> 0-20 seconds –> Awesome candidate for breathwork. Very high arousal and stress sensitivity.</li>
        </ul>
        <h3> Step 3: Train your Breath Ability</h3> {/* Add an ID to the header */}
        <ul>
            <li>Follow the breathing guides to improve your breath ability.</li>
            <li>Reach out to us for personalized breath training.</li>
        </ul>    
      </div>
    </div>
  );
  }

export default Home;