# 📝 Data Structures & Algorithms (DSA) - Exam Paper 2

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
Determine the total number of iterations or steps for each of the following algorithms. Assume standard operation costs (1 step each for assignment, comparison, and calculation).

**a)** Simple nested loop:
```python
count = 0
for i in range(1, 6): # i = 1 to 5
    for j in range(1, 6): # j = 1 to 5
        count = count + 1 
```

**b)** Modulo arithmetic inside a loop:
```python
for i from 1 to 10:
    if i % 3 == 0:
        print(i)
```

**c)** Descending while loop:
```python
i = 10
while i > 0:
    i = i - 2
    print(i)
```

**d)** Independent nested loops:
```python
sum = 0
for i from 1 to 3:
    for j from 1 to 4:
        sum = i + j
```

**e)** While loop with multi-path increment:
```python
count = 0
while count < 10:
    if count < 5:
        count = count + 1
    else:
        count = count + 2
```

**f)** Dependent nested structure (Hard):
```python
for i from 1 to 5:
    j = i
    while j > 0:
        print(j)
        j = j - 1
```

**g)** Logarithmic growth analysis:
```python
n = 100
j = 1
while j < n:
    print(j)
    j = j * 2
```

### 2. Binary Tree (Fill in the Blanks)
Given a partially completed Binary Search Tree (BST) with values: `50, 20, 70, 10, 30, 60, 80`.

*   **Tree Diagram:**
    ```text
              50
            /    \
          20      70
         /  \    /  \
        10  30  60  80
    ```

*   **Task:** Determine where the values **25** and **75** should be inserted.


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

### 1. Scenario: Hospital Patient Record System
A hospital emergency department uses a **Binary Search Tree (BST)** to manage patient records by their unique **Patient ID** for quick retrieval during emergencies. Patients are registered in the following order:

**Patient IDs registered:** `45, 25, 65, 15, 35, 55, 75, 40, 50`

a) **Building the Record System:** Draw the BST that represents the patient database after all patients have been registered.

*[Draw your tree here]*

b) **New Admissions:** Two new patients arrive with **ID 5** (infant) and **ID 20** (elderly). Show the updated tree after inserting both records. Briefly explain the traversal the system performs to find the correct position for each patient record.

*[Show updated tree and path here]*

c) **Patient Discharge:** Patient **ID 25** is discharged. This record has two sub-branches (two children). Explain whether you use the **inorder successor** or **predecessor** to replace it in the system, and show the resulting tree structure.

*[Show final tree and explanation here]*

---

### 2. Sorting Algorithm: Quick Sort
Perform a step-by-step **Quick Sort** on the following array:
`[33, 12, 52, 2, 72, 22, 42]`

* Use the first element (`33`) as the initial pivot.
* Clearly show the "Partitioning" step, showing how elements are rearranged around the pivot.
* Identify the final position of the pivot and the resulting sub-arrays.
* Repeat the process for one of the sub-arrays.

---

[📄 **View Answer Sheet**](../answers/answer-02.md)

