const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { Pool } = require('pg');
const morgan = require('morgan');
app.use(morgan('combined'));

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});


app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nloker1@gmail.com', // Your email
    pass: process.env.EMAIL_PASSWORD, // Use an environment variable
  },
});

// Email validation regex
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (validateEmail(email)) {
    // Check if email already exists in the database and handle accordingly
    pool.query('SELECT * FROM subscribers WHERE email = $1', [email], (error, results) => {
      if (error) {
        console.error('Error querying the database', error.stack);
        res.status(500).send('Error querying the database');
        return;
      }
      if (results.rows.length > 0) {
        res.status(409).send('Email already subscribed.');
      } else {
        // Insert email into the database
        pool.query('INSERT INTO subscribers (email) VALUES ($1)', [email], (error, results) => {
          if (error) {
            console.error('Error inserting into the database', error.stack);
            res.status(500).send('Error inserting into the database');
            return;
          }
          // Email saved, respond with success message
          res.status(200).json({ message: 'Subscription successful!' });
        });
      }
    });
  } else {
    res.status(400).send('Invalid email format.');
  }
});

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'nloker1@gmail.com', // Your email where you want to receive messages
    subject: `New message from ${name} replyto ${email}`,
    text: message,
    replyTo: email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Message successfully sent!' });
    }
  });
});

const port = process.env.PORT || 3002; // Fallback to 3002 if process.env.PORT is not set
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
