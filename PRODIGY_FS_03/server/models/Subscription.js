// const mongoose = require('mongoose');

// const SubscriptionSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Subscription', SubscriptionSchema);
const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  preferences: {
    productLaunches: { type: Boolean, default: true },
    discounts: { type: Boolean, default: true },
    newsletters: { type: Boolean, default: true },
  },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
