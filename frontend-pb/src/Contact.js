// Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Make sure to import the CSS file
import Header from './Header';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiBaseUrl = process.env.REACT_APP_API_URL;
    const submitFormEndpoint = `${apiBaseUrl}/submit-form`;

    fetch(submitFormEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <Header />
      <div className="contact-container"> {/* This container will help center the form on the page */}
      <h1>Contact Project Breath</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="message-textarea"
              placeholder="Message" 
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        ) : (
          <p>Message sent successfully! We will be in touch soon!</p>
        )}
    </div>
    </div>
  );
}

export default Contact;
