# 🚀 Lab Test Quick Reference Cheat Sheet

> Print this and keep it next to you during the test.

---

## ⏱️ Time Management (2 Hours)

| Phase | Time | Action |
|-------|------|--------|
| Setup | 0–15 min | Install deps, `.env`, run both servers |
| Backend | 15–45 min | Model + all routes |
| Frontend | 45–80 min | Form, List, Card components |
| Test | 80–90 min | Verify all features work locally |
| GitHub | 90–95 min | Push code |
| Deploy Backend | 95–110 min | Render/Railway |
| Deploy Frontend | 110–120 min | Netlify/Vercel + update API URL |

---

## 📦 Standard Backend Setup

**`backend/package.json` — Install:**
```bash
npm install express mongoose cors dotenv
```

**`backend/.env`:**
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/<dbname>
PORT=5000
```

**`backend/server.js` — Template:**
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/items', require('./routes/items'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT || 5000}`)
);
```

---

## 🗄️ Mongoose Model Template

```javascript
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ['A', 'B', 'C'],   // allowed values only
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
    isAvailable: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },  // ← no parentheses!
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
```

---

## 🛣️ Express Routes Template (Full CRUD)

```javascript
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// CREATE
router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (err) { res.status(400).json({ error: 'Invalid ID' }); }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(
      req.params.id, req.body, { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// TOGGLE boolean field
router.patch('/:id/toggle', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    item.isAvailable = !item.isAvailable;
    await item.save();
    res.json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

module.exports = router;
```

---

## ⚛️ React Frontend Templates

**`frontend/.env`:**
```
VITE_API_URL=http://localhost:5000
```

**Form Component (controlled inputs):**
```jsx
import { useState } from 'react';

function ItemForm({ onItemAdded }) {
  const [form, setForm] = useState({ name: '', price: '', category: 'A' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      onItemAdded();
      setForm({ name: '', price: '', category: 'A' });
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="price" type="number" value={form.price} onChange={handleChange} required />
      <select name="category" value={form.category} onChange={handleChange}>
        {['A', 'B', 'C'].map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
export default ItemForm;
```

**List Component (with delete + toggle):**
```jsx
import { useEffect, useState } from 'react';

function ItemList({ refresh }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/items`)
      .then(r => r.json())
      .then(setItems);
  }, [refresh]);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/items/${id}`, { method: 'DELETE' });
    setItems(prev => prev.filter(i => i._id !== id));
  };

  const handleToggle = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/items/${id}/toggle`, { method: 'PATCH' });
    const updated = await res.json();
    setItems(prev => prev.map(i => i._id === id ? updated : i));
  };

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name} — Rs.{item.price}</h3>
          <p>{item.isAvailable ? 'Available' : 'Not Available'}</p>
          <button onClick={() => handleToggle(item._id)}>Toggle</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default ItemList;
```

**App.jsx:**
```jsx
import { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [refresh, setRefresh] = useState(0);
  return (
    <div>
      <h1>My MERN App</h1>
      <ItemForm onItemAdded={() => setRefresh(r => r + 1)} />
      <ItemList refresh={refresh} />
    </div>
  );
}
export default App;
```

---

## 🐙 GitHub Push (Quick)

```bash
# Create .gitignore first!
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR/repo.git
git push -u origin main
```

---

## 🌐 Deployment Checklist

### Backend (Render)
- [ ] Root dir: `backend`
- [ ] Build: `npm install`
- [ ] Start: `node server.js`
- [ ] Env: `MONGO_URI`, `PORT=5000`
- [ ] Deployed URL copied

### Frontend (Netlify)
- [ ] Base dir: `frontend`
- [ ] Build: `npm run build`
- [ ] Publish: `dist` (or `frontend/dist`)
- [ ] Env: `VITE_API_URL=<your-render-url>` ← NOT localhost!
- [ ] Deployed URL copied

---

## 🚨 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `Cannot GET /api/items` | Check route is registered in server.js |
| CORS error in browser | Add `app.use(cors())` to server.js |
| `MongoServerError: E11000` | Duplicate value in unique field (e.g. duplicate email/ISBN) |
| `Cast to ObjectId failed` | Invalid `_id` format in URL |
| `ValidationError` | Required field missing or value fails validation |
| Frontend shows blank data after deploy | `VITE_API_URL` still points to localhost |
| MongoDB connection failed | Wrong password / IP not whitelisted in Atlas |
| Netlify build fails | Missing `dist` folder — check publish directory |

---

## 💡 Key Code Snippets to Remember

```javascript
// Date formatting in React
new Date(item.createdAt).toLocaleDateString()    // "4/24/2026"
new Date(item.createdAt).toLocaleString()         // "4/24/2026, 10:30:00 AM"

// Spread + computed key (form update)
setForm({ ...form, [e.target.name]: e.target.value })

// Filter array
items.filter(item => item.available === true)

// Map to update one item in array
items.map(item => item._id === id ? updatedItem : item)

// Reduce for sum
items.reduce((total, item) => total + item.price, 0)

// MongoDB: find with filter
await Item.find({ status: 'Active' }).sort({ createdAt: -1 })

// MongoDB: search with regex
await Item.find({ name: { $regex: searchTerm, $options: 'i' } })

// Toggle boolean
item.field = !item.field;
await item.save();
```
