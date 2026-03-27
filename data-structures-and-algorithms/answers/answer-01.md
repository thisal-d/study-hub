# 🔑 Answers - DSA Exam Paper 1

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
**a)** **46 steps** (1 init, 12 comparisons, 11 prints, 22 increments).
**b)** **55 prints** ($1+2+3+4+5+6+7+8+9+10$).
**c)** **Final Sum: -3** (Steps: Initialization + 5 iterations + print/math).
**d)** **6 iterations** total ($3 \times 2$).
**e)** **10 iterations** total ($1 + 2 + 3 + 4$).
**f)** **15 prints** (5 simple prints for $i \le 5$, plus $5 \times 2 = 10$ prints for $i > 5$).

### 2. Binary Tree (Fill in the Blanks)
*   **20** is the **left child** of node **25**.
*   **60** is the **left child** of node **65**.

```text
          40
        /    \
      30      70
     /  \    /  \
    25  35  65  80
   /       /
  20      60
```

### 3. Queue Operations
a) **Value removed last:** 20.
b) **Final state:** `[30, 40, 50]` (Front: 30, Rear: 50).

### 4. Stack Operations
a) **Current Top:** 45.
b) **Total remaining:** 3 (Elements: 5, 15, 45).

---

## 🔹 Part 2: Essay / Long Questions

### 1. Binary Tree: Insertion & Deletion
**a) Initial Tree:**
```text
            50
          /    \
        30      70
       /  \    /  \
      20  40  60  80
     /              \
    10              90
```

**b) After Inserting 45:**
Path: 50 $\to$ 30 $\to$ 40 $\to$ 45.
```text
            50
          /    \
        30      70
       /  \    /  \
      20  40  60  80
     /      \       \
    10      45      90
```

**c) After Deleting 20:**
Node 20 has one child (10), so node 10 takes its place.
```text
            50
          /    \
        30      70
       /  \    /  \
      10  40  60  80
            \       \
            45      90
```

---

### 2. Sorting Algorithm: Merge Sort
1.  **Divide:** `[38, 27, 43, 3, 9, 82, 10]` $\to$ `[38, 27, 43]` and `[3, 9, 82, 10]` ...
2.  **Combine:** `[3, 9, 10, 27, 38, 43, 82]`
