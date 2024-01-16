// AudioLink.js

import React from 'react';
import { useParams } from 'react-router-dom';
import AudioFiles from './AudioData';
import Header from './Header';
import './AudioLink.css';


const AudioLink = () => {
  const { type } = useParams();

  const audio = AudioFiles[type];

  if (!audio) {
    return <div>Audio type not found.</div>;
  }

  return (
    <div>
      <div className="audio-link">
        <h2>{audio.title}</h2>
        <p>{audio.description}</p>
        <audio controls src={audio.audioUrl}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioLink;