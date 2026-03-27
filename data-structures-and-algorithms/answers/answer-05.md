# 🔑 Answers - DSA Exam Paper 5

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
**a)** **10 iterations** (x = 10 to 19). Prints at x = 12, 15, 18 (multiples of 3).
**b)** **8 prints** ($2 \times 2 \times 2$). All combinations of i, j, k from 1 to 2.
**c)** **10 iterations** total. Even: 2,4,6,8,10 → print(i). Odd multiples of 3: 3,9 → print(i*2).
**d)** **15 total prints** ($8 + 4 + 2 + 1 = 15$). n halves: 8→4→2→1, inner loop runs n times each.
**e)** **15 prints** ($5 + 4 + 3 + 2 + 1$). j goes from 5 down to i.
**f)** **4 increments** total. count starts at 0 and increments once per outer iteration (count: 0→1→2→3→4). Only 4 prints since count catches up to i each time.

### 2. Binary Tree (Fill in the Blanks)
*   **5** is the **left child** of node **10**.
*   **45** is the **right child** of node **40**.

```text
            50
          /    \
        30      70
       /  \    /  \
      10  40  60  90
     /      \
    5       45
```

### 3. Queue Operations
Operations: enqueue(Job1), enqueue(Job2), dequeue()→Job1, enqueue(Job3), dequeue()→Job2, enqueue(Job4), enqueue(Job5).
a) **Front Job ID:** **Job3**.
b) **Remaining Jobs:** Job3, Job4, Job5.

### 4. Stack Operations
Operations: push(100)→[100], push(200)→[100,200], push(300)→[100,200,300], pop()→300, peek()→200, push(400)→[100,200,400], pop()→400.
a) **Value at Top after all operations:** **200**.
b) **Sequence of values popped:** 300, 400.

---

## 🔹 Part 2: Essay / Long Questions

### 1. Scenario: School Student Records System
**a) Building the Records System (Initial Tree):**
```text
                 40
              /      \
            20        60
          /    \    /    \
         10    30  50    70
        /  \  / \  / \  /  \
        5  15 25 35 45 55 65 75
```

**b) New Enrollment (Searching for Student ID 32):**
Path: 40 → 20 → 30 → 35 → 32 (left child of 35).
```text
                 40
              /      \
            20        60
          /    \    /    \
         10    30  50    70
        /  \  / \  / \  /  \
        5  15 25 35 45 55 65 75
                /
               32
```

**c) Student Transfer (Deleting Student ID 40 — Root Node):**
Node 40 is the root and has two children. Inorder successor of 40 is **45** (smallest in right subtree: 60→50→45).
Replace 40 with 45. Remove 45 from its original position (left child of 50).
```text
                 45
              /      \
            20        60
          /    \    /    \
         10    30  50    70
        /  \  / \    \  /  \
        5  15 25 35  55 65 75
                /
               32
```

---

### 2. Sorting Algorithm: Merge Sort
**Array:** `[95, 45, 15, 65, 35, 5, 55]`

**Divide Phase:**
- `[95, 45, 15, 65]` | `[35, 5, 55]`
- `[95, 45]` | `[15, 65]` | `[35]` | `[5, 55]`
- `[95]` | `[45]` | `[15]` | `[65]` | `[35]` | `[5]` | `[55]`

**Merge Phase:**
- `[95]` + `[45]` → `[45, 95]`
- `[15]` + `[65]` → `[15, 65]`
- `[45, 95]` + `[15, 65]` → `[15, 45, 65, 95]`
- `[5]` + `[55]` → `[5, 55]`
- `[35]` + `[5, 55]` → `[5, 35, 55]`
- `[15, 45, 65, 95]` + `[5, 35, 55]` → **`[5, 15, 35, 45, 55, 65, 95]`**
