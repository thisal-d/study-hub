# 🧪 Practice Lab Test — Paper 3 (Medium)
### SE2020 — Web and Mobile Technologies | MERN Stack

> **Time Limit:** 2 Hours  
> **Total Marks:** 100  
> **Difficulty:** ⭐⭐⭐ Medium — Full CRUD + Search/Filter + Components

---

## Scenario: Product Inventory Manager

You are given a starter MERN **Product Inventory Manager** project. Staff can view, add, delete, and search for products. The backend model currently has only `name` (String) and `price` (Number). Your task is to extend and complete this application.

---

## Part 1: Backend Completion (30 Marks)

### 1.1 Database Connection (5 Marks)
- Configure `.env` with `MONGO_URI` and connect in `server.js`.

### 1.2 Model Extension (10 Marks)
Open `backend/models/Product.js`.

**Task:** Add **three new fields**:
- `category` (String, required, enum: `['Electronics', 'Clothing', 'Food', 'Furniture', 'Other']`)
- `stock` (Number, required, min: 0)
- `inStock` (Boolean — should be derived or default `true` when stock > 0)

> **Tip:** You can use a Mongoose **virtual** or simply set `inStock` as a regular Boolean field that the frontend sets based on `stock`.

### 1.3 API Routes Completion (15 Marks)
Open `backend/routes/products.js`. `GET /` and `POST /` are provided.

**Task 1:** Update `POST /` to accept `category`, `stock`, and `inStock`.  
**Task 2:** Implement `DELETE /:id`.  
**Task 3:** Implement `GET /search` — a route that accepts a `?q=` query parameter and returns products whose `name` or `category` contains the search term (case-insensitive).  
> Hint: Use a MongoDB regex: `{ $or: [{ name: regex }, { category: regex }] }`

---

## Part 2: Frontend Completion (30 Marks)

### 2.1 Form Update (10 Marks)
- Add `<select>` for `category`.
- Add `<input type="number">` for `stock`.
- Include both in `formData` and the POST request.

### 2.2 Display New Data & Conditional Styling (10 Marks)
- Show `category`, `stock`, and an **In Stock / Out of Stock** badge for each product.
- If `stock === 0`, add a visual indicator (e.g., greyed out card or "Out of Stock" badge).

### 2.3 Delete Functionality (5 Marks)
- Add a **"Delete"** button per product using `axios.delete()`.

### 2.4 Search Feature (5 Marks)
- Add a **search input** above the product list.
- On change, call `GET /api/products/search?q=<term>` with `axios.get()`.
- Display the filtered results dynamically (no page reload needed).

---

## Part 3: Component Extraction (Bonus — included in marks)

### Refactor App.jsx by extracting (included in Part 2 marks):
- A **`ProductCard`** component that receives a `product` object and `onDelete` handler as props, and renders the product details with the delete button.
- Use it inside `App.jsx` instead of the inline `<li>` JSX.

---

## Part 4: Deployment (25 Marks)

### 4.1 Backend Deployment (10 Marks)
- Deploy to Render or Railway with `MONGO_URI` set.

### 4.2 Frontend Deployment (10 Marks)
- Update API URL and deploy to Vercel or Netlify.

### 4.3 CORS Verification (5 Marks)
- Verify all features work on the live deployed app.

---

## Part 5: Submission (15 Marks)

### 5.1 GitHub Repository (5 Marks)
- Push completed code to a Public GitHub Repository.

### 5.2 Documentation & Screenshots (10 Marks)
Create `SUBMISSION.md` with:
- Deployed Frontend & Backend links.
- **Screenshot 1:** Products list with category, stock, and in-stock badges.
- **Screenshot 2:** Search in action (typed a term, filtered results shown).
- **Screenshot 3:** MongoDB Atlas collection view.
- **Screenshot 4:** Deployment dashboard.

---

**Good Luck! 🛒**
