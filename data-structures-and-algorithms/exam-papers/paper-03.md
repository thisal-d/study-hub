# 📝 Data Structures & Algorithms (DSA) - Exam Paper 3

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting
Using the RAM model, find the total number of steps to display even numbers from 10 to 20.
* Loop starts at 10 and ends at 20.
* Condition `(i % 2 == 0)` takes 2 steps (modulo + comparison).
* `print(i)` takes 1 step (only for even numbers).
* Increment `i = i + 1` takes 2 steps.
* How many times does the loop body execute?

**Algorithm:**
```python
for i in range(10, 21): # i = 10 to 20
    if i % 2 == 0:
        print(i)
```

### 2. Binary Tree (Fill in the Blanks)
Given a BST with root node 60. Left child 40, right child 80. Node 40 has left child 30, right child 50. Node 80 has left child 70, right child 90.
Insert the value **35** and **75** into the correct positions.

```text
          60
        /    \
      40      80
     /  \    /  \
    30  50  70  90
     \       \
    ( )     ( ) <- Insert 35 and 75 here
```



### 3. Queue Operations
Given an initial empty queue `Q` with a maximum size of 6. Perform the following operations:
1. `enqueue(15)`
2. `enqueue(25)`
3. `enqueue(35)`
4. `dequeue()`
5. `enqueue(45)`
6. `dequeue()`
7. `peekFront()`

Determine:
a) The value returned by the `peekFront()` operation.
b) The final number of elements remaining in the queue.

### 4. Stack Operations
Assume a stack `S` stores characters. Perform the following push/pop operations:
`push('X'), push('Y'), pop(), push('Z'), pop(), push('W'), peek()`
Determine:
a) Which character is popped last?
b) Which character remains at the top of the stack?

---

## 🔹 Part 2: Essay / Long Questions

### 1. Binary Tree: Traversal & Deletion
A binary search tree is constructed by inserting the following sequence:
`280, 308, 180, 416, 298, 350, 156, 255, 580`

a) **Drawing the Tree:** Draw the initial BST structure.

```text
            280
          /     \
        180     308
       /   \    /  \
     156   255 298 416
                   /  \
                 350  580
```


b) **Traversal:** Write down the sequence of elements visited during the following traversals of the tree from part (a):
* **In-order**
* **Pre-order**
* **Post-order**

c) **Deletion:** Remove node **180** from the tree. This is a node with two children. Explain the process of finding the inorder successor and show the final tree.

```text
            280
          /     \
        255     308
       /       /  \
     156      298 416
                  /  \
                350  580
```
*(Node 180 replaced by its inorder successor 255)*


---

### 2. Sorting Algorithm: Merge Sort
Perform a step-by-step **Merge Sort** on the following array:
`[67, 12, 22, 55, 34, 70, 60]`

* Break the array into sub-arrays (divide phase).
* Show the merge process for each level.
* Clearly indicate the indices being compared and merged into the temporary array.
* Draw the state of the array after the final merge operation.

