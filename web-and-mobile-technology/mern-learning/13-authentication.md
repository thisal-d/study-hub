# Section 13: Authentication Basics

**← [Full-Stack Project](./12-fullstack-project.md)** | **Next: [Deployment & Next Steps →](./14-deployment-next-steps.md)**

---

## 🎯 What This Section Covers

You already have basic auth working in the Notes App. This section goes deeper:
- How JWT authentication actually works under the hood
- Route protection in React (protected pages)
- Token storage security considerations
- Logout and session expiry
- Role-based access control (admin vs. user)
- Password security best practices

---

## 🔐 How JWT Authentication Works

**JWT (JSON Web Token)** is the authentication standard used by most MERN applications. Here's the full picture:

```
1. User submits login form
   POST /api/auth/login  { email, password }

2. Server verifies credentials against database
   → Checks: does this email exist?
   → Checks: does the hashed password match?

3. Server creates a JWT token
   JWT = base64(header) + "." + base64(payload) + "." + signature
   Payload = { id: "user123", role: "user", iat: 1234567890, exp: 1234567890 }

4. Server sends the token to the client
   Response: { token: "eyJhbGc..." }

5. Client stores the token (localStorage)
   localStorage.setItem("token", token)

6. Client sends token with every future request
   Header: Authorization: Bearer eyJhbGc...

7. Server verifies the token on protected routes
   jwt.verify(token, secret) → decoded payload
   req.user = await User.findById(decoded.id)

8. If token is valid → process request
   If token is invalid/expired → 401 Unauthorized
```

### Anatomy of a JWT

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9   ← Header (algorithm + type)
.
eyJpZCI6IjY0YTVmMmMxLi4uIiwicm9sZSI6InVzZXIifQ   ← Payload (your data)
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c   ← Signature (tamper-proof)
```

The signature is what makes JWTs secure — it's computed using your `JWT_SECRET`. If anyone modifies the payload, the signature won't match and verification fails.

> **Important:** JWT payloads are base64 **encoded**, NOT encrypted. Anyone can decode and read the payload. Never put sensitive data (passwords, SSNs) in a JWT!

---

## 🛡️ Protected Routes in React

You need to prevent unauthenticated users from seeing protected pages.

### The ProtectedRoute Component

```jsx
// client/src/components/ProtectedRoute.jsx
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    // Redirect to login — in a real app use react-router
    window.location.href = "/login";
    return null;
  }

  return children;
}

export default ProtectedRoute;
```

### Using React Router for Navigation

For a real multi-page app, install React Router:

```bash
cd client
npm install react-router-dom
```

```jsx
// client/src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotesPage from "./pages/NotesPage";
import AdminPage from "./pages/AdminPage";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" replace />;
}

function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;
  return children;
}

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />

        <Route path="/" element={
          <PrivateRoute>
            <NotesPage />
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🔑 Token Storage: Security Considerations

### localStorage (What We've Been Using)

**Pros:** Simple, persists through page refreshes, easy to access
**Cons:** Vulnerable to **XSS (Cross-Site Scripting)** attacks — malicious JS can read localStorage

```javascript
// If an attacker injects JS into your page, they can do:
const stolen = localStorage.getItem("token");
// Send it to their server...
```

### httpOnly Cookies (More Secure Alternative)

**Pros:** JavaScript cannot access httpOnly cookies (XSS-proof)
**Cons:** Need to handle CSRF protection; slightly more complex

```javascript
// Server — set cookie on login
res.cookie("token", jwtToken, {
  httpOnly: true,       // Cannot be accessed by JS
  secure: true,         // HTTPS only
  sameSite: "strict",   // CSRF protection
  maxAge: 30 * 24 * 60 * 60 * 1000  // 30 days
});

// Server — clear cookie on logout
res.clearCookie("token");
```

```javascript
// Client — no need to manually set headers!
// Browser automatically sends cookies with every request
fetch("/api/notes", { credentials: "include" });
```

> **For learning:** localStorage is fine. For production apps with sensitive data, use httpOnly cookies.

---

## ⏱️ Token Expiry and Refresh

JWTs should expire to limit damage if stolen.

```javascript
// Server — token expires in 15 minutes
const token = jwt.sign({ id }, secret, { expiresIn: "15m" });

// Refresh token — longer-lived, used to get new access tokens
const refreshToken = jwt.sign({ id }, refreshSecret, { expiresIn: "7d" });
```

**The refresh token pattern:**
1. Access token: short-lived (15m–1h), stored in memory or cookie
2. Refresh token: long-lived (7–30 days), stored in httpOnly cookie
3. When access token expires → send refresh token to get new access token
4. If refresh token expires → user must log in again

> **For now:** Use a 30-day token. When you're comfortable with MERN, research the refresh token pattern.

---

## 👥 Role-Based Access Control (RBAC)

Control what different users can do:

```javascript
// server/models/User.js — add role to schema
role: {
  type: String,
  enum: ["user", "moderator", "admin"],
  default: "user"
}
```

```javascript
// server/middleware/authorize.js
const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({
      error: `Role '${req.user.role}' is not authorized to perform this action`
    });
  }
  next();
};

module.exports = authorize;
```

```javascript
// server/routes/userRoutes.js
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");

// Only admins can list all users
router.get("/", authenticate, authorize("admin"), getAllUsers);

// Anyone authenticated can view their own profile
router.get("/profile", authenticate, getMyProfile);

// Admins and moderators can delete posts
router.delete("/posts/:id", authenticate, authorize("admin", "moderator"), deletePost);
```

---

## 🔒 Password Security Best Practices

You already use bcrypt — here's why it matters:

```javascript
// NEVER store plain text passwords
const user = { password: "mypassword123" };  // ❌ TERRIBLE

// Use bcrypt to hash
const bcrypt = require("bcryptjs");
const salt = await bcrypt.genSalt(10);  // 10 = cost factor
const hashed = await bcrypt.hash("mypassword123", salt);
// hashed: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"

// Verify
const isMatch = await bcrypt.compare("mypassword123", hashed);  // true
const isMatch2 = await bcrypt.compare("wrongpassword", hashed); // false
```

**Why bcrypt?**
- Hash is one-way (can't reverse it)
- Built-in salt (different hash each time even for same password)
- Cost factor (adjustable slowness — makes brute force attacks impractical)

**Other password rules to enforce:**
```javascript
// Validation in your schema or controller
if (password.length < 8) throw new Error("Min 8 characters");
if (!/[A-Z]/.test(password)) throw new Error("Need uppercase letter");
if (!/[0-9]/.test(password)) throw new Error("Need a number");
```

---

## 🚪 Logout Implementation

```jsx
// client/src/context/AuthContext.jsx

const logout = () => {
  localStorage.removeItem("token");
  setUser(null);
  // If using React Router:
  // navigate("/login");
};
```

On the server, if you want to invalidate tokens (JWTs are stateless by default):

```javascript
// Option 1: Token blacklist (in-memory or Redis)
const blacklist = new Set();

// On logout:
blacklist.add(token);

// In authenticate middleware:
if (blacklist.has(token)) {
  return res.status(401).json({ error: "Token has been invalidated" });
}

// Option 2: Short expiry + refresh tokens (recommended)
// When logout, just clear the refresh token cookie
// The short-lived access token will expire on its own
```

---

## 📝 Complete Auth Example: "Forgot Password"

This is a common real-world feature that exercises everything you've learned:

```javascript
// server/controllers/authController.js

// POST /api/auth/forgot-password
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  // Always return success (don't reveal if email exists)
  if (!user) {
    return res.json({ message: "If that email exists, a reset link was sent" });
  }

  // Create a reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashed = crypto.createHash("sha256").update(resetToken).digest("hex");

  // Save to user (add these fields to your schema)
  user.passwordResetToken = hashed;
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
  await user.save();

  // Send email with the token
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
  // await sendEmail({ to: email, subject: "Password Reset", text: resetUrl });

  console.log("Reset URL (dev only):", resetUrl);  // Remove in production!
  res.json({ message: "If that email exists, a reset link was sent" });
});
```

---

## ✅ Practice Tasks

**Task 1 — Add Role-Based Access:**
Extend the Notes App:
- Users can only view/edit their own notes
- Add an admin page that shows ALL users and their note counts
- Protect the admin page with `authorize("admin")`

**Task 2 — Auto-Logout on Expiry:**
When the server returns `401`, automatically log the user out in React:

```javascript
// In api.js
if (res.status === 401) {
  localStorage.removeItem("token");
  window.location.href = "/login";
}
```

**Task 3 — Email Verification Flow:**
Design (in pseudocode or code) how you would implement email verification:
- On register, set `isVerified: false` and send an email with a verification link
- The link hits `GET /api/auth/verify/:token`
- Set `isVerified: true` if token is valid

---

## 🧪 Experiments

**Experiment 1:** Decode a JWT without verifying it:
```javascript
const token = "your.jwt.token.here";
const payload = JSON.parse(atob(token.split(".")[1]));
console.log(payload);  // What do you see?
```

**Experiment 2:** What happens if you tamper with a JWT?
- Take a real JWT
- Decode the payload, change the `role` to "admin"
- Re-encode and send it to a protected route
- Does it work? Why not?

**Experiment 3:** Expire a token immediately and try to use it:
```javascript
const token = jwt.sign({ id }, secret, { expiresIn: "1ms" });
// Wait a second, then try to use it
```

---

## 💡 Challenge Problem

Build a complete **Multi-Tenant Notes App**:

Roles:
- **Guest** → Can read public notes only
- **User** → Can CRUD their own notes
- **Moderator** → Can delete any note (abuse control)  
- **Admin** → Full access: manage users, see all content, assign roles

Implementation:
- Add `isPublic: Boolean` to Note schema
- Add `GET /api/notes/public` → no auth required, returns all public notes
- Add `PATCH /api/users/:id/role` → admin only, to promote/demote users
- Build an admin dashboard with user list and role management

---

## 🧠 Key Takeaways

| Concept | Key Point |
|---------|-----------|
| JWT | Signed token containing user info |
| `jwt.sign()` | Creates a token |
| `jwt.verify()` | Verifies and decodes a token |
| `authenticate` middleware | Checks the token on protected routes |
| `authorize(...roles)` | Checks if user has the required role |
| bcrypt | Hash passwords before storing |
| httpOnly cookie | Safer token storage (XSS-proof) |
| `expiresIn` | Set token expiry |

---

## ➡️ Final Step

You now know how to build and authenticate a complete MERN application. The last section covers **deploying your app** to the internet and **what to learn next**.

### → [Section 14: Deployment & Next Steps](./14-deployment-next-steps.md)

---

*Section 13 of 14 | MERN Stack Learning System*
