# 🔑 Answers - DSA Exam Paper 2

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
**a)** **25 iterations** ($5 \times 5$). Final count = 25.
**b)** **3 prints** (i = 3, 6, 9 are divisible by 3).
**c)** **5 iterations** (i values printed: 8, 6, 4, 2, 0).
**d)** **12 iterations** ($3 \times 4$).
**e)** **8 iterations** (count goes: 0→1→2→3→4→5→7→9→done. 5 increments of +1, 3 increments of +2).
**f)** **15 iterations** ($1 + 2 + 3 + 4 + 5$).
**g)** **7 iterations** (j = 1, 2, 4, 8, 16, 32, 64; next would be 128 > 100).

### 2. Binary Tree (Fill in the Blanks)
*   **25** is the **left child** of node **30**.
*   **75** is the **left child** of node **80**.

```text
          50
        /    \
      20      70
     /  \    /  \
    10  30  60  80
       /       /
      25      75
```

### 3. Queue Operations (Circular Queue)
Capacity = 4. After ops: enqueue(5)→[5], enqueue(10)→[5,10], enqueue(15)→[5,10,15], dequeue()→[10,15], enqueue(20)→[10,15,20], enqueue(25) wraps to index 0→[25,10,15,20].
a) **Rear Pointer Position:** Index **0** (wrapped around).
b) **After one more dequeue(), value removed:** **10**.

### 4. Stack Operations
Operations: push(A)→[A], push(B)→[A,B], push(C)→[A,B,C], pop()→C removed, push(D)→[A,B,D], peek()→D, pop()→D removed.
a) **Peek Value:** **D**.
b) **Final Stack Content:** `[A, B]` (Bottom to Top).

---

## 🔹 Part 2: Essay / Long Questions

### 1. Scenario: Hospital Patient Record System
**a) Building the Record System (Initial Tree):**
```text
            45
          /    \
        25      65
       /  \    /  \
      15  35  55  75
            \  /
            40 50
```
*(40 is right child of 35, 50 is left child of 55)*

**b) New Admissions (Inserting Patient ID 5 and 20):**
- ID 5: 45→25→15→left child (5 < 15) → 5 becomes left child of 15.
- ID 20: 45→25→15→right child (20 > 15) → 20 becomes right child of 15.
```text
               45
             /    \
           25      65
         /  \    /  \
        15  35  55  75
       /  \   \  /
      5    20 40 50
```

**c) Patient Discharge (Deleting Patient ID 25):**
Node 25 has two children. Inorder successor of 25 is **35**.
Replace 25 with 35. Node 40 (right child of 35) stays as right child of new 35.
```text
               45
             /    \
           35      65
         /  \    /  \
        15  40  55  75
       / \      /
      5  20    50
```

---

### 2. Sorting Algorithm: Quick Sort
**Array:** `[33, 12, 52, 2, 72, 22, 42]`, Pivot = 33.

**Partition:** Elements ≤ 33 go left, > 33 go right.
- Left: `[12, 2, 22]` | Pivot: **33** | Right: `[52, 72, 42]`
- Position of 33: Index 3.

**Continue with left sub-array** `[12, 2, 22]`, Pivot = 12:
- Left: `[2]` | Pivot: **12** | Right: `[22]`

**Final sorted:** `[2, 12, 22, 33, 42, 52, 72]`
