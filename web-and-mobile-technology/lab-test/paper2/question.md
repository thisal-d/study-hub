# 🧪 Practice Lab Test — Paper 2 (Easy-Medium)
### SE2020 — Web and Mobile Technologies | MERN Stack

> **Time Limit:** 2 Hours  
> **Total Marks:** 100  
> **Difficulty:** ⭐⭐ Easy-Medium — CRUD + Update Functionality

---

## Scenario: Student Notes Manager

You are provided with a starter MERN **Student Notes Manager** project. Students can save quick notes for their subjects. The backend model has only `title` (String) and `content` (String). Your task is to complete, extend, and deploy this application.

---

## Part 1: Backend Completion (30 Marks)

### 1.1 Database Connection (5 Marks)
- Create a `.env` file in `backend/` with `MONGO_URI`.
- Connect to MongoDB Atlas using Mongoose in `server.js`.

### 1.2 Model Extension (10 Marks)
Open `backend/models/Note.js`.

**Task:** Add **two new fields**:
- `subject` (String, required, enum: `['Maths', 'Science', 'History', 'English', 'Programming', 'Other']`)
- `priority` (String, required, enum: `['Low', 'Medium', 'High']`, default: `'Medium'`)

### 1.3 API Routes Completion (15 Marks)
Open `backend/routes/notes.js`. `GET /` and `POST /` are provided.

**Task 1:** Update `POST /` to accept `subject` and `priority`.  
**Task 2:** Implement `DELETE /:id` to delete a note by its `_id`.  
**Task 3:** Implement `PATCH /:id` to allow **updating** the `priority` field of an existing note. Return the updated document.

---

## Part 2: Frontend Completion (30 Marks)

### 2.1 Form Update (10 Marks)
- Add a `<select>` for `subject` with the given enum options.
- Add a `<select>` for `priority` with options: Low, Medium, High.
- Include both in `formData` state and send in the POST request.

### 2.2 Display New Data (10 Marks)
- Show `subject` and `priority` for each note in the list.
- Apply a color-coded badge for priority: 🔴 High, 🟡 Medium, 🟢 Low.

### 2.3 Delete Functionality (5 Marks)
- Add a **"Delete"** button per note using `axios.delete()`.

### 2.4 Update Priority Inline (5 Marks)
- Add a small dropdown next to each note to **change its priority**.
- On change, call the `PATCH /:id` endpoint with `axios.patch()`.
- After updating, re-fetch the notes list.

---

## Part 3: Deployment (25 Marks)

### 3.1 Backend Deployment (10 Marks)
- Deploy backend to **Render** or **Railway**.
- Set `MONGO_URI` as an environment variable.

### 3.2 Frontend Deployment (10 Marks)
- Update API URL to deployed backend.
- Deploy frontend to **Vercel** or **Netlify**.

### 3.3 CORS Verification (5 Marks)
- Confirm CORS allows your deployed frontend.
- Test add, update priority, and delete from the live site.

---

## Part 4: Submission (15 Marks)

### 4.1 GitHub Repository (5 Marks)
- Push completed code to a **Public GitHub Repository**.

### 4.2 Documentation & Screenshots (10 Marks)
Create `SUBMISSION.md` with:
- Deployed Frontend link.
- Deployed Backend link.
- **Screenshot 1:** UI showing notes with subject & color-coded priority badges.
- **Screenshot 2:** MongoDB Atlas collection view.
- **Screenshot 3:** Deployment dashboard (live/success status).

---

**Good Luck! 📝**
