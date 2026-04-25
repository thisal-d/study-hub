const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  // TODO (Student): Add the following fields:
  // 1. category — String, required,
  //    enum: ['Workshop', 'Seminar', 'Sports', 'Cultural', 'Other']
  // 2. date — Date, required
  // 3. capacity — Number, required, min: 1
  // 4. registeredCount — Number, default: 0, min: 0
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
