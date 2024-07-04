// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true },
//   stock: { type: Number, required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Product', ProductSchema);
// models/Product.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const productSchema = new Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String },
//   stock: { type: Number, required: true, default: 0 }, // Added stock field
//   reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
// });

// module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  stock: { type: Number, required: true, default: 0 },
  category: { type: String, required: true }, // Ensure the category field is present
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Product', productSchema);
