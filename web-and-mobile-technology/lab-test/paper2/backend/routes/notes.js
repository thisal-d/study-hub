const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET /api/notes - Fetch all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/notes - Create a new note
router.post('/', async (req, res) => {
  const { title, content } = req.body; // TODO (Student): Also destructure 'subject' and 'priority'

  const note = new Note({
    title,
    content,
    // TODO (Student): Also save 'subject' and 'priority' here
  });

  try {
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// TODO (Student): Implement DELETE /api/notes/:id
// Use Note.findByIdAndDelete(req.params.id)
// Return 404 if note not found

// TODO (Student): Implement PATCH /api/notes/:id
// This route should only update the 'priority' field
// Hint: Use Note.findByIdAndUpdate(req.params.id, { priority: req.body.priority }, { new: true })
// Return 404 if note not found, otherwise return the updated note

module.exports = router;
