// // const Subscription = require('../models/Subscription');
// // const sendEmail = require('../utils/email');

// // exports.subscribe = async (req, res) => {
// //   try {
// //     const { email } = req.body;

// //     // Check if the email already exists
// //     let subscription = await Subscription.findOne({ email });
// //     if (subscription) {
// //       sendEmail(email, 'Already Subscribed', 'You are already subscribed to our notifications.');
// //       return res.status(400).json({ message: 'Already subscribed' });
// //     }

// //     // Create a new subscription
// //     subscription = new Subscription({ email });
// //     await subscription.save();

// //     // Send subscription confirmation email
// //     sendEmail(email, 'Subscription Successful', 'Thank you for subscribing to our notifications.');

// //     res.status(201).json({ message: 'Subscribed successfully', subscription });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // exports.notifySubscribers = async (notificationMessage) => {
// //   try {
// //     const subscribers = await Subscription.find({});
// //     subscribers.forEach(subscriber => {
// //       sendEmail(subscriber.email, 'New Product Launch or Discount', notificationMessage);
// //     });
// //   } catch (error) {
// //     console.error('Error notifying subscribers:', error);
// //   }
// // };

// const Subscription = require('../models/Subscription');
// const sendEmail = require('../utils/email');
// const emailTemplates = require('../utils/emailTemplates');

// exports.subscribe = async (req, res) => {
//   try {
//     const { email, preferences } = req.body;

//     // Check if the email already exists
//     let subscription = await Subscription.findOne({ email });
//     if (subscription) {
//       sendEmail(email, 'Already Subscribed', emailTemplates.alreadySubscribed(email));
//       return res.status(400).json({ message: 'Already subscribed' });
//     }

//     // Create a new subscription
//     subscription = new Subscription({ email, preferences });
//     await subscription.save();

//     // Send subscription confirmation email
//     sendEmail(email, 'Subscription Successful', emailTemplates.subscriptionConfirmation(email));

//     res.status(201).json({ message: 'Subscribed successfully', subscription });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.notifySubscribers = async (notificationMessage) => {
//   try {
//     const subscribers = await Subscription.find({});
//     subscribers.forEach(subscriber => {
//       sendEmail(subscriber.email, 'New Product Launch or Discount', notificationMessage);
//     });
//   } catch (error) {
//     console.error('Error notifying subscribers:', error);
//   }
// };
//Subscription.controller.js
const Subscription = require('../models/Subscription');
const sendEmail = require('../utils/email');
const emailTemplates = require('../utils/emailTemplates');
const jwt = require('jsonwebtoken');

exports.subscribe = async (req, res) => {
  try {
    const { email, preferences } = req.body;

    // Check if the email already exists
    let subscription = await Subscription.findOne({ email });
    if (subscription) {
      const unsubscribeToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });
      sendEmail(email, 'Already Subscribed', emailTemplates.alreadySubscribed(email, unsubscribeToken));
      return res.status(400).json({ message: 'Already subscribed' });
    }

    // Create a new subscription
    subscription = new Subscription({ email, preferences });
    await subscription.save();

    // Generate an unsubscribe token
    const unsubscribeToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Send subscription confirmation email
    sendEmail(email, 'Subscription Successful', emailTemplates.subscriptionConfirmation(email, unsubscribeToken));

    res.status(201).json({ message: 'Subscribed successfully', subscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.unsubscribe = async (req, res) => {
  try {
    const { token } = req.query;

    // Verify the unsubscribe token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    // Find and delete the subscription
    const subscription = await Subscription.findOneAndDelete({ email });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    res.status(200).json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.editSubscription = async (req, res) => {
    try {
      const { email, preferences } = req.body;
  
      let subscription = await Subscription.findOne({ email });
      if (!subscription) {
        return res.status(404).json({ message: 'Subscription not found' });
      }
  
      subscription.preferences = preferences;
      await subscription.save();
  
      res.status(200).json({ message: 'Subscription updated successfully', subscription });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };