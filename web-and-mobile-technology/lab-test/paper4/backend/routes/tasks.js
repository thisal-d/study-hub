const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /api/tasks - Fetch all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/tasks - Create a new task
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  // TODO (Student): Also destructure 'status', 'dueDate', 'assignedTo'

  const task = new Task({
    title,
    description,
    // TODO (Student): Also save 'status', 'dueDate', 'assignedTo'
  });

  try {
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// TODO (Student): Implement DELETE /api/tasks/:id

// TODO (Student): Implement PUT /api/tasks/:id
// This is a FULL update — accept all fields from req.body
// Use Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
// Return 404 if task not found
// Return the updated task on success

module.exports = router;
