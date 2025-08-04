require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.sendMail({
  from: process.env.EMAIL,
  to: 'your@email.com', 
  subject: 'Test Mail',
  text: 'If you got this, it works!',
}, (err, info) => {
  if (err) {
    console.error("❌ Mail failed:", err);
  } else {
    console.log("✅ Mail sent:", info.response);
  }
});
