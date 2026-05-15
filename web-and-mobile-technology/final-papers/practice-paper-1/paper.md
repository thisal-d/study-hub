# SE2020 — Web and Mobile Technology
## Practice Paper 1 — Web Foundations
### Duration: 2 Hours | Total Marks: 100 | Difficulty: ⭐⭐ Medium

> **Instructions:** Answer ALL four questions. Each question carries 25 marks.

---

## QUESTION 1 — Web Basics, HTML & CSS (25 marks)

### 1(a) HTTP Request-Response Cycle [5 marks]

i. Describe the HTTP request-response cycle when a user types `www.shop.lk` into a browser. List at least **5 steps** in order, including the roles of the client and server. *(3 marks)*

ii. What is the difference between the **GET** and **POST** HTTP methods? Give one real-world use case for each. *(2 marks)*

---

### 1(b) HTML — Semantic Elements [4 marks]

i. What is **semantic HTML**? Why is it important for accessibility and search engines? *(2 marks)*

ii. Name and describe the purpose of **four** semantic HTML5 elements that help structure a webpage (e.g., not `<div>` or `<span>`). *(2 marks)*

---

### 1(c) CSS — Box Model [4 marks]

Given the following CSS:

```css
.card {
  width: 300px;
  padding: 20px;
  border: 4px solid #333;
  margin: 10px;
}
```

i. Draw and label the CSS Box Model diagram for this `.card` element. *(2 marks)*

ii. Calculate the total horizontal width the element occupies on the page (including margin). Show your working. *(2 marks)*

---

### 1(d) CSS — Flexbox Navigation Bar [5 marks]

Write complete HTML and CSS for a horizontal navigation bar with four links: **Home, Products, About, Contact**.

Requirements:
- Links are evenly spaced across the full width of the page.
- Nav background color is `#1a1a2e`, link text is white, no underline.
- Links change color to `#e94560` on hover.
- Vertical padding of `14px` inside the nav.

*(5 marks)*

---

### 1(e) JavaScript — DOM Manipulation [7 marks]

A webpage has the following HTML:

```html
<input id="task-input" type="text" placeholder="Enter task...">
<button id="add-btn">Add Task</button>
<ul id="task-list"></ul>
```

Write JavaScript that:
1. When the **Add Task** button is clicked:
   - Reads the value from the input field.
   - Creates a new `<li>` element with that text.
   - Appends it to `<ul id="task-list">`.
   - Clears the input field after adding.
2. If the input is empty, do not add anything.

*(7 marks)*

---

## QUESTION 2 — MongoDB & Mongoose (25 marks)

### Scenario: **PetCare — Veterinary Clinic System**

The clinic needs to store information about pets and their owners. Each pet record should include: the pet's name, species (dog/cat/bird/other), age, and the owner's name and phone number.

---

### 2(a) NoSQL vs Relational Database [4 marks]

Compare NoSQL and relational databases across **four** of the following dimensions: schema flexibility, scalability, query language, data structure, and use cases. Use a table format. *(4 marks)*

---

### 2(b) Sample MongoDB Document [3 marks]

Design a complete sample MongoDB document (JSON) for a pet record in the PetCare system. It must include all required fields from the scenario description above. *(3 marks)*

---

### 2(c) Mongoose Schema [8 marks]

Write a complete Mongoose schema and model for the `Pet` collection with these requirements:
- `name`: String, required, minimum 2 characters
- `species`: String, must be one of `dog`, `cat`, `bird`, `other`, required
- `age`: Number, required, minimum 0, maximum 30
- `owner`: an **embedded object** containing:
  - `name`: String, required
  - `phone`: String, required
- `registeredAt`: Date, defaults to current date/time
- Automatically tracked `createdAt` and `updatedAt` timestamps

*(8 marks)*

---

### 2(d) MongoDB CRUD Queries [6 marks]

Write the MongoDB query (MQL or Mongoose) for each operation:

i. Find all pets where `species` is `"dog"`. *(1 mark)*

ii. Find all pets older than 5 years. *(1 mark)*

iii. Insert a new pet: name `"Buddy"`, species `"dog"`, age `3`, owner name `"Kasun"`, phone `"0771234567"`. *(2 marks)*

iv. Update the age of the pet named `"Buddy"` to `4`. *(2 marks)*

---

### 2(e) Aggregation [4 marks]

Write a MongoDB aggregation pipeline that:
1. Groups all pets by `species`.
2. Counts how many pets exist in each species group.
3. Calculates the average age per species.
4. Sorts the result by count in descending order.

*(4 marks)*

---

## QUESTION 3 — Node.js & Express.js (25 marks)

### Scenario: **PetCare API — Express Backend**

---

### 3(a) Node.js Async Programming [5 marks]

i. What is **Non-Blocking I/O** in Node.js? How does it differ from blocking I/O? *(2 marks)*

ii. What is a **callback** function? Show a simple example of a callback used with `setTimeout`. *(1 mark)*

iii. Rewrite the following callback-based code using **async/await**:

```javascript
function getOwner(id, callback) {
  setTimeout(() => callback(null, { name: "Kasun", id }), 1000);
}
```
*(2 marks)*

---

### 3(b) Express.js Middleware [5 marks]

i. What is middleware in Express.js? Explain the role of `req`, `res`, and `next`. *(2 marks)*

ii. Write a middleware function that logs the **HTTP method**, **request URL**, and **current timestamp** for every incoming request. Apply it globally to an Express app. *(3 marks)*

---

### 3(c) REST API — Pet Routes [10 marks]

Build the following Express.js routes for the PetCare API using Mongoose. Use `async/await` and include proper error handling:

**Route 1: `POST /pets`** — Create a new pet from the request body. Return `201` with the saved pet. *(3 marks)*

**Route 2: `GET /pets`** — Return all pets. *(2 marks)*

**Route 3: `GET /pets/:id`** — Find a pet by ID. Return `404` if not found. *(3 marks)*

**Route 4: `DELETE /pets/:id`** — Delete a pet by ID. Return `200` with a success message. *(2 marks)*

---

### 3(d) HTTP Status Codes & REST Principles [5 marks]

i. What does each of the following HTTP status codes mean? Give one Express scenario where each would be sent:
   - `200 OK`
   - `201 Created`
   - `400 Bad Request`
   - `404 Not Found`
   - `500 Internal Server Error`
*(5 marks)*

---

## QUESTION 4 — React & React Native (25 marks)

### 4(a) React Fundamentals [5 marks]

i. What is **JSX**? How does it differ from plain HTML? Give two JSX rules that differ from HTML. *(2 marks)*

ii. What is the **Virtual DOM**? How does React use it to update the real DOM efficiently? *(3 marks)*

---

### 4(b) Props vs State [4 marks]

i. What is the difference between **props** and **state** in React? *(2 marks)*

ii. Give a code example showing a parent `App` component passing a `username` prop to a child `Greeting` component. The `Greeting` component should display `"Hello, <username>!"`. *(2 marks)*

---

### 4(c) React Hooks [8 marks]

i. Write a React functional component `Counter` that:
   - Has a count starting at `0`.
   - Has a **+1** button and a **-1** button.
   - Count cannot go below 0.
   - Displays the current count.
   *(4 marks)*

ii. Write a React component `PetList` that:
   - Fetches pet data from `/api/pets` when it first mounts using `useEffect`.
   - Shows `"Loading..."` while fetching.
   - Renders each pet's name in a `<ul>` list.
   *(4 marks)*

---

### 4(d) React Native Basics [8 marks]

i. Compare React (web) and React Native. Complete the table: *(3 marks)*

| Concept | React (Web) | React Native |
|---|---|---|
| Root container element | `<div>` | ? |
| Text display | `<p>`, `<span>` | ? |
| Click/touch event | `onClick` | ? |
| Styling method | CSS class | ? |

ii. Write a React Native component that displays a simple **profile card** with:
   - A name in bold (`fontSize: 20`, `fontWeight: 'bold'`)
   - An email below it (`fontSize: 14`, `color: 'gray'`)
   - A card container with `padding: 16`, `borderRadius: 12`, `backgroundColor: '#fff'`
   - All styles defined with `StyleSheet.create`
   *(5 marks)*

---

*End of Practice Paper 1*
