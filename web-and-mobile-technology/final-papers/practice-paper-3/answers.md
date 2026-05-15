# Practice Paper 3 — Answer Sheet
## SE2020 — Web and Mobile Technology

---

## QUESTION 1

### 1(a) HTML Registration Form

**i. Form:**
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Student Registration</title></head>
<body>
  <h1>Student Registration</h1>
  <form action="/register" method="POST">

    <label for="fullname">Full Name</label><br>
    <input type="text" id="fullname" name="fullname" required><br><br>

    <label for="email">Email</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="studentId">Student ID</label><br>
    <input type="text" id="studentId" name="studentId" required><br><br>

    <label for="year">Year</label><br>
    <input type="number" id="year" name="year" min="1" max="4"><br><br>

    <button type="submit">Submit</button>
  </form>
</body>
</html>
```

**ii. `action` vs `method`:**
- **`action`**: Specifies the **URL** where the form data is sent when submitted (e.g., `action="/register"` sends data to the server at `/register`).
- **`method`**: Specifies the **HTTP method** used to send the data — `GET` (appended to URL) or `POST` (in request body). Sensitive data should always use `POST`.

---

### 1(b) Variables & Functions

**i. `var` vs `let` vs `const`:**

| | `var` | `let` | `const` |
|---|---|---|---|
| Scope | **Function-scoped** (accessible anywhere in the function) | **Block-scoped** (accessible only inside `{}` block) | **Block-scoped** (same as `let`) |
| Re-declare? | Yes | No | No |
| Re-assign? | Yes | Yes | No (value is constant) |
| Hoisted? | Yes (initialized to `undefined`) | Yes (but not initialized — temporal dead zone) | Yes (but not initialized) |

Modern best practice: use `const` by default; use `let` when re-assignment is needed; avoid `var`.

**ii. gradeCalculator:**
```javascript
function gradeCalculator(marks) {
  if (marks >= 75 && marks <= 100) {
    return 'A';
  } else if (marks >= 65) {
    return 'B';
  } else if (marks >= 55) {
    return 'C';
  } else if (marks >= 45) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(gradeCalculator(82));  // A
console.log(gradeCalculator(60));  // C
console.log(gradeCalculator(40));  // F
```

---

### 1(c) Dynamic Table

```javascript
const btn = document.getElementById("load-btn");
const tbody = document.getElementById("table-body");

const students = [
  { name: "Kasun", faculty: "Computing", year: 2 },
  { name: "Sanduni", faculty: "Engineering", year: 3 },
  { name: "Nimasha", faculty: "Computing", year: 1 }
];

btn.addEventListener("click", function () {
  // Step 1: Clear existing rows to avoid duplicates
  tbody.innerHTML = "";

  // Step 2: Create a row for each student
  students.forEach(function (student) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = student.name;

    const tdFaculty = document.createElement("td");
    tdFaculty.textContent = student.faculty;

    const tdYear = document.createElement("td");
    tdYear.textContent = student.year;

    tr.appendChild(tdName);
    tr.appendChild(tdFaculty);
    tr.appendChild(tdYear);

    tbody.appendChild(tr);
  });
});
```

**Key points:**
- `tbody.innerHTML = ""` wipes existing rows before re-loading.
- `createElement("tr")` and `createElement("td")` build cells in memory.
- `appendChild` chains cells → row → tbody.

---

### 1(d) SPA vs MPA

**i. SPA and client-side routing:**
A **Single Page Application (SPA)** loads a single HTML file once. Subsequent navigation is handled by **JavaScript in the browser** — the URL changes (using the History API) but no new HTML page is fetched from the server. Instead, the JS framework (React) swaps components in and out.

In a traditional **MPA**, every navigation click makes a new HTTP request to the server, which returns a new HTML page.

**ii. Advantage and disadvantage:**
- ✅ **Advantage:** After the initial load, navigation is **instant** — only data (JSON) is fetched, not full HTML pages. This gives a smooth, app-like experience.
- ❌ **Disadvantage:** The **initial load is slower** — the entire JavaScript bundle must be downloaded before anything renders. Also, SEO is harder because content is rendered by JS (search engine bots may not execute JS).

---

### 1(e) Flexbox Three-Column Layout

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  flex: 1 1 calc(33.333% - 16px);  /* 3 equal columns */
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}

/* Mobile: single column */
@media (max-width: 600px) {
  .card {
    flex: 1 1 100%;   /* full width */
  }
}
```

HTML:
```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

---

## QUESTION 2

### 2(a) Document Design

**i. Benefits of embedding patient data:**
1. The patient's name and email at the time of booking are a **snapshot** — they should remain unchanged even if the patient later updates their profile.
2. Avoids the need for a separate `patients` collection and a JOIN-style `$lookup` for simple appointment queries — reads are faster and simpler.

**ii. Sample appointment document:**
```json
{
  "_id": "ObjectId('66a1...')",
  "patient": {
    "name": "Amal Perera",
    "email": "amal@email.com"
  },
  "doctor": "ObjectId('65c2...')",
  "date": "2024-06-15T00:00:00.000Z",
  "time": "10:30 AM",
  "reason": "Chest pain consultation",
  "status": "scheduled",
  "createdAt": "2024-06-01T08:00:00.000Z"
}
```

---

### 2(b) Mongoose Schemas

```javascript
const mongoose = require('mongoose');

// Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: {
    type: String,
    required: true,
    enum: ['cardiology', 'neurology', 'general', 'pediatrics']
  },
  hospital: { type: String, required: true },
  experienceYears: { type: Number, required: true, min: 0 },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  patient: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  reason: { type: String, required: true },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);
```

---

### 2(c) MongoDB Queries

**i. Available cardiologists:**
```javascript
const doctors = await Doctor.find({
  isAvailable: true,
  specialty: 'cardiology'
});
```

**ii. Scheduled appointments from today, with doctor details:**
```javascript
const today = new Date();
today.setHours(0, 0, 0, 0);  // start of today

const appointments = await Appointment.find({
  status: 'scheduled',
  date: { $gte: today }
}).populate('doctor', 'name hospital');
```

**iii. Cancel all appointments for doctor XYZ:**
```javascript
await Appointment.updateMany(
  { doctor: 'XYZ' },
  { $set: { status: 'cancelled' } }
);
```

---

### 2(d) Aggregation

```javascript
db.appointments.aggregate([
  // Group by doctor AND status, count each
  {
    $group: {
      _id: { doctor: '$doctor', status: '$status' },
      count: { $sum: 1 }
    }
  },
  // Group again by doctor to get status breakdown
  {
    $group: {
      _id: '$_id.doctor',
      total: { $sum: '$count' },
      statuses: {
        $push: { status: '$_id.status', count: '$count' }
      }
    }
  },
  // Sort by total descending
  { $sort: { total: -1 } },
  // Join with doctors
  {
    $lookup: {
      from: 'doctors',
      localField: '_id',
      foreignField: '_id',
      as: 'doctorInfo'
    }
  },
  { $unwind: '$doctorInfo' },
  {
    $project: {
      doctorName: '$doctorInfo.name',
      total: 1,
      statuses: 1,
      _id: 0
    }
  }
]);
```

---

### 2(e) Virtual — shortTime

```javascript
const appointmentSchema = new mongoose.Schema({ ... }, {
  timestamps: true,
  toJSON: { virtuals: true }
});

appointmentSchema.virtual('shortTime').get(function () {
  const d = new Date(this.date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
});

// Usage: appointment.shortTime → "15/06/2024"
```

---

## QUESTION 3

### 3(a) Node.js Event Loop

**i. The Event Loop:**
Node.js runs JavaScript on a **single thread** using an event-driven model. When an asynchronous operation (like a database query or file read) is started:
1. Node.js delegates the I/O task to the OS or a background worker.
2. Node.js **does not wait** — it immediately moves on to handle the next request.
3. When the I/O finishes, its callback is placed in the **event queue**.
4. The **Event Loop** continuously checks: "Is the call stack empty?" If yes, it picks the next callback from the queue and executes it.

This means Node.js can handle thousands of concurrent connections without creating a separate thread per connection.

**ii. Output order:**
```
A
D
C
B
```

Explanation:
- `"A"` → synchronous, runs immediately.
- `setTimeout(() => "B", 0)` → placed in the **macrotask queue** (runs after all sync + microtasks).
- `Promise.resolve().then(() => "C")` → placed in the **microtask queue** (runs before macrotasks).
- `"D"` → synchronous, runs immediately.
- Call stack empty → microtask queue runs first → `"C"`.
- Then macrotask queue → `"B"`.

---

### 3(b) Express Router Modules

**i. Express Router:**
An `express.Router()` is a mini Express application that can define routes and middleware independently. Benefits:
- **Separation of concerns** — each resource (doctors, appointments) has its own file.
- Easier to test, maintain, and work on in teams.
- `server.js` stays clean and readable.

**ii. Folder structure and server.js:**

```
project/
├── server.js
├── models/
│   ├── Doctor.js
│   └── Appointment.js
└── routes/
    ├── doctors.js
    └── appointments.js
```

```javascript
// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Mount routers
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/appointments', require('./routes/appointments'));

mongoose.connect('mongodb://localhost:27017/medibook')
  .then(() => app.listen(3000, () => console.log('MediBook API running')));
```

```javascript
// routes/doctors.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

module.exports = router;
```

---

### 3(c) Appointment Booking Endpoint

```javascript
// routes/appointments.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

router.post('/', async (req, res) => {
  try {
    const { patientName, patientEmail, doctorId, date, time, reason } = req.body;

    // 1. Validate all fields present
    if (!patientName || !patientEmail || !doctorId || !date || !time || !reason) {
      return res.status(400).json({
        error: 'All fields are required: patientName, patientEmail, doctorId, date, time, reason'
      });
    }

    // 2. Check doctor exists and is available
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    if (!doctor.isAvailable) {
      return res.status(400).json({ error: 'Doctor is not available' });
    }

    // 3. Create appointment
    const appointment = new Appointment({
      patient: { name: patientName, email: patientEmail },
      doctor: doctorId,
      date: new Date(date),
      time,
      reason
    });

    const saved = await appointment.save();

    // 4. Populate doctor details for response
    const populated = await Appointment.findById(saved._id)
      .populate('doctor', 'name specialty');

    res.status(201).json(populated);

  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

module.exports = router;
```

---

### 3(d) npm & package.json

**i. npm and project init:**
`npm` (Node Package Manager) is the default package manager for Node.js — used to install, share, and manage JavaScript packages.

Command to initialize a new project:
```bash
npm init
# or for quick setup (skip questions):
npm init -y
```

**ii. dependencies vs devDependencies:**
| | `dependencies` | `devDependencies` |
|---|---|---|
| Used in | **Production runtime** | **Development only** |
| Install with | `npm install <package>` | `npm install <package> --save-dev` |
| Example | `express` (web server runs in production) | `nodemon` (auto-restarts server, not needed in prod) |

**iii. `^` (caret) version specifier:**
`"express": "^4.18.2"` means: install the latest version that is **≥ 4.18.2 and < 5.0.0**.

The `^` locks the **major version** (4.x.x) — allows minor and patch updates but not a new major version (5.0.0), which could have breaking changes.

Acceptable installs: `4.18.2`, `4.18.3`, `4.19.0`, `4.21.0` — **not** `5.0.0`.

---

## QUESTION 4

### 4(a) Props, State & Event Handling

**i. One-way data flow:**
In React, data flows **downward** from parent to child through props. A child cannot directly modify a parent's state.

Why? This makes the app **predictable and easier to debug** — you always know where data comes from (the parent). If a child needs to "send data up", the parent passes a callback function as a prop; the child calls it.

**ii. TemperatureConverter:**
```javascript
import { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');

  // Calculate Fahrenheit from Celsius
  const fahrenheit = celsius !== '' ? (parseFloat(celsius) * 9 / 5) + 32 : '';

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>Celsius:</label>
      <input
        type="number"
        value={celsius}
        onChange={e => setCelsius(e.target.value)}
        placeholder="Enter °C"
      />
      {celsius !== '' && (
        <p>{celsius}°C = {fahrenheit.toFixed(2)}°F</p>
      )}
    </div>
  );
}

export default TemperatureConverter;
```

---

### 4(b) DoctorList with useEffect

```javascript
import { useState, useEffect } from 'react';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/doctors')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load doctors');
        return res.json();
      })
      .then(data => {
        setDoctors(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // empty array = fetch only once on mount

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <ul>
      {doctors.map(doc => (
        <li key={doc._id}>
          <strong>{doc.name}</strong> — {doc.specialty}
        </li>
      ))}
    </ul>
  );
}

export default DoctorList;
```

---

### 4(c) Redux Toolkit Basics

**i. Why Redux over useState/Context:**
`useState` is local — it doesn't scale to complex apps with many components sharing the same data. `useContext` causes **all consumers to re-render** when any part of the context changes, which hurts performance.

Redux solves this by:
- Centralizing all app state in a **single store**.
- Using a strict, predictable update pattern (actions → reducers → state).
- Components subscribe to only the specific slice of state they need → fewer re-renders.

**ii. Appointments slice:**
```javascript
import { createSlice } from '@reduxjs/toolkit';

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    list: [],
    loading: false
  },
  reducers: {
    addAppointment: (state, action) => {
      state.list.push(action.payload);    // Immer allows "mutation"
    },
    clearAppointments: (state) => {
      state.list = [];
    }
  }
});

// Export individual action creators
export const { addAppointment, clearAppointments } = appointmentsSlice.actions;

// Export the reducer (used in store)
export default appointmentsSlice.reducer;
```

---

### 4(d) Expo Router Navigation

**i. Expo Router & file-based routing:**
Expo Router uses the **file system as the router** — the files inside the `app/` folder automatically define routes. This is similar to Next.js. No manual navigator configuration is needed. A file at `app/profile.tsx` creates the `/profile` route.

**ii. Route mapping:**
| File | Route/URL |
|---|---|
| `app/index.tsx` | `/` (home screen) |
| `app/doctors/index.tsx` | `/doctors` (all doctors list) |
| `app/doctors/[id].tsx` | `/doctors/:id` (e.g., `/doctors/42`) — dynamic route |

**iii. DoctorCard with navigation:**
```javascript
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

function DoctorCard({ doctor }) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/doctors/42`)}
    >
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialty}>{doctor.specialty}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  specialty: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  }
});

export default DoctorCard;
```

---

*End of Practice Paper 3 Answers*
