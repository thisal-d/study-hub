const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// ── POST /api/books ────────────────────────────────────────────────────────
// Add a new book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── GET /api/books ─────────────────────────────────────────────────────────
// Get all books, sorted newest first
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/books/:id ─────────────────────────────────────────────────────
// Get one book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: 'Invalid book ID' });
  }
});

// ── PUT /api/books/:id ─────────────────────────────────────────────────────
// Update a book's details
router.put('/:id', async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Book not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── DELETE /api/books/:id ──────────────────────────────────────────────────
// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── PATCH /api/books/:id/toggle ────────────────────────────────────────────
// Toggle availability: available ↔ borrowed
router.patch('/:id/toggle', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    // Flip the boolean: true → false, false → true
    book.available = !book.available;
    await book.save();

    res.json({
      message: book.available ? 'Book is now available' : 'Book has been borrowed',
      book,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
