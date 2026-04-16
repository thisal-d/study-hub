# Section 03: React — Props & State

**← [Components & JSX](./02-react-components-jsx.md)** | **Next: [Lists, Forms & Events →](./04-react-lists-forms-events.md)**

---

## 🎯 What This Section Covers

In the last section, your components were **static** — they always showed the same data. Real apps need components that:
1. **Receive different data** (a single `UserCard` component for any user)
2. **Change over time** (a counter that increments, a form being filled in)

This section introduces the two most fundamental React concepts:
- **Props** — Pass data *into* a component (from parent to child)
- **State** — Data that *lives inside* a component and can change

---

## Part I: Props — Passing Data Into Components

### 🤔 The Problem Props Solve

Remember our `UserCard` from Section 02? Every card showed the same person:

```jsx
// This is boring — all cards look identical
<UserCard />
<UserCard />
<UserCard />
```

With **props**, we can pass different data to each one:
```jsx
// Now each card is different!
<UserCard name="Alice" email="alice@example.com" city="New York" />
<UserCard name="Bob" email="bob@example.com" city="London" />
<UserCard name="Charlie" email="charlie@example.com" city="Tokyo" />
```

### 📦 How Props Work

Props are like **function arguments** — you pass them in, the component uses them.

```jsx
// 1. Define the component to accept props
function UserCard(props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", margin: "8px", borderRadius: "8px" }}>
      <h3>{props.name}</h3>
      <p>📧 {props.email}</p>
      <p>🏙️ {props.city}</p>
    </div>
  );
}

// 2. Use it with different data
function App() {
  return (
    <div>
      <UserCard name="Alice" email="alice@example.com" city="New York" />
      <UserCard name="Bob" email="bob@example.com" city="London" />
      <UserCard name="Charlie" email="charlie@example.com" city="Tokyo" />
    </div>
  );
}
```

**Understanding the flow:**
```
App passes: name="Alice"
            ↓
UserCard receives: props = { name: "Alice", email: "...", city: "..." }
            ↓
UserCard renders: <h3>Alice</h3>
```

### ✨ Destructuring Props (Cleaner Way)

You learned destructuring in Section 01 — let's use it here:

```jsx
// Instead of: function UserCard(props) { ... props.name ... }
// Use destructuring:
function UserCard({ name, email, city }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", margin: "8px", borderRadius: "8px" }}>
      <h3>{name}</h3>
      <p>📧 {email}</p>
      <p>🏙️ {city}</p>
    </div>
  );
}
```

This is the standard way React developers write components. Much cleaner!

### 🔢 Passing Different Types as Props

Props can hold any JavaScript value:

```jsx
// String
<Greeting name="Alice" />

// Number
<ProductCard price={29.99} quantity={5} />

// Boolean (true/false)
<Button disabled={true} />
<Button disabled />   {/* shorthand for disabled={true} */}

// Array
<List items={["apple", "banana", "cherry"]} />

// Object
<Profile user={{ name: "Alice", age: 25 }} />

// Function
<Button onClick={() => console.log("clicked!")} />
```

> **Important:** String props use `""`, everything else uses `{}`

### 🔒 Props Are Read-Only

A component can **never** modify its own props. Here's why:

```jsx
// ❌ NEVER do this — it will cause bugs
function BadComponent({ name }) {
  name = "Changed!";  // WRONG! Don't mutate props
  return <p>{name}</p>;
}

// ✅ If you need to change data, use state (coming up next)
```

This is a fundamental rule: **Props flow one way, from parent to child, and are immutable inside the child.**

### 🧩 Props with Children

The special `children` prop lets you nest content inside components:

```jsx
// A reusable "container" component
function Card({ children, title }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px"
    }}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// Use it with nested content
function App() {
  return (
    <div>
      <Card title="User Info">
        <p>Name: Alice</p>
        <p>Age: 25</p>
        <button>Edit Profile</button>
      </Card>

      <Card title="Settings">
        <p>Theme: Dark</p>
        <p>Language: English</p>
      </Card>
    </div>
  );
}
```

Everything between `<Card>` and `</Card>` becomes `children`.

---

## Part II: State — Data That Changes

### 🤔 The Problem State Solves

Props let you pass data in, but what about data that **changes over time**?
- A counter that increments when you click a button
- A form being filled out
- A toggled menu (open/closed)
- Data fetched from an API

This is where **state** comes in.

### 🔑 Introducing `useState`

`useState` is a React **hook** — a special function that adds state to a component.

```jsx
import { useState } from "react";

function Counter() {
  // Declare state: [currentValue, functionToUpdateIt] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**Breaking this down:**
```
const [count, setCount] = useState(0);
       ↑         ↑                 ↑
   current    function to      initial
    value      change it        value
```

- `count` — the current value (starts at 0)
- `setCount` — call this to update the value
- `useState(0)` — start with 0

### 🔄 What Happens When State Changes?

This is React's magic: **when state changes, the component re-renders**.

```
Initial render: count = 0 → shows "Count: 0"
        ↓
User clicks button → setCount(0 + 1) called
        ↓
React knows count changed → re-renders component
        ↓
Shows "Count: 1"
        ↓
User clicks again → setCount(1 + 1) → shows "Count: 2"
```

Let's see a more complete example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter</h2>
      <p style={{
        fontSize: "48px",
        fontWeight: "bold",
        color: count > 0 ? "green" : count < 0 ? "red" : "black"
      }}>
        {count}
      </p>
      <button onClick={decrement} style={{ margin: "4px", padding: "8px 16px" }}>−</button>
      <button onClick={reset} style={{ margin: "4px", padding: "8px 16px" }}>Reset</button>
      <button onClick={increment} style={{ margin: "4px", padding: "8px 16px" }}>+</button>
    </div>
  );
}

export default Counter;
```

> **New JSX pattern:** `condition ? valueIfTrue : valueIfFalse` — This is the **ternary operator** for conditional rendering.

### 📝 State with Strings and Booleans

State can hold any type:

```jsx
import { useState } from "react";

function NameDisplay() {
  const [name, setName] = useState("World");
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button onClick={() => setShowGreeting(!showGreeting)}>
        {showGreeting ? "Hide" : "Show"} Greeting
      </button>

      {showGreeting && <h2>Hello, {name}! 👋</h2>}
    </div>
  );
}
```

**New patterns here:**
- `onChange={(e) => setName(e.target.value)}` — Update state when input changes
- `{showGreeting && <h2>...</h2>}` — Short-circuit rendering (only show if `showGreeting` is true)

### 📦 State with Objects

When state is an object, always spread the old state to preserve unchanged fields:

```jsx
import { useState } from "react";

function ProfileEditor() {
  const [user, setUser] = useState({
    name: "Alice",
    email: "alice@example.com",
    city: "New York"
  });

  // ✅ Correct: spread old state, then update specific field
  const updateName = (newName) => {
    setUser({ ...user, name: newName });
  };

  const updateEmail = (newEmail) => {
    setUser({ ...user, email: newEmail });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Profile</h2>
      <div>
        <label>Name: </label>
        <input
          value={user.name}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          value={user.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "16px", padding: "12px", background: "#f5f5f5" }}>
        <h3>Preview:</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.city}</p>
      </div>
    </div>
  );
}
```

> **Remember from Section 01:** The spread operator `...user` copies all existing fields. Then you override just the one you want to change.

---

## 🔗 Combining Props and State

The real power comes when you combine them. Parent components manage state, and pass it down as props.

```jsx
import { useState } from "react";

// Child component — receives data via props
function TemperatureDisplay({ celsius }) {
  const fahrenheit = (celsius * 9/5) + 32;

  return (
    <div style={{ padding: "12px", background: "#e8f4fd", borderRadius: "8px", margin: "8px 0" }}>
      <p>🌡️ {celsius}°C = {fahrenheit.toFixed(1)}°F</p>
    </div>
  );
}

// Parent component — manages state, passes to child
function TemperatureConverter() {
  const [celsius, setCelsius] = useState(25);

  return (
    <div style={{ padding: "24px" }}>
      <h2>Temperature Converter</h2>
      <input
        type="range"
        min="-20"
        max="100"
        value={celsius}
        onChange={(e) => setCelsius(Number(e.target.value))}
        style={{ width: "100%" }}
      />
      <p>Selected: {celsius}°C</p>
      <TemperatureDisplay celsius={celsius} />
    </div>
  );
}
```

**The data flow:**
```
TemperatureConverter (owns state: celsius)
    ↓ passes celsius as prop
TemperatureDisplay (receives celsius, computes fahrenheit)
```

This is called **"lifting state up"** — keep state in the parent when multiple children need it.

---

## ✅ Practice Tasks

**Task 1 — Like Button:**
Create a `LikeButton` component with:
- A heart icon (❤️)
- A count of likes (starts at 0)
- Clicking increases the count
- The heart turns red when count > 0

**Task 2 — Toggle Theme:**
Create a component with:
- A button "Switch to Dark Mode"
- State that tracks whether dark or light mode is active
- The whole div changes background/text color based on the state

**Task 3 — Personalized Greeting:**
Create a `Greeting` component that:
- Accepts a `name` prop
- Accepts a `timeOfDay` prop ("morning", "afternoon", "evening")
- Shows "Good morning, Alice!" or "Good evening, Bob!" etc.

---

## 🧪 Experiments

**Experiment 1:** What happens if you don't use `setCount` and just do `count = count + 1`?
```jsx
// Try this and see why it doesn't work
const [count, setCount] = useState(0);
return <button onClick={() => { count = count + 1; }}>This won't work</button>
```

**Experiment 2:** What if two components each have their own state?
```jsx
// Add two Counter components in App — do they share state?
<Counter />
<Counter />
```

**Experiment 3:** What if you pass the same prop to many components — and then change the source?
```jsx
const [color, setColor] = useState("blue");
<Box color={color} />
<Box color={color} />
<Box color={color} />
<button onClick={() => setColor("red")}>Change all to red</button>
```

---

## 💡 Challenge Problem

Build a "Shopping Cart" component that:
- Shows a list of 3-4 hardcoded items (name, price)
- Each item has a "Add to Cart" button
- Shows a cart summary with:
  - Number of items in cart
  - Total price
- Items added to cart show a checkmark ✅
- A "Clear Cart" button resets everything

*Hint: Use an array in state to track which items are in the cart*

---

## 🧠 Props vs State — Quick Comparison

| | Props | State |
|--|-------|-------|
| **Where it comes from** | Parent component | The component itself |
| **Can you change it?** | No (read-only) | Yes (via setter function) |
| **When does it change?** | When parent re-renders | When you call `setState` |
| **What it's for** | Configuring a component | Data that changes over time |

---

## ➡️ Next Step

You now understand how React handles data. Next, you'll learn how to render **lists of data**, build **forms**, and handle **user events** — the patterns used in virtually every real React application.

### → [Section 04: Lists, Forms & Events](./04-react-lists-forms-events.md)

---

*Section 03 of 14 | MERN Stack Learning System*
