const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    // Original fields (given in starter)
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
    },

    // ✅ NEW FIELDS — added by you
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      enum: ['Electronics', 'Clothing', 'Food', 'Furniture', 'Stationery', 'Other'],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

module.exports = mongoose.model('Product', productSchema);
