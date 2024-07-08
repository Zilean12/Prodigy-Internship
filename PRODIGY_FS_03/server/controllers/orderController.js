// const Order = require('../models/Order');
// const Cart = require('../models/Cart');
// const Product = require('../models/Product');
// const Review = require('../models/Review');

// exports.createOrder = async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');

//     if (!cart || cart.products.length === 0) {
//       return res.status(400).json({ message: 'Cart is empty' });
//     }

//     let totalAmount = 0;
//     for (let item of cart.products) {
//       totalAmount += item.productId.price * item.quantity;
//     }

//     const order = new Order({
//       userId: req.user.id,
//       products: cart.products,
//       totalAmount,
//     });

//     await order.save();

//     // Clear the cart
//     cart.products = [];
//     await cart.save();

//     res.status(201).json({ message: 'Order created successfully', order });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ userId: req.user.id }).populate('products.productId');
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id).populate('products.productId');
//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.trackOrder = async (req, res) => {
//   try {
//     const order = await Order.findOne({ _id: req.params.id, userId: req.user.id }).populate('products.productId');
//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }
//     res.json({ status: order.status, order });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.buyProduct = async (req, res) => {
//   try {
//     const product = await Product
//       .findById(req.body.productId)
//       .populate('reviews');
//       if (!product) {
//         return res.status(404).json({ message: 'Product not found' });
//       }
//       if (product.stock < req.body.quantity) {
//         return res.status(400).json({ message: 'Not enough stock' });
//       }
//       product.stock -= req.body.quantity;
//       await product.save();
//       res.json({ message: 'Product bought successfully', product });
//   }
//   catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// }
// controllers/orderController.js
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const Cart = require('../models/Cart');
const Review = require('../models/Review');
const { sendOrderEmail, sendOrderStatusUpdateEmail } = require('../utils/emailService');

exports.createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    let totalAmount = 0;
    for (let item of cart.products) {
      totalAmount += item.productId.price * item.quantity;
    }

    const order = new Order({
      userId: req.user.id,
      products: cart.products,
      totalAmount,
    });

    await order.save();

    // Clear the cart
    cart.products = [];
    await cart.save();

    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('products.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products.productId');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.trackOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, userId: req.user.id }).populate('products.productId');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ status: order.status, order });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// exports.buyProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.body.productId);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     if (product.stock < req.body.quantity) {
//       return res.status(400).json({ message: 'Not enough stock' });
//     }
    
//     product.stock -= req.body.quantity;
//     await product.save();

//     const totalAmount = product.price * req.body.quantity;
    
//     const newOrder = new Order({
//       userId: req.user.id,
//       products: [{ productId: product._id, quantity: req.body.quantity }],
//       totalAmount
//     });
    
//     const savedOrder = await newOrder.save();
    
//     const user = await User.findById(req.user.id);
//     sendOrderEmail(user, savedOrder);
    
//     res.status(201).json({ message: 'Product bought successfully', order: savedOrder });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

exports.buyProduct = async (req, res) => {
  try {
    const { products } = req.body;

    let totalAmount = 0;
    const productDetails = await Promise.all(
      products.map(async (item) => {
        const product = await Product.findById(item.productId);
        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found`);
        }
        if (product.stock < item.quantity) {
          throw new Error(`Not enough stock for product: ${product.name}`);
        }
        product.stock -= item.quantity;
        await product.save();
        totalAmount += product.price * item.quantity;
        return { productId: product._id, quantity: item.quantity };
      })
    );

    const newOrder = new Order({
      userId: req.user.id,
      products: productDetails,
      totalAmount,
    });

    const savedOrder = await newOrder.save();

    const user = await User.findById(req.user.id);
    sendOrderEmail(user, savedOrder);

    res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id).populate('products.productId');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    const user = await User.findById(order.userId);
    sendOrderStatusUpdateEmail(user, order);

    res.json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const userId = req.user.id;

    const order = await Order.findOne({ _id: orderId, user: userId });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status === 'cancelled') {
      return res.status(400).json({ message: 'Order already cancelled' });
    }

    order.status = 'cancelled';
    await order.save();

    res.status(200).json({ message: 'Order cancelled successfully', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};