
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', async (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  let mailOptions = {
    from: email,
    to: 'krzysiukolak@gmail.com', // where you want to receive messages
    subject: 'New Contact Form Submission',
    text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect('/index.html');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending message. Please try again.');
  }
});

const server = app.listen(3000, () => console.log('Server running on port 3000'));

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});