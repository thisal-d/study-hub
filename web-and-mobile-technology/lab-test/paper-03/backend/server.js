const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/movies', require('./routes/movies'));
app.get('/', (req, res) => res.json({ status: 'Movie Reviews API running ✅' }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => { console.error('MongoDB error ❌:', err.message); process.exit(1); });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
