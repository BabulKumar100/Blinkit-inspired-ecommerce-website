const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "https://blinkit-inspired-ecommerce-applicat-lac.vercel.app/",
  credentials: true,
}));


app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

app.use('/api/profile', require('./routes/Profile'));

app.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is awake and running!");
});


const PORT= process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`) );



