# SE2020 — Web and Mobile Technology
## Practice Paper 2 — DOM, Express & React Hooks
### Duration: 2 Hours | Total Marks: 100 | Difficulty: ⭐⭐⭐ Medium

> **Instructions:** Answer ALL four questions. Each question carries 25 marks.

---

## QUESTION 1 — Web, CSS & JavaScript (25 marks)

### 1(a) HTTP Methods & Responses [5 marks]

For the following REST API scenarios, state the correct HTTP method, URL design, and expected response status code. Justify your choices.

| Scenario | HTTP Method | URL | Status Code |
|---|---|---|---|
| Create a new student record | | | |
| Retrieve all students | | | |
| Update the email of student ID 42 | | | |
| Delete student ID 42 | | | |
| Get a single student by ID 42 | | | |

*(5 marks — 1 per row)*

---

### 1(b) CSS Selectors & Specificity [5 marks]

i. Given the following HTML and CSS, what color will the `<p>` text be? Explain your answer using **CSS specificity rules**. *(3 marks)*

```html
<div id="main">
  <p class="info">Hello</p>
</div>
```
```css
p { color: green; }
.info { color: blue; }
#main p { color: red; }
```

ii. List the **four types of CSS selectors** from the lectures (element, class, id, contextual/descendant) and write an example of each. *(2 marks)*

---

### 1(c) JavaScript — Array Methods [5 marks]

Given the following array of product objects:

```javascript
const products = [
  { name: "Laptop", price: 120000, category: "electronics" },
  { name: "T-Shirt", price: 1500, category: "clothing" },
  { name: "Phone", price: 85000, category: "electronics" },
  { name: "Jeans", price: 3500, category: "clothing" },
  { name: "Tablet", price: 45000, category: "electronics" }
];
```

Write JavaScript to:
1. Filter only `"electronics"` products.
2. Map them to show only `{ name, price }`.
3. Find the total price of all electronics using `reduce`.
4. Print the result.

*(5 marks)*

---

### 1(d) DOM Events — Image Gallery [5 marks]

You have a grid of image thumbnails. When a thumbnail is clicked, show its filename in a `<p id="caption">` element below the grid.

HTML structure:
```html
<div id="gallery">
  <img src="sunset.jpg" alt="Sunset">
  <img src="beach.jpg" alt="Beach">
  <img src="mountain.jpg" alt="Mountain">
</div>
<p id="caption">Click an image to see its name</p>
```

Write JavaScript using `querySelectorAll` and `addEventListener` to implement this behaviour. *(5 marks)*

---

### 1(e) Responsive Design with CSS [5 marks]

Write CSS that makes a `.product-grid` container display:
- **3 columns** when the screen is wider than 900px.
- **2 columns** when the screen is between 600px and 900px.
- **1 column** when the screen is below 600px.

Use **CSS Flexbox** with `flex-wrap: wrap`. Each item (`.product-card`) should have equal spacing and a minimum width. *(5 marks)*

---

## QUESTION 2 — MongoDB & Mongoose (25 marks)

### Scenario: **CourseHub — Online Learning Platform**

Collections:
- `courses`: `{ title, instructor, category, price, duration (hours), isPublished }`
- `enrollments`: `{ studentName, studentEmail, course (ref), enrolledAt, completed }`

---

### 2(a) MongoDB Document Structure [3 marks]

Write a sample MongoDB JSON document for a `course` in the CourseHub platform that satisfies all fields described above. *(3 marks)*

---

### 2(b) Mongoose Schemas with Ref [8 marks]

Write complete Mongoose schemas for both `Course` and `Enrollment` models:

**Course requirements:**
- `title`: String, required, minimum 5 characters
- `instructor`: String, required
- `category`: String, one of `['web', 'mobile', 'data', 'design']`, required
- `price`: Number, required, minimum 0
- `duration`: Number, required, minimum 1
- `isPublished`: Boolean, default `false`

**Enrollment requirements:**
- `studentName`: String, required
- `studentEmail`: String, required
- `course`: reference to Course model, required
- `enrolledAt`: Date, default now
- `completed`: Boolean, default `false`

*(4 marks each)*

---

### 2(c) MongoDB Queries [6 marks]

Write the Mongoose query for each:

i. Find all **published** courses in the `"web"` category. *(2 marks)*

ii. Find all enrollments where `completed` is `false` and populate the course's `title` and `instructor`. *(2 marks)*

iii. Update all courses with `price` greater than 10000 — apply a 10% discount using `$mul`. *(2 marks)*

---

### 2(d) Aggregation Pipeline [5 marks]

Write an aggregation pipeline that:
1. Groups enrollments by `course`.
2. Counts the total number of students per course.
3. Uses `$lookup` to add course details (title, instructor) from the `courses` collection.
4. Sorts by student count descending.

*(5 marks)*

---

### 2(e) Mongoose Virtual [3 marks]

Add a **virtual field** called `isFree` to the `Course` schema that returns `true` if `price === 0` and `false` otherwise.

i. Write the virtual field definition. *(2 marks)*

ii. What is the difference between a Mongoose virtual and a regular schema field? *(1 mark)*

---

## QUESTION 3 — Node.js & Express.js (25 marks)

### Scenario: **CourseHub API**

---

### 3(a) MVC Architecture [5 marks]

i. What does **MVC** stand for? Explain the role of each component in the context of an Express.js REST API. *(3 marks)*

ii. Draw a simple diagram showing how a `GET /courses` request flows through the MVC layers in an Express app. *(2 marks)*

---

### 3(b) Express Middleware Types [5 marks]

i. What is the difference between **application-level** and **router-level** middleware in Express.js? *(2 marks)*

ii. Write a **router-level** middleware that checks if a request has a query parameter `?key=secret123`. If not, return a `401 Unauthorized` response. Apply it only to the `courses` router. *(3 marks)*

---

### 3(c) async/await & Error Handling [5 marks]

The following route is buggy:

```javascript
app.get('/courses/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
});
```

i. What two bugs does this route have? *(2 marks)*

ii. Rewrite it with proper error handling — return `404` when course is not found and `400` for an invalid ID format. *(3 marks)*

---

### 3(d) Complete CRUD API [10 marks]

Build a complete Express.js router for `enrollments` with:

1. `POST /enrollments` — Enroll a student. Validate course exists. Return `201`. *(3 marks)*
2. `GET /enrollments` — List all enrollments with course details populated. *(2 marks)*
3. `GET /enrollments/:id` — Get one enrollment by ID, `404` if not found. *(2 marks)*
4. `PUT /enrollments/:id/complete` — Mark an enrollment as completed (`completed: true`). *(3 marks)*

*(Use async/await and proper error handling throughout)*

---

## QUESTION 4 — React & React Native (25 marks)

### 4(a) React Component Lifecycle [6 marks]

Explain the **three phases** of a React component lifecycle (Mounting, Updating, Unmounting). For each phase:
- Describe what happens in that phase.
- Show the corresponding `useEffect` pattern (with code).

*(2 marks each)*

---

### 4(b) useContext — Theme Switcher [7 marks]

Build a React theme-switcher using the **Context API**:

1. Create a `ThemeContext` using `createContext()`.
2. Create a `ThemeProvider` component that manages a `theme` state (`'light'` or `'dark'`) and wraps its children with the provider.
3. Create a `ThemeToggle` button component that uses `useContext` to read the current theme and toggle it.
4. Create an `App` component wrapped in `ThemeProvider` that changes background color based on theme (`#ffffff` for light, `#1a1a2e` for dark).

*(7 marks)*

---

### 4(c) React — Student List with Filter [6 marks]

Build a React component `StudentList` that:
- Has a hardcoded array of 5 student objects `[{ id, name, faculty }]`.
- Has a text input to filter students by name (live, as user types).
- Renders matching students in a table showing name and faculty.
- Shows `"No students found"` when no match exists.

*(6 marks)*

---

### 4(d) React Native — FlatList [6 marks]

i. What is the difference between `<FlatList>` and `<ScrollView>` in React Native? When is each preferred? *(2 marks)*

ii. Write a React Native component that uses `FlatList` to display a list of 4 course names. Each item should have:
- The course name in bold.
- A separator line between items.
- The container has `padding: 16`.
- All styles with `StyleSheet.create`.

*(4 marks)*

---

*End of Practice Paper 2*
