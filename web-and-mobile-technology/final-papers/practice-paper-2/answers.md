# Practice Paper 2 — Answer Sheet
## SE2020 — Web and Mobile Technology

---

## QUESTION 1

### 1(a) HTTP Methods & Responses

| Scenario | HTTP Method | URL | Status Code |
|---|---|---|---|
| Create a new student record | `POST` | `/api/students` | `201 Created` |
| Retrieve all students | `GET` | `/api/students` | `200 OK` |
| Update email of student ID 42 | `PUT` or `PATCH` | `/api/students/42` | `200 OK` |
| Delete student ID 42 | `DELETE` | `/api/students/42` | `200 OK` or `204 No Content` |
| Get a single student by ID 42 | `GET` | `/api/students/42` | `200 OK` |

---

### 1(b) CSS Specificity

**i. Color = red**

Specificity scoring:
- `p` → specificity (0,0,1) = **1**
- `.info` → specificity (0,1,0) = **10**
- `#main p` → specificity (1,0,1) = **101** ← highest

**Winner: `#main p { color: red; }`** — The ID selector gives it the highest specificity score, so the paragraph renders in **red**.

**ii. Four CSS selector types:**
```css
/* 1. Element selector — targets all matching HTML tags */
p { color: black; }

/* 2. Class selector — targets elements with that class */
.highlight { background: yellow; }

/* 3. ID selector — targets one unique element */
#header { font-size: 24px; }

/* 4. Descendant (contextual) selector — targets element inside another */
.card p { color: gray; }
```

---

### 1(c) Array Methods

```javascript
const products = [
  { name: "Laptop", price: 120000, category: "electronics" },
  { name: "T-Shirt", price: 1500, category: "clothing" },
  { name: "Phone", price: 85000, category: "electronics" },
  { name: "Jeans", price: 3500, category: "clothing" },
  { name: "Tablet", price: 45000, category: "electronics" }
];

// Step 1: Filter electronics only
const electronics = products.filter(p => p.category === "electronics");
// → [ Laptop, Phone, Tablet ]

// Step 2: Map to { name, price } only
const simplified = electronics.map(p => ({ name: p.name, price: p.price }));
// → [ {name:"Laptop",price:120000}, {name:"Phone",price:85000}, {name:"Tablet",price:45000} ]

// Step 3: Reduce to find total price
const total = simplified.reduce((sum, p) => sum + p.price, 0);
// → 120000 + 85000 + 45000 = 250000

console.log("Electronics:", simplified);
console.log("Total price:", total);
// Output: Total price: 250000
```

---

### 1(d) Image Gallery DOM Events

```javascript
// Select all images inside the gallery
const images = document.querySelectorAll("#gallery img");
const caption = document.getElementById("caption");

// Add a click listener to each image
images.forEach(function (img) {
  img.addEventListener("click", function () {
    // Get the src attribute value (e.g., "sunset.jpg")
    const filename = img.getAttribute("src");
    caption.textContent = "Selected: " + filename;
  });
});
```

**Explanation:**
- `querySelectorAll("#gallery img")` returns a NodeList of all `<img>` elements inside `#gallery`.
- `forEach` iterates over each image.
- `addEventListener("click", ...)` adds the handler without overwriting existing events.
- `getAttribute("src")` reads the image file path.
- `textContent` updates the caption paragraph safely.

---

### 1(e) Responsive CSS Flexbox Grid

```css
/* Container */
.product-grid {
  display: flex;
  flex-wrap: wrap;         /* items wrap to next line when they don't fit */
  gap: 20px;
  padding: 20px;
}

/* Each product card */
.product-card {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
}

/* 3 columns: screens > 900px */
@media (min-width: 901px) {
  .product-card {
    flex: 0 0 calc(33.333% - 20px);   /* 3 per row */
  }
}

/* 2 columns: 600px – 900px */
@media (min-width: 600px) and (max-width: 900px) {
  .product-card {
    flex: 0 0 calc(50% - 20px);       /* 2 per row */
  }
}

/* 1 column: < 600px */
@media (max-width: 599px) {
  .product-card {
    flex: 0 0 100%;                   /* full width */
  }
}
```

---

## QUESTION 2

### 2(a) Sample Course Document

```json
{
  "_id": "ObjectId('65a3f...')",
  "title": "React for Beginners",
  "instructor": "Dr. Kamal Silva",
  "category": "web",
  "price": 4999,
  "duration": 24,
  "isPublished": true
}
```

---

### 2(b) Mongoose Schemas

```javascript
const mongoose = require('mongoose');

// Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, 'Title must be at least 5 characters']
  },
  instructor: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'data', 'design'],
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative']
  },
  duration: {
    type: Number,
    required: true,
    min: [1, 'Duration must be at least 1 hour']
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

// Enrollment Schema
const enrollmentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  studentEmail: {
    type: String,
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
```

---

### 2(c) MongoDB Queries

**i. Published web courses:**
```javascript
const courses = await Course.find({ isPublished: true, category: 'web' });
```

**ii. Incomplete enrollments with course details:**
```javascript
const enrollments = await Enrollment.find({ completed: false })
  .populate('course', 'title instructor');
```

**iii. Apply 10% discount with `$mul`:**
```javascript
// $mul multiplies the field value by the given number
await Course.updateMany(
  { price: { $gt: 10000 } },
  { $mul: { price: 0.9 } }  // 0.9 = 90% of original = 10% discount
);
```

---

### 2(d) Aggregation Pipeline

```javascript
db.enrollments.aggregate([
  // Stage 1: Group by course, count students
  {
    $group: {
      _id: "$course",
      studentCount: { $sum: 1 }
    }
  },

  // Stage 2: Join with courses collection
  {
    $lookup: {
      from: "courses",
      localField: "_id",
      foreignField: "_id",
      as: "courseDetails"
    }
  },

  // Stage 3: Unwind (convert array to single object)
  { $unwind: "$courseDetails" },

  // Stage 4: Sort by student count descending
  { $sort: { studentCount: -1 } },

  // Stage 5: Return relevant fields
  {
    $project: {
      _id: 0,
      title: "$courseDetails.title",
      instructor: "$courseDetails.instructor",
      studentCount: 1
    }
  }
]);
```

---

### 2(e) Virtual Field

**i. Virtual definition:**
```javascript
// Add this BEFORE mongoose.model(...)
courseSchema.virtual('isFree').get(function () {
  return this.price === 0;
});

// Also enable virtuals in JSON output
const courseSchema = new mongoose.Schema({ ... }, {
  timestamps: true,
  toJSON: { virtuals: true }   // include virtuals when converting to JSON
});
```

**ii. Virtual vs regular field:**
| Virtual | Regular Field |
|---|---|
| Computed from other fields at runtime | Stored directly in MongoDB document |
| **Not saved** to the database | **Saved** to the database |
| Cannot be used in MongoDB queries/filters | Can be queried and indexed |

---

## QUESTION 3

### 3(a) MVC Architecture

**i. What is MVC:**
MVC stands for **Model-View-Controller** — an architectural pattern that separates concerns.

| Component | Role in Express REST API |
|---|---|
| **Model** | Defines data structure (Mongoose schema) and handles all database operations (CRUD, validation). |
| **View** | In REST APIs, this is `res.json()` — formats the response data sent to the client. No HTML views. |
| **Controller** | The Express route handler: receives the HTTP request, calls Model methods, and passes the result to the View. |

**ii. Request flow diagram:**
```
Client → GET /courses
          ↓
    Express Router
    (routes/courses.js)
          ↓ calls
    Controller
    (getAllCourses)
          ↓ calls
    Model
    (Course.find())
          ↓ returns data
    Controller
          ↓
    res.json(courses)
          ↓
    Client receives JSON
```

---

### 3(b) Middleware Types

**i. Application-level vs Router-level:**
- **Application-level:** Applied to ALL routes in the app using `app.use()`. Runs for every request regardless of path.
- **Router-level:** Applied only to routes defined on a specific `express.Router()` instance. Runs only for requests matched by that router.

**ii. Router-level auth middleware:**
```javascript
const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Router-level middleware — only applies to this router
router.use(function (req, res, next) {
  if (req.query.key !== 'secret123') {
    return res.status(401).json({ error: 'Unauthorized: missing or invalid key' });
  }
  next();
});

router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;
// In server.js: app.use('/courses', coursesRouter);
```

---

### 3(c) Bug Fix

**i. Two bugs:**
1. **No `try/catch`:** If `findById()` throws (e.g., invalid ObjectId like `"abc123"`), the unhandled Promise rejection crashes the server or leaves the request hanging.
2. **No null check:** If no course with that ID exists, `Course.findById()` returns `null`, and `res.json(null)` sends an unhelpful response instead of a `404`.

**ii. Fixed route:**
```javascript
app.get('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    // Check if course exists
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);

  } catch (err) {
    // findById throws a CastError for invalid ObjectId format
    res.status(400).json({ error: 'Invalid ID format' });
  }
});
```

---

### 3(d) Enrollment CRUD Router

```javascript
const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

// 1. POST /enrollments — Enroll a student
router.post('/', async (req, res) => {
  try {
    const { studentName, studentEmail, course } = req.body;

    // Validate course exists
    const courseDoc = await Course.findById(course);
    if (!courseDoc) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const enrollment = new Enrollment({ studentName, studentEmail, course });
    const saved = await enrollment.save();
    res.status(201).json(saved);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. GET /enrollments — List all with course details
router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate('course', 'title instructor');
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. GET /enrollments/:id — Get one
router.get('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id)
      .populate('course', 'title instructor price');

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    res.json(enrollment);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

// 4. PUT /enrollments/:id/complete — Mark as completed
router.put('/:id/complete', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      { $set: { completed: true } },
      { new: true }            // return the updated document
    );

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    res.json({ message: 'Marked as completed', enrollment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
```

---

## QUESTION 4

### 4(a) React Lifecycle

**Three phases:**

**1. Mounting** — Component is created and added to the DOM for the first time.
- React initializes state, renders JSX, and inserts it into the real DOM.
- `useEffect` with an empty dependency array `[]` runs **once after the first render**.
```javascript
useEffect(() => {
  console.log("Component mounted — fetch initial data here");
  fetchCourses();
}, []); // runs once on mount
```

**2. Updating** — Component re-renders because state or props changed.
- React re-renders the component, diffs the VDOM, and updates changed DOM nodes.
- `useEffect` with a dependency runs **after every render where that dependency changed**.
```javascript
useEffect(() => {
  console.log("category changed — refetch courses");
  fetchCoursesByCategory(category);
}, [category]); // runs when category changes
```

**3. Unmounting** — Component is removed from the DOM.
- Cleanup is needed to avoid memory leaks (timers, subscriptions, etc.).
- Return a **cleanup function** from `useEffect`.
```javascript
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => {
    clearInterval(timer); // cleanup runs before unmount
    console.log("Component unmounted");
  };
}, []);
```

---

### 4(b) Context API Theme Switcher

```javascript
import { createContext, useContext, useState } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Toggle button component
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

// 4. App using theme from context
function App() {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === 'light' ? '#ffffff' : '#1a1a2e';
  const textColor = theme === 'light' ? '#000000' : '#ffffff';

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh', padding: 20 }}>
      <h1>CourseHub</h1>
      <ThemeToggle />
    </div>
  );
}

// Root — wrap with provider
function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
```

---

### 4(c) StudentList with Filter

```javascript
import { useState } from 'react';

const STUDENTS = [
  { id: 1, name: "Sanduni Perera", faculty: "Computing" },
  { id: 2, name: "Kasun Silva",    faculty: "Engineering" },
  { id: 3, name: "Nimasha Raj",    faculty: "Computing" },
  { id: 4, name: "Dinesh Kumar",   faculty: "Business" },
  { id: 5, name: "Amali Fernando", faculty: "Computing" }
];

function StudentList() {
  const [query, setQuery] = useState('');

  // Filter live as user types (case-insensitive)
  const filtered = STUDENTS.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Students</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table border="1">
          <thead>
            <tr><th>Name</th><th>Faculty</th></tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.faculty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
```

---

### 4(d) React Native FlatList

**i. FlatList vs ScrollView:**
| | `ScrollView` | `FlatList` |
|---|---|---|
| Rendering | Renders **all items** at once | Renders only **visible items** (lazy/virtualized) |
| Performance | Poor for large/dynamic lists | Excellent for large lists |
| Use when | Small, fixed content (settings page, short form) | Long/dynamic lists (news feed, product catalog) |

**ii. Course FlatList component:**
```javascript
import { View, Text, FlatList, StyleSheet } from 'react-native';

const COURSES = [
  { id: '1', title: 'Web Technologies' },
  { id: '2', title: 'Mobile Development' },
  { id: '3', title: 'Database Systems' },
  { id: '4', title: 'Software Engineering' },
];

export default function CourseList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    paddingVertical: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e7eb',
  },
});
```

---

*End of Practice Paper 2 Answers*
