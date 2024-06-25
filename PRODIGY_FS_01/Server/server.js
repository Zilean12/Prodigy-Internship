// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());
// app.use(cors({
//     origin: 'https://prodigy-internship-client.onrender.com' // Change this to your client's URL
// }));

const allowedOrigins = [
    'https://prodigy-internship.onrender.com', 
    'https://prodigy-internship-fs01.netlify.app',
    'https://prodigy-internship-sigma.vercel.app'
  ];
  
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));
  
// Routes
app.use('/api/auth', authRoutes); // Ensure authRoutes are correctly imported

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.log(err));

module.exports = app; // Export app for use in other files
