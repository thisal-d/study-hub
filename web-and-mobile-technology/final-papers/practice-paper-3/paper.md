# SE2020 — Web and Mobile Technology
## Practice Paper 3 — Full Stack Concepts
### Duration: 2 Hours | Total Marks: 100 | Difficulty: ⭐⭐⭐ Medium-Hard

> **Instructions:** Answer ALL four questions. Each question carries 25 marks.

---

## QUESTION 1 — Web, CSS & JavaScript (25 marks)

### 1(a) HTML Forms & Input Handling [5 marks]

i. Write a complete HTML registration form for a student with the following fields and validation:
   - **Full Name** (text, required)
   - **Email** (email type, required)
   - **Student ID** (text, required)
   - **Year** (number, min 1, max 4)
   - A **Submit** button

   Use HTML5 built-in validation attributes only (no JavaScript). *(3 marks)*

ii. What is the difference between the form `action` and `method` attributes? *(2 marks)*

---

### 1(b) JavaScript — Functions & Scope [5 marks]

i. What is the difference between `var`, `let`, and `const` in JavaScript? Describe their scoping rules. *(3 marks)*

ii. Write a JavaScript function `gradeCalculator(marks)` that:
   - Accepts a marks value (0–100).
   - Returns the letter grade: A (75–100), B (65–74), C (55–64), D (45–54), F (below 45).
   - Use an `if/else if` chain or a `switch` statement.
   *(2 marks)*

---

### 1(c) DOM — Dynamic Table [7 marks]

You are given this HTML:
```html
<button id="load-btn">Load Students</button>
<table id="student-table">
  <thead>
    <tr><th>Name</th><th>Faculty</th><th>Year</th></tr>
  </thead>
  <tbody id="table-body"></tbody>
</table>
```

And this JavaScript array:
```javascript
const students = [
  { name: "Kasun", faculty: "Computing", year: 2 },
  { name: "Sanduni", faculty: "Engineering", year: 3 },
  { name: "Nimasha", faculty: "Computing", year: 1 }
];
```

Write JavaScript that:
1. When the **Load Students** button is clicked, dynamically creates a `<tr>` row for each student with three `<td>` cells and appends them to `<tbody id="table-body">`.
2. If the button is clicked again, clears existing rows before reloading them (no duplicates).

*(7 marks)*

---

### 1(d) SPA vs MPA [4 marks]

i. What is a **Single Page Application (SPA)**? How does client-side routing in an SPA differ from server-side routing in a traditional website? *(2 marks)*

ii. Give **one advantage** and **one disadvantage** of SPAs compared to Multi-Page Applications. *(2 marks)*

---

### 1(e) CSS — Three-Column Layout [4 marks]

Write CSS using **Flexbox** to create a three-column card layout:
- All three cards are equal width.
- There is a `16px` gap between cards.
- On mobile (max-width 600px), cards stack into a single column.

*(4 marks)*

---

## QUESTION 2 — MongoDB & Mongoose (25 marks)

### Scenario: **MediBook — Hospital Appointment System**

Collections:
- `doctors`: `{ name, specialty, hospital, experienceYears, isAvailable }`
- `appointments`: `{ patient: { name, email }, doctor (ref), date, time, reason, status }`

---

### 2(a) Document Design [3 marks]

The `appointments` collection stores the patient's name and email as an **embedded object** rather than a reference to a users collection.

i. What are the benefits of this design choice for this scenario? *(2 marks)*

ii. Write a complete sample MongoDB document for an appointment. *(1 mark)*

---

### 2(b) Mongoose Schemas [9 marks]

Write complete Mongoose schemas for `Doctor` and `Appointment`:

**Doctor:**
- `name`: String, required
- `specialty`: String, required, one of `['cardiology', 'neurology', 'general', 'pediatrics']`
- `hospital`: String, required
- `experienceYears`: Number, required, min 0
- `isAvailable`: Boolean, default `true`
- Timestamps enabled

**Appointment:**
- `patient`: embedded object with `name` (String, required) and `email` (String, required)
- `doctor`: reference to Doctor, required
- `date`: Date, required
- `time`: String, required (e.g., `"10:30 AM"`)
- `reason`: String, required
- `status`: String, enum `['scheduled', 'completed', 'cancelled']`, default `'scheduled'`
- Timestamps enabled

*(4 + 5 marks)*

---

### 2(c) MongoDB Queries [6 marks]

Write Mongoose queries for:

i. Find all **available** doctors specializing in `"cardiology"`. *(2 marks)*

ii. Find all appointments with status `"scheduled"` that are on or after today's date. Populate the doctor's `name` and `hospital`. *(2 marks)*

iii. Cancel all appointments for a specific doctor (doctor ID `XYZ`) by setting `status` to `"cancelled"`. *(2 marks)*

---

### 2(d) Aggregation Pipeline [4 marks]

Write an aggregation that shows how many appointments each **doctor** has had, broken down by `status`. Sort by total appointments descending. Use `$group` and `$lookup`.

*(4 marks)*

---

### 2(e) Mongoose Virtual [3 marks]

Add a virtual field `shortTime` to the `Appointment` schema that returns the appointment date as a formatted string: `"DD/MM/YYYY"`. Use JavaScript `Date` methods.

*(3 marks)*

---

## QUESTION 3 — Node.js & Express.js (25 marks)

### Scenario: **MediBook Express API**

---

### 3(a) Node.js Event Loop [5 marks]

i. What is the **Node.js Event Loop**? Explain how it allows Node.js to handle multiple requests with a single thread. *(3 marks)*

ii. Predict and explain the output order of the following code:

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```
*(2 marks)*

---

### 3(b) Express Routing [5 marks]

i. What is an **Express Router**? What are the benefits of using separate router files instead of defining all routes in `server.js`? *(2 marks)*

ii. Show the folder structure and `server.js` code for mounting `doctors` and `appointments` routes as separate Express router modules. *(3 marks)*

---

### 3(c) Complete Appointment Booking Endpoint [10 marks]

Build a `POST /appointments` Express route that:
1. Reads `patientName`, `patientEmail`, `doctorId`, `date`, `time`, `reason` from the request body.
2. Validates that all fields are present.
3. Checks that the doctor exists and `isAvailable` is `true`.
4. Creates and saves the appointment.
5. Returns `201` with the saved appointment, with the doctor's `name` and `specialty` populated.
6. Handles all errors with appropriate status codes and messages.

*(10 marks)*

---

### 3(d) npm Modules & package.json [5 marks]

i. What is `npm`? What command initializes a new Node.js project? *(1 mark)*

ii. What is the difference between `dependencies` and `devDependencies`? Give one example of a package that belongs in each. *(2 marks)*

iii. A `package.json` shows `"express": "^4.18.2"`. What does the `^` (caret) mean? What versions would be acceptable to install? *(2 marks)*

---

## QUESTION 4 — React & React Native (25 marks)

### 4(a) React — props, state & Event Handling [7 marks]

i. Explain **one-way data flow** in React. Why does data flow from parent to child and not the other way? *(2 marks)*

ii. Build a `TemperatureConverter` React component that:
   - Has a number input for temperature in Celsius.
   - Displays the Fahrenheit equivalent below it, updated live as the user types.
   - Formula: `F = (C × 9/5) + 32`
   - Use `useState` for the Celsius value.
   *(5 marks)*

---

### 4(b) React — useEffect Data Fetching [6 marks]

Build a `DoctorList` React component that:
- Fetches a list of doctors from `/api/doctors` when the component mounts.
- Displays `"Loading doctors..."` while fetching.
- Renders each doctor's `name` and `specialty` in a list.
- If the fetch fails, shows `"Failed to load doctors."` in red.

*(6 marks)*

---

### 4(c) Redux Toolkit — Basics [5 marks]

i. What problem does **Redux** solve that `useState` and `useContext` cannot handle well at scale? *(2 marks)*

ii. Show the basic structure of a Redux Toolkit slice for an `appointments` feature:
   - Initial state: `{ list: [], loading: false }`
   - Two reducer actions: `addAppointment(state, action)` and `clearAppointments(state)`
   - Export the actions and the reducer.
   *(3 marks)*

---

### 4(d) React Native — Navigation with Expo Router [7 marks]

i. What is **Expo Router** and how does file-based routing work? *(2 marks)*

ii. You have these files:
   ```
   app/
   ├── index.tsx
   ├── doctors/
   │   ├── index.tsx
   │   └── [id].tsx
   ```
   What route/URL does each file represent? *(2 marks)*

iii. Write a React Native `DoctorCard` component that:
   - Displays a doctor's name and specialty.
   - When pressed (`onPress` with `Pressable`), navigates to `/doctors/42` using `useRouter` from Expo Router.
   - All styles use `StyleSheet.create`.
   *(3 marks)*

---

*End of Practice Paper 3*
