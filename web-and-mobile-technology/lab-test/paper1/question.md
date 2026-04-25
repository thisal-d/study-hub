# 🧪 Practice Lab Test — Paper 1 (Easy)
### SE2020 — Web and Mobile Technologies | MERN Stack

> **Time Limit:** 2 Hours  
> **Total Marks:** 100  
> **Difficulty:** ⭐ Easy — Foundational MERN Skills

---

## Scenario: Book Tracker

You are provided with a **starter MERN Book Tracker** project containing separate `frontend` (Vite + React) and `backend` (Express + MongoDB) applications.

The app allows users to manage a reading list. Currently the backend model only has `title` (String) and `author` (String). Your task is to **complete, extend, and deploy** this application.

---

## Part 1: Backend Completion (30 Marks)

### 1.1 Database Connection (5 Marks)
- Create a MongoDB Atlas cluster (if you haven't already).
- Set up a `.env` file in the `backend/` directory with the variable `MONGO_URI`.
- Connect the backend to MongoDB Atlas using Mongoose inside `server.js`.

### 1.2 Model Extension (10 Marks)
Open `backend/models/Book.js`. The current model only has `title` and `author`.

**Task:** Add **two new fields** to the schema:
- `genre` (String, required, enum: `['Fiction', 'Non-Fiction', 'Science', 'History', 'Other']`)
- `isRead` (Boolean, default: `false`)

### 1.3 API Routes Completion (15 Marks)
Open `backend/routes/books.js`. The `GET /` and `POST /` routes are provided.

**Task 1:** Update the `POST /` route to accept and save `genre` and `isRead` fields.  
**Task 2:** Implement the missing `DELETE /:id` route to allow deleting a book by its MongoDB `_id`.

---

## Part 2: Frontend Completion (30 Marks)

The frontend is a Vite + React application (`frontend/src/App.jsx`).

### 2.1 Form Update (15 Marks)
- Add a **dropdown** (`<select>`) for `genre` with the options: Fiction, Non-Fiction, Science, History, Other.
- Add a **checkbox** for `isRead` labelled "Already Read?".
- Ensure both fields are included in the `formData` state and sent in the POST request.

### 2.2 Display New Data (10 Marks)
- Update the book list to display `genre` and whether the book is read (`✅ Read` / `📖 Unread`).

### 2.3 Delete Functionality (5 Marks)
- Add a **"Delete"** button next to each book.
- Implement `handleDelete(id)` using `axios.delete()` to call your backend DELETE route.
- After deletion, refresh the book list by calling `fetchBooks()`.

---

## Part 3: Deployment (25 Marks)

### 3.1 Backend Deployment (10 Marks)
- Deploy your backend to **Render** or **Railway**.
- Set `MONGO_URI` as an environment variable on the platform.
- Note your deployed backend URL.

### 3.2 Frontend Deployment (10 Marks)
- Update your API URL in the frontend to point to your **deployed backend URL**.
- Deploy the frontend to **Vercel** or **Netlify**.

### 3.3 Cross-Origin Verification (5 Marks)
- Ensure your backend CORS config allows your deployed frontend origin.
- Verify you can **add** and **delete** books from the live deployed frontend.

---

## Part 4: Submission (15 Marks)

### 4.1 GitHub Repository (5 Marks)
- Initialize a Git repo, commit all code, and push to a **Public GitHub Repository**.

### 4.2 Documentation & Screenshots (10 Marks)
Create a `SUBMISSION.md` file containing:
- Link to your deployed **Frontend**.
- Link to your deployed **Backend**.
- **Screenshot 1:** Working UI showing books with `genre` and `isRead` status.
- **Screenshot 2:** MongoDB Atlas collection showing saved documents.
- **Screenshot 3:** Deployment dashboard showing live status.

---

**Good Luck! 📚**
