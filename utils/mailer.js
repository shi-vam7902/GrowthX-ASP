const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "shivamshah.sus@gmail.com",
    pass: "wrcrewyjklqrisvs",
  },
});

const getLoginSuccessEmailTemplate = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Successful Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
      }
      .header img {
        width: 100px;
        border-radius: 50%;
      }
      .content {
        text-align: center;
        padding: 20px 0;
      }
      .message {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #777;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://example.com/astrology-image.jpg" alt="Astrology Image">
        <h1>Login Successful</h1>
      </div>
      <div class="content">
        <p class="message">Dear User,</p>
        <p class="message">You have successfully logged into Our Application.</p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Astrology Service. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};
const getRegistrationEmailTemplate = (username) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astrologer Registration Successful</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .logo-container {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo-container img {
        max-width: 150px;
        height: auto;
      }
      .content {
        text-align: center;
        padding: 20px 0;
      }
      .text {
        font-size: 16px;
        color: #333;
        margin-bottom: 20px;
      }
      .button-container {
        text-align: center;
        margin: 20px 0;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        color: #fff;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #777;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo-container">
        <!-- Add your logo here -->
        <!-- <img src="data:image/png;base64," alt="Company Logo"> -->
      </div>
      <div class="content">
        <div class="text">
          <p>Dear ${username},</p>
          <p>Thank you for signing up as an astrologer on our platform. Our admin will verify your details, and you will be able to log in after 24 hours.</p>
        </div>
        <div class="button-container">
          <a href="http://example.com/login" class="button">Visit Website</a>
        </div>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

const getWelcomeEmailTemplate = (username) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our App</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .logo-container {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo-container img {
        max-width: 150px;
        height: auto;
      }
      .content {
        text-align: center;
        padding: 20px 0;
      }
      .text {
        font-size: 16px;
        color: #333;
        margin-bottom: 20px;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #777;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo-container">
      <!-- <img src="data:image/png;base64," alt="Company Logo">
      </div>
      <div class="content">
        <div class="text">
          <p>Dear ${username},</p>
          <p>Welcome to our app! We are excited to have you on board.</p>
          <p>Feel free to explore and enjoy our services.</p>
        </div>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

const sendMail = (to, subject, html) => {
  const mailOptions = {
    from: "shivamshah.sus@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendMail,
  getWelcomeEmailTemplate,
  getLoginSuccessEmailTemplate,
  getRegistrationEmailTemplate,
};
