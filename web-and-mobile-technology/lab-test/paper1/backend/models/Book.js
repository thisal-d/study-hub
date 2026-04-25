const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  // TODO (Student): Add the following fields:
  // 1. genre — String, required, enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Other']
  // 2. isRead — Boolean, default: false
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
