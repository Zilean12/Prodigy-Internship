const express = require('express');

const { register, login, resetPassword, forgotPassword, getMe, changePassword  } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Forgot password
router.post('/forgot-password', forgotPassword);

// Reset password
router.post('/reset-password/:token', resetPassword);

// Get current user
router.get('/me', protect, getMe);

router.put('/change-password', protect, changePassword);

module.exports = router;
