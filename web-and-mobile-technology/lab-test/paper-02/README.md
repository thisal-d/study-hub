# 📚 Practice Paper 02 — Book Library Manager

**Time:** 2 Hours | **Difficulty:** ⭐⭐⭐ Intermediate  
**Skills:** MERN CRUD, `enum` fields, boolean toggle (borrow/return), client-side filtering, deployment

---

## 📖 Scenario

You receive a starter MERN project for a **Book Library Manager**. The starter only has `title` and `author`.

**Your tasks:** Add `isbn`, `genre`, and `available` fields. Build borrow/return toggle. Filter by availability.

---

## 🗂️ Final Project Structure

```
paper-02/
├── backend/
│   ├── models/Book.js
│   ├── routes/books.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── BookCard.jsx
    │   │   ├── BookForm.jsx
    │   │   └── BookList.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env.example
    ├── .gitignore
    ├── index.html
    └── vite.config.js
```

---

## 🎯 Task 1 — Create Project & Run Locally (15 min)

### Step 1.1: Create Vite Frontend

```bash
# Inside paper-02/
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### Step 1.2: Setup Backend

```bash
cd backend
npm install
```

### Step 1.3: Create `.env` Files

**`backend/.env`:**
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/libraryDB?retryWrites=true&w=majority
PORT=5000
```

**`frontend/.env`:**
```
VITE_API_URL=http://localhost:5000
```

### Step 1.4: Run Both Servers

```bash
# Terminal 1
cd backend && node server.js
# ✅ "Server running on port 5000" + "MongoDB connected"

# Terminal 2
cd frontend && npm run dev
# ✅ App at http://localhost:5173
```

---

## 🎯 Task 2 — Backend (Already in folder)

- `models/Book.js` — schema with `title`, `author`, `isbn` (unique), `genre` (enum), `available` (boolean default true)
- `routes/books.js` — GET all, POST, DELETE, PATCH `/toggle` for borrow/return
- `server.js` — Express + MongoDB server

---

## 🎯 Task 3 — Frontend (Study & Understand)

Components provided in `frontend/src/components/`:

| Component | Responsibility |
|-----------|----------------|
| `BookForm.jsx` | Add a new book with all fields |
| `BookList.jsx` | Fetch books, filter by availability, handle delete + toggle |
| `BookCard.jsx` | Display one book, show status, Borrow/Return button |

---

## 🎯 Task 4 — Test Locally (10 min)

1. Add a book with title, author, ISBN, and genre
2. Verify it shows as ✅ Available (green)
3. Click **Borrow** — status changes to ❌ Borrowed (red)
4. Click **Return** — status goes back to ✅ Available
5. Use filter buttons to show only Available / Borrowed books
6. Delete a book — verify it disappears

---

## 🎯 Task 5 — Push to GitHub & Deploy (15 min)

```bash
git init && git add . && git commit -m "Book Library Manager complete"
git remote add origin https://github.com/YOUR/book-library.git
git push -u origin main
```

**Backend → Render:** Root `backend` | Start `node server.js` | Env: `MONGO_URI`, `PORT=5000`  
**Frontend → Netlify:** Base `frontend` | Build `npm run build` | Publish `dist` | Env: `VITE_API_URL=<render-url>`
