# Section 07: Express — Your First API

**← [Node.js Basics](./06-nodejs-basics.md)** | **Next: [Express Middleware & Structure →](./08-express-middleware.md)**

---

## 🎯 What This Section Covers

In Section 06, you saw how painful it is to build routes manually with Node's built-in `http` module. **Express.js** fixes that — it's a minimal framework that adds structure and convenience to Node.js servers.

Express is the "E" in MERN. By the end, you'll:
- Understand what Express adds on top of Node
- Create routes for GET, POST, PUT, DELETE requests
- Understand REST API design
- Return JSON responses from your server
- Test your API with Postman

---

## 🤔 Why Express?

Compare building a route with Node vs. Express:

**Plain Node.js:**
```javascript
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ name: "Alice" }]));
  } else if (req.url === "/users" && req.method === "POST") {
    // Parse body manually...
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const user = JSON.parse(body);
      // ... handle it
    });
  }
  // Imagine writing this for 20 routes...
});
```

**With Express:**
```javascript
const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON bodies automatically

app.get("/users", (req, res) => {
  res.json([{ name: "Alice" }]);
});

app.post("/users", (req, res) => {
  const user = req.body;  // Already parsed!
  res.status(201).json(user);
});
```

Express handles the tedious parts so you can focus on your logic.

---

## 🚀 Setting Up Your First Express Server

```bash
mkdir my-api
cd my-api
npm init -y
npm install express
npm install --save-dev nodemon
```

Update `package.json`:
```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```

Create `index.js`:

```javascript
// index.js
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware — parse incoming JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API! 🚀" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser — you'll see the JSON response!

---

## 🗺️ Understanding REST APIs

Before building more routes, let's understand **REST** (Representational State Transfer) — the design pattern for APIs.

**REST uses HTTP methods to indicate what action to take:**

| HTTP Method | Action | Example |
|------------|--------|---------|
| `GET` | Read/retrieve data | Get all users |
| `POST` | Create new data | Create a new user |
| `PUT` | Update entire record | Replace all user data |
| `PATCH` | Update partially | Change just the email |
| `DELETE` | Remove data | Delete a user |

**URL structure (resources):**
```
GET    /users         → Get all users
POST   /users         → Create a user
GET    /users/:id     → Get one user (by ID)
PUT    /users/:id     → Update a user
DELETE /users/:id     → Delete a user
```

This consistent pattern is what makes REST APIs intuitive.

---

## 📝 Building a Complete REST API (No Database Yet)

Let's build a Users API using an in-memory array (we'll add a real database in Section 09).

```javascript
// index.js
const express = require("express");

const app = express();
app.use(express.json());

// In-memory "database"
let users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "developer" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "designer" },
  { id: 3, name: "Charlie Davis", email: "charlie@example.com", role: "manager" },
];

let nextId = 4;  // Simple ID counter

// ─────────────────────────────────────────────
// GET /users — Get all users
// ─────────────────────────────────────────────
app.get("/api/users", (req, res) => {
  res.json(users);
});

// ─────────────────────────────────────────────
// GET /users/:id — Get a single user
// ─────────────────────────────────────────────
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// ─────────────────────────────────────────────
// POST /users — Create a new user
// ─────────────────────────────────────────────
app.post("/api/users", (req, res) => {
  const { name, email, role } = req.body;

  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = {
    id: nextId++,
    name,
    email,
    role: role || "user"
  };

  users.push(newUser);

  res.status(201).json(newUser);  // 201 = Created
});

// ─────────────────────────────────────────────
// PUT /users/:id — Update a user
// ─────────────────────────────────────────────
app.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const { name, email, role } = req.body;
  users[index] = { id, name, email, role };

  res.json(users[index]);
});

// ─────────────────────────────────────────────
// PATCH /users/:id — Partially update a user
// ─────────────────────────────────────────────
app.patch("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Merge existing data with updates
  Object.assign(user, req.body);

  res.json(user);
});

// ─────────────────────────────────────────────
// DELETE /users/:id — Delete a user
// ─────────────────────────────────────────────
app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(index, 1);

  res.json({ message: `User ${id} deleted successfully` });
});

// Start server
app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});
```

---

## 🔍 Understanding Route Parameters and Query Strings

### Route Parameters (`:id`)

```javascript
// URL: /users/42
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);  // "42" (always a string!)
  const id = parseInt(req.params.id);  // Convert to number
});

// URL: /posts/:postId/comments/:commentId
app.get("/posts/:postId/comments/:commentId", (req, res) => {
  console.log(req.params);  // { postId: "1", commentId: "5" }
});
```

### Query Strings (`?key=value`)

```javascript
// URL: /users?role=developer&limit=5&page=2
app.get("/users", (req, res) => {
  const { role, limit, page } = req.query;
  console.log(role);   // "developer"
  console.log(limit);  // "5"
  console.log(page);   // "2"

  // Filter and paginate
  let result = users;
  if (role) result = result.filter(u => u.role === role);

  const perPage = parseInt(limit) || 10;
  const start = (parseInt(page) - 1 || 0) * perPage;
  result = result.slice(start, start + perPage);

  res.json({ data: result, total: users.length });
});
```

---

## 📬 Testing with Postman

Now that your API is running, let's test it with Postman.

### GET Request

1. Open Postman
2. Select **GET**
3. Enter URL: `http://localhost:3000/api/users`
4. Click **Send**

You should see your array of users as JSON.

### POST Request

1. Select **POST**
2. URL: `http://localhost:3000/api/users`
3. Click **Body** → **raw** → **JSON**
4. Enter:
```json
{
  "name": "Diana Prince",
  "email": "diana@example.com",
  "role": "developer"
}
```
5. Click **Send**
6. You should see the new user with an assigned ID

### DELETE Request

1. Select **DELETE**
2. URL: `http://localhost:3000/api/users/1`
3. Click **Send**

---

## 📊 HTTP Status Codes — The Language of APIs

Your API should always return meaningful status codes:

| Code | Name | When to Use |
|------|------|------------|
| `200` | OK | Successful GET, PUT, PATCH |
| `201` | Created | Successful POST (new resource created) |
| `204` | No Content | Successful DELETE (nothing to return) |
| `400` | Bad Request | Invalid input from client |
| `401` | Unauthorized | Not logged in |
| `403` | Forbidden | Logged in but not allowed |
| `404` | Not Found | Resource doesn't exist |
| `500` | Internal Server Error | Something broke on the server |

```javascript
// Examples:
res.status(200).json({ users });           // OK with data
res.status(201).json({ user: newUser });   // Created
res.status(204).send();                    // Deleted (no body)
res.status(400).json({ error: "..." });    // Bad input
res.status(404).json({ error: "..." });    // Not found
res.status(500).json({ error: "..." });    // Server error
```

---

## 🏗️ Organizing Routes with Express Router

As your API grows, keep `index.js` clean by organizing routes into separate files.

Create `routes/users.js`:

```javascript
// routes/users.js
const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
];
let nextId = 2;

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET one user
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json(user);
});

// POST create user
router.post("/", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and email required" });

  const user = { id: nextId++, name, email };
  users.push(user);
  res.status(201).json(user);
});

module.exports = router;
```

Update `index.js`:

```javascript
// index.js
const express = require("express");
const userRoutes = require("./routes/users");

const app = express();
app.use(express.json());

// Mount the router at /api/users
app.use("/api/users", userRoutes);

// Now: GET /api/users → userRoutes "/"
//      GET /api/users/1 → userRoutes "/:id"
//      POST /api/users → userRoutes "/"

app.listen(3000, () => console.log("Server on http://localhost:3000"));
```

---

## 🔴 Error Handling

Add a catch-all error handler at the end:

```javascript
// Handle routes that don't exist (put AFTER all routes)
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
});

// Global error handler (put LAST)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong on the server!" });
});
```

And in your route handlers, use `next(err)` to pass errors to the global handler:

```javascript
app.get("/users/:id", async (req, res, next) => {
  try {
    // ... your logic
  } catch (error) {
    next(error);  // Pass to global error handler
  }
});
```

---

## ✅ Practice Tasks

**Task 1 — Products API:**
Build a complete REST API for products with:
- `GET /api/products` — list all (support `?category=` query param)
- `GET /api/products/:id` — get one
- `POST /api/products` — create (require name, price, category)
- `PUT /api/products/:id` — update
- `DELETE /api/products/:id` — delete

**Task 2 — Validation:**
Enhance your API to:
- Reject negative prices
- Reject emails without `@`
- Reject empty name fields
- Return specific, helpful error messages

**Task 3 — Search:**
Add `GET /api/products/search?q=keyword` that returns products where name or description contains the keyword.

---

## 🧪 Experiments

**Experiment 1:** What happens if you send a POST without `Content-Type: application/json`?

**Experiment 2:** What does `req.body` look like if you send an empty request body?

**Experiment 3:** Send an ID that's a string instead of a number:
```
GET /api/users/abc
```
What happens without `parseInt()`? What happens with it?

---

## 💡 Challenge Problem

Build a **Library API** with two resources: Books and Authors.

- Books: `{ id, title, authorId, genre, publishedYear, available }`
- Authors: `{ id, name, country, booksCount }`

Requirements:
- Full CRUD for both
- `GET /api/books?genre=fiction&available=true` — filter books
- `GET /api/authors/:id/books` — books by a specific author
- `PATCH /api/books/:id/checkout` — mark a book as unavailable
- `PATCH /api/books/:id/return` — mark a book as available again
- Proper status codes everywhere

---

## 🧠 Key Takeaways

| Concept | Key Point |
|---------|-----------|
| `express()` | Creates an Express application |
| `app.use(express.json())` | Middleware to parse JSON request bodies |
| `req.params` | Route parameters (`/users/:id`) |
| `req.query` | Query string parameters (`?page=1`) |
| `req.body` | Request body (POST/PUT/PATCH) |
| `res.json()` | Send JSON response |
| `res.status()` | Set HTTP status code |
| `express.Router()` | Organize routes into separate files |
| REST | Design pattern: URL + HTTP method = action |

---

## ➡️ Next Step

You have a working API! Next, you'll learn how to organize it professionally using middleware, better error handling, and a file structure that scales.

### → [Section 08: Express Middleware & Structure](./08-express-middleware.md)

---

*Section 07 of 14 | MERN Stack Learning System*
