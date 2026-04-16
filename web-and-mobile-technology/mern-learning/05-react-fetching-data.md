# Section 05: React — Fetching Data

**← [Lists, Forms & Events](./04-react-lists-forms-events.md)** | **Next: [Node.js Basics →](./06-nodejs-basics.md)**

---

## 🎯 What This Section Covers

So far, all your data has been **hardcoded** — arrays and objects written directly inside your components. Real applications fetch data from **APIs** (Application Programming Interfaces) — servers that provide data.

By the end, you'll:
- Understand what happens when React fetches data
- Use `useEffect` to trigger data fetching
- Handle loading states and errors
- Show real data from a public API

> 💡 **Remember from Section 01:** You learned `async/await` and Promises. This section is where that knowledge becomes essential. If those concepts feel fuzzy, **review Section 01 first**.

---

## 🤔 The Challenge — React Doesn't Wait

When React renders a component, it doesn't pause to fetch data. You need to tell it: *"After you render, go fetch this data, and when it arrives, update the UI."*

This is exactly what the `useEffect` hook does.

---

## 🔗 Introducing `useEffect`

`useEffect` lets you perform **side effects** in function components. Side effects are things that happen *outside* of rendering — like fetching data, timers, or logging.

```jsx
import { useState, useEffect } from "react";

function BasicEffect() {
  const [count, setCount] = useState(0);

  // This runs AFTER every render
  useEffect(() => {
    console.log("Component rendered! Count is:", count);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### The Dependency Array — Controlling When Effects Run

```jsx
useEffect(() => {
  // Runs after every render — be careful with this!
});

useEffect(() => {
  // Runs ONLY once, when the component first mounts
}, []);

useEffect(() => {
  // Runs when 'count' or 'name' changes
}, [count, name]);
```

> The `[]` after the effect — the **dependency array** — controls when the effect re-runs.

---

## 🌐 Fetching Data — The Pattern

Here's the standard pattern for fetching data in React:

```jsx
import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);      // The fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    // Define an async function inside the effect
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://api.example.com/data");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty array = run once on mount

  // Show loading
  if (loading) return <p>Loading...</p>;

  // Show error
  if (error) return <p>Error: {error}</p>;

  // Show data
  return <div>{/* render data here */}</div>;
}
```

> ⚠️ **Why the inner function?** `useEffect`'s callback can't be directly `async` (it would return a Promise that React doesn't know what to do with). So we define an async function *inside* the effect and call it immediately.

---

## 🛠️ Real Example — Fetching Posts

Let's use a real public API: `https://jsonplaceholder.typicode.com` — a free fake REST API perfect for learning.

```jsx
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        if (!response.ok) throw new Error("Failed to fetch posts");

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "48px" }}>
        <p>⏳ Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: "red", padding: "24px" }}>
        <p>❌ Error: {error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", padding: "24px" }}>
      <h2>Latest Posts ({posts.length})</h2>
      {posts.map(post => (
        <div key={post.id} style={{
          padding: "16px",
          marginBottom: "12px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px"
        }}>
          <h3 style={{ margin: "0 0 8px 0", textTransform: "capitalize" }}>
            {post.title}
          </h3>
          <p style={{ margin: 0, color: "#6b7280" }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
```

---

## 👤 Fetching a Single Item by ID

Often you'll fetch one item based on a user's selection:

```jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }

    fetchUser();
  }, [userId]); // Re-fetch when userId changes!

  if (loading) return <p>Loading user...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>👤 {user.name}</h3>
      <p>📧 {user.email}</p>
      <p>🏢 {user.company?.name}</p>
      <p>🌐 {user.website}</p>
    </div>
  );
}

// Parent — lets user pick which profile to view
function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div style={{ padding: "24px" }}>
      <h2>User Directory</h2>
      <div style={{ marginBottom: "16px" }}>
        {[1, 2, 3, 4, 5].map(id => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            style={{
              margin: "4px",
              padding: "6px 14px",
              background: selectedId === id ? "#2563eb" : "#e5e7eb",
              color: selectedId === id ? "white" : "black",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            User {id}
          </button>
        ))}
      </div>
      <UserProfile userId={selectedId} />
    </div>
  );
}
```

**Notice:** Putting `userId` in the dependency array ensures that when the user selects a different ID, the effect re-runs and fetches new data.

---

## 🎨 Building a Better Loading Experience

Don't just show plain text — make loading states feel polished:

```jsx
// Skeleton Loading Effect
function SkeletonCard() {
  return (
    <div style={{
      padding: "16px",
      margin: "8px 0",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      animation: "pulse 1.5s ease-in-out infinite"
    }}>
      <div style={{
        height: "20px",
        background: "#e5e7eb",
        borderRadius: "4px",
        marginBottom: "8px",
        width: "60%"
      }} />
      <div style={{
        height: "14px",
        background: "#e5e7eb",
        borderRadius: "4px",
        marginBottom: "4px"
      }} />
      <div style={{
        height: "14px",
        background: "#e5e7eb",
        borderRadius: "4px",
        width: "80%"
      }} />
    </div>
  );
}

// Add this CSS to your index.css:
// @keyframes pulse {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.5; }
// }
```

---

## 🔁 Refetch on Demand

Sometimes users need to manually refresh data:

```jsx
import { useState, useEffect, useCallback } from "react";

function RefreshableList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState(null);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const data = await response.json();
    setTodos(data);
    setLastFetched(new Date().toLocaleTimeString());
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
        <h2>Todos</h2>
        <button
          onClick={fetchTodos}
          disabled={loading}
          style={{ padding: "6px 14px", cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? "⏳ Loading..." : "🔄 Refresh"}
        </button>
        {lastFetched && <span style={{ color: "#6b7280", fontSize: "13px" }}>Last updated: {lastFetched}</span>}
      </div>
      {todos.map(todo => (
        <div key={todo.id} style={{
          padding: "8px 12px",
          marginBottom: "4px",
          background: todo.completed ? "#f0fdf4" : "#fafafa",
          borderRadius: "6px"
        }}>
          <span style={{ marginRight: "8px" }}>{todo.completed ? "✅" : "⬜"}</span>
          <span style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#6b7280" : "inherit"
          }}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔗 What Happens Next

Right now you're fetching from a **public third-party API**. When you build your own backend (Sections 06–08), you'll fetch from **your own Express server** instead.

The pattern is identical — only the URL changes:

```jsx
// Public API:
const response = await fetch("https://jsonplaceholder.typicode.com/posts");

// Your own Express API (coming in Section 07):
const response = await fetch("http://localhost:5000/api/posts");
```

Everything you've learned here transfers directly.

---

## ✅ Practice Tasks

**Task 1 — Photo Gallery:**
Fetch photos from `https://jsonplaceholder.typicode.com/photos?_limit=12` and display them in a 3-column grid. Show the photo `thumbnailUrl` as an image and `title` below it.

**Task 2 — User + Their Posts:**
- Fetch and display users from `/users`
- When a user is clicked, fetch their posts from `/posts?userId={id}`
- Show their posts in a panel below

**Task 3 — Search with Fetch:**
Fetch all todos from `/todos`. Add a search box that filters by title locally (don't re-fetch on every keystroke — filter the already-fetched data).

---

## 🧪 Experiments

**Experiment 1:** What happens when the network is slow?
Open DevTools → Network tab → set throttling to "Slow 3G". What do you see?

**Experiment 2:** What happens when the URL is wrong?
```jsx
const response = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint");
console.log(response.ok);  // What does ok return?
console.log(response.status);  // What status code?
```

**Experiment 3:** Remove the `[]` dependency array. What happens?

---

## 💡 Challenge Problem

Build a **Country Explorer**:
- Fetch from `https://restcountries.com/v3.1/all`
- Display countries in a searchable, filterable card grid
- Each card shows: flag, name, region, population
- Search by name
- Filter by region (Africa, Americas, Asia, Europe, Oceania)
- Sort by population (ascending/descending)
- Show total filtered count

This is a realistic UI! Take your time with it.

---

## 🧠 Key Concepts Summary

| Concept | Purpose |
|---------|---------|
| `useEffect(() => {...}, [])` | Run code after first render (data fetching) |
| `useEffect(() => {...}, [dep])` | Re-run when `dep` changes |
| Loading state | Show feedback while waiting for data |
| Error state | Handle failures gracefully |
| `response.ok` | Check if HTTP request succeeded |
| `response.json()` | Parse JSON response body |

---

## ➡️ Next Step

You've mastered the frontend side of MERN! Now it's time to build the backend — starting with **Node.js**, the runtime that makes JavaScript possible outside the browser.

### → [Section 06: Node.js Basics](./06-nodejs-basics.md)

---

*Section 05 of 14 | MERN Stack Learning System*
