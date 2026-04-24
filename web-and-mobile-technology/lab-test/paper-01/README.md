# 📦 Practice Paper 01 — Product Inventory Manager

**Time:** 2 Hours | **Difficulty:** ⭐⭐ Foundational  
**Skills:** MERN basics, adding new fields (`price` + `category`), GitHub, deployment

---

## 📖 Scenario

You receive a starter MERN project for a **Product Inventory Manager** with separate `frontend/` and `backend/` folders.

The starter currently supports: listing products, adding a product (name, quantity only), and deleting.

**Your job:** Complete the model, add `price` and `category` fields, build the frontend, test locally, push to GitHub, and deploy.

---

## 🗂️ Final Project Structure

```
paper-01/
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── products.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductForm.jsx
    │   │   └── ProductList.jsx
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

## 🎯 Task 1 — Create Project with Vite & Run Locally (15 min)

### Step 1.1: Create Vite Frontend

```bash
# Inside the paper-01/ folder
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### Step 1.2: Setup Backend

```bash
cd backend
npm install
```

### Step 1.3: Create `.env` files

**`backend/.env`** (copy from `.env.example`):
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/inventoryDB?retryWrites=true&w=majority
PORT=5000
```

**`frontend/.env`** (copy from `.env.example`):
```
VITE_API_URL=http://localhost:5000
```

### Step 1.4: Run Both Servers

```bash
# Terminal 1 — Backend
cd backend
node server.js
# ✅ Expected: "Server running on port 5000" + "MongoDB connected"

# Terminal 2 — Frontend
cd frontend
npm run dev
# ✅ Expected: App at http://localhost:5173
```

---

## 🎯 Task 2 — Backend is Already Complete

All backend code is in the `backend/` folder. Study it:

- `models/Product.js` — schema with `name`, `quantity`, `price`, `category`
- `routes/products.js` — GET all, POST, DELETE routes
- `server.js` — Express + MongoDB server

---

## 🎯 Task 3 — Complete the Frontend (60 min)

Copy the component code from `frontend/src/components/` into your Vite project.

All components are provided — study each one and understand how they work.

---

## 🎯 Task 4 — Test Locally (10 min)

1. Add a product with all four fields (name, quantity, price, category)
2. Verify it appears in the list
3. Delete a product — verify it disappears
4. Refresh the page — data should still be there (MongoDB persistence)

---

## 🎯 Task 5 — Push to GitHub (5 min)

```bash
# From paper-01/ root
git init
git add .
git commit -m "Product Inventory Manager — complete with price and category"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/product-inventory.git
git push -u origin main
```

---

## 🎯 Task 6 — Deploy (20 min)

### Backend → Render.com

1. New Web Service → Connect GitHub repo
2. **Root Directory:** `backend`
3. **Build Command:** `npm install`
4. **Start Command:** `node server.js`
5. **Environment Variables:**
   - `MONGO_URI` = your Atlas connection string
   - `PORT` = `5000`
6. Deploy → copy your URL (e.g. `https://product-api-xxx.onrender.com`)

### Frontend → Netlify.com

1. Import from Git → Connect GitHub repo
2. **Base directory:** `frontend`
3. **Build command:** `npm run build`
4. **Publish directory:** `frontend/dist`
5. **Environment Variables:**
   - `VITE_API_URL` = `https://product-api-xxx.onrender.com` ← your Render URL!
6. Deploy

> ⚠️ **Critical:** `VITE_API_URL` must point to your deployed Render URL — NOT `localhost:5000`

---

## ✅ Expected Output

- Products list shows: name, quantity, price (Rs.), category, date added
- Add form submits all 4 fields
- Delete button removes the product instantly
- Data persists on page refresh
- Both backend and frontend deployed and connected
