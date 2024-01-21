import React from 'react';
import { Link } from 'react-router-dom';
import AudioFiles from './AudioData';
import Header from './Header';
import Footer from './Footer';

import './AudioRecording.css';



const AudioRecording = () => {
  return (
    <div className="audio-container">
      <Header />
      <div className="header-with-image">
        <h1> Breathwork from Chuck McGee III</h1>
        <img src="chuck_mcgee_iii.jpeg" alt="Descriptive Alt Text" />
      </div>
     <div className="links-container">
        {Object.keys(AudioFiles).map(type => (
          <Link key={type} to={`/audio-link/${type}`}>
            {AudioFiles[type].title}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default AudioRecording;



