import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import './Education.css'; // Make sure to create a CSS file for styling
import EducationContent from './EducationContent';



const Education = () => {
  return (
    <div className="education-container">
      <Header />
      <div className="header-with-image">
        <h1> Educational Resources </h1>
      </div>
      <div className="links-container">
        {Object.keys(EducationContent).map(key => (

          <div key={key} className="education-item">
            <Link to={`/education/${key}`}>
              <h2>{EducationContent[key].title}</h2>
              <h3>{EducationContent[key].date}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Education;