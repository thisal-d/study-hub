# 📝 Data Structures & Algorithms (DSA) - Exam Paper 3

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
Determine the total number of steps or iterations for each algorithm. Assume each basic operation (assignment, addition, comparison, print) takes 1 step unless specified otherwise.

**a)** Loop with modulo condition:
```python
for i in range(10, 21): # i = 10 to 20
    if i % 2 == 0:
        print(i)
```

**b)** Dependent nested loops (Sum of First N):
```python
for i from 1 to 5:
    for j from 1 to i:
        print(i + j)
```

**c)** Logarithmic reduction (While loop):
```python
x = 16
while x > 1:
    print(x)
    x = x / 2
```

**d)** Conditional nested loops:
```python
for i from 1 to 10:
    if i % 2 == 0:
        for j from 1 to 2:
            print(j)
```

**e)** Sequential loops (Loops in succession):
```python
a = 0
for i from 1 to 5:
    a = a + i
    
while a > 0:
    print(a)
    a = a - 5
```

**f)** Cubed complexity pattern (Triple nested):
```python
count = 0
for i from 1 to 3:
    for j from 1 to 3:
        for k from 1 to 3:
            count = count + 1
```

### 2. Binary Tree (Fill in the Blanks)
Given a BST with root node 60. Left child 40, right child 80. Node 40 has left child 30, right child 50. Node 80 has left child 70, right child 90.

*   **Tree Diagram:**
    ```text
              60
            /    \
          40      80
         /  \    /  \
        30  50  70  90
    ```

*   **Task:** Determine where the values **35** and **75** should be inserted.



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

### 1. Scenario: Company Employee Directory
A tech company organizes its employee directory using a **Binary Search Tree (BST)**, where each employee is stored by their unique **Employee Number**. The HR department registers employees in the following order:

**Employee Numbers:** `280, 308, 180, 416, 298, 350, 156, 255, 580`

a) **Building the Directory:** Draw the BST that represents the company's employee directory after all employees are registered.

*[Draw your tree here]*

b) **Generating Reports:** The management needs three different reports. Write down the sequence of employee numbers visited during:
* **In-order Traversal** (for a sorted employee list)
* **Pre-order Traversal** (for backing up the tree structure)
* **Post-order Traversal** (for deleting the tree from leaves up)

c) **Employee Resignation:** Employee **#180** (a department head) resigns. This employee's node has two sub-departments (two children). Explain the process of finding the **inorder successor** to replace this employee and show the reorganized directory tree.

*[Show final tree and explanation here]*


---

### 2. Sorting Algorithm: Merge Sort
Perform a step-by-step **Merge Sort** on the following array:
`[67, 12, 22, 55, 34, 70, 60]`

* Break the array into sub-arrays (divide phase).
* Show the merge process for each level.
* Clearly indicate the indices being compared and merged into the temporary array.
* Draw the state of the array after the final merge operation.

---

[📄 **View Answer Sheet**](../answers/answer-03.md)

