const express = require('express');
const router = express.Router();
const User = require('../models/User');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    return res.status(200).json({
      message: "Login Successful",
      user: {
        name: user.name,
        email:user.email,
      }
     });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password.trim() !== confirmPassword.trim()) {
  return res.status(400).json({ error: "Passwords do not match" });
}


  try {

    const existingUser = await User.findOne({
      email: { $regex: new RegExp(`^${email.trim()}$`, 'i') }
      })

    if (existingUser) {
      return res.status(409).json({error: "Email already in use"})
    }

    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    const newUser = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Registration successful" });

  } catch (err) {
    console.error("Registration error:", err);

    if (err.code === 11000) {
      return res.status(409).json({ error: "Email already registered"});
    }
   


   return  res.status(500).json({
      error: "Registration failed",
      details: process.env.Node_ENV == 'development' ? err.message : undefined
    })
  }
});


router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ error: 'User not found' });


    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000; 
    await user.save({validateBeforeSave: false});


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,       
        pass: process.env.EMAIL_PASS,  
      },
    });


    await transporter.sendMail({
      to: email,
      subject: 'Reset your password',
      html: `
        <p>You requested a password reset</p>
        <p>Click the link below to reset it:</p>
        <a href="http://localhost:3000/reset-password?token=${token}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
      `,
    });

    return res.status(200).json({ message: 'Reset link sent to your email' });

  } catch (error) {
    console.error('Failed to send email or generate token:', error);
    return res.status(500).json({ error: 'Failed to send reset email. Check email credentials and user setup.' });
  }
});


router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ error: 'Token and new password are required' });
  }

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }, 
    });

    if (!user) return res.status(400).json({ error: 'Invalid or expired token' });


    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    return res.status(200).json({ message: 'Password reset successful' });

  } catch (err) {
    console.error('Reset password route error:', err);
    return res.status(500).json({ error: 'Server error, please try again later' });
  }
});


router.get("/all-users", async (req, res) => {
  const users = await User.find({});
  console.log("All Users:", users);
  res.json(users);
});


module.exports = router;
