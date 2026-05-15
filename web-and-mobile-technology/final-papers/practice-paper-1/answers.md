# Practice Paper 1 — Answer Sheet
## SE2020 — Web and Mobile Technology

---

## QUESTION 1

### 1(a) HTTP Request-Response Cycle

**i. Steps:**
1. User types `www.shop.lk` → browser checks DNS cache, then queries a DNS server to resolve the domain name to an IP address (e.g., `104.21.5.90`).
2. Browser (client) establishes a **TCP connection** with the server at that IP on port 80 (HTTP) or 443 (HTTPS).
3. Browser sends an **HTTP GET request** to the server: `GET / HTTP/1.1 Host: www.shop.lk`.
4. The server processes the request — looks up the resource, runs business logic, queries a database if needed.
5. Server sends back an **HTTP response** with a status code (e.g., `200 OK`), headers, and the response body (HTML, JSON, etc.).
6. Browser receives the response and renders the HTML page for the user.

**ii. GET vs POST:**
| | GET | POST |
|---|---|---|
| Purpose | Retrieve data from server | Send data to server |
| Data location | Appended to URL as query string | Sent in the request body |
| Use case | Loading a product page (`GET /products/42`) | Submitting a login form (`POST /api/login`) |

---

### 1(b) Semantic HTML

**i. What is semantic HTML:**
Semantic HTML uses elements that **describe the meaning** of the content they hold, not just how it looks. A `<header>` tells both humans and machines "this is the page header", while a `<div>` tells nothing about purpose.

- **Accessibility:** Screen readers use semantic tags to navigate (e.g., jump to `<nav>`, skip to `<main>`).
- **SEO:** Search engines use `<h1>`, `<article>`, `<nav>` etc. to understand page structure and rank content.

**ii. Four semantic HTML5 elements:**
| Element | Purpose |
|---|---|
| `<header>` | Introductory content for a page or section; typically holds the logo, site title, and main navigation. |
| `<nav>` | Contains a set of navigation links (main menu, breadcrumbs). Screen readers can identify and skip to it. |
| `<article>` | A self-contained piece of content that could stand alone (e.g., a blog post, news article). |
| `<footer>` | Bottom section of a page or section; typically contains copyright info and secondary links. |

---

### 1(c) CSS Box Model

**i. Diagram:**
```
┌──────────────────────────────────────────┐
│               MARGIN (10px)              │
│  ┌────────────────────────────────────┐  │
│  │            BORDER (4px)            │  │
│  │  ┌──────────────────────────────┐  │  │
│  │  │         PADDING (20px)       │  │  │
│  │  │  ┌──────────────────────┐    │  │  │
│  │  │  │   CONTENT (300px)    │    │  │  │
│  │  │  └──────────────────────┘    │  │  │
│  │  └──────────────────────────────┘  │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

**ii. Total horizontal width (with `box-sizing: content-box`):**
- Content: 300px
- Left padding + Right padding: 20 + 20 = 40px
- Left border + Right border: 4 + 4 = 8px
- Left margin + Right margin: 10 + 10 = 20px
- **Total = 300 + 40 + 8 + 20 = 368px**

---

### 1(d) Flexbox Navigation Bar

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .navbar {
      display: flex;
      justify-content: space-evenly;
      background-color: #1a1a2e;
      padding: 14px 0;
      list-style: none;
      margin: 0;
    }

    .navbar a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
    }

    .navbar a:hover {
      color: #e94560;
    }
  </style>
</head>
<body>
  <ul class="navbar">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</body>
</html>
```

**Key CSS:**
- `display: flex` → enables flexbox layout on the `<ul>`.
- `justify-content: space-evenly` → distributes links evenly across full width.
- `text-decoration: none` → removes underline from links.
- `:hover` pseudo-class → changes color on hover.

---

### 1(e) JavaScript DOM — Task List

```html
<!DOCTYPE html>
<html>
<body>
  <input id="task-input" type="text" placeholder="Enter task...">
  <button id="add-btn">Add Task</button>
  <ul id="task-list"></ul>

  <script>
    const input = document.getElementById("task-input");
    const btn = document.getElementById("add-btn");
    const list = document.getElementById("task-list");

    btn.addEventListener("click", function () {
      const value = input.value.trim();

      // Do nothing if input is empty
      if (!value) return;

      // Create new list item
      const li = document.createElement("li");
      li.textContent = value;

      // Append to list
      list.appendChild(li);

      // Clear the input field
      input.value = "";
    });
  </script>
</body>
</html>
```

**Step-by-step explanation:**
1. `getElementById` selects each element by its `id`.
2. `addEventListener("click", ...)` attaches the handler to the button click.
3. `trim()` removes whitespace — an empty or whitespace-only string triggers the early `return`.
4. `createElement("li")` creates a new list item in memory.
5. `textContent` sets the text safely (prevents HTML injection).
6. `appendChild(li)` adds the item to the `<ul>`.
7. `input.value = ""` clears the field.

---

## QUESTION 2

### 2(a) NoSQL vs Relational

| Dimension | Relational (SQL) | NoSQL (MongoDB) |
|---|---|---|
| **Schema** | Fixed, predefined — all records share the same columns | Flexible, schema-less — each document can have different fields |
| **Scalability** | Vertical (upgrade hardware) | Horizontal (add more servers/nodes) |
| **Query Language** | SQL (Structured Query Language) | MongoDB Query Language (JSON-based); no standard SQL |
| **Data Structure** | Tables with rows and columns | Documents (JSON/BSON), key-value, column, graph |
| **Use Cases** | Financial transactions, inventory management | Big data, social networks, IoT, real-time apps |

---

### 2(b) Sample MongoDB Document

```json
{
  "_id": "ObjectId('64f1c2a...')",
  "name": "Whiskers",
  "species": "cat",
  "age": 4,
  "owner": {
    "name": "Nimasha Perera",
    "phone": "0776543210"
  },
  "registeredAt": "2024-03-10T09:00:00.000Z",
  "createdAt": "2024-03-10T09:00:00.000Z",
  "updatedAt": "2024-03-10T09:00:00.000Z"
}
```

---

### 2(c) Mongoose Schema

```javascript
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Pet name is required'],
    minlength: [2, 'Name must be at least 2 characters']
  },
  species: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'bird', 'other']
  },
  age: {
    type: Number,
    required: true,
    min: [0, 'Age cannot be negative'],
    max: [30, 'Age seems too high']
  },
  owner: {
    name: {
      type: String,
      required: [true, 'Owner name is required']
    },
    phone: {
      type: String,
      required: [true, 'Owner phone is required']
    }
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true  // adds createdAt and updatedAt
});

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
```

---

### 2(d) CRUD Queries

**i. All dogs:**
```javascript
db.pets.find({ species: "dog" });
// Mongoose:
await Pet.find({ species: "dog" });
```

**ii. Pets older than 5:**
```javascript
db.pets.find({ age: { $gt: 5 } });
// Mongoose:
await Pet.find({ age: { $gt: 5 } });
```

**iii. Insert Buddy:**
```javascript
db.pets.insertOne({
  name: "Buddy",
  species: "dog",
  age: 3,
  owner: { name: "Kasun", phone: "0771234567" }
});
// Mongoose:
const buddy = new Pet({
  name: "Buddy", species: "dog", age: 3,
  owner: { name: "Kasun", phone: "0771234567" }
});
await buddy.save();
```

**iv. Update Buddy's age:**
```javascript
db.pets.updateOne({ name: "Buddy" }, { $set: { age: 4 } });
// Mongoose:
await Pet.updateOne({ name: "Buddy" }, { $set: { age: 4 } });
```

---

### 2(e) Aggregation Pipeline

```javascript
db.pets.aggregate([
  // Stage 1: Group by species
  {
    $group: {
      _id: "$species",
      count: { $sum: 1 },
      avgAge: { $avg: "$age" }
    }
  },
  // Stage 2: Sort by count descending
  {
    $sort: { count: -1 }
  }
]);

// Sample output:
// { _id: "dog", count: 15, avgAge: 4.2 }
// { _id: "cat", count: 10, avgAge: 3.8 }
// { _id: "bird", count: 4, avgAge: 2.1 }
```

---

## QUESTION 3

### 3(a) Node.js Async Programming

**i. Non-blocking I/O:**
In **blocking I/O**, a program waits for an operation (file read, DB query) to finish before moving to the next line — like standing in a queue.

In **Non-blocking I/O** (Node.js), when an I/O operation is initiated, Node.js does **not wait**. It registers a callback and immediately moves on to the next task. When the I/O completes, the callback is executed. This allows Node.js to handle thousands of concurrent requests on a single thread.

**ii. Callback example:**
```javascript
// A callback is a function passed as an argument, executed later
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("This runs immediately");
// Output: "This runs immediately" then (2s later) "This runs after 2 seconds"
```

**iii. async/await version:**
```javascript
// Original callback style:
// getOwner(id, callback) { setTimeout(() => callback(null, {...}), 1000) }

// async/await version using a Promise:
function getOwner(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Kasun", id }), 1000);
  });
}

async function fetchOwner(id) {
  const owner = await getOwner(id);
  console.log(owner.name);
}
```

---

### 3(b) Express Middleware

**i. What is middleware:**
Middleware is a function that sits **between the incoming HTTP request and the final route handler**. It has access to `req` (the request object), `res` (the response object), and `next` (a function that passes control to the next middleware/route). Middleware can read/modify the request and response, or end the cycle.

**ii. Logger middleware:**
```javascript
const express = require('express');
const app = express();

// Logger middleware
app.use(function (req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // pass to next middleware or route handler
});

app.get('/pets', (req, res) => res.json({ pets: [] }));

app.listen(3000);
```

---

### 3(c) REST API Routes

```javascript
const express = require('express');
const Pet = require('./models/Pet');
const router = express.Router();

// Route 1: POST /pets — Create new pet
router.post('/', async (req, res) => {
  try {
    const pet = new Pet(req.body);
    const saved = await pet.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route 2: GET /pets — Get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route 3: GET /pets/:id — Get pet by ID
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.json(pet);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

// Route 4: DELETE /pets/:id — Delete pet
router.delete('/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
```

---

### 3(d) HTTP Status Codes

| Status Code | Meaning | Express Scenario |
|---|---|---|
| `200 OK` | Request succeeded | `GET /pets` returns all pets successfully |
| `201 Created` | Resource was created successfully | `POST /pets` creates and saves a new pet |
| `400 Bad Request` | Client sent invalid data | Required field `name` missing in POST body |
| `404 Not Found` | Resource does not exist | `GET /pets/999` — no pet with that ID exists |
| `500 Internal Server Error` | Something went wrong on the server | MongoDB connection drops mid-request |

---

## QUESTION 4

### 4(a) React Fundamentals

**i. JSX:**
JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML but compiles to `React.createElement()` calls via **Babel**. It lets you write UI structure directly inside JavaScript.

Two JSX rules that differ from HTML:
1. Use `className` instead of `class` (since `class` is a reserved keyword in JavaScript).
2. All tags must be self-closed — e.g., `<img />`, `<input />` (not `<img>` like in HTML).

**ii. Virtual DOM:**
The **Virtual DOM (VDOM)** is a lightweight JavaScript object representation of the real DOM kept in memory by React.

How it works:
1. When state/props change, React creates a **new Virtual DOM tree**.
2. React **compares** (diffs) the new VDOM with the previous one to find what changed.
3. React applies **only the changed nodes** to the real DOM — avoiding expensive full-page re-renders.

This makes updates fast because changing an in-memory JS object is much cheaper than directly manipulating the real DOM.

---

### 4(b) Props vs State

**i. Props vs State:**
| | Props | State |
|---|---|---|
| Owned by | Parent component (passed in) | The component itself |
| Mutable? | Read-only inside the child | Mutable — changed via setter |
| Triggers re-render? | Yes, when parent re-renders | Yes, when `setState`/setter is called |

**ii. Code example:**
```javascript
// Parent
function App() {
  return <Greeting username="Sanduni" />;
}

// Child receives props
function Greeting({ username }) {
  return <h2>Hello, {username}!</h2>;
}
// Renders: "Hello, Sanduni!"
```

---

### 4(c) React Hooks

**i. Counter component:**
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);  // cannot go below 0
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
}
```

**ii. PetList with useEffect:**
```javascript
import { useState, useEffect } from 'react';

function PetList() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs after first render (mount)
    fetch('/api/pets')
      .then(res => res.json())
      .then(data => {
        setPets(data);
        setLoading(false);
      });
  }, []); // empty array = run once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {pets.map(pet => (
        <li key={pet._id}>{pet.name}</li>
      ))}
    </ul>
  );
}
```

---

### 4(d) React Native Basics

**i. Comparison table:**

| Concept | React (Web) | React Native |
|---|---|---|
| Root container element | `<div>` | `<View>` |
| Text display | `<p>`, `<span>` | `<Text>` |
| Click/touch event | `onClick` | `onPress` |
| Styling method | CSS class/className | `StyleSheet` object / inline style object |

**ii. Profile Card component:**
```javascript
import { View, Text, StyleSheet } from 'react-native';

function ProfileCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Sanduni Perera</Text>
      <Text style={styles.email}>sanduni@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,       // Android shadow
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  email: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
});

export default ProfileCard;
```

---

*End of Practice Paper 1 Answers*
