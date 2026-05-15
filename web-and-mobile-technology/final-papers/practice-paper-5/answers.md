# Practice Paper 5 — Answer Sheet
## SE2020 — Web and Mobile Technology

---

## QUESTION 1

### 1(a) HTTP Login Flow

**i. Steps when submitting a POST login form:**
1. Browser creates an **HTTP POST request** to `https://myapp.lk/login`.
2. The form data (username, password) is placed in the **request body** (not the URL — unlike GET) — keeping it out of browser history and server logs.
3. The request travels over **HTTPS** (TLS encrypted) — so credentials are protected in transit.
4. The server receives the request, reads `req.body`, validates credentials against the database.
5. If valid: server responds `200 OK` (or `302 Redirect`) with a session cookie or JWT token. If invalid: server responds `401 Unauthorized`.

**ii. Status code matching:**

| Status Code | Meaning |
|---|---|
| `201` | Resource created |
| `400` | Bad request (invalid input) |
| `401` | Unauthorized (not logged in) |
| `403` | Forbidden (no permission) |
| `404` | Not found |
| `500` | Server error |

---

### 1(b) Array Methods

**i. Code trace:**
```javascript
const nums = [5, 12, 8, 130, 44];

// Step 1: filter — keep only > 10
// → [12, 8, 130, 44] — wait, 8 is NOT > 10, so filtered out
// → [12, 130, 44]

// Step 2: map — multiply each by 2
// → [24, 260, 88]

// Step 3: reduce — sum all starting from 0
// → 0 + 24 + 260 + 88 = 372

console.log(result);   // 372
```
**Output: `372`**

**ii. Filter high-GPA students:**
```javascript
const students = [
  { name: "Kasun",   gpa: 3.8 },
  { name: "Nimasha", gpa: 3.2 },
  { name: "Amal",    gpa: 3.9 },
  { name: "Sanduni", gpa: 3.1 }
];

const highAchievers = students
  .filter(s => s.gpa >= 3.5)     // [ Kasun (3.8), Amal (3.9) ]
  .map(s => s.name);             // [ "Kasun", "Amal" ]

console.log(highAchievers);      // ["Kasun", "Amal"]
```

---

### 1(c) Quiz App DOM

```javascript
const btn = document.getElementById("submit-btn");
const answerInput = document.getElementById("answer-input");
const feedback = document.getElementById("feedback");

btn.addEventListener("click", function () {
  const userAnswer = answerInput.value.trim();

  if (userAnswer === "8") {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Wrong! Try again.";
    feedback.style.color = "red";
  }

  answerInput.value = "";   // clear input
});
```

**Step-by-step:**
1. `getElementById` selects button, input, and feedback paragraph.
2. `addEventListener("click", ...)` fires when the button is clicked.
3. `answerInput.value.trim()` reads and trims whitespace from the input.
4. Strict equality `=== "8"` compares as strings.
5. `textContent` and `style.color` update the feedback paragraph.
6. `answerInput.value = ""` clears the input for the next attempt.

---

### 1(d) Semantic HTML & Flexbox Header

**i. Semantic rewrite:**
```html
<header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>How to Use React</h2>
    <p>React is a JavaScript library...</p>
  </article>
</main>

<footer>
  <p>Copyright 2024</p>
</footer>
```

Tags used:
- `<header>` replaces `<div id="top">`
- `<nav>` replaces `<div class="links">`
- `<main>` replaces `<div id="body">`
- `<article>` replaces `<div class="blog-entry">`
- `<h2>` replaces `<div class="title">`
- `<footer>` replaces `<div id="bottom">`

**ii. Flexbox Header:**
```css
header {
  display: flex;
  justify-content: space-between;   /* logo left, nav right */
  align-items: center;
  background-color: #1a1a2e;
  color: white;
  padding: 16px 32px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 24px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: #e94560;
}
```

```html
<header>
  <div class="logo">TechTalks</div>
  <nav>
    <a href="#">Home</a>
    <a href="#">Sessions</a>
    <a href="#">Speakers</a>
  </nav>
</header>
```

---

## QUESTION 2

### 2(a) Data Modelling

**i. Why embedding is suitable:**
- Attendee registration data is **specific to each session** — an attendee list for Session A is meaningless in the context of Session B.
- Reading a session with its attendees is a **single document read** — no join needed.
- The data is written once (at registration) and rarely updated.

**ii. Limitation:**
MongoDB has a **16MB document size limit** per document. If a popular session has thousands of attendees, the `attendees` array could make the document very large, approaching this limit and slowing queries.

---

### 2(b) Mongoose Schemas

```javascript
const mongoose = require('mongoose');

// Speaker Schema
const speakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  topic: { type: String, required: true },
  company: { type: String, required: true },
  isConfirmed: { type: Boolean, default: false }
}, { timestamps: true });

const Speaker = mongoose.model('Speaker', speakerSchema);

// Attendee sub-schema
const attendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
}, { _id: false });

// Session Schema
const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, 'Title must be at least 5 characters']
  },
  speaker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speaker',
    required: true
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  room: { type: String, required: true },
  capacity: { type: Number, required: true, min: 1 },
  attendees: { type: [attendeeSchema], default: [] }
}, { timestamps: true });

const Session = mongoose.model('Session', sessionSchema);
```

---

### 2(c) MongoDB Queries

**i. Confirmed speakers sorted by name:**
```javascript
const speakers = await Speaker.find({ isConfirmed: true }).sort({ name: 1 });
```

**ii. Sessions with remaining capacity:**
```javascript
// MongoDB can't directly compare array.length with another field in a query
// Use $expr with $lt
const sessions = await Session.find({
  $expr: { $lt: [{ $size: "$attendees" }, "$capacity"] }
}).populate('speaker', 'name topic');
```

**iii. Add attendee with `$push`:**
```javascript
await Session.findByIdAndUpdate(
  'SID123',
  {
    $push: {
      attendees: { name: "Kamal", email: "kamal@email.com" }
    }
  },
  { new: true }
);
```

---

### 2(d) Aggregation

```javascript
db.sessions.aggregate([
  // Stage 1: Add attendeeCount field
  {
    $addFields: {
      attendeeCount: { $size: "$attendees" }
    }
  },

  // Stage 2: Group by room
  {
    $group: {
      _id: "$room",
      totalAttendees: { $sum: "$attendeeCount" },
      sessionCount: { $sum: 1 }
    }
  },

  // Stage 3: Sort by total attendees descending
  { $sort: { totalAttendees: -1 } },

  // Stage 4: Project clean output
  {
    $project: {
      room: "$_id",
      totalAttendees: 1,
      sessionCount: 1,
      _id: 0
    }
  }
]);
```

---

### 2(e) Virtual Field

**i. `isFull` virtual:**
```javascript
const sessionSchema = new mongoose.Schema({
  // ... fields ...
}, {
  timestamps: true,
  toJSON: { virtuals: true }    // IMPORTANT: include virtuals in JSON output
});

sessionSchema.virtual('isFull').get(function () {
  return this.attendees.length >= this.capacity;
});
```

**ii. Why `toJSON: { virtuals: true }` is needed:**
Virtuals are **not stored in MongoDB** — they are computed JavaScript properties. When Mongoose converts a document to JSON (for `res.json()`), it uses the `.toJSON()` method, which by default **excludes virtuals**. Adding `toJSON: { virtuals: true }` tells Mongoose to include computed virtual properties when serializing to JSON.

---

## QUESTION 3

### 3(a) Middleware Order

**i. Standard middleware stack:**
```javascript
const express = require('express');
const app = express();

// 1. express.json() — parses request body as JSON (must be first)
app.use(express.json());

// 2. Logging middleware — logs every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 3. Route handlers
app.use('/api/speakers', require('./routes/speakers'));
app.use('/api/sessions', require('./routes/sessions'));

// 4. Global error handler — MUST be last, 4 parameters
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000);
```

Order matters: `express.json()` must come before any route that reads `req.body`. The error handler must come after all routes.

**ii. `checkConfirmed` middleware:**
```javascript
const Speaker = require('../models/Speaker');

async function checkConfirmed(req, res, next) {
  try {
    const speaker = await Speaker.findById(req.body.speakerId);
    if (!speaker || !speaker.isConfirmed) {
      return res.status(400).json({ error: 'Speaker is not confirmed' });
    }
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid speaker ID' });
  }
}

// Applied only to POST /sessions
router.post('/', checkConfirmed, createSessionController);
```

---

### 3(b) Async & Event Loop

**i. Sync vs Async:**
- **Synchronous:** Code executes line-by-line; each statement waits for the previous to complete. Example: `const x = 2 + 3;`
- **Asynchronous:** A long operation is started and execution continues without waiting; a callback/promise handles the result when ready. Example: `setTimeout(() => console.log("later"), 1000);`

**ii. Predicted output:**
```
1
4
3
2
```

Explanation:
- `"1"` — synchronous, runs immediately.
- `setTimeout(..., 0)` → placed in **macrotask queue** (runs after sync + microtasks).
- `Promise.resolve().then("3")` → placed in **microtask queue** (runs before macrotasks).
- `"4"` — synchronous, runs immediately.
- Call stack empty → microtask queue (`"3"`) runs first.
- Then macrotask queue → `"2"`.

---

### 3(c) Session Registration Routes

```javascript
const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// Route 1: POST /sessions/:id/register
router.post('/:id/register', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: 'name and email are required' });
    }

    // Find session
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Check capacity
    if (session.attendees.length >= session.capacity) {
      return res.status(400).json({ error: 'Session is full' });
    }

    // Check duplicate registration
    const alreadyRegistered = session.attendees.some(a => a.email === email);
    if (alreadyRegistered) {
      return res.status(409).json({ error: 'This email is already registered for this session' });
    }

    // Add attendee and save
    session.attendees.push({ name, email });
    await session.save();

    res.status(200).json(session);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route 2: GET /sessions/:id/attendees
router.get('/:id/attendees', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.json(session.attendees);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

module.exports = router;
```

---

### 3(d) Node.js Modules

**i. CommonJS module system:**
Node.js uses CommonJS by default. Modules are **isolated files** — code is not global unless explicitly exported.

- **Export:** Use `module.exports = { ... }` or `module.exports = functionName`.
- **Import:** Use `const thing = require('./filename')`.

**ii. mathUtils.js:**
```javascript
// mathUtils.js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };
```

```javascript
// server.js
const { add, multiply } = require('./mathUtils');

console.log(add(3, 5));        // 8
console.log(multiply(4, 6));   // 24
```

---

## QUESTION 4

### 4(a) Component Design & Props

**i. The `key` prop:**
React uses `key` to uniquely identify items in a list during **Virtual DOM reconciliation**. When the list updates, React uses keys to determine which items were added, removed, or reordered — so it can update only those specific DOM nodes instead of re-rendering the entire list.

Omitting `key`: React logs a warning and may produce incorrect UI updates.
Using array index as key: Works for static lists, but causes bugs when items are reordered or removed (React confuses which item is which).
**Best practice:** Use a unique, stable ID like `item._id`.

**ii. SessionCard:**
```javascript
function SessionCard({ title, room, capacity, attendeeCount }) {
  const spotsLeft = capacity - attendeeCount;

  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, marginBottom: 12 }}>
      <h3>{title}</h3>
      <p>Room: {room} | Capacity: {capacity}</p>
      {spotsLeft > 0 ? (
        <p>Spots left: {spotsLeft}</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>FULL</p>
      )}
    </div>
  );
}

// Usage:
// <SessionCard title="React Deep Dive" room="A1" capacity={50} attendeeCount={50} />
```

---

### 4(b) useEffect Dependency Array

**i. Dependency array behaviour:**

| Syntax | When it runs |
|---|---|
| `useEffect(() => {...})` | Runs **after every render** — dangerous if state is set inside (infinite loop) |
| `useEffect(() => {...}, [])` | Runs **once after the first render** (mount only) — like `componentDidMount` |
| `useEffect(() => {...}, [id])` | Runs after first render, then again **whenever `id` changes** |

**ii. SpeakerList with filter:**
```javascript
import { useState, useEffect } from 'react';

function SpeakerList() {
  const [speakers, setSpeakers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/api/speakers')
      .then(r => r.json())
      .then(data => setSpeakers(data));
  }, []);

  const filtered = speakers.filter(s => {
    if (filter === 'confirmed') return s.isConfirmed === true;
    if (filter === 'unconfirmed') return s.isConfirmed === false;
    return true;  // 'all'
  });

  return (
    <div>
      <h2>Speakers</h2>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="confirmed">Confirmed</option>
        <option value="unconfirmed">Unconfirmed</option>
      </select>

      <ul>
        {filtered.map(s => (
          <li key={s._id}>
            <strong>{s.name}</strong> — {s.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### 4(c) Context API

**i. Why Context over props:**
Passing the user as a prop through every component between the provider and consumer is called **prop drilling** — it creates unnecessary coupling and clutters intermediate components that don't use the prop. `useContext` lets any component access the value directly, no matter how deep in the tree.

**ii. UserContext implementation:**
```javascript
import { createContext, useContext, useState } from 'react';

// Create context
const UserContext = createContext(null);

// Provider
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for easy access
export function useUser() {
  return useContext(UserContext);
}

// Navbar using the context
function Navbar() {
  const { user } = useUser();

  return (
    <nav>
      <span>TechTalks</span>
      {user ? (
        <span>Welcome, {user.name}!</span>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}

// In the app root:
// <UserProvider>
//   <App />
// </UserProvider>
```

---

### 4(d) React Native SessionListScreen

```javascript
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

const SESSIONS = [
  { id: '1', title: 'React Deep Dive',       room: 'A1', capacity: 50, attendeeCount: 50 },
  { id: '2', title: 'Node.js Best Practices', room: 'B2', capacity: 40, attendeeCount: 28 },
  { id: '3', title: 'MongoDB Aggregations',   room: 'A2', capacity: 30, attendeeCount: 30 },
  { id: '4', title: 'React Native Workshop',  room: 'C1', capacity: 60, attendeeCount: 45 },
];

function SessionItem({ session }) {
  const isFull = session.attendeeCount >= session.capacity;

  return (
    <Pressable
      style={styles.card}
      onPress={() => console.log('Selected:', session.title)}
    >
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.room}>Room: {session.room}</Text>
      <View style={[styles.badge, isFull ? styles.fullBadge : styles.availableBadge]}>
        <Text style={styles.badgeText}>{isFull ? 'Full' : 'Available'}</Text>
      </View>
    </Pressable>
  );
}

export default function SessionListScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={SESSIONS}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <SessionItem session={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  room: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  availableBadge: {
    backgroundColor: '#dcfce7',
  },
  fullBadge: {
    backgroundColor: '#fee2e2',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
});
```

---

*End of Practice Paper 5 Answers — Best of luck! 🎓*
