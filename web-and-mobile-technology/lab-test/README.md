# 🎓 Lab Test Practice Papers — SE2020 Web & Mobile Technologies

> **5 progressive MERN Stack practice papers** designed to maximize your lab test performance.
> Each paper mirrors the format of the real lab test.

---

## 📋 Overview

| Paper | Scenario | Key Concepts | Difficulty |
|-------|----------|--------------|-----------|
| [Paper 1](./paper1/question.md) | 📚 Book Tracker | Basic CRUD + 2 new fields + Delete | ⭐ Easy |
| [Paper 2](./paper2/question.md) | 📝 Notes Manager | Full CRUD + Update (PATCH) + Priority badges | ⭐⭐ Easy-Medium |
| [Paper 3](./paper3/question.md) | 🛒 Product Inventory | CRUD + Search API + Component extraction | ⭐⭐⭐ Medium |
| [Paper 4](./paper4/question.md) | ✅ Task Manager | CRUD + PUT (full update) + Edit modal + Kanban | ⭐⭐⭐⭐ Medium-Hard |
| [Paper 5](./paper5/question.md) | 🎉 Event Registration | CRUD + Register logic + Capacity validation + Filter | ⭐⭐⭐⭐⭐ Hard |

---

## 📁 Each Paper Contains

```
paperN/
├── question.md          ← The exam question (read this first!)
├── output.html          ← Open in browser to see the expected UI
├── backend/
│   ├── server.js        ← Starter server (connect MongoDB here)
│   ├── package.json     ← Run `npm install` to set up
│   ├── .env.example     ← Copy to .env and add your MONGO_URI
│   ├── models/          ← Mongoose schema (extend this!)
│   └── routes/          ← Express routes (implement TODOs!)
└── frontend/
    └── src/
        └── App.jsx      ← React starter (implement TODOs!)
```

---

## 🚀 How to Use Each Paper

### Step 1 — Read the Question
Open `question.md` and read it fully before touching any code.

### Step 2 — Preview the Expected Output
Open `output.html` in your browser to see what the final UI should look like.

### Step 3 — Set Up the Backend
```bash
cd paperN/backend
npm install
cp .env.example .env
# Edit .env and paste your MongoDB Atlas connection string
npm run dev
```

### Step 4 — Set Up the Frontend
```bash
# Create a new Vite React app in the frontend folder
cd paperN/frontend
npm create vite@latest . -- --template react
npm install
npm install axios
# Replace src/App.jsx with the provided starter file
npm run dev
```

### Step 5 — Work Through the TODOs
Search for `// TODO (Student):` comments in the code — these mark every task you need to complete.

---

## 🧠 Key Concepts Tested Across All Papers

| Concept | Tested In |
|---------|-----------|
| MongoDB Atlas setup + `.env` | All papers |
| Mongoose schema + new fields | All papers |
| GET all items | All papers |
| POST (create) with new fields | All papers |
| DELETE by `_id` | All papers |
| PATCH (partial update) | Papers 2, 5 |
| PUT (full update) | Paper 4 |
| GET with query filter | Papers 3, 5 |
| Backend validation (enum, min) | All papers |
| Capacity / business logic | Paper 5 |
| React `useState` + `useEffect` | All papers |
| Controlled form inputs | All papers |
| `axios.get/post/delete` | All papers |
| `axios.patch/put` | Papers 2, 4 |
| Conditional rendering | Papers 2–5 |
| Component extraction (props) | Papers 3–5 |
| Kanban-style grouping | Paper 4 |
| Search / filter UI | Papers 3, 5 |
| Deployment (Render/Vercel) | All papers |
| CORS configuration | All papers |
| GitHub + SUBMISSION.md | All papers |

---

## ⏱️ Recommended Study Plan

| Day | Activity |
|-----|----------|
| Day 1 | Paper 1 — Complete without looking at example |
| Day 2 | Paper 2 — Focus on PATCH route and update UI |
| Day 3 | Paper 3 — Focus on search route + component extraction |
| Day 4 | Paper 4 — Focus on edit modal + Kanban grouping |
| Day 5 | Paper 5 — Full challenge: capacity logic + filter |
| Day 6 | Timed full run of Paper 3 or 4 within 2 hours |

---

## ✅ Before the Real Lab Test

- [ ] MongoDB Atlas account ready with a free cluster
- [ ] Can get a connection string in under 2 minutes
- [ ] GitHub account ready (public repo creation practiced)
- [ ] Render or Railway account set up (practiced deploying a backend)
- [ ] Vercel or Netlify account set up (practiced deploying a frontend)
- [ ] Know how to set environment variables on deployment platforms
- [ ] Understand CORS — can add your frontend URL to `cors({ origin: '...' })`

---

> 💡 **Pro Tip:** On the real lab test day, the most common time wasters are:
> 1. Forgetting to copy the `.env` with `MONGO_URI` before starting
> 2. Not pushing to GitHub until the last minute
> 3. Forgetting to update the API URL before deploying the frontend
> 4. Not setting `MONGO_URI` as an environment variable on Render/Railway
