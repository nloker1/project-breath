import React, { useState } from 'react';
import './SubscriptionForm.css'; // Make sure to create a CSS file with this name.

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(''); // State to keep track of the email error message
    const [isSubscribed, setIsSubscribed] = useState(false); // State to keep track of subscription status
    const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false); // State to keep track of subscription status



    // Validation function for the email
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
        if (!email || regex.test(email) === false) {
            setEmailError('Please enter a valid email.');
            return false;
        }
        setEmailError(''); // Clear error message
        return true;
    };


const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
        console.log('Submitted email:', email);
        
        const apiBaseUrl = process.env.REACT_APP_API_URL; // Get the API URL from environment variable
        const subscribeEndpoint = `${apiBaseUrl}/subscribe`; // Endpoint for the subscription

        // Send the email to the backend
        fetch(subscribeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setEmail(''); // Clear the email field after successful submission
            setIsSubscribed(true); // Set subscription status to true
        })
        .catch((error) => {
            console.error('Error:', error);
            
        });

        setEmailError(''); // Clear error message
    }
};

    return (
        <div className="subscription-container">
            <h1> Subscribe to Project Breath </h1>
            <h2> Get all updates from Project Breath in your inbox </h2>
            <form className="subscription-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`email-input ${emailError ? 'error' : ''}`} // Add 'error' class if there's an error
                    required
                />
                {emailError && <div className="error-message">{emailError}</div>} {/* Display error message */}
                <button type="submit" className="submit-button">Subscribe</button>
            </form>
            {isSubscribed && <div className="success-message">Subscription successful!</div>} {/* Display success message */}
        </div>
    );
};

export default SubscriptionForm;
