# Section 00: Prerequisites & Setup

**← [Back to README](./README.md)** | **Next: [JavaScript Foundations →](./01-javascript-foundations.md)**

---

## 🎯 What This Section Covers

Before writing a single line of MERN code, you need to know:
- What tools to install
- What prior knowledge helps
- How to check your setup is working
- A clear mental model of how MERN fits together

This is a short section — mostly setup. Don't rush through it though. A solid foundation prevents many headaches later.

---

## 🧠 What You Should Already Know

You don't need to be an expert, but you'll have a much better time if you're comfortable with:

| Knowledge Area | Why It Helps | How Much Do You Need? |
|---------------|-------------|----------------------|
| **Basic HTML** | React renders HTML-like code | Know what `<div>`, `<p>`, `<button>` do |
| **Basic CSS** | Styling your app | Know what classes and IDs are |
| **Basic JavaScript** | MERN is all JavaScript | Variables, functions, arrays — we'll review the rest |

> If JavaScript feels shaky, don't panic. **Section 01 will cover everything you need** before touching React or Node.

---

## 🛠️ Tools to Install

### 1. Node.js (Required)

Node.js lets you run JavaScript outside the browser — it's the "N" in MERN, and you also need it to run React and Express.

**Download:** https://nodejs.org  
**Choose:** The **LTS** (Long Term Support) version

**Verify it's installed:**
```bash
node --version
# Should print something like: v20.11.0

npm --version
# Should print something like: 10.2.4
```

> `npm` (Node Package Manager) is installed automatically with Node. It lets you install libraries like React and Express.

---

### 2. VS Code (Recommended Editor)

**Download:** https://code.visualstudio.com

It's free, powerful, and has excellent JavaScript support.

**Recommended Extensions (install inside VS Code):**
- **ES7+ React snippets** — Shortcuts for React code
- **Prettier** — Formats your code automatically
- **GitLens** — Understand code history
- **MongoDB for VS Code** — Browse your database inside VS Code

---

### 3. Git (Version Control)

**Download:** https://git-scm.com

Even as a beginner, start using Git. It lets you track changes and undo mistakes.

**Verify:**
```bash
git --version
# Should print: git version 2.x.x
```

---

### 4. MongoDB (Database)

You have two options:

**Option A — Cloud (Recommended for beginners):**
- Go to https://www.mongodb.com/atlas
- Create a free account
- Set up a **free cluster** (we'll do this in Section 09)

**Option B — Local Install:**
- Download MongoDB Community Server from https://www.mongodb.com/try/download/community
- Also install **MongoDB Compass** (a GUI to view your data)

> We'll set up the database configuration in Section 09. For now, just create your Atlas account.

---

### 5. Postman or Insomnia (API Tester)

When building APIs, you need to test them before connecting the frontend.

- **Postman:** https://www.postman.com/downloads/
- **Insomnia:** https://insomnia.rest/download

> We'll use this starting in Section 07.

---

## 📐 The Big Picture — How MERN Works Together

Before diving in, let's understand what each piece does at a high level.

```
                 YOUR APP
    ┌─────────────────────────────────────────┐
    │                                         │
    │   BROWSER                               │
    │   ┌─────────────────┐                  │
    │   │   REACT (R)     │  ← User sees this│
    │   │   Your UI       │                  │
    │   └────────┬────────┘                  │
    │            │ HTTP Request               │
    │            ▼                            │
    │   SERVER                                │
    │   ┌─────────────────┐                  │
    │   │ NODE.JS (N)     │  ← Runs the code │
    │   │ EXPRESS (E)     │  ← Handles routes│
    │   └────────┬────────┘                  │
    │            │ Query                      │
    │            ▼                            │
    │   DATABASE                              │
    │   ┌─────────────────┐                  │
    │   │  MONGODB (M)    │  ← Stores data   │
    │   └─────────────────┘                  │
    └─────────────────────────────────────────┘
```

**The flow of a typical request:**
1. User clicks a button in **React** (e.g., "Save Note")
2. React sends an **HTTP request** to the Express server
3. **Express** receives it and runs business logic
4. Express queries **MongoDB** to save/retrieve data
5. MongoDB returns data to Express
6. Express sends data back to React
7. **React** displays the updated UI

Right now, this might seem complex. That's fine — by the end of this course, every step will feel natural.

---

## 📂 Project Folder Structure (Preview)

Here's the general folder structure you'll build toward:

```
my-mern-app/
├── client/              ← React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── server/              ← Node/Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── index.js
│
└── README.md
```

Don't worry about this right now. We'll build toward it naturally.

---

## ✅ Setup Checklist

Before moving on, make sure you can check off all of these:

- [ ] Node.js installed (`node --version` works)
- [ ] npm working (`npm --version` works)
- [ ] VS Code (or another editor) installed
- [ ] Git installed (`git --version` works)
- [ ] MongoDB Atlas account created (or local MongoDB installed)
- [ ] Postman or Insomnia installed

---

## 🧪 Quick Sanity Check

Let's make sure Node.js is working. Open your terminal and run:

```bash
node -e "console.log('MERN journey begins! 🚀')"
```

You should see:
```
MERN journey begins! 🚀
```

If you see that — you're ready.

---

## 💡 Tips for Learning Success

1. **Type the code** — Don't copy-paste. Typing forces you to read every character.
2. **Make mistakes on purpose** — Break things. See what error messages appear. This builds intuition.
3. **Google is your friend** — Professional developers Google things constantly. It's not cheating.
4. **One section per session** — Quality over quantity.
5. **Take notes** — Writing things in your own words cements understanding.

---

## ➡️ Next Step

You're set up and ready. Let's make sure your JavaScript foundations are solid before we touch React.

### → [Section 01: JavaScript Foundations](./01-javascript-foundations.md)

---

*Section 00 of 14 | MERN Stack Learning System*
