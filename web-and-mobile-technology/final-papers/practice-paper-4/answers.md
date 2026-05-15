# Practice Paper 4 — Answer Sheet
## SE2020 — Web and Mobile Technology

---

## QUESTION 1

### 1(a) HTTP & DNS

**i. DNS Resolution:**
DNS (Domain Name System) translates human-readable domain names (like `www.api.lk`) into IP addresses that computers use to route traffic.

Steps:
1. Browser checks its **local DNS cache** — if recently visited, the IP is stored.
2. Not cached → OS checks the **local hosts file** (`/etc/hosts` on Linux).
3. Not found → query sent to the **Recursive DNS Resolver** (usually your ISP's DNS server).
4. Resolver asks a **Root Name Server** (`.`) — directs to the `.lk` TLD name server.
5. TLD name server directs to the **Authoritative Name Server** for `api.lk`.
6. Authoritative server returns the IP address (e.g., `203.94.95.10`).
7. Browser connects to that IP and makes its HTTP request.

**ii. HTTP vs HTTPS:**
| | HTTP | HTTPS |
|---|---|---|
| Data | Plain text — readable by anyone on the network | Encrypted using **TLS** — unreadable in transit |
| Port | 80 | 443 |
| Security | Vulnerable to eavesdropping and man-in-the-middle attacks | Data integrity and confidentiality guaranteed |

Production APIs must use HTTPS because: API requests often carry **sensitive data** (tokens, passwords, payment info). Plain HTTP exposes this data to any network observer.

---

### 1(b) Promises & async/await

**i. What is a Promise:**
A Promise is a JavaScript object representing the **eventual result** of an asynchronous operation. It has three states:
- `pending` — operation has not completed yet.
- `fulfilled` (resolved) — operation completed successfully; value is available.
- `rejected` — operation failed; error is available.

**ii. Rewriting callback hell:**

**Promise chaining version:**
```javascript
login(username, password)
  .then(user => getProfile(user.id))
  .then(profile => console.log(profile.name))
  .catch(err => console.error('Error:', err));
```

**async/await version:**
```javascript
async function loadUserProfile(username, password) {
  try {
    const user = await login(username, password);
    const profile = await getProfile(user.id);
    console.log(profile.name);
  } catch (err) {
    console.error('Error:', err);
  }
}
```

**iii. Promise.all:**
`Promise.all([p1, p2])` runs **multiple Promises in parallel** and resolves when ALL of them fulfill, or rejects immediately if any one of them rejects. Use it when tasks are independent and can run simultaneously (e.g., fetching user data and product data at the same time).

---

### 1(c) Box Model & Positioning

**i. Content width with `box-sizing: border-box`:**
With `border-box`, the total `width: 400px` **includes** padding and border.

- Total width: 400px
- Left padding: 30px + Right padding: 30px = 60px
- Left border: 5px + Right border: 5px = 10px
- **Content width = 400 - 60 - 10 = 330px**

**ii. position: relative vs absolute:**
- **`position: relative`**: The element stays in the normal document flow but can be offset using `top/left/right/bottom` relative to **where it would normally be**. It still occupies its original space.
- **`position: absolute`**: The element is removed from the document flow. It is positioned relative to its **nearest ancestor that has `position: relative` (or `absolute` or `fixed`)**.

If no positioned ancestor exists, it positions relative to the `<html>` element (the viewport).

So, to make an absolutely-positioned child use its parent as reference, give the parent `position: relative`.

---

### 1(d) Objects & Array Methods

```javascript
const orders = [
  { id: 1, customer: "Kasun",   total: 4500,  status: "delivered" },
  { id: 2, customer: "Nimasha", total: 12000, status: "pending" },
  { id: 3, customer: "Amal",    total: 2300,  status: "delivered" },
  { id: 4, customer: "Sanduni", total: 8700,  status: "pending" }
];

// 1. Filter delivered orders
const delivered = orders.filter(o => o.status === "delivered");
console.log(delivered);  // [ {id:1,...}, {id:3,...} ]

// 2. Total revenue of ALL orders
const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
console.log("Total Revenue: Rs." + totalRevenue);  // Rs.27500

// 3. Formatted string for each order
orders.forEach(o => {
  console.log(`Order #${o.id}: ${o.customer} — Rs.${o.total}`);
});
// Output:
// Order #1: Kasun — Rs.4500
// Order #2: Nimasha — Rs.12000
// Order #3: Amal — Rs.2300
// Order #4: Sanduni — Rs.8700
```

---

### 1(e) Responsive Hero Section

```css
/* Default (desktop): > 768px */
.hero {
  background-color: #1a1a2e;
  font-size: 3rem;
  padding: 80px;
  color: white;
  text-align: center;
}

/* Mobile: ≤ 768px */
@media (max-width: 768px) {
  .hero {
    background-color: #e94560;
    font-size: 1.5rem;
    padding: 30px;
  }
}
```

---

## QUESTION 2

### 2(a) CAP Theorem

**i. CAP Theorem:**
The CAP theorem states that a distributed data system can **simultaneously guarantee only two** of these three properties:
- **Consistency (C):** Every read returns the most recent write. All nodes see the same data at the same time.
- **Availability (A):** Every request gets a response (success or failure) — even during node failures.
- **Partition Tolerance (P):** The system continues operating even if network partitions (message loss between nodes) occur.

**ii. MongoDB as CP:**
MongoDB prioritizes Consistency and Partition Tolerance. In practice: if a primary node fails and no new primary has been elected yet, MongoDB temporarily **refuses requests** (becomes unavailable) rather than returning stale or inconsistent data. It sacrifices availability to maintain correctness.

---

### 2(b) Mongoose Schemas

```javascript
const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  sku: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ['electronics', 'furniture', 'clothing', 'food']
  },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 0, min: 0 },
  supplier: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// StockMovement Schema
const stockMovementSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  movementType: {
    type: String,
    enum: ['in', 'out'],
    required: true
  },
  quantity: { type: Number, required: true, min: 1 },
  date: { type: Date, default: Date.now },
  note: { type: String }
});

const StockMovement = mongoose.model('StockMovement', stockMovementSchema);
```

---

### 2(c) CRUD Queries

**i. Low-stock electronics:**
```javascript
const products = await Product.find({
  category: 'electronics',
  stock: { $lt: 10 }
});
```

**ii. Increase stock with `$inc`:**
```javascript
await Product.updateOne(
  { sku: 'SKU-001' },
  { $inc: { stock: 50 } }
);
```

**iii. Recent "out" movements:**
```javascript
const movements = await StockMovement.find({ movementType: 'out' })
  .populate('product', 'name category')
  .sort({ date: -1 })
  .limit(5);
```

---

### 2(d) Category Aggregation

```javascript
db.products.aggregate([
  // Group by category
  {
    $group: {
      _id: "$category",
      productCount: { $sum: 1 },
      totalStockValue: {
        $sum: { $multiply: ["$price", "$stock"] }
      },
      avgPrice: { $avg: "$price" }
    }
  },
  // Sort by total stock value descending
  { $sort: { totalStockValue: -1 } },
  // Clean up output
  {
    $project: {
      category: "$_id",
      productCount: 1,
      totalStockValue: { $round: ["$totalStockValue", 2] },
      avgPrice: { $round: ["$avgPrice", 2] },
      _id: 0
    }
  }
]);
```

---

### 2(e) Update Operators

**i. Set note with `$set`:**
```javascript
db.stockMovements.updateOne(
  { _id: ObjectId("XYZ") },
  { $set: { note: "Urgent restock" } }
);
```

**ii. Remove note field with `$unset`:**
```javascript
db.stockMovements.updateMany(
  { movementType: "in" },
  { $unset: { note: "" } }
);
// $unset removes the field entirely from matching documents
// The value ("") is ignored — any value works
```

---

## QUESTION 3

### 3(a) Middleware & API Key

**i. `express.json()` purpose:**
`express.json()` is built-in middleware that parses the request body as **JSON** and makes it available at `req.body`. Without it, `req.body` is `undefined` — the server cannot read the data the client sent.

**ii. API Key middleware:**
```javascript
const express = require('express');
const app = express();
app.use(express.json());

// API key middleware — applied only to /api paths
function apiKeyMiddleware(req, res, next) {
  const key = req.headers['x-api-key'];
  if (!key || key !== 'inv-secret') {
    return res.status(401).json({
      error: 'Unauthorized: missing or invalid X-API-KEY header'
    });
  }
  next();
}

// Apply only to /api routes
app.use('/api', apiKeyMiddleware);

app.get('/api/products', (req, res) => res.json({ products: [] }));

app.listen(3000);
```

---

### 3(b) Error Handling

**i. Unhandled async errors:**
If an `async` route handler throws an error without `try/catch`, the rejected Promise is **unhandled**. In older Node.js versions, this crashes the process. In newer versions, it emits an `UnhandledPromiseRejection` warning and the request hangs with no response sent to the client.

**ii. Global error handler:**
```javascript
// Must be registered AFTER all routes, with 4 parameters
app.use((err, req, res, next) => {
  console.error('Error:', err.message);

  // Mongoose validation errors → 400 Bad Request
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation failed',
      details: err.message
    });
  }

  // All other errors → 500 Internal Server Error
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});
```

In routes, trigger it with: `next(err)` inside the `catch` block.

---

### 3(c) Product REST API

```javascript
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// 1. POST /products — Create
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. GET /products — List (optional category filter)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. PUT /products/:id — Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. DELETE /products/:id — Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
```

---

### 3(d) REST Design

| # | Original | Problem | Corrected |
|---|---|---|---|
| 1 | `GET /getProducts` | URL should be a noun, not a verb — REST URLs identify resources | `GET /products` |
| 2 | `POST /deleteProduct/5` | Deletion should use `DELETE` method, not `POST` | `DELETE /products/5` |
| 3 | `GET /products?category=electronics&page=1` | ✅ No problem — query params for filtering and pagination is correct REST | No change |
| 4 | `PUT /product/5/updateStock` | Resource name should be plural (`/products`); `updateStock` is a verb — use a sub-resource instead | `PATCH /products/5/stock` |

---

## QUESTION 4

### 4(a) Controlled Components

**i. Controlled vs Uncontrolled:**
- **Controlled component:** React manages the input's value through `state`. The input's `value` is set from state, and `onChange` updates the state. React is the "single source of truth".
- **Uncontrolled component:** The DOM manages the input's value. You use a `ref` to read the value when needed (e.g., `ref.current.value`). React doesn't re-render on every keystroke.

Controlled components are preferred in React because they allow validation, formatting, and derived state on every change.

**ii. LoginForm:**
```javascript
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();    // prevent page reload

    if (!email.trim() || !password.trim()) {
      setError('All fields are required.');
      return;
    }

    setError('');
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label>Email</label>
        <input type="email" value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password}
          onChange={e => setPassword(e.target.value)} />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

---

### 4(b) useEffect Patterns

**i. When useEffect runs:**
After **every render where `orderId` has changed** — including the first render (mount). The `useEffect` runs **after** the component renders to the DOM.

**ii. When it re-runs and why:**
It re-runs whenever `orderId` changes (it's in the dependency array `[orderId]`). React compares the dependency value after each render — if it changed, the effect runs again. This allows the component to fetch fresh data when a different order is selected.

**iii. Fix with cleanup using a flag:**
```javascript
useEffect(() => {
  let isMounted = true;   // flag to track if component is still mounted

  fetch(`/api/orders/${orderId}`)
    .then(r => r.json())
    .then(data => {
      if (isMounted) {    // only update state if still mounted
        setOrder(data);
      }
    });

  // Cleanup: runs when component unmounts or orderId changes
  return () => {
    isMounted = false;
  };
}, [orderId]);
```

---

### 4(c) Redux Toolkit Counter

```javascript
import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

// 1. Counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state)    => { state.value = 0; }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

// 2. Counter component
function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
```

---

### 4(d) React Native AddProductScreen

```javascript
import { useState } from 'react';
import {
  View, Text, TextInput, Pressable,
  StyleSheet, KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';

export default function AddProductScreen() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSave = () => {
    // Validate
    if (!productName.trim() || !price.trim() || !category.trim()) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    setError('');
    const product = { productName, price: parseFloat(price), category };
    console.log('New product:', product);
    setSuccess('Product saved successfully!');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Add New Product</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {success ? <Text style={styles.success}>{success}</Text> : null}

        <Text style={styles.label}>Product Name</Text>
        <TextInput
          style={styles.input}
          value={productName}
          onChangeText={setProductName}
          placeholder="Enter product name"
        />

        <Text style={styles.label}>Price (Rs.)</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="0.00"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="e.g. electronics"
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>Save Product</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafb',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonPressed: {
    backgroundColor: '#1d4ed8',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    color: '#dc2626',
    marginBottom: 12,
    textAlign: 'center',
  },
  success: {
    color: '#16a34a',
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  }
});
```

---

*End of Practice Paper 4 Answers*
