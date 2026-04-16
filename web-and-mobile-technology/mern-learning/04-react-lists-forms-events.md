# Section 04: React — Lists, Forms & Events

**← [Props & State](./03-react-props-state.md)** | **Next: [Fetching Data →](./05-react-fetching-data.md)**

---

## 🎯 What This Section Covers

Almost every real app has three core UI patterns:
1. **Displaying lists** of items (products, users, posts)
2. **Forms** to collect user input
3. **Events** to respond to user actions

By the end, you'll handle all three with confidence.

---

## Part I: Rendering Lists

### 🔁 The `.map()` Pattern

You learned `.map()` in Section 01. In React, it's the primary way to turn an **array of data** into an **array of JSX elements**.

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Mango"];

  return (
    <ul>
      {fruits.map(fruit => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

This works, but React will warn you about a missing `key` prop. Let's fix that.

### 🔑 The `key` Prop

When rendering lists, each item needs a unique `key` prop. React uses this to efficiently track which items changed, were added, or were removed.

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

**Better: Use unique IDs instead of index:**

```jsx
const users = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Manager" },
];

function UserList() {
  return (
    <div>
      <h2>Team Members</h2>
      {users.map(user => (
        <div key={user.id} style={{
          padding: "12px",
          margin: "8px 0",
          border: "1px solid #eee",
          borderRadius: "8px"
        }}>
          <strong>{user.name}</strong>
          <span style={{ color: "#777", marginLeft: "8px" }}>{user.role}</span>
        </div>
      ))}
    </div>
  );
}
```

> **Why IDs are better than index:** If you delete the second item, array indexes shift. Using a stable unique ID ensures React correctly identifies which item is which.

### 🃏 Rendering Lists of Components

The real power: render a whole component for each item.

```jsx
// A single card component
function ProductCard({ name, price, inStock }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "16px",
      margin: "8px",
      opacity: inStock ? 1 : 0.5,
      display: "inline-block",
      width: "200px"
    }}>
      <h3>{name}</h3>
      <p style={{ color: "#2563eb", fontWeight: "bold" }}>${price.toFixed(2)}</p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "✅ In Stock" : "❌ Out of Stock"}
      </p>
    </div>
  );
}

// The parent lists them all
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Mouse", price: 29.99, inStock: true },
    { id: 3, name: "Keyboard", price: 79.99, inStock: false },
    { id: 4, name: "Monitor", price: 349.99, inStock: true },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}
```

### 🔍 Filtering Lists

Combine `.filter()` and `.map()` to show filtered data:

```jsx
import { useState } from "react";

function FilterableList() {
  const [filter, setFilter] = useState("all");

  const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 999.99 },
    { id: 2, name: "T-Shirt", category: "clothing", price: 19.99 },
    { id: 3, name: "Phone", category: "electronics", price: 699.99 },
    { id: 4, name: "Jeans", category: "clothing", price: 49.99 },
    { id: 5, name: "Headphones", category: "electronics", price: 149.99 },
  ];

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div style={{ padding: "24px" }}>
      <h2>Shop</h2>
      <div style={{ marginBottom: "16px" }}>
        {["all", "electronics", "clothing"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              marginRight: "8px",
              padding: "6px 16px",
              background: filter === cat ? "#2563eb" : "#e5e7eb",
              color: filter === cat ? "white" : "black",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer"
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {filtered.map(product => (
        <div key={product.id} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
          <strong>{product.name}</strong> — ${product.price}
        </div>
      ))}
      <p style={{ color: "#777", marginTop: "8px" }}>
        Showing {filtered.length} of {products.length} items
      </p>
    </div>
  );
}
```

---

## Part II: Handling Events

### 🖱️ Common Event Types

React uses **camelCase** event names:

| HTML Event | React Event |
|-----------|------------|
| `onclick` | `onClick` |
| `onchange` | `onChange` |
| `onsubmit` | `onSubmit` |
| `onkeydown` | `onKeyDown` |
| `onmouseover` | `onMouseOver` |
| `onfocus` | `onFocus` |

### 📚 Event Handlers

```jsx
function EventDemo() {
  // Define handlers as functions
  const handleClick = () => {
    alert("Button was clicked!");
  };

  const handleHover = () => {
    console.log("Mouse entered!");
  };

  // Inline handler with event object
  const handleInput = (event) => {
    console.log("Current value:", event.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div onMouseEnter={handleHover}>Hover over me</div>
      <input onChange={handleInput} placeholder="Type something..." />
    </div>
  );
}
```

> **Important:** Pass the function **reference**, not a call:
> ```jsx
> onClick={handleClick}     ✅ correct — passes the function
> onClick={handleClick()}   ❌ wrong — calls it immediately on render
> ```

### 🎭 The Event Object

Every event handler receives an **event object** with useful information:

```jsx
function EventInfo() {
  const handleClick = (event) => {
    console.log("Clicked at:", event.clientX, event.clientY);
    console.log("Target:", event.target);
  };

  const handleKeyDown = (event) => {
    console.log("Key pressed:", event.key);
    if (event.key === "Enter") {
      console.log("Enter was pressed!");
    }
  };

  const handleChange = (event) => {
    console.log("New value:", event.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input onKeyDown={handleKeyDown} onChange={handleChange} />
    </div>
  );
}
```

---

## Part III: Forms

Forms in React work differently from regular HTML forms. React controls the form values through state — this is called a **controlled component**.

### 📝 Basic Controlled Input

```jsx
import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}       {/* ← Controlled: React controls the value */}
        onChange={(e) => setName(e.target.value)}  {/* ← Update state on change */}
        placeholder="Enter your name"
      />
      <p>You typed: {name}</p>
    </div>
  );
}
```

**The controlled pattern:**
1. State holds the current value: `const [name, setName] = useState("")`
2. Input's `value` is tied to state: `value={name}`
3. `onChange` updates state: `onChange={(e) => setName(e.target.value)}`
4. React re-renders → input shows new value

### 📋 Complete Registration Form

Let's build a real form:

```jsx
import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    agreeToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Generic handler for text inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.password.length < 6) newErrors.password = "Password must be 6+ chars";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to terms";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload!

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid!
    setErrors({});
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  if (submitted) {
    return (
      <div style={{ padding: "24px", textAlign: "center" }}>
        <h2>✅ Registration Successful!</h2>
        <p>Welcome, {formData.username}!</p>
        <button onClick={() => setSubmitted(false)}>Register Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", padding: "24px" }}>
      <h2>Create Account</h2>

      {/* Username */}
      <div style={{ marginBottom: "16px" }}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.username && <p style={{ color: "red", fontSize: "12px" }}>{errors.username}</p>}
      </div>

      {/* Email */}
      <div style={{ marginBottom: "16px" }}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
      </div>

      {/* Password */}
      <div style={{ marginBottom: "16px" }}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>}
      </div>

      {/* Role Select */}
      <div style={{ marginBottom: "16px" }}>
        <label>Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
      </div>

      {/* Checkbox */}
      <div style={{ marginBottom: "24px" }}>
        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            style={{ marginRight: "8px" }}
          />
          I agree to the Terms & Conditions
        </label>
        {errors.agreeToTerms && <p style={{ color: "red", fontSize: "12px" }}>{errors.agreeToTerms}</p>}
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Create Account
      </button>
    </form>
  );
}

export default RegistrationForm;
```

**Key patterns to notice:**
- `e.preventDefault()` — stops the page from reloading on submit
- `[name]: value` — computed property name lets one handler update any field
- Validation before submitting
- Conditional rendering after success

### 🔎 Live Search Example

Here's a real-world pattern combining lists, events, and forms:

```jsx
import { useState } from "react";

const DEMO_USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Developer" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Designer" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Manager" },
  { id: 4, name: "Diana Ross", email: "diana@example.com", role: "Developer" },
  { id: 5, name: "Eve Wilson", email: "eve@example.com", role: "QA Engineer" },
];

function UserSearch() {
  const [query, setQuery] = useState("");

  const results = DEMO_USERS.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "500px", padding: "24px" }}>
      <h2>Find Users</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or email..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #ddd",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />
      <p style={{ color: "#777", marginBottom: "12px" }}>
        {results.length} user{results.length !== 1 ? "s" : ""} found
      </p>
      {results.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa", padding: "32px" }}>
          No users match "{query}"
        </p>
      ) : (
        results.map(user => (
          <div key={user.id} style={{
            padding: "12px",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between"
          }}>
            <div>
              <strong>{user.name}</strong>
              <p style={{ margin: 0, color: "#777", fontSize: "14px" }}>{user.email}</p>
            </div>
            <span style={{
              padding: "2px 10px",
              background: "#e0f2fe",
              borderRadius: "12px",
              fontSize: "13px",
              alignSelf: "center"
            }}>
              {user.role}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
```

---

## ✅ Practice Tasks

**Task 1 — Todo List:**
Build a todo list where you can:
- Type a task name and press Enter or click "Add"
- See all todos displayed
- Click a todo to mark it complete (strikethrough text)
- Delete a todo with an ✕ button
- Show count of remaining todos

**Task 2 — Search and Filter:**
Start with a list of 8+ countries. Add:
- A search box to filter by name
- A select to filter by continent
- Show a "No results" message when nothing matches

**Task 3 — Multi-step Form:**
Build a form with 3 steps (Next/Back buttons):
- Step 1: Personal info (name, email)
- Step 2: Address (street, city, country)
- Step 3: Review and confirm

---

## 🧪 Experiments

**Experiment 1:** What happens when you remove `e.preventDefault()` from a form submit?

**Experiment 2:** What happens if you use `index` as a key and then delete an item from the middle of the list? Try it and watch the browser carefully.

**Experiment 3:** What happens if you don't link the `value` to state (making an "uncontrolled" input)?
```jsx
// Try without value prop
<input onChange={(e) => setName(e.target.value)} />
```

---

## 💡 Challenge Problem

Build a **Contact Book** app with:
- A form to add contacts (name, phone, email, category: friend/work/family)
- Display contacts in a beautiful card layout
- Live search by name or phone
- Filter by category
- Delete contacts
- Count of contacts per category shown at top
- "No contacts" empty state

This combines everything you've learned in Sections 02–04. It should feel like a real feature!

---

## ➡️ Next Step

You're now able to build fully interactive UIs with React. The next major step is learning how to fetch real data from an API — which is how React connects to the backend.

### → [Section 05: Fetching Data in React](./05-react-fetching-data.md)

---

*Section 04 of 14 | MERN Stack Learning System*
