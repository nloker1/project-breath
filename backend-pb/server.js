const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nloker1@gmail.com',
    pass: process.env.EMAIL_PASSWORD, // Use an environment variable
  },
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

const port = process.env.PORT || 3001; // Fallback to 3001 if process.env.PORT is not set
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
