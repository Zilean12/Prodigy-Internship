const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.delete('/:productId', protect, removeFromCart);

module.exports = router;
