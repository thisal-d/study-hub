const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(cors());

// ── Routes ─────────────────────────────────────────────────────────────────
app.use('/api/products', require('./routes/products'));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Product Inventory API is running ✅' });
});

// ── Database Connection ────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => {
    console.error('MongoDB connection error ❌:', err.message);
    process.exit(1);
  });

// ── Start Server ──────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
