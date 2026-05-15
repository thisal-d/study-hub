# SE2020 — Web and Mobile Technology
## Practice Paper 5 — Comprehensive Exam Simulation
### Duration: 2 Hours | Total Marks: 100 | Difficulty: ⭐⭐⭐ Medium-Hard

> **Instructions:** Answer ALL four questions. This paper covers all modules — attempt under timed exam conditions.

---

## QUESTION 1 — Web, CSS & JavaScript (25 marks)

### 1(a) HTTP & Networking [6 marks]

i. Explain what happens step-by-step when a user submits a login form with `method="POST"` on `https://myapp.lk/login`. Include the request type, data location, and what the server typically responds with. *(3 marks)*

ii. Match each HTTP status code with its meaning: *(3 marks)*

| Status Code | Meaning (choose from the list) |
|---|---|
| `201` | |
| `400` | |
| `401` | |
| `403` | |
| `404` | |
| `500` | |

*Options: Resource created, Bad request (invalid input), Not found, Unauthorized (not logged in), Forbidden (no permission), Server error*

---

### 1(b) JavaScript — Code Trace & Array Methods [6 marks]

i. Write the exact output of the following code. Explain each line. *(3 marks)*

```javascript
const nums = [5, 12, 8, 130, 44];

const result = nums
  .filter(n => n > 10)
  .map(n => n * 2)
  .reduce((total, n) => total + n, 0);

console.log(result);
```

ii. Given an array of students, write JavaScript to:
   - Filter students with GPA ≥ 3.5.
   - Map to show only their names.
   - Log the resulting array.

```javascript
const students = [
  { name: "Kasun",   gpa: 3.8 },
  { name: "Nimasha", gpa: 3.2 },
  { name: "Amal",    gpa: 3.9 },
  { name: "Sanduni", gpa: 3.1 }
];
```
*(3 marks)*

---

### 1(c) DOM Manipulation [6 marks]

You are building a basic quiz app:

```html
<h2 id="question">What is 5 + 3?</h2>
<input type="text" id="answer-input" placeholder="Your answer">
<button id="submit-btn">Submit</button>
<p id="feedback"></p>
```

Write JavaScript that:
1. When the **Submit** button is clicked, reads the value from the input.
2. If the answer equals `"8"` (string comparison), sets the `#feedback` paragraph text to `"✅ Correct!"` and colour to `green`.
3. If wrong, sets it to `"❌ Wrong! Try again."` and colour to `red`.
4. Clears the input field after each submission.

*(6 marks)*

---

### 1(d) CSS — Semantic Structure & Layout [7 marks]

i. Rewrite the following non-semantic HTML using proper semantic HTML5 elements. Replace each `<div>` with the most appropriate semantic tag. *(3 marks)*

```html
<div id="top">
  <div class="links">
    <div class="link">Home</div>
    <div class="link">About</div>
  </div>
</div>
<div id="body">
  <div class="blog-entry">
    <div class="title">How to Use React</div>
    <div class="content">React is a JavaScript library...</div>
  </div>
</div>
<div id="bottom">Copyright 2024</div>
```

ii. Write CSS using **Flexbox** to arrange the following layout: a logo on the left, a nav menu on the right, inside a `<header>`. The header has a dark background (`#1a1a2e`) and white text. *(4 marks)*

---

## QUESTION 2 — MongoDB & Mongoose (25 marks)

### Scenario: **TechTalks — Tech Conference Management System**

Collections:
- `speakers`: `{ name, bio, topic, company, isConfirmed }`
- `sessions`: `{ title, speaker (ref), startTime, endTime, room, capacity, attendees: [{ name, email }] }`

---

### 2(a) Data Modelling [3 marks]

The `attendees` field in `sessions` stores an **array of embedded objects** rather than a reference to a users collection.

i. Explain why this design is suitable for this use case. *(2 marks)*

ii. What is a potential **limitation** of this approach as the number of attendees grows? *(1 mark)*

---

### 2(b) Mongoose Schema [9 marks]

Write complete Mongoose schemas for both `Speaker` and `Session`:

**Speaker:**
- `name`: String, required
- `bio`: String
- `topic`: String, required
- `company`: String, required
- `isConfirmed`: Boolean, default `false`
- Timestamps

**Session:**
- `title`: String, required, minimum 5 characters
- `speaker`: reference to Speaker, required
- `startTime`: Date, required
- `endTime`: Date, required
- `room`: String, required
- `capacity`: Number, required, min 1
- `attendees`: array of embedded objects, each with `name` (String, required) and `email` (String, required)
- Timestamps

*(4 + 5 marks)*

---

### 2(c) MongoDB Queries [5 marks]

Write Mongoose queries:

i. Find all **confirmed** speakers sorted by `name` ascending. *(1 mark)*

ii. Find all sessions with remaining capacity (sessions where `attendees.length < capacity`). Populate the speaker's `name` and `topic`. *(2 marks)*

iii. Add a new attendee `{ name: "Kamal", email: "kamal@email.com" }` to a session with ID `SID123`. Use `$push`. *(2 marks)*

---

### 2(d) Aggregation [5 marks]

Write an aggregation pipeline that:
1. Finds all sessions.
2. Adds a computed field `attendeeCount` = number of items in the `attendees` array.
3. Groups by `room` and calculates the total attendees per room.
4. Sorts by total attendees descending.

*(5 marks)*

---

### 2(e) Mongoose Virtual [3 marks]

Add a virtual `isFull` to the `Session` schema that returns `true` if `attendees.length >= capacity`.

i. Write the virtual definition. *(2 marks)*

ii. Why must you add `{ toJSON: { virtuals: true } }` to the schema options if you want the virtual to appear in API responses? *(1 mark)*

---

## QUESTION 3 — Node.js & Express.js (25 marks)

### Scenario: **TechTalks API**

---

### 3(a) Express & Middleware [6 marks]

i. What is the correct order for middleware in an Express app? List the standard middleware you would add to the top of `server.js` for a REST API and explain each. *(3 marks)*

ii. Write a middleware `checkConfirmed` that:
   - Is applied only to routes for creating sessions.
   - Checks that the `speakerId` in the request body corresponds to a speaker with `isConfirmed: true`.
   - Returns `400 Bad Request` with message `"Speaker is not confirmed"` if not confirmed.
   - Calls `next()` if the speaker is confirmed.
   *(3 marks)*

---

### 3(b) Event Loop & Async [4 marks]

i. What is the difference between **synchronous** and **asynchronous** code in Node.js? Give a one-line example of each. *(2 marks)*

ii. Predict the output:

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```
*(2 marks)*

---

### 3(c) Session Registration Endpoint [10 marks]

Build the following two Express routes:

**Route 1: `POST /sessions/:id/register`**
- Request body: `{ name, email }`.
- Validate: name and email must be provided.
- Check: session must exist.
- Check: session must not be full (`attendees.length < capacity`).
- Check: same email cannot register twice for the same session.
- If all checks pass, push the attendee to `session.attendees` and save.
- Return `200` with the updated session.

*(6 marks)*

**Route 2: `GET /sessions/:id/attendees`**
- Find the session by ID.
- Return `200` with just the `attendees` array (not the full session).
- Return `404` if session not found.

*(4 marks)*

---

### 3(d) Node.js Modules [5 marks]

i. What is the **CommonJS module system** used in Node.js? How do you export and import a module? *(2 marks)*

ii. Write a Node.js module `mathUtils.js` that exports two functions: `add(a, b)` and `multiply(a, b)`. Show how to import and use them in `server.js`. *(3 marks)*

---

## QUESTION 4 — React & React Native (25 marks)

### 4(a) React — Component Design & Props [6 marks]

i. What is the purpose of the `key` prop when rendering a list of components with `.map()`? What happens if you omit it or use the array index? *(2 marks)*

ii. Build a `SessionCard` React component that receives these props: `title`, `room`, `capacity`, `attendeeCount`. It should:
   - Display the session title as a heading.
   - Show the room and capacity.
   - Display `"Spots left: X"` where X is `capacity - attendeeCount`.
   - If spots left is 0, show `"FULL"` in red instead.
   *(4 marks)*

---

### 4(b) React — Hooks & State Management [7 marks]

i. Explain what the **dependency array** in `useEffect` controls. What happens with:
   - `useEffect(() => {...})` — no array.
   - `useEffect(() => {...}, [])` — empty array.
   - `useEffect(() => {...}, [id])` — array with a value.
   *(3 marks)*

ii. Build a `SpeakerList` component that:
   - Fetches speakers from `/api/speakers` on mount.
   - Has a `<select>` dropdown to filter by `isConfirmed` status (All, Confirmed, Unconfirmed).
   - Renders filtered speakers' names and topics in a list.
   *(4 marks)*

---

### 4(c) Context API [5 marks]

You are building a **user session** feature for the TechTalks website. The currently logged-in attendee's data should be available across the entire app (Navbar, ProfilePage, RegistrationPage).

i. Why is `useContext` better than passing the user as props through every component? *(1 mark)*

ii. Implement a `UserContext` with a `UserProvider` that:
   - Stores the current `user` (initially `null`).
   - Provides `setUser` to update it.
   - Exports a `useUser` custom hook.

Show how a `Navbar` component uses `useUser` to display the user's name. *(4 marks)*

---

### 4(d) React Native — Session List Screen [7 marks]

Build a React Native `SessionListScreen` that:
- Displays a static array of 4 session objects `[{ id, title, room, capacity, attendeeCount }]`.
- Renders them with `FlatList`.
- Each item is a card showing `title`, `room`, and a colored badge: green `"Available"` if spots remain, red `"Full"` if capacity is reached.
- Tapping an item logs `"Selected: <title>"` to the console.
- All styles defined with `StyleSheet.create`.

*(7 marks)*

---

*End of Practice Paper 5 — Good luck on your exam! 🎓*
