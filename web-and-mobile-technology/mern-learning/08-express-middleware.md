# Section 08: Express — Middleware & Project Structure

**← [Express — Your First API](./07-express-api.md)** | **Next: [MongoDB Basics →](./09-mongodb-basics.md)**

---

## 🎯 What This Section Covers

Your API works, but as it grows, you need a structure that stays maintainable. This section is about:
- Understanding how **middleware** works (the backbone of Express)
- Organizing code into **controllers**, **routes**, and **middleware**
- Implementing cross-cutting concerns (logging, error handling, CORS)
- Building a server structure that scales to production

---

## 🔌 What Is Middleware?

Middleware is **any function that runs between the request arriving and the response being sent**.

Think of it as a pipeline:

```
Incoming Request
      ↓
[Middleware 1: Log the request]
      ↓
[Middleware 2: Parse JSON body]
      ↓
[Middleware 3: Check authentication]
      ↓
[Route Handler: Business logic]
      ↓
[Middleware 4: Error Handler]
      ↓
Outgoing Response
```

Every middleware function has access to `(req, res, next)`:
- `req` — the request
- `res` — the response
- `next` — a function to call to pass to the next middleware

```javascript
function myMiddleware(req, res, next) {
  // Do something with req or res
  console.log("Something happened!");
  next();  // IMPORTANT: call next() or the request gets stuck!
}
```

---

## 🛠️ Built-in Express Middleware

```javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files from a folder
app.use(express.static("public"));
```

---

## 🔧 Writing Custom Middleware

### Request Logger

```javascript
// middleware/logger.js

const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const { method, url } = req;

  console.log(`[${timestamp}] ${method} ${url}`);

  // Track response time
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${timestamp}] ${method} ${url} → ${res.statusCode} (${duration}ms)`);
  });

  next();
};

module.exports = logger;
```

```javascript
// In index.js
const logger = require("./middleware/logger");
app.use(logger);  // Applied to ALL routes
```

### Request Validator

```javascript
// middleware/validateUser.js

const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: "Name must be at least 2 characters" });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  // Input passes — pass cleaned data forward
  req.body.name = name.trim();
  req.body.email = email.toLowerCase().trim();

  next();
};

module.exports = validateUser;
```

Apply to specific routes only:
```javascript
const validateUser = require("./middleware/validateUser");

// Validate only on POST and PUT
router.post("/", validateUser, createUser);
router.put("/:id", validateUser, updateUser);
```

### Not Found Handler

```javascript
// middleware/notFound.js

const notFound = (req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Cannot ${req.method} ${req.url}`
  });
};

module.exports = notFound;
```

### Global Error Handler

```javascript
// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  console.error("Stack:", err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
};

module.exports = errorHandler;
```

---

## 🌐 CORS Middleware

CORS (Cross-Origin Resource Sharing) is what allows your React app (running on port 5173) to call your Express server (running on port 3000).

```bash
npm install cors
```

```javascript
const cors = require("cors");

// Allow ALL origins (fine for development):
app.use(cors());

// Or configure for production (specific origins only):
app.use(cors({
  origin: ["http://localhost:5173", "https://myapp.com"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
```

> **You'll need this** in Section 11 when you connect React to Express. Add it now and save yourself debugging time later.

---

## 🏗️ Professional Project Structure

Here's the folder structure we'll use for the rest of the course:

```
server/
├── index.js              ← Entry point
├── .env                  ← Environment variables (never commit!)
├── package.json
│
├── config/
│   └── db.js             ← Database connection
│
├── middleware/
│   ├── logger.js         ← Request logger
│   ├── errorHandler.js   ← Global error handler
│   ├── notFound.js       ← 404 handler
│   └── authenticate.js   ← Auth middleware (later)
│
├── models/               ← Database models (MongoDB/Mongoose)
│   └── User.js
│
├── controllers/          ← Business logic functions
│   └── userController.js
│
├── routes/               ← Route definitions
│   └── userRoutes.js
│
└── utils/                ← Shared utility functions
    └── helpers.js
```

**The workflow:**
```
Request → index.js → middleware → route → controller → model → database
Response ← route handler ← controller ← model ← database
```

---

## 🗂️ The Controller Pattern

Instead of writing all logic in route files, **controllers** handle the business logic:

```javascript
// controllers/userController.js

let users = [];   // (Will be replaced by Mongoose in Section 10)
let nextId = 1;

// Get all users
const getUsers = (req, res) => {
  const { role, search } = req.query;
  let result = [...users];

  if (role) result = result.filter(u => u.role === role);
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    );
  }

  res.json({ data: result, count: result.length });
};

// Get one user
const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// Create user
const createUser = (req, res) => {
  const { name, email, role = "user" } = req.body;
  const user = { id: nextId++, name, email, role, createdAt: new Date().toISOString() };
  users.push(user);
  res.status(201).json(user);
};

// Update user
const updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...users[index], ...req.body, id: users[index].id };
  res.json(users[index]);
};

// Delete user
const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
```

```javascript
// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
```

```javascript
// index.js — Clean and organized
const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");

const app = express();

// ─── Core Middleware ───────────────────
app.use(cors());
app.use(express.json());
app.use(logger);

// ─── Routes ───────────────────────────
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀", version: "1.0.0" });
});

app.use("/api/users", userRoutes);

// ─── Error Middleware (must be LAST) ───
app.use(notFound);
app.use(errorHandler);

// ─── Start Server ──────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
```

Compare this to where we started! Much cleaner, easier to navigate, easy to add more resources.

---

## 🔐 Environment Variables with `dotenv`

Never hardcode sensitive values (passwords, API keys, connection strings) directly in code.

```bash
npm install dotenv
```

Create `.env`:
```
PORT=3000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=supersecretkey123
```

In `index.js` (as early as possible):
```javascript
require("dotenv").config();

// Now use them:
const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;
```

**IMPORTANT:** Add `.env` to your `.gitignore`!

```
# .gitignore
node_modules/
.env
```

Create a `.env.example` file (safe to commit) showing what variables are needed:
```
PORT=3000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_here
```

---

## 🧰 Async Error Handling Helper

Instead of wrapping every controller in try/catch, use a wrapper:

```javascript
// utils/asyncHandler.js

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
```

Now controllers are cleaner:

```javascript
const asyncHandler = require("../utils/asyncHandler");

const getUsers = asyncHandler(async (req, res) => {
  // No try/catch needed!
  const users = await User.find();  // If this throws, asyncHandler catches it
  res.json(users);
});
```

---

## 🧾 API Response Standardization

Keep your responses consistent:

```javascript
// utils/apiResponse.js

const success = (res, data, message = "Success", statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

const error = (res, message, statusCode = 400) => {
  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = { success, error };
```

```javascript
// In a controller:
const { success, error } = require("../utils/apiResponse");

const getUsers = (req, res) => {
  const users = [];  // fetch from db
  success(res, users, "Users retrieved");
};

const createUser = (req, res) => {
  // ...
  success(res, newUser, "User created", 201);
};
```

---

## ✅ Practice Tasks

**Task 1 — Logging Middleware:**
Enhance the logger to:
- Color different methods (GET=blue, POST=green, DELETE=red)
- Log the request body for POST/PUT/PATCH (but not password fields)
- Write logs to a file in addition to console

**Task 2 — Input Sanitizer:**
Write a middleware that:
- Trims whitespace from all string body values
- Lowercases email fields
- Sets a `req.sanitized = true` flag

**Task 3 — Rate Limiter (Conceptual):**
Build a simple in-memory rate limiter middleware:
- Track how many requests each IP has made in the last minute
- If more than 100 requests/minute, return `429 Too Many Requests`
- Reset the count every minute

---

## 🧪 Experiments

**Experiment 1:** What happens if you forget to call `next()` in middleware?

**Experiment 2:** What's the difference between these two?
```javascript
app.use(middleware);               // Applied to all routes
app.use("/api", middleware);       // Applied only to /api/* routes
router.get("/", middleware, handler);  // Applied to one specific route
```

**Experiment 3:** What does the order of middleware matter?
```javascript
// Try swapping these:
app.use(cors());
app.use(express.json());
// Does order matter? Can you find a case where it does?
```

---

## 💡 Challenge Problem

Refactor your Users API from Section 07 into the full controller/routes/middleware structure:

1. `server/`
   - `index.js` (clean, just wires things together)
   - `.env` (PORT, NODE_ENV)
   - `middleware/` (logger, notFound, errorHandler)
   - `routes/userRoutes.js`
   - `controllers/userController.js`
   - `utils/asyncHandler.js`, `apiResponse.js`

2. Add a second resource: **Posts** (each post belongs to a user)
3. Add `GET /api/users/:id/posts` to get all posts by a user
4. Ensure all errors are caught and returned consistently

---

## 🧠 Key Takeaways

| Concept | Key Point |
|---------|-----------|
| Middleware | Functions running between request and response |
| `next()` | Must be called to continue the pipeline |
| CORS | Allows frontend/backend on different ports to communicate |
| Controllers | Separate business logic from routes |
| `dotenv` | Load environment variables from `.env` file |
| `asyncHandler` | Wraps async functions to auto-catch errors |

---

## ➡️ Next Step

Your backend is well-organized. Now it's time to add persistent storage. In the next section, you'll learn **MongoDB** — the document database that stores your data.

### → [Section 09: MongoDB Basics](./09-mongodb-basics.md)

---

*Section 08 of 14 | MERN Stack Learning System*
