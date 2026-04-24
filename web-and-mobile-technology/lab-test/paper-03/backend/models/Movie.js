const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    // Original fields (given in starter)
    title: {
      type: String,
      required: [true, 'Movie title is required'],
      trim: true,
    },
    director: {
      type: String,
      required: [true, 'Director is required'],
      trim: true,
    },

    // ✅ NEW FIELDS — added by you
    releaseYear: {
      type: Number,
      required: [true, 'Release year is required'],
      min: [1888, 'First movie was made in 1888'],
      max: [new Date().getFullYear() + 2, 'Year too far in the future'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [10, 'Rating cannot exceed 10'],
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      enum: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Documentary', 'Thriller', 'Other'],
    },
    watched: {
      type: Boolean,
      default: false, // movies start in watchlist (not yet watched)
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
