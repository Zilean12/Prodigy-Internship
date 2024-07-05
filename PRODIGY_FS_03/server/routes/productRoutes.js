// const express = require('express');
// const router = express.Router();
// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, searchProducts, getProductsByCategory } = require('../controllers/productController');
// const { protect } = require('../middlewares/authMiddleware');

// // router.get('/', getAllProducts);
// // router.get('/:id', getProductById);
// // router.post('/', protect, createProduct);
// // router.put('/:id', protect, updateProduct);
// // router.delete('/:id', protect, deleteProduct);
// // router.get('/search', searchProducts); // Search route should be before the ID route

// router.get('/search', searchProducts); 
// router.get('/', getAllProducts);
// router.get('/:id', getProductById);
// router.post('/', protect, createProduct);
// router.put('/:id', protect, updateProduct);
// router.delete('/:id', protect, deleteProduct);
// router.get('/category/:category', getProductsByCategory);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, searchProducts, getProductsByCategory, addReview } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/search', searchProducts);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', protect, createProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);
router.get('/category/:category', getProductsByCategory);
router.post('/:id/review', protect, addReview);

module.exports = router;
