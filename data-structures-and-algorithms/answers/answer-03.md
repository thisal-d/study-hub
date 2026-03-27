# 🔑 Answers - DSA Exam Paper 3

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
**a)** **6 prints** (even numbers: 10, 12, 14, 16, 18, 20). Loop runs 11 iterations (i=10 to 20).
**b)** **15 prints** ($1 + 2 + 3 + 4 + 5$).
**c)** **4 iterations** (x = 16→8→4→2→1, prints: 16, 8, 4, 2).
**d)** **10 prints** (5 even values of i × 2 inner iterations each).
**e)** **Part 1:** 5 iterations, a = 1+2+3+4+5 = 15. **Part 2:** 3 iterations (a = 15→10→5→0).
**f)** **27 iterations** ($3 \times 3 \times 3$). Final count = 27.

### 2. Binary Tree (Fill in the Blanks)
*   **35** is the **right child** of node **30**.
*   **75** is the **right child** of node **70**.

```text
          60
        /    \
      40      80
     /  \    /  \
    30  50  70  90
     \       \
     35      75
```

### 3. Queue Operations
Operations: enqueue(15), enqueue(25), enqueue(35), dequeue()→15 removed, enqueue(45), dequeue()→25 removed, peekFront().
a) **PeekFront Value:** **35**.
b) **Remaining Elements:** **3** (35, 45).

### 4. Stack Operations
Operations: push(X)→[X], push(Y)→[X,Y], pop()→Y removed, push(Z)→[X,Z], pop()→Z removed, push(W)→[X,W], peek()→W.
a) **Popped Last:** **Z**.
b) **Top of Stack:** **W**.

---

## 🔹 Part 2: Essay / Long Questions

### 1. Scenario: Company Employee Directory
**a) Building the Directory (Initial Tree):**
```text
            280
          /     \
        180     308
       /   \    /  \
     156   255 298 416
                   /  \
                 350  580
```

**b) Generating Reports (Traversal Sequences):**
*   **In-order** (Sorted List): 156, 180, 255, 280, 298, 308, 350, 416, 580
*   **Pre-order** (Backup): 280, 180, 156, 255, 308, 298, 416, 350, 580
*   **Post-order** (Delete): 156, 255, 180, 298, 350, 580, 416, 308, 280

**c) Employee Resignation (Deleting Employee #180):**
Employee 180 has two children (156 and 255). Inorder successor of 180 is **255**.
Replace 180 with 255. Node 156 stays as left child.
```text
            280
          /     \
        255     308
       /       /  \
     156      298 416
                  /  \
                350  580
```

---

### 2. Sorting Algorithm: Merge Sort
**Array:** `[67, 12, 22, 55, 34, 70, 60]`

**Divide Phase:**
- `[67, 12, 22, 55]` | `[34, 70, 60]`
- `[67, 12]` | `[22, 55]` | `[34]` | `[70, 60]`
- `[67]` | `[12]` | `[22]` | `[55]` | `[34]` | `[70]` | `[60]`

**Merge Phase:**
- `[67]` + `[12]` → `[12, 67]`
- `[22]` + `[55]` → `[22, 55]`
- `[12, 67]` + `[22, 55]` → `[12, 22, 55, 67]`
- `[70]` + `[60]` → `[60, 70]`
- `[34]` + `[60, 70]` → `[34, 60, 70]`
- `[12, 22, 55, 67]` + `[34, 60, 70]` → **`[12, 22, 34, 55, 60, 67, 70]`**
