# 🏥 Practice Paper 04 — Patient Records Manager

**Time:** 2 Hours | **Difficulty:** ⭐⭐⭐⭐ Advanced  
**Skills:** Complex schema, status workflow, date arithmetic, priority badges, query filtering, deploy

---

## 📖 Scenario

Starter has a Patient model with only `name` and `age`. Add `bloodGroup`, `diagnosis`, `priority`, `status`, and `admittedDate`. Build a full hospital dashboard with status workflow and discharge functionality.

---

## 🗂️ Final Project Structure

```
paper-04/
├── backend/
│   ├── models/Patient.js
│   ├── routes/patients.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── PatientForm.jsx
    │   │   ├── PatientDashboard.jsx
    │   │   └── PatientCard.jsx
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

## 🎯 Task 1 — Create Project & Run (15 min)

```bash
npm create vite@latest frontend -- --template react
cd frontend && npm install
cd backend && npm install
```

**`backend/.env`:**
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/hospitalDB?retryWrites=true&w=majority
PORT=5000
```

**`frontend/.env`:**
```
VITE_API_URL=http://localhost:5000
```

---

## 🎯 Test Checklist

1. Admit a Critical-priority patient — appears with red/purple border
2. Change status to "Under Treatment" using the dropdown
3. Click Discharge — card greys out, discharge date appears
4. Filter by "Admitted" — only admitted patients shown
5. Delete a discharged record

---

## 🎯 Deploy

```bash
git init && git add . && git commit -m "Patient Records Manager"
git remote add origin https://github.com/YOUR/patient-records.git && git push -u origin main
```
Backend → Render (root: `backend`) | Frontend → Netlify (base: `frontend`, publish: `dist`)
