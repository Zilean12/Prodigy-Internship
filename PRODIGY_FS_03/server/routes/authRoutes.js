const express = require('express');

const { register, login, resetPassword, forgotPassword  } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Forgot password
router.post('/forgot-password', forgotPassword);

// Reset password
router.post('/reset-password/:token', resetPassword);

module.exports = router;
