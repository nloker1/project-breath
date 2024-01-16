import React from 'react';
import Header from './Header';
import Footer from './Footer'
import { Link } from 'react-router-dom';

import './StartHere.css';

const Why = () => {
  return (
    <div className="start-container">
      <Header />

      <h1> What even is Breathwork?</h1>
      <p> The world of breathwork can seem complex and intimidating. Breathwork encompasses a wide variety of 
      breathing techniques from the ancient to the modern. With so many options it is hard to know where to 
      begin. We define breathwork as anytime you are conciously manipulating your breath to change
      your physical, mental, or emotional self. 
      </p>

      <h1> Why practice Breathwork? </h1>
      
      <ul className="benefits-list">
        <li><strong>Mental Health:</strong>  Breathwork can reduce stress, anxiety, and depression. It helps in calming the mind and can improve focus and mindfulness.</li>
        <li><strong>Physical Health:</strong> Regular practice can enhance respiratory function, increase energy levels, and improve sleep quality. Some practices are also used to boost the immune system.</li>
        <li><strong>Emotional Well-being:</strong> It can help in processing emotions, releasing trauma, and fostering a deeper sense of well-being and connectedness.</li>
        <li><strong>Spiritual Development:</strong> Many people use breathwork as a tool for spiritual growth, self-awareness, and personal transformation.</li>
      </ul>

      <h1> Who should practice Breathwork? </h1>
      <p> We believe everyone (or almost everyone) should practice breathwork! If you have cardiovascular problems, 
      severe mental health conditions, or are pregnant please consult your physician before beginning breathwork.
      </p>

      <h1> How do I get started? </h1>
      <p>
      One of the best things about breathwork is that all you need is a quiet place to practice.
      No gym membership, no fancy equipment, just some peace and quiet and some guidance. 
      We have some of the best teacher so let's get started!  <Link to="/audio-recording">Audio Recordings</Link>
      </p>
    <Footer />
    </div>
  );
}

export default Why;