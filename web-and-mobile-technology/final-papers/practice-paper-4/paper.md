# SE2020 — Web and Mobile Technology
## Practice Paper 4 — Backend Focus & React State
### Duration: 2 Hours | Total Marks: 100 | Difficulty: ⭐⭐⭐ Medium-Hard

> **Instructions:** Answer ALL four questions. Each question carries 25 marks.

---

## QUESTION 1 — Web, JavaScript & CSS (25 marks)

### 1(a) HTTP — Client-Server & Protocols [5 marks]

i. What is the **DNS (Domain Name System)**? Explain the steps involved when a browser resolves `www.api.lk` to an IP address. *(3 marks)*

ii. What is the difference between **HTTP** and **HTTPS**? Why should production APIs always use HTTPS? *(2 marks)*

---

### 1(b) JavaScript — Promises & async/await [7 marks]

i. What is a **Promise** in JavaScript? What are its three possible states? *(2 marks)*

ii. The following code uses nested callbacks (callback hell). Rewrite it first using **Promise chaining**, then using **async/await**:

```javascript
// Callback version
login(username, password, function(user) {
  getProfile(user.id, function(profile) {
    console.log(profile.name);
  });
});
```
*(4 marks)*

iii. What does `Promise.all([p1, p2])` do? When would you use it? *(1 mark)*

---

### 1(c) CSS — Box Model & Positioning [5 marks]

i. A developer writes:
```css
.box {
  box-sizing: border-box;
  width: 400px;
  padding: 30px;
  border: 5px solid black;
}
```
With `box-sizing: border-box`, what is the **content width** (the actual space available for content inside the box)? Show working. *(2 marks)*

ii. Explain the difference between `position: relative` and `position: absolute` in CSS. When does an absolutely-positioned element use its parent as the reference point? *(3 marks)*

---

### 1(d) JavaScript — Objects & Array Methods [4 marks]

Given:
```javascript
const orders = [
  { id: 1, customer: "Kasun", total: 4500, status: "delivered" },
  { id: 2, customer: "Nimasha", total: 12000, status: "pending" },
  { id: 3, customer: "Amal", total: 2300, status: "delivered" },
  { id: 4, customer: "Sanduni", total: 8700, status: "pending" }
];
```

Write JavaScript to:
1. Filter only `"delivered"` orders.
2. Get the total revenue of **all** orders using `reduce`.
3. Log a formatted string for each order: `"Order #1: Kasun — Rs.4500"` using `forEach`.

*(4 marks)*

---

### 1(e) CSS — Responsive Layout with Media Queries [4 marks]

Write CSS for a `.hero` section that:
- On desktop (> 768px): has a `background-color` of `#1a1a2e`, font size `3rem`, and `padding: 80px`.
- On mobile (≤ 768px): `background-color` changes to `#e94560`, font size becomes `1.5rem`, and `padding: 30px`.

Use a media query. *(4 marks)*

---

## QUESTION 2 — MongoDB & Mongoose (25 marks)

### Scenario: **InventoryPro — Warehouse Stock System**

Collections:
- `products`: `{ name, sku, category, price, stock, supplier: { name, email } }`
- `stockMovements`: `{ product (ref), movementType, quantity, date, note }`

`movementType` can be `"in"` (stock received) or `"out"` (stock dispatched).

---

### 2(a) CAP Theorem [3 marks]

i. Briefly explain the **CAP Theorem** (Consistency, Availability, Partition Tolerance). *(2 marks)*

ii. MongoDB is categorized as a **CP** system. What does this mean in practice? *(1 mark)*

---

### 2(b) Mongoose Schemas [8 marks]

Write complete Mongoose schemas for both `Product` and `StockMovement`:

**Product:**
- `name`: String, required, trimmed
- `sku`: String, required, unique
- `category`: String, one of `['electronics', 'furniture', 'clothing', 'food']`
- `price`: Number, required, min 0
- `stock`: Number, default 0, min 0
- `supplier`: embedded object with `name` (String, required) and `email` (String, required)
- Enable timestamps

**StockMovement:**
- `product`: reference to Product, required
- `movementType`: String, enum `['in', 'out']`, required
- `quantity`: Number, required, min 1
- `date`: Date, default now
- `note`: String

*(4 marks each)*

---

### 2(c) CRUD Queries [6 marks]

Write Mongoose queries for each:

i. Find all products in category `"electronics"` with `stock` less than 10. *(2 marks)*

ii. When new stock arrives: increase the `stock` of product with `sku: "SKU-001"` by 50 using `$inc`. *(2 marks)*

iii. Find the 5 most recently created stock movements of type `"out"`, with product `name` and `category` populated. *(2 marks)*

---

### 2(d) Aggregation Pipeline [5 marks]

Write an aggregation that calculates, **per category**, the:
- Total number of products.
- Total stock value (sum of `price × stock` for all products in that category).
- Average price.

Sort results by total stock value descending. *(5 marks)*

---

### 2(e) MongoDB Update Operators [3 marks]

Write the MongoDB update query (MQL) for each:

i. Set the `note` on a specific stock movement (ID: `XYZ`) to `"Urgent restock"`. *(1 mark)*

ii. Remove the `note` field entirely from all `StockMovement` documents that have `movementType: "in"`. Use `$unset`. *(2 marks)*

---

## QUESTION 3 — Node.js & Express.js (25 marks)

### Scenario: **InventoryPro API**

---

### 3(a) Express Architecture & Middleware [6 marks]

i. What is the purpose of `express.json()` middleware? What happens if you don't include it when a client sends a `POST` request with a JSON body? *(2 marks)*

ii. Write a middleware function that **validates a required `X-API-KEY` header** on every request to the `/api` path. If the header is missing or doesn't equal `"inv-secret"`, return `401 Unauthorized`. *(4 marks)*

---

### 3(b) Async Patterns & Error Handling [5 marks]

i. What happens when an `async` route handler throws an error and there is no `try/catch`? *(1 mark)*

ii. Write a **global error-handling middleware** for the InventoryPro API that:
   - Catches errors passed via `next(err)`.
   - Handles Mongoose `ValidationError` with a `400` response.
   - Returns `500` for all other errors.
   - Logs the error message with `console.error`.
   *(4 marks)*

---

### 3(c) Complete Product REST API [10 marks]

Build a complete Express router for `products`:

1. `POST /products` — Create a product. *(2 marks)*
2. `GET /products` — List all products, with optional query param `?category=electronics` to filter by category. *(3 marks)*
3. `PUT /products/:id` — Update product details. *(2 marks)*
4. `DELETE /products/:id` — Delete product by ID. *(3 marks)*

*(Use async/await, proper error handling, and 404 checks throughout)*

---

### 3(d) REST Design Principles [4 marks]

Evaluate the following endpoints. For each one, identify if there is a REST design problem and write the corrected version:

| # | Method & URL | Problem? | Corrected |
|---|---|---|---|
| 1 | `GET /getProducts` | | |
| 2 | `POST /deleteProduct/5` | | |
| 3 | `GET /products?category=electronics&page=1` | | |
| 4 | `PUT /product/5/updateStock` | | |

*(1 mark each)*

---

## QUESTION 4 — React & React Native (25 marks)

### 4(a) React — State & Controlled Inputs [6 marks]

i. What is a **controlled component** in React? How does it differ from an uncontrolled component? *(2 marks)*

ii. Build a `LoginForm` React component with:
   - `email` and `password` fields (both controlled with `useState`).
   - On submit, validate both fields are non-empty.
   - If validation fails, show an error message: `"All fields are required."` in red.
   - On success, log `{ email, password }` to the console.
   *(4 marks)*

---

### 4(b) React — useEffect Patterns [6 marks]

Analyze the following component:

```javascript
function OrderTracker({ orderId }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then(r => r.json())
      .then(data => setOrder(data));
  }, [orderId]);

  return order ? <p>{order.status}</p> : <p>Loading...</p>;
}
```

i. When does the `useEffect` run? *(1 mark)*

ii. When does it re-run, and why? *(2 marks)*

iii. The component currently has a bug — if the component unmounts while the fetch is in progress, `setOrder` is called on an unmounted component. How would you fix this? Write the corrected `useEffect`. *(3 marks)*

---

### 4(c) Redux Toolkit — Counter [5 marks]

Build a Redux Toolkit counter feature:

1. A `counterSlice` with initial state `{ value: 0 }` and actions: `increment`, `decrement`, `reset`.
2. A `Counter` React component that uses `useSelector` to display the current count and `useDispatch` to call each action when buttons are clicked.

*(5 marks)*

---

### 4(d) React Native — Complete Screen [8 marks]

Build a React Native `AddProductScreen` component:
- Has `TextInput` fields for `productName`, `price` (numeric keyboard), and `category`.
- Has a "Save" `Pressable` button.
- On save: validates no field is empty. If empty, show an error `Text` in red.
- If valid, logs the data and shows a green success message.
- Wraps the form in `KeyboardAvoidingView` (using `behavior="padding"` on iOS).
- All styles with `StyleSheet.create`.

*(8 marks)*

---

*End of Practice Paper 4*
