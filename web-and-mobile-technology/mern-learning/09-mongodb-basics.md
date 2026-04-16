# Section 09: MongoDB — Database Thinking

**← [Express Middleware & Structure](./08-express-middleware.md)** | **Next: [Mongoose →](./10-mongoose.md)**

---

## 🎯 What This Section Covers

You've built an API that stores data in memory — when the server restarts, all data disappears. It's time to add a **real database**.

MongoDB is the "M" in MERN — a **document database** that stores data as flexible JSON-like objects.

By the end, you'll:
- Understand how MongoDB thinks about data differently from spreadsheets/SQL
- Know the core concepts: documents, collections, BSON
- Write basic MongoDB queries
- Set up MongoDB Atlas (cloud database)
- Use MongoDB Compass to visualize your data

---

## 🤔 What Makes MongoDB Different?

You might be familiar with **relational databases** (like Excel spreadsheets or SQL). MongoDB works differently.

### Relational DB (SQL) — Tables

```
Users Table:
| id | name  | email           | city     |
|----|-------|-----------------|----------|
| 1  | Alice | alice@email.com | New York |
| 2  | Bob   | bob@email.com   | London   |

Posts Table:
| id | title   | userId |
|----|---------|--------|
| 1  | Hello   | 1      |
| 2  | World   | 1      |
```

Data is spread across multiple tables and joined with relationships.

### MongoDB — Documents

```json
// One user document — everything in one place
{
  "_id": "64a5f2c1...",
  "name": "Alice",
  "email": "alice@email.com",
  "city": "New York",
  "posts": [
    { "title": "Hello", "createdAt": "2024-01-15" },
    { "title": "World", "createdAt": "2024-01-20" }
  ],
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}
```

Related data can be **embedded** inside a document. Or it can reference another document. You choose based on your use case.

---

## 📚 Core Concepts

### Document

A JSON-like record (BSON format internally). Each document has a unique `_id` field.

```json
{
  "_id": "64a5f2c1e8b1d2a3c4e5f6g7",
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "age": 28,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Collection

A group of related documents (like a table in SQL, but without a fixed schema).

```
database: myApp
  ├── users        ← collection (like a table)
  ├── posts        ← collection
  ├── comments     ← collection
  └── products     ← collection
```

### Database

A container for collections.

---

## ☁️ Setting Up MongoDB Atlas

MongoDB Atlas is MongoDB's cloud hosting service — free tier is perfect for learning.

### Steps:

1. **Go to** https://www.mongodb.com/cloud/atlas
2. **Sign up** for a free account
3. **Create a new project** (e.g., "MERN Learning")
4. **Create a free cluster:**
   - Choose **M0 Free Tier**
   - Pick a region near you
   - Give it a name
5. **Create a database user:**
   - Under "Database Access" → Add New Database User
   - Choose "Password" authentication
   - Save the username and password
6. **Allow your IP address:**
   - Under "Network Access" → Add IP Address
   - For development: "Allow Access From Anywhere" (`0.0.0.0/0`)
7. **Get your connection string:**
   - Click "Connect" on your cluster
   - Choose "Drivers"
   - Copy the connection string (looks like `mongodb+srv://...`)

Save your connection string! It looks like:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myDatabase?retryWrites=true&w=majority
```

---

## 🔍 MongoDB Query Language

Understanding MongoDB's query syntax will help you understand Mongoose (next section), which is built on top of it.

### Basic CRUD in MongoDB Shell

Open MongoDB Compass, connect to your cluster, and use the shell.

**Create (Insert):**
```javascript
// Insert one document
db.users.insertOne({
  name: "Alice Johnson",
  email: "alice@example.com",
  age: 28,
  role: "developer"
});

// Insert multiple documents
db.users.insertMany([
  { name: "Bob Smith", email: "bob@example.com", age: 32, role: "designer" },
  { name: "Charlie", email: "charlie@example.com", age: 25, role: "developer" }
]);
```

**Read (Find):**
```javascript
// Find ALL documents
db.users.find();

// Find with a filter
db.users.find({ role: "developer" });

// Find one document
db.users.findOne({ email: "alice@example.com" });

// Find with multiple conditions (AND)
db.users.find({ role: "developer", age: { $gte: 25 } });

// Find with OR
db.users.find({
  $or: [
    { role: "developer" },
    { role: "designer" }
  ]
});
```

**Update:**
```javascript
// Update one document
db.users.updateOne(
  { email: "alice@example.com" },  // filter
  { $set: { age: 29 } }            // what to update
);

// Update multiple documents
db.users.updateMany(
  { role: "developer" },
  { $set: { department: "Engineering" } }
);

// Replace an entire document
db.users.replaceOne(
  { email: "bob@example.com" },
  { name: "Robert Smith", email: "bob@example.com", age: 33 }
);
```

**Delete:**
```javascript
// Delete one
db.users.deleteOne({ email: "charlie@example.com" });

// Delete many
db.users.deleteMany({ role: "inactive" });
```

---

## 🔍 Query Operators

MongoDB has many operators for powerful queries:

```javascript
// Comparison
{ age: { $gt: 25 } }    // greater than
{ age: { $gte: 25 } }   // greater than or equal
{ age: { $lt: 30 } }    // less than
{ age: { $lte: 30 } }   // less than or equal
{ age: { $ne: 25 } }    // not equal
{ role: { $in: ["developer", "designer"] } }  // in array

// Logical
{ $and: [{ dept: "Eng" }, { age: { $gt: 25 } }] }
{ $or: [{ role: "admin" }, { role: "manager" }] }
{ role: { $not: { $eq: "intern" } } }

// Array
{ skills: "JavaScript" }         // array contains "JavaScript"
{ skills: { $all: ["JS", "Node"] } }  // array contains all

// Field existence
{ phone: { $exists: true } }
{ phone: { $exists: false } }

// Regex (text search)
{ name: { $regex: "alice", $options: "i" } }  // case insensitive
```

---

## 📊 Projection — Choose What Fields to Return

```javascript
// Return only name and email (1 = include, 0 = exclude)
db.users.find({}, { name: 1, email: 1, _id: 0 });

// Return everything EXCEPT password
db.users.find({}, { password: 0 });
```

---

## 🔄 Sorting, Limiting, Skipping

```javascript
// Sort by name ascending (1) or descending (-1)
db.users.find().sort({ name: 1 });
db.users.find().sort({ createdAt: -1 });  // newest first

// Limit results
db.users.find().limit(10);

// Skip (for pagination: page 2 with 10 per page)
db.users.find().skip(10).limit(10);

// Chain them all
db.users
  .find({ role: "developer" })
  .sort({ name: 1 })
  .skip(0)
  .limit(10);
```

---

## 📐 Data Modeling: Embed vs. Reference

One of the most important MongoDB decisions is whether to **embed** related data or **reference** it.

### Embedding (Denormalization)

Put related data inside the same document:

```json
{
  "_id": "user123",
  "name": "Alice",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  },
  "socialLinks": [
    { "platform": "github", "url": "github.com/alice" },
    { "platform": "twitter", "url": "twitter.com/alice" }
  ]
}
```

**When to embed:**
- Data is always accessed together
- Data is "owned by" the parent (address of a user)
- 1-to-few relationship
- Data doesn't change often

### Referencing (Normalization)

Store related data in a separate collection and reference by ID:

```json
// User document
{
  "_id": "user123",
  "name": "Alice",
  "postIds": ["post1", "post2", "post3"]
}

// Post document (in posts collection)
{
  "_id": "post1",
  "userId": "user123",
  "title": "Hello World",
  "content": "..."
}
```

**When to reference:**
- Data is accessed independently
- Many-to-many relationships
- Data is shared by multiple documents
- Data is large or grows unbounded (a user could have thousands of posts)

---

## 🧩 Practical Design: Notes App Schema

Let's design the schema for the Notes App we'll build in Section 12:

```javascript
// User document
{
  "_id": ObjectId,
  "name": String,
  "email": String (unique),
  "password": String (hashed),
  "createdAt": Date
}

// Note document
{
  "_id": ObjectId,
  "userId": ObjectId,  // Reference to User
  "title": String,
  "content": String,
  "tags": [String],
  "isPinned": Boolean,
  "createdAt": Date,
  "updatedAt": Date
}
```

**Why reference?** A user could have hundreds of notes. If notes were embedded in the user document, it would grow too large. References keep things clean.

---

## 🔭 Using MongoDB Compass

MongoDB Compass is a visual tool to explore your data.

1. **Connect** using your Atlas connection string
2. **Browse** collections as tables or JSON
3. **Create** documents manually
4. **Run queries** with a visual filter builder
5. **Aggregate** data visually

It's invaluable for debugging and understanding your data structure.

---

## ✅ Practice Tasks

**Task 1 — Design a Schema:**
Design a MongoDB schema for a **Blog Platform** with:
- Authors (name, email, bio, avatar)
- Posts (title, content, author, tags, publishedAt, status: draft/published)
- Comments (content, author name, post reference, createdAt)

Decide what to embed and what to reference. Write it as plain JSON examples.

**Task 2 — Query Practice:**
Using Compass or the Atlas query console, practice:
- Find all posts with tag "JavaScript"
- Find posts created in the last 7 days
- Find authors whose name starts with "A"
- Find the 5 most recent posts

**Task 3 — Aggregation Basics:**
Try this aggregation in Compass to count users by role:
```javascript
[
  { $group: { _id: "$role", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]
```

---

## 🧪 Experiments

**Experiment 1:** Insert a document with missing fields. Does MongoDB complain?
```javascript
db.users.insertOne({ name: "Dave" });  // No email, no role
```

**Experiment 2:** Insert two documents with the same `email` field. Does MongoDB prevent duplicates by default? (It doesn't — uniqueness is enforced by **indexes**, which Mongoose handles for you)

**Experiment 3:** Update a field that doesn't exist:
```javascript
db.users.updateOne(
  { name: "Dave" },
  { $set: { newField: "surprise!" } }
);
```
What happens? Is it an error or does it create the field?

---

## 💡 Challenge Problem

Design and populate a MongoDB database for an **E-commerce store**:

1. Design schemas for: Products, Categories, Users, Orders
2. Think through the relationships:
   - Products belong to Categories
   - Orders belong to Users
   - Orders contain multiple Products with quantities
3. Insert at least 5 products, 2 categories, 3 users, and 2 orders
4. Write queries to:
   - Find all products under $50 in category "Electronics"
   - Find all orders for a specific user
   - Count how many orders are in "pending" status

---

## 🧠 Key Takeaways

| Concept | Key Point |
|---------|-----------|
| Document | A JSON-like record (a single item) |
| Collection | A group of related documents |
| `_id` | Every document has a unique identifier |
| `insertOne/Many` | Create documents |
| `find/findOne` | Query documents |
| `updateOne/Many` | Update documents (use `$set`) |
| `deleteOne/Many` | Remove documents |
| Embed vs. Reference | Design choice based on access patterns |
| Atlas | MongoDB's free cloud hosting |

---

## ➡️ Next Step

You understand how MongoDB works and how to design schemas. In the next section, **Mongoose** brings MongoDB into your Express app with schemas, validation, and a powerful query API.

### → [Section 10: Mongoose — Structured Data](./10-mongoose.md)

---

*Section 09 of 14 | MERN Stack Learning System*
