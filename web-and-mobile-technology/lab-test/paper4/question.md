# 🧪 Practice Lab Test — Paper 4 (Medium-Hard)
### SE2020 — Web and Mobile Technologies | MERN Stack

> **Time Limit:** 2 Hours  
> **Total Marks:** 100  
> **Difficulty:** ⭐⭐⭐⭐ Medium-Hard — Full CRUD + Edit Modal + Multi-Component Architecture

---

## Scenario: Task Management System

You are given a starter MERN **Task Management System** project. Users can manage tasks across different projects. The backend model has only `title` (String) and `description` (String). You must complete, extend, and deploy this application.

---

## Part 1: Backend Completion (30 Marks)

### 1.1 Database Connection (5 Marks)
- Configure `.env` with `MONGO_URI` and connect in `server.js`.

### 1.2 Model Extension (10 Marks)
Open `backend/models/Task.js`.

**Task:** Add **three new fields**:
- `status` (String, required, enum: `['Todo', 'In Progress', 'Done']`, default: `'Todo'`)
- `dueDate` (Date, required)
- `assignedTo` (String, required)

### 1.3 API Routes Completion (15 Marks)
Open `backend/routes/tasks.js`. `GET /` and `POST /` are provided.

**Task 1:** Update `POST /` to accept `status`, `dueDate`, and `assignedTo`.  
**Task 2:** Implement `DELETE /:id`.  
**Task 3:** Implement `PUT /:id` — a full update route that accepts all fields (`title`, `description`, `status`, `dueDate`, `assignedTo`) and replaces the document. Return the updated document.

> **Hint for PUT:** Use `Task.findByIdAndUpdate(id, body, { new: true, runValidators: true })`

---

## Part 2: Frontend Completion (30 Marks)

### 2.1 Form & State (10 Marks)
- Add `<input type="date">` for `dueDate`.
- Add `<select>` for `status` with options: Todo, In Progress, Done.
- Add `<input type="text">` for `assignedTo`.
- Include all in `formData` state and POST request.

### 2.2 Display Data with Status Kanban-style (10 Marks)
- Display tasks grouped by status in **three columns** (Todo, In Progress, Done).
- Use a color-coded header per column: 🔵 Todo, 🟡 In Progress, 🟢 Done.
- Show `assignedTo`, `dueDate`, and `status` for each task card.

### 2.3 Delete Functionality (5 Marks)
- Add a **"Delete"** button on each task card.

### 2.4 Edit Task via Modal (5 Marks)
- When a user clicks an **"Edit"** button on a task card, show a pre-filled **edit form** (either inline or a simple modal-style overlay).
- On submit, call `PUT /api/tasks/:id` with the updated data using `axios.put()`.
- After update, close the form and refresh the task list.

---

## Part 3: Multi-Component Architecture (included in Part 2 marks)

Refactor your app into these components:
- **`TaskForm`** — The add-task form (receives `onTaskAdded` callback prop).
- **`TaskColumn`** — Renders a single status column (receives `title`, `tasks`, `onDelete`, `onEdit` props).
- **`TaskCard`** — Renders a single task (receives `task`, `onDelete`, `onEdit` props).

All components should be in `frontend/src/components/`.

---

## Part 4: Deployment (25 Marks)

### 4.1 Backend Deployment (10 Marks)
- Deploy to Render or Railway with `MONGO_URI`.

### 4.2 Frontend Deployment (10 Marks)
- Update API URL and deploy to Vercel or Netlify.

### 4.3 Full Feature Verification (5 Marks)
- Verify add, edit, delete, and kanban grouping work on the live site.

---

## Part 5: Submission (15 Marks)

### 5.1 GitHub Repository (5 Marks)
- Push to a **Public GitHub Repository**.

### 5.2 Documentation & Screenshots (10 Marks)
Create `SUBMISSION.md` with:
- Deployed Frontend & Backend links.
- **Screenshot 1:** Kanban board showing tasks in all three columns.
- **Screenshot 2:** Edit modal/form open with pre-filled data.
- **Screenshot 3:** MongoDB Atlas collection view.
- **Screenshot 4:** Deployment dashboard.

---

**Good Luck! ✅**
