# 🛒 Practice Paper 05 — Order Tracker

**Time:** 2 Hours | **Difficulty:** ⭐⭐⭐⭐ Full MERN + Deployment Focus  
**Skills:** Complete MERN from scratch, status pipeline, revenue totals, CORS for deployment

> This paper has the **strongest deployment focus** — the critical real-exam skill.

---

## 📖 Scenario

You receive **only a basic Express server and an empty React app**. You must build everything from scratch: the Order model, all routes, and the complete React frontend.

**New fields to add:** `customerName`, `product`, `quantity`, `totalPrice`, `paymentMethod`, `status`, `orderedAt`

---

## 🗂️ Final Project Structure

```
paper-05/
├── backend/
│   ├── models/Order.js
│   ├── routes/orders.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── OrderForm.jsx
    │   │   ├── OrderList.jsx
    │   │   └── OrderCard.jsx
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
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/ordersDB?retryWrites=true&w=majority
PORT=5000
```

**`frontend/.env`:**
```
VITE_API_URL=http://localhost:5000
```

---

## 🎯 Test Checklist

1. Place an order — appears as "Pending"
2. Change status to "Confirmed" → "Shipped" → "Delivered"
3. Verify total revenue updates (excludes Cancelled)
4. Filter by status tab
5. Delete an order

---

## 🎯 Deployment (Most Important)

```bash
git init && git add . && git commit -m "Order Tracker MERN app"
git remote add origin https://github.com/YOUR/order-tracker.git && git push -u origin main
```

**Backend → Render:**
- Root: `backend` | Build: `npm install` | Start: `node server.js`
- Env: `MONGO_URI`, `PORT=5000`
- ✅ Copy Render URL

**Frontend → Netlify:**
- Base: `frontend` | Build: `npm run build` | Publish: `dist`
- Env: `VITE_API_URL=https://your-render-url.onrender.com` ← **NOT localhost!**
- ✅ Verify deployed frontend fetches from deployed backend

**⚠️ Most Common Mistake:** Forgetting to update `VITE_API_URL` to the deployed backend URL.
