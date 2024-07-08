require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const profileRoutes = require('./routes/profileRoutes');
const adminRoutes = require('./routes/adminRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const supportRoutes = require('./routes/supportRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes'); // Add this line

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

// app.use(cors());
const allowedOrigins = [
  'https://prodigy-internship-fs03.onrender.com'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/profile', profileRoutes); // Mount profile routes
app.use('/api/admin', adminRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/support', supportRoutes); // Mount support routes
app.use('/api/subscribe', subscriptionRoutes); // Add this line

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
