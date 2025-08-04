const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

app.use('/api/profile', require('./routes/Profile'));

const PORT= process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`) );



