const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// ── POST /api/movies ────────────────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const saved = await movie.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── GET /api/movies ─────────────────────────────────────────────────────────
// Optional search: GET /api/movies?search=inception
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      // $regex — MongoDB pattern matching (like SQL LIKE)
      // $options: 'i' — case-insensitive
      // $or — match documents where title OR director contains the search term
      query = {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { director: { $regex: search, $options: 'i' } },
        ],
      };
    }

    // Sort by rating descending (highest rated movies first)
    const movies = await Movie.find(query).sort({ rating: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/movies/:id ─────────────────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: 'Invalid movie ID' });
  }
});

// ── PUT /api/movies/:id ─────────────────────────────────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Movie not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── DELETE /api/movies/:id ──────────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── PATCH /api/movies/:id/watched ───────────────────────────────────────────
// Toggle the watched status
router.patch('/:id/watched', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    movie.watched = !movie.watched;
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
