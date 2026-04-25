const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /api/books - Fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/books - Create a new book
router.post('/', async (req, res) => {
  const { title, author } = req.body; // TODO (Student): Also destructure 'genre' and 'isRead' here

  const book = new Book({
    title,
    author,
    // TODO (Student): Also save 'genre' and 'isRead' here
  });

  try {
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// TODO (Student): Implement DELETE /api/books/:id route here
// Hint:
// router.delete('/:id', async (req, res) => { ... });
// Use Book.findByIdAndDelete(req.params.id)
// Return 404 if not found, or 200 with a success message

module.exports = router;
