const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  'http://localhost:3001', 'http://localhost:3000',
  'https://blinkit-inspired-ecommerce-applicat-lac.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['X-Auth-Token']
}));

app.options('*', cors());


app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

app.use('/api/profile', require('./routes/Profile'));

app.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is awake and running!");
});

app.use((err, req, res, next) => {
  if (err instanceof Error && err.message.startsWith('Not allowed by CORS')) {
    console.error('CORS error:', err.message);
    res.status(403).json({ message: err.message });
  } else {
     console.error('Server error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post("/api/test", (req, res) => {
  res.status(200).json({ message: "CORS works!" });
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});






const PORT= process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`) );



