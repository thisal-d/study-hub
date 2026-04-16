# Section 12: Full-Stack Project — Notes App

**← [Connecting Frontend & Backend](./11-connecting-stack.md)** | **Next: [Authentication →](./13-authentication.md)**

---

## 🎯 What This Section Covers

You've learned all the individual pieces. Now you build a **complete, real-world Notes application** combining everything:

- **MongoDB** — Store notes and users
- **Express** — REST API with authentication
- **React** — Interactive UI with full CRUD
- **Node.js** — Backend runtime

This is the **capstone project** of the first phase of your learning. Take your time. It's supposed to be challenging.

---

## 📋 What We're Building

A feature-complete Notes App where users can:
- Register and log in
- Create, read, update, delete notes
- Pin important notes
- Search notes by title/content
- Filter by tags
- See notes sorted by date or pinned status

---

## 🗂️ Final Project Structure

```
notes-app/
├── server/
│   ├── index.js
│   ├── .env
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── authenticate.js
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── noteController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── noteRoutes.js
│   └── utils/
│       └── asyncHandler.js
│
└── client/
    ├── src/
    │   ├── api/
    │   │   └── api.js
    │   ├── components/
    │   │   ├── NoteCard.jsx
    │   │   ├── NoteForm.jsx
    │   │   ├── SearchBar.jsx
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── LoginPage.jsx
    │   │   ├── RegisterPage.jsx
    │   │   └── NotesPage.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   └── App.jsx
    └── .env
```

---

## Phase 1: Backend

### Step 1.1 — Initialize the Backend

```bash
mkdir notes-app && cd notes-app
mkdir server && cd server
npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

Add to `server/package.json`:
```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```

Create `server/.env`:
```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri_here
JWT_SECRET=super_secret_jwt_key_here
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### Step 1.2 — Database Connection

```javascript
// server/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ DB Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### Step 1.3 — Models

```javascript
// server/models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 }
}, { timestamps: true });

// Hash password before saving
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password
userSchema.methods.matchPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
```

```javascript
// server/models/Note.js
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: 100
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    maxlength: 10000
  },
  tags: {
    type: [String],
    default: []
  },
  isPinned: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    enum: ["default", "red", "green", "blue", "yellow", "purple"],
    default: "default"
  }
}, { timestamps: true });

// Text index for search
noteSchema.index({ title: "text", content: "text" });

module.exports = mongoose.model("Note", noteSchema);
```

### Step 1.4 — Authentication

```javascript
// server/utils/asyncHandler.js
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
```

```javascript
// server/middleware/authenticate.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

const authenticate = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id).select("-password");

  if (!req.user) {
    return res.status(401).json({ error: "User no longer exists" });
  }

  next();
});

module.exports = authenticate;
```

```javascript
// server/controllers/authController.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

// POST /api/auth/register
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "Email already in use" });

  const user = await User.create({ name, email, password });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id)
  });
});

// POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id)
  });
});

// GET /api/auth/me
const getMe = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { register, login, getMe };
```

```javascript
// server/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { register, login, getMe } = require("../controllers/authController");
const authenticate = require("../middleware/authenticate");

router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticate, getMe);

module.exports = router;
```

### Step 1.5 — Notes API

```javascript
// server/controllers/noteController.js
const Note = require("../models/Note");
const asyncHandler = require("../utils/asyncHandler");

// GET /api/notes
const getNotes = asyncHandler(async (req, res) => {
  const { search, tag, page = 1, limit = 20 } = req.query;

  const filter = { userId: req.user._id };

  if (search) {
    filter.$text = { $search: search };
  }

  if (tag) {
    filter.tags = tag;
  }

  const notes = await Note.find(filter)
    .sort({ isPinned: -1, updatedAt: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Note.countDocuments(filter);

  res.json({ notes, total });
});

// GET /api/notes/:id
const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
});

// POST /api/notes
const createNote = asyncHandler(async (req, res) => {
  const { title, content, tags, color } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const note = await Note.create({
    userId: req.user._id,
    title,
    content,
    tags: tags || [],
    color: color || "default"
  });

  res.status(201).json(note);
});

// PUT /api/notes/:id
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    { $set: req.body },
    { new: true, runValidators: true }
  );

  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
});

// PATCH /api/notes/:id/pin
const togglePin = asyncHandler(async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
  if (!note) return res.status(404).json({ error: "Note not found" });

  note.isPinned = !note.isPinned;
  await note.save();
  res.json(note);
});

// DELETE /api/notes/:id
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json({ message: "Note deleted" });
});

module.exports = { getNotes, getNoteById, createNote, updateNote, togglePin, deleteNote };
```

```javascript
// server/routes/noteRoutes.js
const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const {
  getNotes, getNoteById, createNote,
  updateNote, togglePin, deleteNote
} = require("../controllers/noteController");

// All note routes require authentication
router.use(authenticate);

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.patch("/:id/pin", togglePin);
router.delete("/:id", deleteNote);

module.exports = router;
```

### Step 1.6 — Main Server File

```javascript
// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

// Logging (simple)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => res.json({ message: "Notes API is running 🚀" }));
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.name === "JsonWebTokenError" ? 401 : 500;
  res.status(status).json({ error: err.message || "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

**Test the backend with Postman before moving to the frontend.**

---

## Phase 2: Frontend

### Step 2.1 — Create React App

```bash
cd ..  # Go back to notes-app/
npm create vite@latest client -- --template react
cd client
npm install
```

Create `client/.env`:
```
VITE_API_URL=http://localhost:5000/api
```

### Step 2.2 — API Service

```javascript
// client/src/api/api.js
const BASE = import.meta.env.VITE_API_URL;

const req = async (path, options = {}) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    ...options
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
};

export const authApi = {
  register: (d) => req("/auth/register", { method: "POST", body: JSON.stringify(d) }),
  login: (d) => req("/auth/login", { method: "POST", body: JSON.stringify(d) }),
  getMe: () => req("/auth/me")
};

export const notesApi = {
  getAll: (params) => req(`/notes?${new URLSearchParams(params)}`),
  create: (d) => req("/notes", { method: "POST", body: JSON.stringify(d) }),
  update: (id, d) => req(`/notes/${id}`, { method: "PUT", body: JSON.stringify(d) }),
  togglePin: (id) => req(`/notes/${id}/pin`, { method: "PATCH" }),
  delete: (id) => req(`/notes/${id}`, { method: "DELETE" })
};
```

### Step 2.3 — Auth Context

```jsx
// client/src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { authApi } from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authApi.getMe()
        .then(setUser)
        .catch(() => localStorage.removeItem("token"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const data = await authApi.login(credentials);
    localStorage.setItem("token", data.token);
    setUser(data);
    return data;
  };

  const register = async (userData) => {
    const data = await authApi.register(userData);
    localStorage.setItem("token", data.token);
    setUser(data);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

### Step 2.4 — Wrap App with AuthProvider

```jsx
// client/src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
```

### Step 2.5 — App Routing

```jsx
// client/src/App.jsx
import { useAuth } from "./context/AuthContext";
import NotesPage from "./pages/NotesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useState } from "react";

function App() {
  const { user, loading } = useAuth();
  const [page, setPage] = useState("login");

  if (loading) return <div style={{ padding: "24px" }}>Loading...</div>;

  if (!user) {
    return page === "login"
      ? <LoginPage onGoRegister={() => setPage("register")} />
      : <RegisterPage onGoLogin={() => setPage("login")} />;
  }

  return <NotesPage />;
}

export default App;
```

### Step 2.6 — Login and Register Pages

```jsx
// client/src/pages/LoginPage.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function LoginPage({ onGoRegister }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(form);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "32px", border: "1px solid #e5e7eb", borderRadius: "12px" }}>
      <h2>Welcome Back 👋</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label>Password</label>
          <input
            type="password"
            value={form.password}
            onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: "10px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "16px" }}>
        No account? <button onClick={onGoRegister} style={{ color: "#2563eb", background: "none", border: "none", cursor: "pointer" }}>Register</button>
      </p>
    </div>
  );
}

export default LoginPage;
```

> **Build the RegisterPage yourself** — it's very similar to LoginPage but with a name field and calls `register()` instead of `login()`. This is a great practice exercise!

### Step 2.7 — Notes Page

```jsx
// client/src/pages/NotesPage.jsx
import { useState, useEffect } from "react";
import { notesApi } from "../api/api";
import { useAuth } from "../context/AuthContext";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";

function NotesPage() {
  const { user, logout } = useAuth();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const params = {};
    if (search) params.search = search;

    notesApi.getAll(params)
      .then(data => setNotes(data.notes))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [search]);

  const handleCreate = (newNote) => {
    setNotes(prev => [newNote, ...prev]);
    setShowForm(false);
  };

  const handleUpdate = (updatedNote) => {
    setNotes(prev => prev.map(n => n._id === updatedNote._id ? updatedNote : n));
    setEditingNote(null);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this note?")) return;
    await notesApi.delete(id);
    setNotes(prev => prev.filter(n => n._id !== id));
  };

  const handlePin = async (id) => {
    const updated = await notesApi.togglePin(id);
    setNotes(prev => prev.map(n => n._id === id ? updated : n));
  };

  const pinnedNotes = notes.filter(n => n.isPinned);
  const regularNotes = notes.filter(n => !n.isPinned);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h1>📝 My Notes</h1>
        <div>
          <span style={{ marginRight: "16px" }}>Hello, {user.name}!</span>
          <button onClick={logout} style={{ padding: "6px 16px", cursor: "pointer" }}>Logout</button>
        </div>
      </div>

      {/* Search */}
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="🔍 Search notes..."
        style={{ width: "100%", padding: "10px", marginBottom: "16px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "16px" }}
      />

      {/* Add Note Button */}
      <button
        onClick={() => { setShowForm(true); setEditingNote(null); }}
        style={{ marginBottom: "24px", padding: "8px 20px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}
      >
        + New Note
      </button>

      {/* Create/Edit Form */}
      {(showForm || editingNote) && (
        <NoteForm
          note={editingNote}
          onSave={editingNote ? handleUpdate : handleCreate}
          onCancel={() => { setShowForm(false); setEditingNote(null); }}
        />
      )}

      {loading ? (
        <p>Loading notes...</p>
      ) : (
        <>
          {/* Pinned Notes */}
          {pinnedNotes.length > 0 && (
            <div>
              <h3 style={{ color: "#6b7280" }}>📌 Pinned</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
                {pinnedNotes.map(note => (
                  <NoteCard key={note._id} note={note} onEdit={setEditingNote} onDelete={handleDelete} onPin={handlePin} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Notes */}
          {regularNotes.length > 0 && (
            <div style={{ marginTop: pinnedNotes.length > 0 ? "24px" : 0 }}>
              {pinnedNotes.length > 0 && <h3 style={{ color: "#6b7280" }}>All Notes</h3>}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
                {regularNotes.map(note => (
                  <NoteCard key={note._id} note={note} onEdit={setEditingNote} onDelete={handleDelete} onPin={handlePin} />
                ))}
              </div>
            </div>
          )}

          {notes.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px", color: "#9ca3af" }}>
              <p style={{ fontSize: "48px" }}>📝</p>
              <p>{search ? `No notes match "${search}"` : "No notes yet. Create your first one!"}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NotesPage;
```

### Step 2.8 — Components (Build These Yourself!)

You now have enough knowledge to build these components on your own. Here's what each should do:

**`NoteCard.jsx`**
- Display: title, content (truncated to 150 chars), tags, pinned indicator
- Buttons: Edit, Delete, Pin/Unpin
- Time since created (e.g., "2 hours ago")

**`NoteForm.jsx`**
- Fields: title, content, tags (comma-separated), color selector
- If `note` prop is provided → edit mode (pre-filled form)
- If no `note` → create mode
- Submit calls appropriate API and calls `onSave`

> This is intentional! Building these yourself is how you truly internalize React patterns.

---

## 🧪 Testing Your App

Walk through this checklist:

- [ ] Register a new user
- [ ] Log in with the new user
- [ ] Create 5+ notes
- [ ] Edit a note's title and content
- [ ] Pin and unpin a note
- [ ] Search for a note
- [ ] Delete a note
- [ ] Refresh the page — notes persist (they're in MongoDB!)
- [ ] Logout and log back in — notes are still there

---

## 🔨 Common Issues

| Problem | Check |
|---------|-------|
| Notes not loading | Is server running? Check browser console for errors |
| 401 errors | Token missing — check localStorage |
| Notes don't persist after refresh | Are you hitting the real API (not hardcoded data)? |
| Create note returns error | Check Postman — is validation failing? |

---

## ✨ Bonus Features to Add

Once the core works, extend the app:

1. **Tags filtering** — Click a tag to filter by it
2. **Color coding** — Show note with colored border based on `color` field
3. **Character count** — Show remaining characters in content textarea
4. **Sort options** — Sort by date, title, or pinned status
5. **Bulk delete** — Select multiple notes and delete them

---

## ➡️ Next Step

Your full-stack app is working. In the next section, you'll learn about **authentication best practices** — a deeper look at JWTs, protected routes in React, and security considerations.

### → [Section 13: Authentication Basics](./13-authentication.md)

---

*Section 12 of 14 | MERN Stack Learning System*
