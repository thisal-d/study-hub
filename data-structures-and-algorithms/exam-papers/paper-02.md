# 📝 Data Structures & Algorithms (DSA) - Exam Paper 2

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting
Analyze the following nested loop using the RAM model. Determine the total complexity as a function of `n`.
* Initializing `count = 0` takes 1 step.
* Initializing `i = 0` takes 1 step. (Outside the first loop)
* The comparison `i < n` in the first loop takes `n+1` steps.
* Each iteration of the inner loop takes `m` steps where `m` is proportional to `n`.
* Assuming `n = 5`, how many total steps are required?

**Algorithm:**
```python
count = 0
for i in range(1, 6): # i = 1 to 5
    for j in range(1, 6): # j = 1 to 5
        count = count + 1 # 2 steps (add + assign)
```

### 2. Binary Tree (Fill in the Blanks)
Given a partially completed Binary Search Tree (BST) with values: `50, 20, 70, 10, 30, 60, 80`.
Insert the value **25** and **75** into the correct positions.

```text
          50
        /    \
      20      70
     /  \    /  \
    10  30  60  80
       /       /
     (  )    (  )  <- Insert 25 and 75 here
```


### 3. Queue Operations (Circular Queue)
A circular queue `CQ` has a capacity of 4.
Perform the following operations:
1. `enqueue(5)`
2. `enqueue(10)`
3. `enqueue(15)`
4. `dequeue()`
5. `enqueue(20)`
6. `enqueue(25)` (This should wrap around if space is available)

Determine:
a) Where is the `Rear` pointer positioned (index 0-3)? 
b) Which element is remove last after one more `dequeue()`?

### 4. Stack Operations
Given an initial empty stack `S`. Perform the following operations:
1. `push(A)`
2. `push(B)`
3. `push(C)`
4. `pop()`
5. `push(D)`
6. `peek()`
7. `pop()`

Determine:
a) The value returned by the `peek()` operation.
b) The final content of the stack from bottom to top.

---

## 🔹 Part 2: Essay / Long Questions

### 1. Binary Tree: Insertion & Deletion
A binary search tree is created by inserting the following sequence of integers:
`45, 25, 65, 15, 35, 55, 75, 40, 50`

a) **Drawing the Tree:** Draw the initial BST structure.

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

b) **Insertion:** Show the updated tree after inserting **5** and **20**. Briefly explain the traversal process used to locate their positions.

```text
               45
             /    \
           25      65
         /  \    /  \
        15  35  55  75
       /  \   \  /
      5    20  40 50
```
*(5 is left child of 15, 20 is right child of 15)*

c) **Deletion:** Remove node **25** from the updated tree. This is a node with two children. Explain which node (inorder successor or predecessor) you choose to replace it with and show the resulting tree.

```text
               45
             /    \
           35      65
         /  \    /  \
        15  40  55  75
       / \      /
      5  20    50
```
*(Node 25 replaced by its inorder successor 35)*

---

### 2. Sorting Algorithm: Quick Sort
Perform a step-by-step **Quick Sort** on the following array:
`[33, 12, 52, 2, 72, 22, 42]`

* Use the first element (`33`) as the initial pivot.
* Clearly show the "Partitioning" step, showing how elements are rearranged around the pivot.
* Identify the final position of the pivot and the resulting sub-arrays.
* Repeat the process for one of the sub-arrays.

