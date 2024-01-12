import React from 'react';
import Header from './Header';
import './Why.css';

const Why = () => {
  return (
    <div className="why-container">
      <Header />

      <h1>The Benefits of Breath Work</h1>
      <p>Breath work is an ancient practice with numerous benefits for the mind and body. 
      It's a powerful way to enhance physical health and emotional well-being. Here are some key benefits:</p>
      
      <ul className="benefits-list">
        <li><strong>Reduces Stress:</strong> Regular breath work can significantly reduce stress and promote relaxation.</li>
        <li><strong>Improves Focus and Concentration:</strong> It helps in clearing the mind, improving focus and concentration.</li>
        <li><strong>Enhances Lung Function:</strong> Breath work techniques can strengthen lung capacity and improve overall respiratory health.</li>
        <li><strong>Better Emotional Control:</strong> It enables better management and control of emotions, aiding in handling anxiety and depression.</li>
        <li><strong>Increases Energy Levels:</strong> Certain breathing techniques can increase energy levels, making you feel revitalized.</li>
      </ul>
    </div>
  );
}

export default Why;