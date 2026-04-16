# Section 11: Connecting Frontend & Backend

**← [Mongoose](./10-mongoose.md)** | **Next: [Full-Stack Project →](./12-fullstack-project.md)**

---

## 🎯 What This Section Covers

This is the moment where the MERN stack comes together. You've been building the frontend (React) and backend (Express + MongoDB) separately. Now you'll **connect them into a single working application**.

By the end, you'll:
- Configure CORS correctly
- Make API calls from React to your Express server
- Handle authentication headers
- Manage environment variables on both sides
- Build a reusable `api.js` service layer
- Handle errors across the full stack

> 💡 **Prerequisite Check:** Make sure you've completed:
> - [Section 05: Fetching Data](./05-react-fetching-data.md) — `useEffect`, loading/error states
> - [Section 07–08: Express API](./07-express-api.md) — routes, controllers
> - [Section 10: Mongoose](./10-mongoose.md) — database models

---

## 🏗️ Project Setup

You'll have two separate servers running:

```
my-mern-app/
├── client/          ← React app (runs on port 5173)
│   └── src/
└── server/          ← Express API (runs on port 5000)
    └── index.js
```

Start them in separate terminal windows:

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm run dev
```

---

## 🌐 Step 1: Configure CORS on the Server

> **Remember from Section 08:** CORS allows your frontend and backend on different ports to communicate.

In your `server/index.js`:

```javascript
const cors = require("cors");

// During development — allow your React app's origin
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true  // Allow cookies and auth headers
}));
```

In your `server/.env`:
```
PORT=5000
MONGO_URI=mongodb+srv://...
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_secret_here
```

---

## 📡 Step 2: Create an API Service in React

Instead of writing `fetch("http://localhost:5000/api/...")` everywhere, create a central service:

```javascript
// client/src/api/api.js

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Helper function for all API calls
const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    },
    ...options
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Something went wrong");
  }

  return data;
};

// ─── Auth ──────────────────────────────
export const authApi = {
  register: (userData) =>
    request("/auth/register", { method: "POST", body: JSON.stringify(userData) }),

  login: (credentials) =>
    request("/auth/login", { method: "POST", body: JSON.stringify(credentials) }),
};

// ─── Notes ──────────────────────────────
export const notesApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/notes${query ? "?" + query : ""}`);
  },

  getById: (id) =>
    request(`/notes/${id}`),

  create: (noteData) =>
    request("/notes", { method: "POST", body: JSON.stringify(noteData) }),

  update: (id, noteData) =>
    request(`/notes/${id}`, { method: "PUT", body: JSON.stringify(noteData) }),

  delete: (id) =>
    request(`/notes/${id}`, { method: "DELETE" }),
};
```

In `client/.env`:
```
VITE_API_URL=http://localhost:5000/api
```

> **Note:** Vite reads environment variables prefixed with `VITE_`. Access them with `import.meta.env.VITE_VARIABLE_NAME`.

---

## 💻 Step 3: Build a Connected Component

Let's build a Notes list component that reads from the real API:

```jsx
// client/src/components/NotesList.jsx
import { useState, useEffect } from "react";
import { notesApi } from "../api/api";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const data = await notesApi.getAll();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this note?")) return;

    try {
      await notesApi.delete(id);
      setNotes(prev => prev.filter(note => note._id !== id));
    } catch (err) {
      alert("Failed to delete: " + err.message);
    }
  };

  if (loading) return <p>Loading notes...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>My Notes ({notes.length})</h2>
      {notes.length === 0 ? (
        <p>No notes yet. Create your first one!</p>
      ) : (
        notes.map(note => (
          <div key={note._id} style={{
            padding: "16px",
            margin: "8px 0",
            border: "1px solid #e5e7eb",
            borderRadius: "8px"
          }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button
              onClick={() => handleDelete(note._id)}
              style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesList;
```

---

## 📝 Step 4: Create Note Form (Full Stack POST)

```jsx
// client/src/components/CreateNote.jsx
import { useState } from "react";
import { notesApi } from "../api/api";

function CreateNote({ onNoteCreated }) {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const newNote = await notesApi.create(formData);
      setFormData({ title: "", content: "" });  // Reset form
      onNoteCreated(newNote);  // Tell parent about the new note
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "24px", background: "#f9fafb", borderRadius: "8px" }}>
      <h3>New Note</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        style={{ display: "block", width: "100%", padding: "8px", marginBottom: "8px" }}
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Write your note..."
        rows={4}
        style={{ display: "block", width: "100%", padding: "8px", marginBottom: "8px" }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{ padding: "8px 20px", background: "#2563eb", color: "white", border: "none", borderRadius: "6px" }}
      >
        {loading ? "Saving..." : "Save Note"}
      </button>
    </form>
  );
}

export default CreateNote;
```

---

## 🔄 Managing State Across the Full Stack

Here's how to keep frontend state in sync with the backend:

```jsx
// client/src/pages/NotesPage.jsx
import { useState, useEffect } from "react";
import { notesApi } from "../api/api";
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    notesApi.getAll().then(setNotes).finally(() => setLoading(false));
  }, []);

  // Called when a new note is created
  const handleNoteCreated = (newNote) => {
    setNotes(prev => [newNote, ...prev]);  // Add to top of list
  };

  // Called when a note is deleted
  const handleNoteDeleted = (id) => {
    setNotes(prev => prev.filter(n => n._id !== id));
  };

  // Called when a note is updated
  const handleNoteUpdated = (updatedNote) => {
    setNotes(prev => prev.map(n => n._id === updatedNote._id ? updatedNote : n));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <h1>My Notes</h1>
      <CreateNote onNoteCreated={handleNoteCreated} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        notes.map(note => (
          <NoteCard
            key={note._id}
            note={note}
            onDelete={handleNoteDeleted}
            onUpdate={handleNoteUpdated}
          />
        ))
      )}
    </div>
  );
}
```

**The three state update patterns:**
- **After create**: Prepend new item `[newNote, ...prev]`
- **After delete**: Filter it out `prev.filter(n => n._id !== id)`
- **After update**: Replace it `prev.map(n => n._id === id ? updated : n)`

Memorize these — you'll use them constantly.

---

## 🔑 Handling Authentication Headers

When a user logs in, store the JWT token and send it with every request:

```javascript
// On login success:
localStorage.setItem("token", response.token);

// In your api.js (already done above):
const token = localStorage.getItem("token");
headers: {
  Authorization: `Bearer ${token}`
}

// On logout:
localStorage.removeItem("token");
```

---

## 🚨 Full-Stack Error Handling

Create a consistent error experience across the stack:

**Server error response format (stay consistent!):**
```javascript
// Express — always return this shape
res.status(400).json({ error: "Validation failed", message: "Email is required" });
res.status(500).json({ error: "Internal Server Error" });
```

**React — handle all error cases:**
```jsx
function useApi(apiFn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFn(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute };
}

// Usage:
function MyComponent() {
  const { data: notes, loading, error, execute: fetchNotes } = useApi(notesApi.getAll);

  useEffect(() => { fetchNotes(); }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return <NotesList notes={notes} />;
}
```

---

## 🧪 Common Issues & Debugging Tips

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| `CORS error` | CORS not configured or wrong origin | Check `cors()` setup in Express |
| `404 Not Found` | Wrong URL or API route doesn't exist | Double-check route path and HTTP method |
| `Empty req.body` | Forgot `express.json()` middleware | Add `app.use(express.json())` |
| `Network Error` | Backend not running | Start the Express server |
| `401 Unauthorized` | Token missing or expired | Check Authorization header |
| `Cannot read undefined` | Response shape doesn't match expectations | `console.log(data)` after fetching |

---

## 📦 Proxy Setup (Alternative to CORS)

In development, you can set up a proxy in Vite so you don't need CORS at all:

```javascript
// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
```

Now `fetch('/api/notes')` (no domain) automatically proxies to `http://localhost:5000/api/notes`. No CORS needed in development!

---

## ✅ Practice Tasks

**Task 1 — Connected Todo App:**
Build a full-stack Todo app:
- Backend: Express + MongoDB (Todo model with title, completed, createdAt)
- Frontend: React with a form to add todos and list to display/toggle/delete them
- All operations persist to the database

**Task 2 — Search Integration:**
Add a search input to your frontend that:
- Sends search term to `GET /api/notes?search=keyword`
- Updates the list instantly (debounce the API call after 300ms of no typing)

**Task 3 — Loading States:**
For every operation (create, update, delete), add:
- A loading indicator while request is in progress
- Disable the button during loading
- Show success/error feedback to the user

---

## 🧪 Experiments

**Experiment 1:** What happens if you remove the CORS middleware and try to fetch from React?

**Experiment 2:** Use the Network tab in DevTools to inspect:
- The request headers (do you see `Content-Type: application/json`?)
- The response status code
- The response body

**Experiment 3:** What happens if the token is wrong or expired?
```javascript
localStorage.setItem("token", "invalid-token-here");
// Now try to call a protected route
```

---

## 💡 Challenge Problem

Build a **User Dashboard** (full stack):
- Login form that stores JWT in localStorage
- After login, fetch and display the user's profile
- Show stats: number of notes, pinned notes, recent activity
- Build a "Settings" form to update name/email (update via PATCH)
- Logout button that clears the token and redirects to login

---

## ➡️ Next Step

You've connected all four parts of the MERN stack! Now it's time to put everything together into a **complete, production-style application**.

### → [Section 12: Full-Stack Project — Notes App](./12-fullstack-project.md)

---

*Section 11 of 14 | MERN Stack Learning System*
