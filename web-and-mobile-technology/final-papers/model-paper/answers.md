# SE2020 — Web and Mobile Technology
## Model Paper 1 — Complete Answer Sheet
### Year 2, Semester 2 | SLIIT

---

## QUESTION 1

### 1(a) HTTP Request-Response Cycle + GET vs POST

**HTTP Request-Response Cycle:**

The HTTP request-response cycle is the fundamental communication pattern between a **client** (browser) and a **server**.

1. The user enters a URL in the browser or clicks a link.
2. The browser (client) creates an **HTTP request** containing a method (GET, POST, etc.), headers, and optionally a body.
3. The request travels over the internet using TCP/IP to reach the server.
4. The **server** processes the request (routing, database queries, business logic).
5. The server sends back an **HTTP response** with a status code (e.g., 200 OK), headers, and a body (HTML, JSON, etc.).
6. The browser renders the response for the user.

HTTP is **stateless** — each request is independent; the server does not retain information between requests.

---

**GET vs POST:**

| Feature | GET | POST |
|---|---|---|
| Purpose | Retrieve data from server | Send data to server (create/submit) |
| Data location | Appended to URL as query string (`?name=value`) | Sent in the request **body** |
| Visibility | Data visible in URL | Data hidden from URL |
| Caching | Can be cached and bookmarked | Not cached |
| Security | Less secure (data in URL) | More secure for sensitive data |
| Size limit | Limited by URL length (~2000 chars) | No practical size limit |

**Practical Example — GET:**
```
GET /search?query=laptop&category=electronics
```
Used when a user searches for products. The query is visible in the URL and can be bookmarked.

**Practical Example — POST:**
```
POST /api/login
Body: { "email": "user@email.com", "password": "secret123" }
```
Used when a user submits a login form. Credentials must not appear in the URL.

---

### 1(b) JavaScript — Change All `<p>` Colors to Blue

```html
<!DOCTYPE html>
<html>
<body>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>

  <button onclick="changeColor()">Change Color</button>

  <script>
    function changeColor() {
      // Select all <p> elements
      let paragraphs = document.getElementsByTagName("p");

      // Loop through and change color to blue
      for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "blue";
      }
    }
  </script>
</body>
</html>
```

**Explanation:**
- `getElementsByTagName("p")` returns an HTMLCollection of all `<p>` elements.
- A `for` loop iterates through each element and sets `style.color = "blue"`.

---

### 1(c) Three-Column Pricing Table (HTML + CSS)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pricing Plans</title>
  <style>
    .pricing-container {
      display: flex;
      gap: 20px;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .plan {
      flex: 1;
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 30px;
      text-align: center;
    }

    /* Highlighted middle column */
    .plan.pro {
      background-color: #1a73e8;
      color: white;
      border-color: #1a73e8;
      transform: scale(1.05);
    }

    .plan h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .plan .price {
      font-size: 2rem;
      font-weight: bold;
      margin: 15px 0;
    }

    .plan ul {
      list-style: none;
      padding: 0;
      margin: 15px 0;
    }

    .plan ul li {
      padding: 5px 0;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .plan button {
      padding: 12px 24px;
      background: #1a73e8;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 20px;
      width: 100%;
      transition: background 0.3s;
    }

    .plan.pro button {
      background: white;
      color: #1a73e8;
    }

    .plan button:hover {
      background: #0d5bbf;
      color: white;
    }
  </style>
</head>
<body>
  <div class="pricing-container">

    <!-- Basic Column -->
    <div class="plan">
      <h2>Basic</h2>
      <div class="price">$9/mo</div>
      <ul>
        <li>5 Projects</li>
        <li>10 GB Storage</li>
        <li>Email Support</li>
      </ul>
      <button>Choose Plan</button>
    </div>

    <!-- Pro Column (highlighted) -->
    <div class="plan pro">
      <h2>Pro</h2>
      <div class="price">$29/mo</div>
      <ul>
        <li>Unlimited Projects</li>
        <li>100 GB Storage</li>
        <li>Priority Support</li>
      </ul>
      <button>Choose Plan</button>
    </div>

    <!-- Enterprise Column -->
    <div class="plan">
      <h2>Enterprise</h2>
      <div class="price">$99/mo</div>
      <ul>
        <li>Custom Projects</li>
        <li>1 TB Storage</li>
        <li>24/7 Dedicated Support</li>
      </ul>
      <button>Choose Plan</button>
    </div>

  </div>
</body>
</html>
```

---

### 1(d) Semantic HTML — Definition, Importance & Examples

**What is Semantic HTML?**
Semantic HTML uses elements that **describe the meaning and purpose** of the content they contain, rather than just how it looks. Non-semantic tags like `<div>` and `<span>` tell nothing about content; semantic tags like `<article>` and `<nav>` clearly describe the content's role.

**Why it matters:**

- **Accessibility:** Screen readers and assistive technologies can navigate semantic pages, making content accessible to people with disabilities.
- **SEO:** Search engines (Google, Bing) better understand the page structure and rank content appropriately. A `<h1>` signals the most important topic.
- **Maintainability:** Code is easier to read and maintain when tags describe their purpose.
- **Browser & Developer Tools:** Browsers can apply default styles and functionality (e.g., `<button>` is focusable by keyboard).

**Four Semantic HTML5 Elements:**

| Element | Role |
|---|---|
| `<header>` | Represents the introductory section of a page or section; typically contains the logo, site title, and main navigation. |
| `<nav>` | Defines a set of navigation links (e.g., the main menu or table of contents). Screen readers can skip it or jump to it. |
| `<article>` | Represents a self-contained, independently distributable piece of content (e.g., a blog post, news article, or forum post). |
| `<footer>` | Contains information about the author, copyright, links to related documents — placed at the bottom of a page or section. |

---

### 1(e) CSS Techniques for Responsive Design

Four CSS techniques/properties for adapting layouts to different screen sizes:

1. **Media Queries**
   Conditionally apply CSS rules based on screen size.
   ```css
   @media (max-width: 768px) {
     .container { flex-direction: column; }
   }
   ```
   Enables completely different layouts for mobile vs desktop.

2. **Flexbox (`display: flex`)**
   A one-dimensional layout model that distributes space among items in a container and handles alignment. Items can wrap with `flex-wrap: wrap`, naturally adapting to screen width.
   ```css
   .nav { display: flex; flex-wrap: wrap; gap: 10px; }
   ```

3. **CSS Grid (`display: grid`)**
   A two-dimensional layout system. Using `auto-fill` / `auto-fit` with `minmax()`, columns automatically adjust to available space.
   ```css
   .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
   ```

4. **Relative Units (`%`, `vw`, `vh`, `rem`)**
   Using viewport-relative (`vw`, `vh`) and percentage-based units instead of fixed `px` values ensures elements scale proportionally with the viewport.
   ```css
   .hero { width: 100%; font-size: 2vw; }
   ```

---

### 1(f) UI/UX Strategies to Make the Search Bar More Discoverable

Two UI/UX strategies:

1. **Visual Prominence (Contrast & Size)**
   Place the search bar in a highly visible location (e.g., top-center of the page) and make it visually stand out through:
   - Large input width
   - High-contrast border or background
   - A clearly labelled placeholder text like *"Search jobs, companies…"*
   - A magnifying glass icon (`🔍`) adjacent to the field
   
   This follows **Fitts's Law** — larger, more prominent targets are easier to find and click.

2. **Progressive Disclosure + Affordance Cue**
   Add a visible call-to-action such as an animated pulsing border or a tooltip hint on first visit (e.g., *"Start here — search for jobs"*). You can also use **F-pattern scanning** awareness by placing the search bar at the top-left or top-center, where users naturally look first.

---

## QUESTION 2 — MongoDB / Mongoose (MediCare Case Study)

### 2(a) Relational vs Non-Relational Database (5 marks)

| Feature | Relational Database (SQL) | Non-Relational Database (NoSQL) |
|---|---|---|
| Structure | Data stored in **tables** with rows and columns | Data stored in **documents**, key-value pairs, graphs, or columns |
| Schema | Fixed, predefined schema | Flexible, schema-less (dynamic) |
| Query Language | SQL (Structured Query Language) | Varies: MongoDB Query Language, JSON-based |
| Scaling | Vertical scaling (upgrade hardware) | Horizontal scaling (add more servers) |
| Relationships | Uses JOIN operations across tables | Embeds related data in documents |
| Consistency | ACID transactions enforced | Often eventual consistency (BASE model) |
| Best For | Financial apps, complex queries | Big data, real-time apps, IoT |
| Examples | MySQL, PostgreSQL, Oracle | MongoDB, Cassandra, Redis |

**In the MediCare context:** MongoDB stores each patient as a single JSON-like document (e.g., `{"name": "Shenal", "age": 35, "bloodType": "O+", "condition": "Diabetes"}`), making it easier to add fields without restructuring a table.

---

### 2(b) Mongoose Virtual Field (4 marks)

**What is a Virtual Field?**
A **Mongoose virtual** is a property defined on a schema that is **computed from other fields** but is **not stored in the MongoDB database**. It exists only in application memory.

```javascript
const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number
});

// Virtual: fullName is NOT stored in DB
patientSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});
```

**Difference from a regular schema field:**
| Virtual Field | Regular Schema Field |
|---|---|
| Computed at runtime | Stored persistently in MongoDB |
| Not saved to database | Saved and retrieved from database |
| Cannot be queried in MongoDB | Can be used in MongoDB queries |

**Two Mongoose Schema Features:**

1. **Validation** — Schema fields support built-in validators (`required`, `min`, `max`, `enum`, `match`) to enforce data integrity before saving.
   ```javascript
   age: { type: Number, required: true, min: 0, max: 120 }
   ```

2. **Timestamps** — The `{ timestamps: true }` option automatically adds `createdAt` and `updatedAt` fields to every document.
   ```javascript
   new mongoose.Schema({ name: String }, { timestamps: true });
   ```

---

### 2(c) MongoDB Insert Query (3 marks)

```javascript
db.patients.insertOne({
  "name": "Tina",
  "age": 28,
  "bloodType": "A+",
  "condition": "Asthma"
});
```

Or using Mongoose:
```javascript
const newPatient = new Patient({
  name: "Tina",
  age: 28,
  bloodType: "A+",
  condition: "Asthma"
});
await newPatient.save();
```

---

### 2(d) MongoDB Find — Patients Older Than 30 (2 marks)

```javascript
db.patients.find({ age: { $gt: 30 } });
```

Using Mongoose:
```javascript
const patients = await Patient.find({ age: { $gt: 30 } });
```

---

### 2(e) MongoDB Update — Add "ward" Field (2 marks)

```javascript
db.patients.updateMany(
  {},                          // match ALL documents
  { $set: { ward: "General" } }
);
```

Using Mongoose:
```javascript
await Patient.updateMany({}, { $set: { ward: "General" } });
```

---

### 2(f) Mongoose Schema — Appointment Model (9 marks)

```javascript
const mongoose = require('mongoose');

// Sub-schema for prescribed medications
const medicationSchema = new mongoose.Schema({
  medicineName: {
    type: String,
    required: true
  },
  dosage: {
    type: String,
    required: true    // e.g., "500mg twice daily"
  }
}, { _id: false });

// Main Appointment Schema
const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  appointmentTime: {
    type: String,
    required: true    // e.g., "10:30 AM"
  },
  appointmentType: {
    type: String,
    enum: ['consultation', 'follow-up', 'emergency'],
    required: true
  },
  prescribedMedications: {
    type: [medicationSchema],  // array of medication sub-documents
    default: []
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  }
}, {
  timestamps: true   // adds createdAt and updatedAt automatically
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
```

**Diagram (annotated structure):**
```
Appointment
├── patientName   : String, required
├── doctorName    : String, required
├── appointmentDate : Date, required
├── appointmentTime : String, required
├── appointmentType : String, enum[consultation|follow-up|emergency]
├── prescribedMedications : Array of:
│     ├── medicineName : String, required
│     └── dosage       : String, required
└── status        : String, enum[scheduled|completed|cancelled], default: scheduled
```

---

## QUESTION 3 — Node.js & Express.js

### 3(a) Express.js Middleware (4 marks)

**What is Middleware?**
Middleware is a function that executes **between the incoming HTTP request and the final route handler**. It has access to the `req` (request), `res` (response) objects, and the `next()` function.

```javascript
function myMiddleware(req, res, next) {
  console.log(`Request: ${req.method} ${req.url}`);
  next(); // passes control to the next middleware/route
}
```

**Application-Level Middleware:**
- Bound to the `app` instance using `app.use()` or `app.METHOD()`.
- Applies to **all routes** (or all routes under a path).
- **Real-world use case:** Logging every incoming request.

```javascript
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
```

**Router-Level Middleware:**
- Bound to an `express.Router()` instance using `router.use()`.
- Applies only to routes **within that router**.
- **Real-world use case:** Verifying authentication token only for protected API routes.

```javascript
const router = express.Router();
router.use((req, res, next) => {
  if (!req.headers.authorization) return res.status(401).json({ error: 'Unauthorized' });
  next();
});
```

---

### 3(b) Node.js Async Programming Terms (6 marks)

**1. Promises**
A Promise is an object representing the **eventual completion or failure** of an asynchronous operation. It has three states: `pending`, `fulfilled`, and `rejected`. Chaining `.then()` and `.catch()` handles success/failure.

```javascript
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

**2. async / await**
`async/await` is **syntactic sugar** over Promises that makes asynchronous code look and read synchronously. An `async` function always returns a Promise. `await` pauses execution until the Promise resolves.

```javascript
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

**3. Non-blocking I/O**
Node.js uses a **single-threaded event loop**. When an I/O operation (file read, HTTP request, database query) is initiated, Node.js does **not wait** for it to complete. Instead, it registers a callback and continues executing other code. When the I/O finishes, the callback is placed in the event queue and executed. This allows Node.js to handle thousands of concurrent connections efficiently.

---

### 3(c) Event Loop Diagram — Code Walkthrough (6 marks)

```javascript
console.log("Start");
fetch("https://api.example.com/data").then(res => res.json()).then(data => { console.log("Data received"); });
new Promise((resolve) => { resolve(); }).then(() => { console.log("Promise resolved"); });
console.log("End");
```

**Processing Steps:**

```
┌─────────────────────────────────────────────────────────┐
│  JAVASCRIPT RUNTIME                                     │
│                                                         │
│  ┌──────────────┐   ┌──────────────┐                   │
│  │  CALL STACK  │   │   WEB APIs   │                   │
│  │              │   │              │                   │
│  │ console.log  │   │ fetch()      │                   │
│  │ ("Start")    │──▶│ (network req)│                   │
│  │              │   │              │                   │
│  │ Promise.then │   │              │                   │
│  │ (resolve)    │   │              │                   │
│  │              │   │              │                   │
│  │ console.log  │   │              │                   │
│  │ ("End")      │   │              │                   │
│  └──────────────┘   └──────────────┘                   │
│                                                         │
│  ┌──────────────────┐   ┌──────────────────┐           │
│  │  MICROTASK QUEUE │   │  CALLBACK QUEUE  │           │
│  │                  │   │                  │           │
│  │ "Promise         │   │ fetch().then()   │           │
│  │  resolved"       │   │ callbacks        │           │
│  │  callback        │   │ (after network)  │           │
│  └──────────────────┘   └──────────────────┘           │
│                                                         │
│              ↑   EVENT LOOP checks queues               │
│              │   Microtask queue drains FIRST           │
└─────────────────────────────────────────────────────────┘
```

**Execution order:**
1. `console.log("Start")` → Call Stack → executes immediately
2. `fetch(...)` → handed off to **Web APIs** (browser handles HTTP request)
3. `new Promise((resolve) => { resolve(); })` → Promise resolves synchronously, `.then()` callback queued in **Microtask Queue**
4. `console.log("End")` → Call Stack → executes immediately
5. Call Stack is empty → **Event Loop** checks **Microtask Queue first** → executes `"Promise resolved"`
6. After microtasks done → **Callback Queue** → `fetch` response arrives → executes `"Data received"`

---

### 3(d) Expected Console Output (5 marks)

```
Start
End
Promise resolved
Data received
```

**Explanation:**
- `"Start"` and `"End"` are synchronous, so they run first in order.
- `"Promise resolved"` runs next because resolved Promise callbacks go to the **Microtask Queue**, which is processed **before** the Callback Queue.
- `"Data received"` runs last because `fetch()` is a real network request handled by Web APIs; its callbacks arrive in the **Callback Queue** after the microtask queue is empty.

---

### 3(e) Express.js API Endpoints — Course Registration System (4 marks)

**Endpoint 1 — Enroll Student in a Course**

| Property | Value |
|---|---|
| HTTP Method | `POST` |
| URL | `/api/courses/:courseId/enroll` |
| Description | Enrolls a student in a course. The `courseId` identifies which course to enroll in. The student's ID is sent in the request body. The server validates the course exists, checks if the student is already enrolled, and adds the student. Returns `201 Created` on success. |

```javascript
app.post('/api/courses/:courseId/enroll', (req, res) => {
  const { courseId } = req.params;
  const { studentId } = req.body;
  // Enrollment logic...
  res.status(201).json({ message: `Student ${studentId} enrolled in course ${courseId}` });
});
```

**Endpoint 2 — Drop a Course**

| Property | Value |
|---|---|
| HTTP Method | `DELETE` |
| URL | `/api/courses/:courseId/students/:studentId` |
| Description | Removes a student from a specific course. The `courseId` and `studentId` are route parameters. The server checks the enrollment exists and removes it. Returns `200 OK` with a confirmation message, or `404 Not Found` if not enrolled. |

```javascript
app.delete('/api/courses/:courseId/students/:studentId', (req, res) => {
  const { courseId, studentId } = req.params;
  // Drop course logic...
  res.status(200).json({ message: `Student ${studentId} dropped from course ${courseId}` });
});
```

---

## QUESTION 4 — React & React Native

### 4(a) React Component Lifecycle (6 marks)

**Three Phases:**

**1. Mounting** — Component is being created and inserted into the DOM for the first time.
- What happens: Component initializes its state, renders JSX, and the output is added to the real DOM.
- **Hook:** `useEffect(() => { /* setup code */ }, [])` — runs once after the first render (empty dependency array).

```javascript
useEffect(() => {
  console.log("Component mounted — fetch initial data");
}, []);
```

**2. Updating** — Component re-renders due to state or prop changes.
- What happens: React re-renders the component with new data, compares the Virtual DOM, and updates only changed parts of the real DOM.
- **Hook:** `useEffect(() => { /* side effect */ }, [dependency])` — runs whenever the listed dependencies change.

```javascript
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

**3. Unmounting** — Component is removed from the DOM.
- What happens: Cleanup tasks run to prevent memory leaks (e.g., clearing timers, unsubscribing from event listeners).
- **Hook:** Return a cleanup function from `useEffect`.

```javascript
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer); // Cleanup on unmount
}, []);
```

---

### 4(b) Props vs State (4 marks)

**Props (Properties):**
- Passed **into** a component from its parent.
- **Read-only** inside the component — cannot be modified.
- Used to pass data and event handlers **down** the component tree.

**State:**
- Managed **inside** a component using `useState`.
- **Mutable** — can be changed with the setter function.
- When state changes, the component re-renders.

**Two Key Differences:**

| | Props | State |
|---|---|---|
| **Ownership** | Owned and controlled by the parent | Owned and controlled by the component itself |
| **Mutability** | Read-only (immutable in child) | Mutable (changed via setter) |

**When to Use Props:**
A `Button` component receives a `label` and `onClick` handler from its parent. The button doesn't need to know why it does what it does — data flows in from outside.
```javascript
<Button label="Submit" onClick={handleSubmit} />
```

**When to Use State:**
A `Counter` component needs to track how many times it has been clicked. That count lives inside the component.
```javascript
const [count, setCount] = useState(0);
```

---

### 4(c) ShoppingCart Code Analysis

**i. Initial values when component first renders:**
- `items` = `[]` (empty array, as set by `useState([])`)
- `total` = `0` (as set by `useState(0)`)

**ii. Why useEffect runs after first render and what it does:**

`useEffect` with `[items]` as the dependency array runs **after every render where `items` has changed** — this includes the very first render (initial mount).

On first render:
- `items` is `[]`, so `items.reduce((sum, item) => sum + item.price, 0)` returns `0` (no items).
- `console.log('Cart updated. Items:', 0)` is printed.
- `setTotal(0 + 0 * 0.1)` → `setTotal(0)` — total remains `0`.

**iii. After clicking "Add Book" once (taxRate = 0.1):**

**(a) New value of `items`:**
```javascript
[{ name: "Book", price: 500 }]
```

**(b) Value of `total` after effect runs:**
- `subtotal = 500`
- `total = 500 + 500 * 0.1 = 500 + 50 = 550`
- **`total = 550`**

**(c) What is printed to the console:**
```
Cart updated. Items: 1
```

---

### 4(d) React Native Fill-in-the-Blanks (4 marks)

1. In React Native, the component used to render a scrollable list of items with high performance is **`FlatList`**.

2. The `StyleSheet.create()` method in React Native is used to **define and optimize a set of styles, validating them at load time for better performance**.

3. In React Native, to navigate between screens you typically use a library called **React Navigation** (or **Expo Router** with Expo projects).

4. The prop used to handle touch events on a `TouchableOpacity` component is **`onPress`**.

---

### 4(e) React Native Login Screen — Fill in the Blanks (6 marks)

```javascript
import React, { useState } from 'react';     // Blank 1: useState

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email);                        // Blank 2: email
    // (logs the email value)
  };

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail}
            placeholder='Email' />
      <TextInput value={password} onChangeText={setPassword}
            secureTextEntry={true} />          // Blank 3: true
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
```

**Answers:**
- **Blank 1:** `useState` — required to use the `useState` hook for managing form field state.
- **Blank 2:** `email` — the comment says "log email value", so we log the `email` state variable.
- **Blank 3:** `true` — `secureTextEntry={true}` hides the password input (shows dots instead of characters).

---

*End of Model Paper 1 Answer Sheet*
