const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    // Original fields (given in starter)
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },

    // ✅ NEW FIELDS — added by you
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true, // no two books can have the same ISBN
      trim: true,
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      // enum restricts values to ONLY items in this list
      enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Technology', 'Biography', 'Other'],
    },
    available: {
      type: Boolean,
      default: true, // all new books start as available
    },
  },
  {
    timestamps: true, // auto-adds createdAt and updatedAt
  }
);

module.exports = mongoose.model('Book', bookSchema);
