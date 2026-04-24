const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

// CORS — allows the browser to call this API from a different origin (e.g. Netlify → Render)
// In production, you can restrict: origin: process.env.FRONTEND_URL
app.use(cors());

// Routes
app.use('/api/orders', require('./routes/orders'));

// Health check — open this URL to verify backend is running
app.get('/', (req, res) => {
  res.json({ status: 'Order Tracker API is running ✅' });
});

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => { console.error('MongoDB error ❌:', err.message); process.exit(1); });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
