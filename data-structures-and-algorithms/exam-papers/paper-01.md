# 📝 Data Structures & Algorithms (DSA) - Exam Paper 1

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting
Using the RAM model analysis, determine the total number of steps required to execute the following algorithm that displays numbers from 5 to 15 (inclusive). Assume:
* Initializing `i = 5` takes 1 step.
* Comparison `i <= 15` takes 1 step (plus 1 final failed check).
* `print(i)` takes 1 step.
* Increment `i = i + 1` takes 2 steps (1 addition, 1 assignment).

**Algorithm:**
```python
i = 5
while i <= 15:
    print(i)
    i = i + 1
```

### 2. Binary Tree (Fill in the Blanks)
Given a partially completed Binary Search Tree (BST) starting with the following values in order: `40, 30, 70, 25, 35, 65, 80`.


```text
          40
        /    \
      30      70
     /  \    /  \
    25  35  65  80
   /       /
 (  )    (  )  <- Insert 20 and 60 here
```

### 3. Queue Operations
Given an initial empty queue `Q` with a maximum size of 5. Perform the following operations in order:
1. `enqueue(10)`
2. `enqueue(20)`
3. `enqueue(30)`
4. `dequeue()`
5. `enqueue(40)`
6. `dequeue()`
7. `enqueue(50)`

Determine:
a) The value that was removed last from the queue.
b) The final state of the queue (list the elements from front to rear).

### 4. Stack Operations
Given an initial empty stack `S` with a maximum size of 5. Perform the following operations in order:
1. `push(5)`
2. `push(15)`
3. `push(25)`
4. `pop()`
5. `push(35)`
6. `pop()`
7. `push(45)`

Determine:
a) The value that is currently at the top of the stack.
b) The total number of elements remaining in the stack.

---

## 🔹 Part 2: Essay / Long Questions

### 1. Binary Tree: Insertion & Deletion
A binary search tree is created by inserting the following sequence of integers:
`50, 30, 70, 20, 10, 40, 60, 80, 90`

a) **Drawing the Tree:** Draw the resulting binary search tree.

```text
            50
          /    \
        30      70
       /  \    /  \
      20  40  60  80
     /              \
    10              90
```

b) **Insertion:** Insert the value **45** into the tree drawn in part (a). Show the updated tree structure and briefly explain the steps taken to find its position.

```text
            50
          /    \
        30      70
       /  \    /  \
      20  40  60  80
     /      \       \
    10      45      90
```
*(Path: 50 -> 30 -> 40 -> 45)*

c) **Deletion:** Remove node **20** from the tree obtained in part (b). Show the final tree structure and explain how the tree is adjusted when deleting a node with one child.

```text
            50
          /    \
        30      70
       /  \    /  \
      10  40  60  80
            \       \
            45      90
```
*(Node 20 deleted, node 10 takes its place as left child of 30)*

---

### 2. Sorting Algorithm: Merge Sort
Perform a step-by-step **Merge Sort** on the following array:
`[38, 27, 43, 3, 9, 82, 10]`

* Clearly show the "Divide" steps until the array is broken down into individual elements.
* Demonstrate the "Merge" process at each level, showing how the sorted subarrays are combined.
* Draw the state of the array after every major merge operation.
