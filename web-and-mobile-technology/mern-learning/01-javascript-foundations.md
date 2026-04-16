# Section 01: JavaScript Foundations

**← [Back to Prerequisites](./00-prerequisites.md)** | **Next: [React — Components & JSX →](./02-react-components-jsx.md)**

---

## 🎯 What This Section Covers

MERN is 100% JavaScript. Before touching React or Node, you need a solid handle on the JavaScript features that MERN developers use every single day.

This section covers **only what you actually need** — not everything about JavaScript. Think of it as a targeted toolkit.

By the end, you'll understand:
- Variables and modern `const`/`let` usage
- Arrow functions
- Array methods (`map`, `filter`, `find`)
- Destructuring
- Template literals
- Modules (`import`/`export`)
- Promises and `async/await`
- Objects and basic manipulation

---

## 📌 1. Variables: `const` and `let`

You might have learned `var` before. In modern JavaScript (and MERN), **we almost never use `var`**.

```javascript
// ✅ Use const for values that won't change
const name = "Alice";
const age = 25;

// ✅ Use let for values that will change
let score = 0;
score = score + 10;  // allowed

// ❌ Avoid var
var oldStyle = "avoid this";
```

**Rule of thumb:**
- Default to `const`
- Only use `let` when the variable will be reassigned
- Avoid `var`

---

## 📌 2. Arrow Functions

Arrow functions are a shorter way to write functions. You'll see them **everywhere** in React and Node.

```javascript
// Old style function
function greet(name) {
  return "Hello, " + name;
}

// Arrow function — same thing, shorter
const greet = (name) => {
  return "Hello, " + name;
};

// Even shorter — one line, no return keyword needed
const greet = (name) => "Hello, " + name;

// Using it
console.log(greet("Alice"));  // Hello, Alice
```

**Key things to know:**
- `() => expression` — implicit return (no curly braces)
- `() => { statements }` — must use `return` explicitly

```javascript
// Single parameter doesn't need parentheses
const double = n => n * 2;
console.log(double(5));  // 10

// Multiple parameters need parentheses
const add = (a, b) => a + b;
console.log(add(3, 4));  // 7
```

---

## 📌 3. Template Literals

Template literals let you embed variables directly inside strings using backtick characters.

```javascript
const name = "Alice";
const age = 25;

// Old way (messy)
const msg1 = "Hello, my name is " + name + " and I am " + age + " years old.";

// ✅ Template literal (clean)
const msg2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(msg2);
// Hello, my name is Alice and I am 25 years old.
```

You can even put expressions inside `${}`:
```javascript
const price = 9.99;
const tax = 0.1;

console.log(`Total: $${(price * (1 + tax)).toFixed(2)}`);
// Total: $10.99
```

---

## 📌 4. Objects

Objects store related data together. They're used constantly in MERN (API responses, database records, component props).

```javascript
// Creating an object
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

// Accessing properties
console.log(user.name);        // Alice
console.log(user["email"]);    // alice@example.com

// Adding or updating
user.city = "New York";        // add new property
user.age = 26;                 // update existing

// Deleting
delete user.city;
```

### Object Shorthand

When a variable name matches the property name:

```javascript
const name = "Alice";
const age = 25;

// Old way
const user = { name: name, age: age };

// ✅ Shorthand — same result
const user = { name, age };
```

---

## 📌 5. Destructuring

Destructuring lets you extract values from objects and arrays cleanly — **you'll see this constantly in React**.

### Object Destructuring

```javascript
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

// Without destructuring
const name = user.name;
const age = user.age;

// ✅ With destructuring
const { name, age, email } = user;

console.log(name);  // Alice
console.log(age);   // 25
```

You can even rename while destructuring:
```javascript
const { name: fullName } = user;
console.log(fullName);  // Alice
```

### Array Destructuring

```javascript
const colors = ["red", "green", "blue"];

// ✅ Destructuring
const [first, second, third] = colors;

console.log(first);   // red
console.log(second);  // green
```

---

## 📌 6. The Spread Operator `...`

The spread operator copies or combines arrays and objects. **Heavily used in React state management.**

```javascript
// Spread with arrays
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "cherry"];
console.log(moreFruits);  // ["apple", "banana", "cherry"]

// Spread with objects
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "NYC" };
console.log(updatedUser);
// { name: "Alice", age: 26, city: "NYC" }
```

> **Why it matters in React:** When updating state, you always create a *new* object/array rather than mutating the original. Spread makes this easy.

---

## 📌 7. Array Methods You Need to Know

These three are used constantly in React (displaying lists, filtering data, finding items).

### `.map()` — Transform every item

```javascript
const numbers = [1, 2, 3, 4, 5];

// Double every number
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Convert to strings
const names = ["alice", "bob", "charlie"];
const upper = names.map(name => name.toUpperCase());
console.log(upper);  // ["ALICE", "BOB", "CHARLIE"]
```

> **React use:** Creating a list of JSX elements from an array of data.

### `.filter()` — Keep only matching items

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4, 6]

// Remove a specific item
const fruits = ["apple", "banana", "cherry"];
const withoutBanana = fruits.filter(f => f !== "banana");
console.log(withoutBanana);  // ["apple", "cherry"]
```

> **React use:** Showing only items that match a search/filter.

### `.find()` — Get the first matching item

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: "Bob" }
```

> **React use:** Finding a specific item by ID.

---

## 📌 8. Modules — `import` and `export`

MERN apps are split into many files. Modules let you share code between files.

```javascript
// math.js — EXPORTING
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Default export (one per file)
export default function subtract(a, b) {
  return a - b;
}
```

```javascript
// app.js — IMPORTING
import subtract, { add, multiply } from "./math.js";

console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20
console.log(subtract(10, 4)); // 6
```

**Rules:**
- Named exports: `export const thing = ...` → import with `{ thing }`
- Default export: `export default ...` → import without brackets, any name

---

## 📌 9. Promises and `async/await`

This is one of the most important concepts for working with APIs and databases.

### The Problem — Asynchronous Code

Some operations take time (fetching data from a server, reading a file). JavaScript doesn't stop and wait — it moves on. This creates a challenge.

```javascript
// This WON'T work as expected
console.log("Start");
fetch("https://api.example.com/data");  // This takes time
console.log("Done");  // This runs BEFORE fetch is complete!
```

### Promises

A **Promise** represents a value that will be available in the future.

```javascript
// Fetch returns a Promise
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then(response => response.json())    // When it resolves
  .then(data => console.log(data))      // Use the data
  .catch(error => console.log(error));  // If something goes wrong
```

### `async/await` — A Cleaner Way

`async/await` makes asynchronous code look synchronous — much easier to read.

```javascript
// ✅ The async/await way
async function fetchTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchTodo();
```

**Key rules:**
- `async` before a function — it becomes async
- `await` before a Promise — it waits for the result
- Always wrap in `try/catch` to handle errors

> **You'll use this constantly** when fetching data in React and working with databases in Express.

---

## 📌 10. JSON — The Language Between Frontend and Backend

When React and Express communicate, they exchange data as **JSON** (JavaScript Object Notation).

```javascript
// A JavaScript object
const user = { name: "Alice", age: 25 };

// Convert to JSON string (for sending over the network)
const jsonString = JSON.stringify(user);
console.log(jsonString);  // '{"name":"Alice","age":25}'

// Convert JSON string back to JavaScript object
const parsed = JSON.parse(jsonString);
console.log(parsed.name);  // Alice
```

> In React, when you `fetch` from your API, you call `.json()` on the response — this converts the JSON string back into a JavaScript object.

---

## ✅ Practice Tasks

**Task 1:** Write a function using arrow syntax that takes an array of numbers and returns only those greater than 10.

```javascript
const filterBig = (numbers) => numbers.filter(n => n > 10);
console.log(filterBig([5, 12, 3, 20, 8, 15]));
// Expected: [12, 20, 15]
```

**Task 2:** Destructure this object and print a greeting:

```javascript
const person = { firstName: "John", lastName: "Doe", city: "Boston" };
// Your code: destructure and print "John Doe lives in Boston"
```

**Task 3:** Use `.map()` to convert an array of names to objects:

```javascript
const names = ["Alice", "Bob", "Charlie"];
// Expected output: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]
```

---

## 🧪 Experiments

**"What happens if…" experiments — actually try these!**

1. **What happens if you use `const` but try to reassign it?**
   ```javascript
   const x = 5;
   x = 10;  // Try this and see what error you get
   ```

2. **What happens if `.find()` doesn't find anything?**
   ```javascript
   const items = [1, 2, 3];
   const result = items.find(n => n > 100);
   console.log(result);  // What does this print?
   ```

3. **What happens with spread on nested objects?**
   ```javascript
   const a = { x: 1, nested: { y: 2 } };
   const b = { ...a };
   b.nested.y = 999;
   console.log(a.nested.y);  // Did a change too?
   ```

---

## 💡 Challenge Problem

Write a function that:
1. Takes an array of user objects (each with `name`, `age`, `active` properties)
2. Filters to only active users
3. Returns a new array of just their names, uppercased
4. Sorts alphabetically

```javascript
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 28, active: true },
  { name: "Diana", age: 22, active: true },
  { name: "Eve", age: 35, active: false }
];

// Your function here
// Expected: ["ALICE", "CHARLIE", "DIANA"]
```

---

## 🔗 Quick Reference

| Concept | Syntax | Use in MERN |
|---------|--------|------------|
| Arrow function | `const fn = (x) => x * 2` | React handlers, Express routes |
| Destructuring | `const { a, b } = obj` | Props, API responses |
| Spread | `{ ...obj, newProp: val }` | React state updates |
| `.map()` | `arr.map(item => ...)` | Rendering lists in React |
| `.filter()` | `arr.filter(item => ...)` | Search/filter features |
| `async/await` | `const data = await fetch(...)` | API calls, DB queries |
| Template literals | `` `Hello ${name}` `` | Dynamic strings |

---

## ➡️ Next Step

You now have the JavaScript toolkit for MERN. Let's build your first React components!

### → [Section 02: React — Components & JSX](./02-react-components-jsx.md)

---

*Section 01 of 14 | MERN Stack Learning System*
