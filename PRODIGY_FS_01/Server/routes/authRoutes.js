const express = require('express');
const { register, login, protected, authController } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', protect, protected); // Corrected line

module.exports = router;