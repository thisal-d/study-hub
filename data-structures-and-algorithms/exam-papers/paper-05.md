# 📝 Data Structures & Algorithms (DSA) - Exam Paper 5

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting
Using the RAM model, find the total number of steps to execute the following algorithm. Assume:
* `x = 10, y = 20` (2 steps initialization).
* `while x < y:` (1 step for each comparison).
* `if x % 3 == 0:` (2 steps for each iteration).
* `print(x)` (1 step for matching iterations).
* `x = x + 1` (2 steps for every iteration).

**Algorithm:**
```python
x = 10
y = 20
while x < y:
    if x % 3 == 0:
        print(x)
    x = x + 1
```

### 2. Binary Tree (Fill in the Blanks)
Given a BST with root node 50. Left child 30, right child 70. Node 30 has left child 10, right child 40. Node 70 has left child 60, right child 90.
Insert the values **5** and **45** into the correct positions.

```text
            50
          /    \
        30      70
       /  \    /  \
      10  40  60  90
     /      \
    ( )    ( )  <- Insert 5 and 45 here
```



### 3. Queue Operations
A queue `Q` in a printer system handles 5 print jobs. Perform:
1. `enqueue(Job1)`
2. `enqueue(Job2)`
3. `dequeue()`
4. `enqueue(Job3)`
5. `dequeue()`
6. `enqueue(Job4)`
7. `enqueue(Job5)`

Determine:
a) The ID of the job that is currently at the front of the queue.
b) The order of remaining jobs in the queue.

### 4. Stack Operations
Given an initial empty stack `S`. Perform:
`push(100), push(200), push(300), pop(), peek(), push(400), pop()`
Determine:
a) The value at the top of the stack after all operations.
b) The sequence of values popped from the stack.

---

## 🔹 Part 2: Essay / Long Questions

### 1. Binary Tree: Insertion & Deletion
A binary search tree is constructed from the following sequence:
`40, 20, 60, 10, 30, 50, 70, 5, 15, 25, 35, 45, 55, 65, 75`

a) **Drawing the Tree:** Draw the resulting binary search tree.

```text
                 40
              /      \
            20        60
          /    \    /    \
         10    30  50    70
        /  \  / \  / \  /  \
        5  15 25 35 45 55 65 75
```


b) **Insertion:** Show how searching for node **32** would occur. Highlight every path taken from the root down to the insertion point.

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
*(Nodes searched: 40 -> 20 -> 30 -> 35 -> 32)*


c) **Deletion:** Remove node **40** (the root node). Explain the process of replacing the root with its inorder successor and show the final tree structure.

```text
                 45
              /      \
            20        60
          /    \    /    \
         10    30  50    70
        /  \  / \    \  /  \
        5  15 25 35  55 65 75
```
*(Node 40 replaced by its inorder successor 45)*


---

### 2. Sorting Algorithm: Merge Sort
Perform a step-by-step **Merge Sort** on the following array:
`[95, 45, 15, 65, 35, 5, 55]`

* Clearly show the "Divide" phase, breaking the array into sub-arrays at every step.
* Show the "Merge" process, including the temporary arrays and comparison steps.
* Highlight the state of the array after the first level merge.
* Provide the final sorted array.

