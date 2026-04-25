# 🧪 Practice Lab Test — Paper 5 (Hard)
### SE2020 — Web and Mobile Technologies | MERN Stack

> **Time Limit:** 2 Hours  
> **Total Marks:** 100  
> **Difficulty:** ⭐⭐⭐⭐⭐ Hard — Full CRUD + Filter by Category + Multi-Component + Real-world UX

---

## Scenario: Event Registration System

You are given a starter MERN **Event Registration System** project. Event coordinators can manage events and registrations. The backend model currently has only `eventName` (String) and `venue` (String). Your task is to complete, extend, and deploy this application.

---

## Part 1: Backend Completion (30 Marks)

### 1.1 Database Connection (5 Marks)
- Configure `.env` with `MONGO_URI` and connect in `server.js`.

### 1.2 Model Extension (10 Marks)
Open `backend/models/Event.js`.

**Task:** Add **four new fields**:
- `category` (String, required, enum: `['Workshop', 'Seminar', 'Sports', 'Cultural', 'Other']`)
- `date` (Date, required)
- `capacity` (Number, required, min: 1)
- `registeredCount` (Number, default: 0, min: 0)

### 1.3 API Routes Completion (15 Marks)
Open `backend/routes/events.js`. Only `GET /` is provided.

**Task 1:** Implement `POST /` — create a new event with all fields.  
**Task 2:** Implement `DELETE /:id`.  
**Task 3:** Implement `PATCH /:id/register` — increment `registeredCount` by 1 **only if** `registeredCount < capacity`. If the event is full, return `{ message: 'Event is full' }` with status 400.  
**Task 4:** Implement `GET /?category=<value>` filtering — if a `category` query param is present, filter events by that category.

> **Hint for filtering:** Check `req.query.category`. If set, add it to the Mongoose `find()` filter object. If not set, return all events.

---

## Part 2: Frontend Completion (30 Marks)

### 2.1 Add Event Form (10 Marks)
- Add inputs for: `eventName`, `venue`, `category` (select), `date` (date input), `capacity` (number input).
- All fields required; include in `formData` and POST request.

### 2.2 Display Events with Capacity Indicator (10 Marks)
- For each event, display: `eventName`, `venue`, `category`, `date`, `capacity`, `registeredCount`.
- Show a **capacity bar** (e.g., a simple `<progress>` element or styled div) showing `registeredCount / capacity`.
- Show a **"Full" badge** when `registeredCount >= capacity`, otherwise show remaining spots.

### 2.3 Register & Delete (5 Marks)
- Add a **"Register"** button on each event card.
  - On click, call `PATCH /api/events/:id/register` with `axios.patch()`.
  - If the response is 400 (full), show an **alert** with the message.
  - On success, refresh the events list.
- Add a **"Delete"** button per event using `axios.delete()`.

### 2.4 Category Filter (5 Marks)
- Add a **dropdown filter** above the event list with all categories + an "All" option.
- On change, call `GET /api/events?category=<value>` (or without query param for "All").
- Update the displayed list without a full page reload.

---

## Part 3: Component Architecture (included in Part 2 marks)

Structure your frontend as follows:
```
frontend/src/
  components/
    EventForm.jsx      — Add Event form component (props: onEventAdded)
    EventCard.jsx      — Single event card (props: event, onDelete, onRegister)
    CategoryFilter.jsx — Filter dropdown (props: selected, onChange)
  App.jsx              — Main app: fetches data, holds state, composes components
```

---

## Part 4: Deployment (25 Marks)

### 4.1 Backend Deployment (10 Marks)
- Deploy to Render or Railway; set `MONGO_URI` environment variable.

### 4.2 Frontend Deployment (10 Marks)
- Update API URL and deploy to Vercel or Netlify.

### 4.3 End-to-End Verification (5 Marks)
- Test all features on the **live deployed app**:
  - Add, register, delete events.
  - Filter by category.
  - Confirm "Event is full" alert appears when capacity is reached.

---

## Part 5: Submission (15 Marks)

### 5.1 GitHub Repository (5 Marks)
- Push completed code to a **Public GitHub Repository** with a clear commit history.

### 5.2 Documentation & Screenshots (10 Marks)
Create `SUBMISSION.md` with:
- Deployed Frontend & Backend links.
- **Screenshot 1:** Event list with capacity bars and "Full" badges.
- **Screenshot 2:** Category filter in use (showing only filtered results).
- **Screenshot 3:** Browser alert showing "Event is full" message.
- **Screenshot 4:** MongoDB Atlas collection view.
- **Screenshot 5:** Deployment dashboard.

---

> 💡 **Key challenge:** The register route requires server-side validation of capacity — this is where many students lose marks. Make sure the backend enforces the capacity limit, not just the frontend.

---

**Good Luck! 🎉**
