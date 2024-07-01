// controllers/recommendationController.js

const Product = require('../models/Product');
const User = require('../models/User');

// Example: Get recommended products for a user based on their purchase history
exports.getRecommendedProducts = async (req, res) => {
  try {
    // Example logic: Get user's purchase history
    const user = await User.findById(req.user.id).populate('orders');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Extract product IDs from user's orders
    const purchasedProductIds = [];
    user.orders.forEach(order => {
      order.products.forEach(product => {
        purchasedProductIds.push(product.productId);
      });
    });

    // Example logic: Find products similar to those purchased
    const recommendedProducts = await Product.find({ _id: { $nin: purchasedProductIds } })
                                             .limit(5) // Limit to 5 recommendations
                                             .exec();

    res.json(recommendedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
