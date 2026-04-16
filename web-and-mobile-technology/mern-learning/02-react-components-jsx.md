# Section 02: React — Components & JSX

**← [JavaScript Foundations](./01-javascript-foundations.md)** | **Next: [Props & State →](./03-react-props-state.md)**

---

## 🎯 What This Section Covers

React is the "R" in MERN — the part your users actually see and interact with. This section teaches you how React **thinks** about building UIs, and how to create your first components.

By the end, you'll:
- Understand what React is and why it exists
- Know what JSX is and how to write it
- Create your first functional components
- Understand how React renders to the browser

---

## 🤔 Why Does React Exist?

Back in the day, web developers built UIs by **directly manipulating the HTML page** using JavaScript like this:

```javascript
// Old way — directly touching the DOM
document.getElementById("counter").innerHTML = count;
document.querySelector(".name").textContent = newName;
```

This worked for small apps, but for complex UIs with lots of data, it became a nightmare to track: *"Which part of the page needs to update? When? How?"*

React solved this with one powerful idea:

> **Describe what your UI should look like for any given data, and React figures out the minimum changes needed to update the page.**

Instead of saying **"change this element"**, you say **"here's what the UI looks like when the data is X"**, and React does the rest.

---

## 🏗️ The Core Idea: Components

A **component** is a reusable, self-contained piece of your UI (a button, a card, a header, a form).

Think of building with LEGO:
- Each LEGO brick = A Component
- Your app = The assembled structure made of components

```
App
├── Header
│   └── Logo
│   └── NavigationBar
├── Main
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
└── Footer
```

Every piece is its own component. Components can contain other components.

---

## 🚀 Creating Your First React App

Let's set up a React project:

```bash
# Navigate to where you want your project
cd desktop

# Create a new React app using Vite (fast, modern)
npm create vite@latest my-first-react-app -- --template react

# Go into the project
cd my-first-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser to `http://localhost:5173` — you'll see the default React page.

Now open the project in VS Code:
```bash
code .
```

---

## 📁 Understanding the Project Structure

```
my-first-react-app/
├── public/               ← Static files (images, icons)
├── src/                  ← Your code lives here
│   ├── App.jsx           ← Root component (start here)
│   ├── main.jsx          ← Entry point (connects React to HTML)
│   └── index.css         ← Global styles
├── index.html            ← Single HTML page
└── package.json          ← Project configuration
```

Open `src/App.jsx` — this is where you'll write your first component.

---

## 📝 What Is JSX?

JSX stands for **JavaScript XML**. It's a special syntax that looks like HTML but lives inside JavaScript files.

```jsx
// This is JSX
const element = <h1>Hello, World!</h1>;

// Under the hood, React converts this to:
const element = React.createElement("h1", null, "Hello, World!");
```

You write JSX, and React handles the conversion. It feels natural once you get used to it.

### JSX Rules (Important!)

**Rule 1: Return a single root element**
```jsx
// ✅ Correct — one root element
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// ❌ Wrong — two root elements
return (
  <h1>Title</h1>
  <p>Paragraph</p>
);
```

If you don't want an extra `<div>`, use a **Fragment**:
```jsx
// ✅ Fragment — no extra div in the DOM
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

**Rule 2: Close all tags**
```jsx
// ✅ Correct
<input type="text" />
<img src="photo.jpg" alt="photo" />

// ❌ Wrong
<input type="text">
<img src="photo.jpg">
```

**Rule 3: Use `className` not `class`**
```jsx
// ✅ Correct
<div className="container">

// ❌ Wrong
<div class="container">
```

> `class` is a reserved word in JavaScript, so JSX uses `className` instead.

**Rule 4: JavaScript inside `{}`**
```jsx
const name = "Alice";
const number = 42;

return (
  <div>
    <p>Hello, {name}!</p>
    <p>The answer is {number * 2}</p>
    <p>Today is {new Date().toLocaleDateString()}</p>
  </div>
);
```

Anything inside `{}` is treated as JavaScript.

---

## 🏃 Your First Component

Replace the contents of `src/App.jsx` with this:

```jsx
function App() {
  return (
    <div>
      <h1>Hello, React! 👋</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default App;
```

Save the file. Your browser should automatically update (this is called **Hot Module Replacement** — one of Vite's great features).

**What's happening here?**
- `function App()` — A regular JavaScript function. React components are just functions!
- `return (...)` — The function returns JSX describing what to show
- `export default App` — Makes this component importable in other files

---

## 🧱 Creating Multiple Components

Let's build a simple page with multiple components. Create a new file: `src/components/Welcome.jsx`

```jsx
// src/components/Welcome.jsx

function Welcome() {
  return (
    <div style={{ padding: "20px", background: "#f0f8ff", borderRadius: "8px" }}>
      <h2>Welcome to my app!</h2>
      <p>We're learning React together. 🎉</p>
    </div>
  );
}

export default Welcome;
```

> **Note:** Inline styles in React use an object with camelCase property names:
> - CSS: `background-color: blue` → JSX: `backgroundColor: "blue"`
> - CSS: `font-size: 16px` → JSX: `fontSize: "16px"`

Now create `src/components/UserCard.jsx`:

```jsx
// src/components/UserCard.jsx

function UserCard() {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      maxWidth: "300px"
    }}>
      <h3>Alice Johnson</h3>
      <p>📧 alice@example.com</p>
      <p>🏙️ New York, USA</p>
    </div>
  );
}

export default UserCard;
```

Now use both in your `App.jsx`:

```jsx
// src/App.jsx
import Welcome from "./components/Welcome";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>My React App</h1>
      <Welcome />
      <h2>Users</h2>
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default App;
```

**Look at the browser** — you now have three `UserCard` components! But they all show the same data. We'll fix that in the next section using **Props**.

---

## 🔍 How Does React Get Into the Browser?

Open `src/main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

And look at `index.html`:
```html
<div id="root"></div>
```

**The connection:**
1. `index.html` has a single `<div id="root">`
2. `main.jsx` finds that div and tells React to render your `<App />` inside it
3. React takes over from there — all your JSX becomes real HTML

This is why React apps are called **Single Page Applications (SPA)** — there's only one HTML page, and React controls everything inside it.

---

## 👁️ How React Renders — The Mental Model

```
Your JSX Code
     ↓
React creates a "Virtual DOM" (an in-memory tree)
     ↓
React compares new Virtual DOM with previous one
     ↓
React only updates the parts of the real DOM that changed
```

This is why React is fast — it minimizes actual DOM changes.

---

## ✅ Practice Tasks

**Task 1 — Create a Header Component:**
Create `src/components/Header.jsx` with a header that includes:
- A site name
- A nav with three links (Home, About, Contact)

**Task 2 — Create a Card Component:**
Build a `ProductCard` component that shows:
- A product name
- A price (hardcoded for now)
- A description

**Task 3 — Compose them:**
In `App.jsx`, render your Header + three ProductCards

---

## 🧪 Experiments

**Experiment 1:** What happens if you forget to export your component?
```jsx
// Remove: export default App;
// What error do you get?
```

**Experiment 2:** Can you use lowercase for a component name?
```jsx
// Try: function myComponent() { ... }
// Then: <myComponent />
// What happens? Why?
```

> **Hint:** React uses the first letter's capitalization to tell components apart from HTML tags. Lowercase = HTML tag. Uppercase = Component.

**Experiment 3:** Try rendering a JavaScript expression that isn't a string:
```jsx
// What happens when you render an object?
const data = { name: "Alice" };
return <p>{data}</p>;  // What error?
```

---

## 💡 Challenge Problem

Build a "Profile Card" component that shows:
- A circular avatar placeholder (just a colored div)
- A person's name in bold
- Their role/title
- A short bio
- A "Connect" button

Style it to look like a LinkedIn profile card. No external libraries — just JSX and inline styles.

---

## 🧠 Key Takeaways

| Concept | Key Point |
|---------|-----------|
| Components | Functions that return JSX |
| JSX | HTML-like syntax inside JavaScript |
| `{}` in JSX | Embeds JavaScript expressions |
| Component names | Must start with uppercase |
| `export default` | Makes a component importable |
| Single root element | Every component returns one root |
| Reusability | Same component can be used many times |

---

## ➡️ Next Step

Your components are static — they show the same data every time. In the next section, you'll learn how to make them dynamic using **Props** (for passing data in) and **State** (for data that changes).

### → [Section 03: Props & State](./03-react-props-state.md)

---

*Section 02 of 14 | MERN Stack Learning System*
