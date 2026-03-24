# 📝 Data Structures & Algorithms (DSA) - Exam Paper 4

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting
Using the RAM model, find the total number of steps to execute the following algorithm. Assume:
* Initializing `count = 0` takes 1 step.
* Loop initialization `i = 1` takes 1 step.
* Comparison `i <= 10` takes 1 step (each iteration).
* `count = count + i` takes 2 steps (add + assign).
* Increment `i = i + 2` takes 2 steps (add + assign).
* How many total comparisons are done?

**Algorithm:**
```python
count = 0
for i in range(1, 11, 2): # i = 1 to 10 with step 2
    count = count + i
```

### 2. Binary Tree (Fill in the Blanks)
Given a BST with root node 100. Left child 80, right child 120. Node 80 has left child 70, right child 90. Node 120 has left child 110, right child 130.
Insert the values **65** and **115** into the correct positions.

```text
            100
          /     \
        80       120
       /  \     /   \
      70   90  110   130
     /        /
    ( )      ( )  <- Insert 65 and 115 here
```



### 3. Queue Operations (Circular Queue)
A circular queue `CQ` has a capacity of 5. Front/Rear pointers start at index 0 and -1 respectively. Perform:
1. `enqueue(10)`
2. `enqueue(20)`
3. `enqueue(30)`
4. `dequeue()`
5. `enqueue(40)`
6. `enqueue(50)`
7. `enqueue(60)` (Should wrap around to index 0)

Determine:
a) The index of the `Front` pointer.
b) The value at index 0.

### 4. Stack Operations
Given an initial stack `S`. Perform:
`push(1), push(2), push(3), push(4), pop(), pop(), push(5), pop()`
Determine:
a) Which value is popped last during the final `pop()` operation?
b) Which values are currently in the stack (bottom to top)?

---

## 🔹 Part 2: Essay / Long Questions

### 1. Binary Tree: Insertion & Deletion
A binary search tree is constructed from the following sequence:
`500, 300, 700, 200, 400, 600, 800, 100, 900`

a) **Drawing the Tree:** Draw the resulting binary search tree.

```text
              500
            /     \
          300      700
         /   \    /   \
       200   400 600   800
      /                  \
    100                  900
```


b) **Insertion:** Insert node **350** into the tree. Show the new structure and list the nodes visited during search.

```text
              500
            /     \
          300      700
         /   \    /   \
       200   400 600   800
      /     /            \
    100    350           900
```
*(Nodes visited: 500 -> 300 -> 400 -> 350)*


c) **Deletion:** Remove node **300** from the tree. Explain the two options for replacing this node (predecessor or successor) and show the result after replacing it with its inorder successor.

```text
              500
            /     \
          350      700
         /   \    /   \
       200   400 600   800
      /                  \
    100                  900
```
*(Node 300 replaced by its inorder successor 350)*


---

### 2. Sorting Algorithm: Quick Sort
Perform a step-by-step **Quick Sort** on the following array:
`[45, 15, 65, 5, 55, 25, 35]`

* Choose the **last element** (`35`) as the pivot.
* Clearly show the "Partitioning" steps until the array is sorted.
* Identify the left and right sub-arrays in each partition.
* Highlight the pivot's final position after each pass.

