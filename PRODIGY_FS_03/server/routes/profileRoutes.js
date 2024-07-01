// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');
const { protect } = require('../middlewares/authMiddleware');

// Example route definition
router.get('/', protect, getUserProfile);
router.put('/', protect, updateUserProfile);

module.exports = router;
