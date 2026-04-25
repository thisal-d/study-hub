const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // TODO (Student): Add the following fields:
  // 1. subject — String, required,
  //    enum: ['Maths', 'Science', 'History', 'English', 'Programming', 'Other']
  // 2. priority — String, required,
  //    enum: ['Low', 'Medium', 'High'], default: 'Medium'
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
