# 📝 Data Structures & Algorithms (DSA) - Exam Paper 5

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
Using the RAM model, find the total number of steps or iterations to execute the following algorithms. Assume each basic operation (assignment, comparison, arithmetic, print) takes 1 step.

**a)** While loop with conditional:
```python
x = 10
y = 20
while x < y:
    if x % 3 == 0:
        print(x)
    x = x + 1
```

**b)** Triple nested structure (For + Double While):
```python
for i from 1 to 2:
    j = 1
    while j <= 2:
        k = 1
        while k <= 2:
            print(i, j, k)
            k = k + 1
        j = j + 1
```

**c)** Multi-level branching inside loop:
```python
for i from 1 to 10:
    if i % 2 == 0:
        print(i)
    else:
        if i % 3 == 0:
            print(i * 2)
```

**d)** Reduction with nested accumulation (Hard):
```python
n = 8
while n > 1:
    for i from 1 to n:
        print(i)
    n = n / 2
```

**e)** Decrementing dependent nested loop:
```python
for i from 1 to 5:
    for j from 5 down to i:
        print(j)
```

**f)** State-dependent execution:
```python
count = 0
for i from 1 to 4:
    while count < i:
        print("Increasing count")
        count = count + 1
```

### 2. Binary Tree (Fill in the Blanks)
Given a BST with root node 50. Left child 30, right child 70. Node 30 has left child 10, right child 40. Node 70 has left child 60, right child 90.

*   **Tree Diagram:**
    ```text
                50
              /    \
            30      70
           /  \    /  \
          10  40  60  90
    ```

*   **Task:** Determine where the values **5** and **45** should be inserted.



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

### 1. Scenario: School Student Records System
A school administration uses a **Binary Search Tree (BST)** to manage student records by their unique **Student ID** for quick grade lookups during exam season. Students are enrolled in the following order:

**Student IDs enrolled:** `40, 20, 60, 10, 30, 50, 70, 5, 15, 25, 35, 45, 55, 65, 75`

a) **Building the Records System:** Draw the BST that represents the student database after all students are enrolled.

*[Draw your tree here]*

b) **New Enrollment:** A new student with **ID 32** enrolls mid-semester. Show how the system searches from the root to find the correct position. Highlight every node visited along the path and show the updated tree.

*[Show updated tree and path here]*

c) **Student Transfer:** Student **ID 40** (who happens to be at the root of the system) transfers to another school. Explain the process of replacing the **root node** using its **inorder successor** and show the final reorganized student records tree.

*[Show final tree and explanation here]*


---

### 2. Sorting Algorithm: Merge Sort
Perform a step-by-step **Merge Sort** on the following array:
`[95, 45, 15, 65, 35, 5, 55]`

* Clearly show the "Divide" phase, breaking the array into sub-arrays at every step.
* Show the "Merge" process, including the temporary arrays and comparison steps.
* Highlight the state of the array after the first level merge.
* Provide the final sorted array.

---

[📄 **View Answer Sheet**](../answers/answer-05.md)

