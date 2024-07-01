const express = require('express');
const router = express.Router();
const { createReview, getReviewsByProductId, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createReview);
router.get('/product/:productId', getReviewsByProductId);
router.delete('/:reviewId', protect, deleteReview);

module.exports = router;
