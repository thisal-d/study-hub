# Section 06: Node.js Basics

**← [Fetching Data in React](./05-react-fetching-data.md)** | **Next: [Express — Your First API →](./07-express-api.md)**

---

## 🎯 What This Section Covers

You've built a great React frontend. Now it's time to build the **backend** — the server that will power your app.

Node.js is the "N" in MERN. It's the runtime that lets you run JavaScript **outside the browser** — on a server, on your computer, or in the cloud.

By the end, you'll:
- Understand what Node.js is and why it matters
- Run JavaScript files from the terminal
- Use Node's built-in modules
- Understand npm and installing packages
- Know the difference between `require` (CommonJS) and `import` (ES Modules)

---

## 🤔 What Is Node.js?

Before Node.js, JavaScript only ran in browsers. If you wanted a server that understood JavaScript, you couldn't — you had to use a different language (Python, Java, PHP, etc.).

In 2009, **Node.js** was created. It took the V8 JavaScript engine (the same engine inside Chrome), pulled it out, and allowed JavaScript to run anywhere.

**What this means for you:**
- Write JavaScript for both frontend *and* backend
- Share code and utilities between frontend and backend
- Use the same language concepts everywhere (arrays, objects, async/await, modules)

---

## 🚀 Your First Node.js Program

Open your terminal and create a new folder:

```bash
mkdir node-basics
cd node-basics
```

Create a file called `hello.js`:

```javascript
// hello.js

console.log("Hello from Node.js! 🚀");
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
```

Run it:
```bash
node hello.js
```

Output:
```
Hello from Node.js! 🚀
Node version: v20.11.0
Platform: win32
```

That's it — Node just ran JavaScript straight from a file!

---

## 🌍 The Global Object

In a browser, the global object is `window`. In Node.js, it's `global` (though you rarely use it directly).

Node has some globals that are always available:

```javascript
// process — information about the current Node process
console.log(process.version);     // Node.js version
console.log(process.env.PATH);    // Environment variables
console.log(process.argv);        // Command-line arguments

// __dirname — the directory of the current file
console.log(__dirname);

// __filename — the full path of the current file
console.log(__filename);
```

---

## 📦 Node.js Built-in Modules

Node comes with many built-in modules — no installation needed.

### The `fs` Module (File System)

```javascript
// file-demo.js
const fs = require("fs");

// Write a file
fs.writeFileSync("message.txt", "Hello, world!");
console.log("File written!");

// Read a file
const content = fs.readFileSync("message.txt", "utf8");
console.log("Content:", content);

// Append to a file
fs.appendFileSync("message.txt", "\nThis was added later.");

// Check if a file exists
const exists = fs.existsSync("message.txt");
console.log("File exists:", exists);

// Delete a file
fs.unlinkSync("message.txt");
console.log("File deleted!");
```

### The `path` Module

```javascript
const path = require("path");

// Join path segments (works on all operating systems)
const fullPath = path.join(__dirname, "data", "users.json");
console.log(fullPath);  // /Users/you/project/data/users.json

// Get just the filename
console.log(path.basename("/users/alice/document.txt"));  // document.txt

// Get just the directory
console.log(path.dirname("/users/alice/document.txt"));   // /users/alice

// Get the extension
console.log(path.extname("photo.png"));  // .png
```

### The `http` Module (The Core of a Server!)

```javascript
// server.js
const http = require("http");

const server = http.createServer((request, response) => {
  // request — what the client sent
  // response — what we send back

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello from my Node.js server! 🎉");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

Run it:
```bash
node server.js
```

Open your browser and visit `http://localhost:3000` — you just built a server!

> **Ctrl+C** to stop the server.

---

## 🏗️ A Slightly More Complex Server

```javascript
// server.js
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Route based on URL path
  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1><a href='/about'>About</a>");

  } else if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1><a href='/'>Home</a>");

  } else if (path === "/api/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from API!", timestamp: Date.now() }));

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server at http://localhost:3000");
});
```

This gives you a taste of routing — but writing it this way is painful. This is exactly the problem Express.js solves (next section!).

---

## 📦 npm — Node Package Manager

npm lets you install libraries (called **packages**) that other developers have written. This is one of the biggest advantages of the Node ecosystem — there's a package for almost everything.

### Initializing a Project

```bash
npm init -y
```

This creates a `package.json` file — the "identity card" of your project.

```json
{
  "name": "node-basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Installing Packages

```bash
# Install a package
npm install express

# Install multiple packages
npm install express mongoose dotenv

# Install as dev dependency (only for development)
npm install --save-dev nodemon
```

After installing, you'll see:
- `node_modules/` — the actual package files (don't commit this to Git!)
- `package-lock.json` — exact versions locked in (do commit this)

### `node_modules` and `.gitignore`

Create a `.gitignore` file:
```
node_modules/
.env
```

The `node_modules` folder can have thousands of files. Anyone who clones your project just runs `npm install` to get them all back.

### Useful npm Commands

```bash
npm install                # Install all dependencies from package.json
npm install express        # Install a specific package
npm uninstall express      # Remove a package
npm list                   # Show installed packages
npm outdated               # Show packages that have updates
npm update                 # Update packages
```

---

## 🔄 CommonJS vs ES Modules

You'll encounter two module systems. Here's the difference:

### CommonJS (Traditional Node.js)

```javascript
// Exporting (in myModule.js)
const greeting = "Hello";
const add = (a, b) => a + b;

module.exports = { greeting, add };

// Or export default:
module.exports = { greeting, add };

// Importing
const { greeting, add } = require("./myModule");
const express = require("express");
```

### ES Modules (Modern — matches browser JavaScript)

```javascript
// Exporting (in myModule.js)
export const greeting = "Hello";
export const add = (a, b) => a + b;

// Or default export:
export default function myFunction() {}

// Importing
import { greeting, add } from "./myModule.js";
import express from "express";
```

To use ES Modules in Node, either:
- Name your files `.mjs`, OR
- Add `"type": "module"` to your `package.json`

> **In this course**, we'll use **CommonJS** (`require`/`module.exports`) for the backend. It's more common in older Node/Express codebases and easier to transition from. React (via Vite) uses ES Modules (`import`/`export`).

---

## ⚡ Nodemon — Auto-Restart on Save

In development, you don't want to manually stop and restart the server after every change. **Nodemon** watches your files and restarts automatically.

```bash
# Install globally
npm install -g nodemon

# Or as a dev dependency
npm install --save-dev nodemon
```

Add to `package.json`:
```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```

```bash
npm run dev
```

Now every time you save a file, the server restarts automatically.

---

## 🔄 Node.js Event Loop (Beginner Mental Model)

Node.js is **single-threaded** but **non-blocking**. Here's what that means:

```javascript
// This does NOT freeze Node while waiting for the file
fs.readFile("big-file.txt", "utf8", (error, data) => {
  // This runs when the file is done being read
  console.log("File read!");
});

// This runs IMMEDIATELY — Node doesn't wait for the file read
console.log("This runs first!");
```

**Output:**
```
This runs first!
File read!
```

Node says: *"Start reading this file. While it's loading, go do other things. When it's done, call me back."*

This is why Node is great for web servers — it can handle many requests simultaneously without waiting for any one to complete.

---

## ✅ Practice Tasks

**Task 1 — Command Line Tool:**
Create a `greet.js` that reads a name from command line arguments and prints a personalized greeting:
```bash
node greet.js Alice
# Output: Hello, Alice! Welcome to Node.js.
```
*Hint: Use `process.argv[2]` to get the first argument*

**Task 2 — Simple File Logger:**
Create a program that:
- Accepts a message as a command-line arg
- Appends it to a `log.txt` file with a timestamp
- Prints "Logged!" when done

**Task 3 — JSON Data Store:**
Create a simple "database" using a JSON file:
- `readData()` — reads and parses the JSON file
- `writeData(data)` — writes updated data
- `addUser(name)` — adds a user to the array and saves

---

## 🧪 Experiments

**Experiment 1:** What happens when you `require` a module that doesn't exist?
```javascript
const missing = require("./does-not-exist");
```

**Experiment 2:** What's in `process.argv`?
```bash
node -e "console.log(process.argv)"
node myfile.js arg1 arg2
```

**Experiment 3:** Try starting two servers on port 3000:
- Run `node server.js`
- Open another terminal and run `node server.js` again
- What error do you get? Why?

---

## 💡 Challenge Problem

Build a **Mini Todo CLI App**:
- Store todos in a `todos.json` file
- Commands:
  - `node todo.js add "Buy groceries"` — add a todo
  - `node todo.js list` — show all todos
  - `node todo.js done 1` — mark todo #1 as done
  - `node todo.js delete 1` — delete todo #1
- Each todo has: `id`, `text`, `done` (boolean), `createdAt`

---

## 🧠 Key Takeaways

| Concept | Key Point |
|---------|-----------|
| Node.js | Runs JavaScript outside the browser |
| `require` | Import modules (CommonJS style) |
| `module.exports` | Export from a module |
| Built-in modules | `fs`, `path`, `http`, `url`, etc. |
| npm | Install and manage packages |
| `package.json` | Project metadata and dependency list |
| `node_modules/` | Installed packages (never commit this) |
| Nodemon | Auto-restarts server on file save |
| Non-blocking | Node handles multiple operations concurrently |

---

## ➡️ Next Step

You now understand Node.js fundamentals. In the next section, you'll use **Express.js** to build clean, organized APIs — making server development much more manageable.

### → [Section 07: Express — Your First API](./07-express-api.md)

---

*Section 06 of 14 | MERN Stack Learning System*
