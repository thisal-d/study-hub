<div align="center">

# SE2020 — Web and Mobile Technologies · Faculty of Computing

</div>

<div align="center">

# Practice Lab Test — Paper 4

</div>

## Duration: 2 Hours &nbsp;|&nbsp; Difficulty: ⭐⭐⭐⭐ Medium–Hard

---

## Recipe Manager MERN Application Enhancement and Deployment

---

## 1. Lab Test Overview

You are provided with a starter MERN **Recipe Manager** project. Your task is to complete the given project, extend it by adding **two** new fields: **Prep Time (in minutes)** and **Difficulty Level**, test it locally, publish to GitHub, and deploy.

---

## 2. Expected Skills Demonstrated

- Managing state and schemas for multiple new fields simultaneously.
- Implementing a dropdown (`<select>`) field for constrained data options.
- Conditional rendering and styling based on dropdown values.
- Standard MERN stack testing and separate platform deployment.

---

## 3. Resources Provided

- Frontend project (React + Vite)
- Backend project (Node.js + Express + MongoDB)
- Basic CRUD functionality.

---

## 4. Tasks to Be Completed

### Task 01 — Project Setup and Local Verification

**Backend Setup**
1. `npm install`
2. Create `.env` file with `MONGO_URI` and `PORT=5000`
3. Start the server using `npm run dev`

**Frontend Setup**
1. `npm install`
2. Start using `npm run dev`

**Verification**
- Run at `http://localhost:5173`
- Add, edit, and delete a recipe successfully.

---

### Task 02 — Functional Enhancement

Modify the application by adding two new fields to the Recipe model and Add/Edit forms:

1. **Prep Time**: A numeric field (minutes).
2. **Difficulty**: A dropdown (`<select>`) field with three options: `Easy`, `Medium`, and `Hard`.

**Requirements:**
- Update the frontend form to capture these values.
- Update the backend schema to validate and save them.
  - Difficulty must be restricted to only 'Easy', 'Medium', or 'Hard' (using an `enum` in Mongoose).
- Display both fields on the Home page inside the `RecipeCard`.
- **Conditional Styling for Difficulty:**
  - Easy: Green badge
  - Medium: Orange/Yellow badge
  - Hard: Red badge

---

### Task 03 — GitHub Publication

- Push both frontend and backend to a public GitHub repository.

---

### Task 04 — Separate Deployment

- Deploy backend to Render/Railway.
- Deploy frontend to Netlify/Vercel.
- Update API endpoints to the live backend URL.

---

## 5. Required Contents of the Submission Word Document

- Student Name & ID
- GitHub Repository Link(s)
- Screenshot of local existing system (Add & Home pages)
- Screenshot of local updated system (Add & Home pages showing the new Prep Time & Difficulty fields with badges)
- Live URLs and deployment notes.

---

<div align="center">

## 6. Marking Scheme (100 Marks)

</div>

| Component | Marks | Notes |
|---|---|---|
| Local setup & MongoDB config | 10 | |
| Multiple field integration (Prep Time, Difficulty) | 20 | Handled Mongoose enums and React `<select>` correctly. |
| Home page display & Conditional Styling | 15 | Difficulty badges must change color based on value. |
| GitHub repository | 10 | |
| Backend deployment | 20 | |
| Frontend deployment & Integration | 25 | |

---

## 7. Important Rules
- Individual test. Use your own GitHub and hosting accounts.
- Do not break existing core functionality.
