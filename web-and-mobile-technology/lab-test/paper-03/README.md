# 🎬 Practice Paper 03 — Movie Review Manager

**Time:** 2 Hours | **Difficulty:** ⭐⭐⭐ Intermediate+  
**Skills:** MERN full CRUD, MongoDB `$regex` search, star ratings, watched toggle, deployment

---

## 📖 Scenario

Starter has a Movie model with only `title` and `director`. Add `releaseYear`, `rating` (1–10), `genre`, and `watched` fields. Build search and star rating display.

---

## 🗂️ Final Project Structure

```
paper-03/
├── backend/
│   ├── models/Movie.js
│   ├── routes/movies.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── MovieForm.jsx
    │   │   ├── MovieList.jsx
    │   │   ├── MovieCard.jsx
    │   │   └── SearchBar.jsx
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

```bash
# Create Vite frontend
npm create vite@latest frontend -- --template react
cd frontend && npm install

# Setup backend
cd backend && npm install
```

**`backend/.env`:**
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/moviesDB?retryWrites=true&w=majority
PORT=5000
```

**`frontend/.env`:**
```
VITE_API_URL=http://localhost:5000
```

---

## 🎯 Task 2 — Backend (in folder)

- `models/Movie.js` — `title`, `director`, `releaseYear`, `rating` (1–10), `genre` (enum), `watched` (default false)
- `routes/movies.js` — GET (with search `?search=`), POST, PUT, DELETE, PATCH `/watched`
- Search uses MongoDB `$regex` with `$or` to match title OR director

---

## 🎯 Task 3 — Frontend (in folder)

| Component | What it does |
|-----------|-------------|
| `SearchBar.jsx` | Input that calls parent with search string |
| `MovieForm.jsx` | Add movie with all fields |
| `MovieList.jsx` | Fetch with search param, handle delete + toggle |
| `MovieCard.jsx` | Show movie info with ⭐ star rating display |

---

## 🎯 Task 4 — Test Locally (10 min)

1. Add 3+ movies with different genres and ratings
2. Search for a title — only matching movies appear
3. Mark a movie as watched — card changes appearance
4. Delete a movie

---

## 🎯 Task 5 — Deploy (15 min)

```bash
git init && git add . && git commit -m "Movie Review Manager"
git remote add origin https://github.com/YOUR/movie-reviews.git && git push -u origin main
```
Backend → Render | Frontend → Netlify (set `VITE_API_URL` to Render URL)
