# 🔑 Answers - DSA Exam Paper 4

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
**a)** **5 iterations** (i = 1, 3, 5, 7, 9). Final count = 1+3+5+7+9 = 25.
**b)** **50 prints** ($5 \times 10$).
**c)** **7 iterations** (x = 1, 2, 4, 8, 16, 32, 64; next 128 ≥ 100).
**d)** **9 prints** (i=1: print(1), i=2: print(2), i=3: 5 inner prints, i=4: print(4), i=5: print(5)).
**e)** **10 prints** ($1+2+3+4$).
**f)** **3 prints** (i+j > 4 when (i,j) = (2,3), (3,2), (3,3)).

### 2. Binary Tree (Fill in the Blanks)
*   **65** is the **left child** of node **70**.
*   **115** is the **left child** of node **110** *(since 115 > 110, it is actually the **right child**)*.

Wait — 115 > 110, so **115** is the **right child** of node **110**.

```text
            100
          /     \
        80       120
       /  \     /   \
      70   90  110   130
     /          \
    65          115
```

### 3. Queue Operations (Circular Queue)
Capacity = 5, Front=0, Rear=-1.
Operations: enqueue(10)→R=0, enqueue(20)→R=1, enqueue(30)→R=2, dequeue()→F=1, enqueue(40)→R=3, enqueue(50)→R=4, enqueue(60)→R=(4+1)%5=0 (wraps).
a) **Front Pointer Index:** **1** (Element 20).
b) **Value at Index 0:** **60**.

### 4. Stack Operations
Operations: push(1)→[1], push(2)→[1,2], push(3)→[1,2,3], push(4)→[1,2,3,4], pop()→4, pop()→3, push(5)→[1,2,5], pop()→5.
a) **Value popped last:** **5**.
b) **Remaining Stack:** `[1, 2]` (Bottom to Top).

---

## 🔹 Part 2: Essay / Long Questions

### 1. Scenario: E-Commerce Product Catalog
**a) Building the Catalog (Initial Tree):**
```text
              500
            /     \
          300      700
         /   \    /   \
       200   400 600   800
      /                  \
    100                  900
```

**b) New Product Launch (Inserting Product Code 350):**
Path: 500 → 300 → 400 → 350 (left child of 400).
```text
              500
            /     \
          300      700
         /   \    /   \
       200   400 600   800
      /     /            \
    100    350           900
```

**c) Discontinuing a Product (Deleting Product Code 300):**
Node 300 has two children (200 and 400).
- **Inorder Predecessor:** 200 (largest in left subtree).
- **Inorder Successor:** 350 (smallest in right subtree).

Using inorder successor (350):
```text
              500
            /     \
          350      700
         /   \    /   \
       200   400 600   800
      /                  \
    100                  900
```

---

### 2. Sorting Algorithm: Quick Sort
**Array:** `[45, 15, 65, 5, 55, 25, 35]`, Pivot = 35 (last element).

**Partition:** Elements ≤ 35: `[15, 5, 25]` | Pivot: **35** | Elements > 35: `[45, 65, 55]`
Result: `[15, 5, 25, 35, 45, 65, 55]`. Pivot at index 3.

**Left sub-array** `[15, 5, 25]`, Pivot = 25:
- Left: `[15, 5]` | Pivot: **25** | Right: `[]`

**Right sub-array** `[45, 65, 55]`, Pivot = 55:
- Left: `[45]` | Pivot: **55** | Right: `[65]`

**Final sorted:** `[5, 15, 25, 35, 45, 55, 65]`
