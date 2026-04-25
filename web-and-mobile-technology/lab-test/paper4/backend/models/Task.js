const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // TODO (Student): Add the following fields:
  // 1. status — String, required,
  //    enum: ['Todo', 'In Progress', 'Done'], default: 'Todo'
  // 2. dueDate — Date, required
  // 3. assignedTo — String, required
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
