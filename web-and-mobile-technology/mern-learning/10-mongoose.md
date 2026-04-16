# Section 10: Mongoose — Structured Data

**← [MongoDB Basics](./09-mongodb-basics.md)** | **Next: [Connecting Frontend & Backend →](./11-connecting-stack.md)**

---

## 🎯 What This Section Covers

MongoDB itself has no enforced structure — you can insert anything into a collection. **Mongoose** adds structure, validation, and a developer-friendly API on top of MongoDB.

Mongoose is the bridge between your Express server and MongoDB. By the end, you'll:
- Connect your Express app to MongoDB with Mongoose
- Define Schemas and Models
- Perform real CRUD operations with a database
- Validate data before saving
- Use relationships between collections

---

## 🤔 Why Mongoose?

Plain MongoDB driver:
```javascript
const user = { name: "Alice" };  // No validation - anything goes
db.collection("users").insertOne(user);
```

With Mongoose:
```javascript
// You define: what fields exist, what type, what's required
const User = mongoose.model("User", new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, max: 120 }
}));

// Now Mongoose validates before saving!
const user = new User({ name: "Alice" });  // Missing email → validation error
```

---

## 🔗 Connecting to MongoDB

```bash
npm install mongoose
```

Create `config/db.js`:

```javascript
// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);  // Exit the process if DB connection fails
  }
};

module.exports = connectDB;
```

In `index.js`:
```javascript
require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");

const app = express();

// Connect to database FIRST
connectDB();

app.use(express.json());

// ...routes

app.listen(3000, () => console.log("Server running"));
```

In `.env`:
```
MONGO_URI=mongodb+srv://username:password@cluster0.example.mongodb.net/mern-notes?retryWrites=true&w=majority
```

---

## 📐 Defining a Schema

A **Schema** defines the structure of documents in a collection:

```javascript
// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"]
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"],
      default: "user"
    },
    age: {
      type: Number,
      min: [0, "Age cannot be negative"],
      max: [120, "Age seems invalid"]
    },
    isActive: {
      type: Boolean,
      default: true
    },
    tags: [String],  // Array of strings
    address: {       // Nested object
      street: String,
      city: String,
      country: String
    }
  },
  {
    timestamps: true  // Automatically adds createdAt & updatedAt
  }
);

// Create the Model
const User = mongoose.model("User", userSchema);

module.exports = User;
```

### Schema Field Types

```javascript
{
  name: String,
  age: Number,
  isActive: Boolean,
  createdAt: Date,
  tags: [String],                        // Array of strings
  scores: [Number],                      // Array of numbers
  meta: mongoose.Schema.Types.Mixed,     // Any type
  userId: mongoose.Schema.Types.ObjectId // Reference to another document
}
```

---

## ⚡ Performing CRUD with Mongoose

Once you have a Model, the operations are clean and expressive.

### Create

```javascript
// Method 1: Create and save
const user = new User({
  name: "Alice Johnson",
  email: "alice@example.com",
  password: "hashed123",
  role: "developer"
});
const saved = await user.save();
console.log(saved._id);

// Method 2: Create in one shot
const user = await User.create({
  name: "Bob Smith",
  email: "bob@example.com",
  password: "hashed456"
});
```

### Read

```javascript
// Find all
const users = await User.find();

// Find with filter
const developers = await User.find({ role: "developer" });

// Find one
const user = await User.findOne({ email: "alice@example.com" });

// Find by ID
const user = await User.findById("64a5f2c1...");

// Projection — only return specific fields
const users = await User.find({}, "name email -_id");  // include name, email; exclude _id

// Sorting, limiting, skipping
const users = await User.find()
  .sort({ createdAt: -1 })  // Newest first
  .limit(10)
  .skip(0);

// Count
const count = await User.countDocuments({ role: "developer" });
```

### Update

```javascript
// Find by ID and update
const user = await User.findByIdAndUpdate(
  "64a5f2c1...",
  { $set: { role: "admin" } },
  { new: true }  // ← Return the updated document (default is old)
);

// Find one and update
const user = await User.findOneAndUpdate(
  { email: "alice@example.com" },
  { $set: { name: "Alice Williams" } },
  { new: true, runValidators: true }  // ← runValidators: re-validate on update
);

// Update without returning the document
await User.updateMany({ isActive: false }, { $set: { role: "inactive" } });
```

### Delete

```javascript
// Find by ID and delete
const user = await User.findByIdAndDelete("64a5f2c1...");

// Find one and delete
await User.findOneAndDelete({ email: "alice@example.com" });

// Delete many
await User.deleteMany({ isActive: false });
```

---

## 🏗️ Updating Controllers to Use the Database

Let's upgrade the controller from Section 08 to use Mongoose:

```javascript
// controllers/userController.js
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

// GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  const { role, search, page = 1, limit = 10 } = req.query;

  const filter = {};
  if (role) filter.role = role;
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  const skip = (page - 1) * limit;
  const [users, total] = await Promise.all([
    User.find(filter, "-password")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit)),
    User.countDocuments(filter)
  ]);

  res.json({
    data: users,
    pagination: {
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    }
  });
});

// GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id, "-password");
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// POST /api/users
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if email already exists
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "Email already in use" });

  const user = await User.create({ name, email, password, role });

  // Don't send password back
  const { password: _, ...userData } = user.toObject();
  res.status(201).json(userData);
});

// PUT /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: true }
  ).select("-password");

  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User deleted" });
});

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
```

---

## 🔗 Relationships — Populate

When documents reference each other, Mongoose's `populate()` lets you join them.

```javascript
// models/Note.js
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",     // ← Reference to the User model
    required: true
  },
  tags: [String],
  isPinned: { type: Boolean, default: false }
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
```

```javascript
// controllers/noteController.js

// Get all notes with their user info populated
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find()
    .populate("userId", "name email")  // Populate userId with name and email
    .sort({ isPinned: -1, createdAt: -1 });

  res.json(notes);
});

// The response will look like:
// {
//   "_id": "...",
//   "title": "My Note",
//   "userId": {           ← Full user object (not just ID)
//     "_id": "...",
//     "name": "Alice",
//     "email": "alice@example.com"
//   }
// }
```

---

## 🔍 Schema Hooks (Middleware)

Mongoose lets you run code before or after save operations:

```javascript
const bcrypt = require("bcryptjs");

userSchema.pre("save", async function(next) {
  // Only hash password if it was modified
  if (!this.isModified("password")) return next();

  // Hash the password before saving
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// This pre-save hook runs automatically every time user.save() is called
```

### Custom Instance Methods

```javascript
// Add a method to the schema
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Then use it:
const user = await User.findOne({ email });
const isMatch = await user.comparePassword("enteredPassword");
```

### Custom Static Methods

```javascript
// Static method on the Model itself
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Use it:
const user = await User.findByEmail("alice@example.com");
```

---

## 📋 Data Validation in Practice

Building on what you've learned, here's a comprehensive Note model:

```javascript
// models/Note.js
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"]
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      maxlength: [5000, "Content cannot exceed 5000 characters"]
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    tags: {
      type: [String],
      validate: {
        validator: function(tags) {
          return tags.length <= 10;  // Max 10 tags
        },
        message: "Cannot have more than 10 tags"
      }
    },
    isPinned: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      enum: ["default", "red", "green", "blue", "yellow", "purple"],
      default: "default"
    }
  },
  {
    timestamps: true
  }
);

// Index for faster queries
noteSchema.index({ userId: 1, createdAt: -1 });
noteSchema.index({ title: "text", content: "text" });  // Text search index

module.exports = mongoose.model("Note", noteSchema);
```

---

## ✅ Practice Tasks

**Task 1 — Products Model:**
Create a Mongoose model for products with:
- Name (required, max 100 chars)
- Price (required, positive number)
- Description (optional, max 1000 chars)
- Category (enum: electronics, clothing, food, books, other)
- Stock quantity (number, default 0)
- In stock (virtual that returns true if stock > 0)
- Timestamps

**Task 2 — Full Products CRUD:**
Using your model:
- Update the products controller from Section 07 to use MongoDB
- Test all CRUD operations with Postman
- Verify data persists after server restart

**Task 3 — Data Relationships:**
Create an `Order` model that:
- References a User (who placed the order)
- Contains an array of `{ productId, quantity, price }` line items
- Has a status enum (pending, confirmed, shipped, delivered)
- Has a total price (compute it with a pre-save hook or virtual)

---

## 🧪 Experiments

**Experiment 1:** What happens when you violate validation?
```javascript
const user = await User.create({ name: "x" });  // Too short, missing email
```
Look at the error object — what does it contain?

**Experiment 2:** What happens when you update without `runValidators: true`?
```javascript
// Will this succeed even if email format is wrong?
await User.findByIdAndUpdate(id, { email: "notanemail" });
```

**Experiment 3:** What if you try to insert a duplicate email?
```javascript
await User.create({ email: "existing@email.com", name: "Test", password: "123456" });
// What error code does MongoDB return?
```

---

## 💡 Challenge Problem

Build a **Blog API** with Mongoose:

Models:
- **Author**: name, email, bio, avatarUrl, createdAt
- **Post**: title, content, authorId (ref), tags, status (draft/published), publishedAt, viewCount
- **Comment**: content, authorName, email, postId (ref), createdAt

Features:
- Full CRUD for posts
- When creating a post, validate all fields
- `GET /api/posts?status=published&tag=javascript&page=1` — filter and paginate
- `GET /api/posts/:id` — include author info (use populate)
- `POST /api/posts/:id/comments` — add a comment to a post (embedded in post or separate collection — you decide)
- Text search: `GET /api/posts/search?q=keyword`

---

## 🧠 Key Takeaways

| Concept | Key Point |
|---------|-----------|
| Schema | Defines fields, types, validation, defaults |
| Model | The class to do CRUD — `User.find()`, `User.create()` |
| `timestamps: true` | Auto-adds `createdAt` and `updatedAt` |
| `findByIdAndUpdate` | Find + update in one operation |
| `{ new: true }` | Returns updated doc (not original) |
| `populate()` | Fetch referenced documents |
| Pre-save hook | Run code before a document is saved |
| `unique: true` | MongoDB index for uniqueness |

---

## ➡️ Next Step

Your backend now has real data persistence. The last major step is connecting the React frontend to this Express/MongoDB backend — bringing the whole MERN stack together.

### → [Section 11: Connecting Frontend & Backend](./11-connecting-stack.md)

---

*Section 10 of 14 | MERN Stack Learning System*
