const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET /api/events — Fetch all events (with optional ?category= filter)
router.get('/', async (req, res) => {
  try {
    // TODO (Student): Check if req.query.category is provided
    // If yes: filter events where category === req.query.category
    // If no: return all events
    // Hint:
    //   const filter = {};
    //   if (req.query.category) filter.category = req.query.category;
    //   const events = await Event.find(filter).sort({ date: 1 });

    const events = await Event.find().sort({ date: 1 }); // Replace this line with filtered version
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// TODO (Student): Implement POST /api/events
// Accept: eventName, venue, category, date, capacity, registeredCount
// Save to database and return the saved event with status 201

// TODO (Student): Implement DELETE /api/events/:id
// Find by ID and delete. Return 404 if not found.

// TODO (Student): Implement PATCH /api/events/:id/register
// This route increments registeredCount by 1.
// IMPORTANT: If registeredCount >= capacity, return 400 with { message: 'Event is full' }
// Otherwise, use findByIdAndUpdate with $inc: { registeredCount: 1 } and return updated event
// Hint:
//   const event = await Event.findById(req.params.id);
//   if (!event) return res.status(404).json({ message: 'Event not found' });
//   if (event.registeredCount >= event.capacity) {
//     return res.status(400).json({ message: 'Event is full' });
//   }
//   const updated = await Event.findByIdAndUpdate(
//     req.params.id,
//     { $inc: { registeredCount: 1 } },
//     { new: true }
//   );
//   res.json(updated);

module.exports = router;
