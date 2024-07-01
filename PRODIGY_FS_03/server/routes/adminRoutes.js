// // routes/adminRoutes.js
// const express = require('express');
// const router = express.Router();
// const { getAllUsers, deleteUserById } = require('../controllers/adminController');
// const { protect, admin } = require('../middlewares/authMiddleware');

// // Example routes for admin
// router.get('/users', protect, admin, getAllUsers);
// router.delete('/users/:id', protect, admin, deleteUserById);

// module.exports = router;

// adminRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUserById } = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/authMiddleware');

// GET all users route (restricted to admins only)
router.get('/users', protect, admin, getAllUsers);
router.delete('/users/:id', protect, admin, deleteUserById);

module.exports = router;
