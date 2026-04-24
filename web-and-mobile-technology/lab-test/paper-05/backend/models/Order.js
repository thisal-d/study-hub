const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
    },
    product: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Price cannot be negative'],
    },
    paymentMethod: {
      type: String,
      enum: ['Cash', 'Card', 'Online Transfer', 'Crypto'],
      default: 'Cash',
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    orderedAt: {
      type: Date,
      default: Date.now, // no () — Mongoose calls this on each new document
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
