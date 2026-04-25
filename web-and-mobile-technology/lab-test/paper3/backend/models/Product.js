const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // TODO (Student): Add the following fields:
  // 1. category — String, required,
  //    enum: ['Electronics', 'Clothing', 'Food', 'Furniture', 'Other']
  // 2. stock — Number, required, min: 0
  // 3. inStock — Boolean, default: true
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
