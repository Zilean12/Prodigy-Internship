// const express = require('express');
// const router = express.Router();
// const { getRecommendedProducts } = require('../controllers/recommendationController');
// const { protect } = require('../middlewares/authMiddleware');

// // Example route definition
// router.get('/recommendations', protect, getRecommendedProducts);

// module.exports = router;
// routes/recommendationRoutes.js
const express = require('express');
const router = express.Router();
const { getRecommendedProducts } = require('../controllers/recommendationController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, getRecommendedProducts);

module.exports = router;
