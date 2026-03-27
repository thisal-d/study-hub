# 📝 Data Structures & Algorithms (DSA) - Exam Paper 1

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
Using the RAM model analysis, determine the total number of steps/iterations for each of the following algorithms. Assume standard assignment (1 step), comparison (1 step), and simple arithmetic (1 step).

**a)** Determine the steps for this loop:
```python
i = 5
while i <= 15:
    print(i)
    i = i + 1
```

**b)** Analyze the nested loops (Dependent):
```python
for i from 1 to 10:
     print(i)
     for j from 1 to i:
          print(j)
```

**c)** Loop with conditional logic:
```python
sum = 0
for i from 1 to 5:
    if i % 2 == 0:
        sum = sum + i
    else:
        sum = sum - i
```

**d)** Nested while loops:
```python
i = 1
while i <= 3:
    j = 1
    while j <= 2:
        print(i * j)
        j = j + 1
    i = i + 1
```

**e)** Combined for and while:
```python
for i from 1 to 4:
    count = 0
    while count < i:
        print(count)
        count = count + 1
```

**f)** Conditional branching inside loop:
```python
for i from 1 to 10:
    if i > 5:
        for j from 1 to 2:
            print(j)
    else:
        print(i)
```

### 2. Binary Tree (Fill in the Blanks)
Given a partially completed Binary Search Tree (BST) starting with the following values in order: `40, 30, 70, 25, 35, 65, 80`.

*   **Tree Diagram:**
    ```text
              40
            /    \
          30      70
         /  \    /  \
        25  35  65  80
    ```

*   **Task:** Determine where the values **20** and **60** should be inserted.

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

### 1. Scenario: Library Catalog System
A university library uses a **Binary Search Tree (BST)** to organize books by their unique **Book ID** for fast lookup. The librarian adds books to the catalog in the following order:

**Book IDs added:** `50, 30, 70, 20, 10, 40, 60, 80, 90`

a) **Building the Catalog:** Draw the BST that represents the library catalog after all books have been added.

*[Draw your tree here]*

b) **New Book Arrival:** A new book with **ID 45** arrives. Show the updated catalog tree after inserting it. Trace the path the system takes from the root to find the correct shelf (position) for this book.

*[Show updated tree and path here]*

c) **Removing a Book:** Book **ID 20** is permanently removed from the library. This book's record has only one sub-entry (child node). Show the final catalog tree and explain how the system restructures itself when a record with one child is deleted.

*[Show final tree and explanation here]*

---

### 2. Sorting Algorithm: Merge Sort
Perform a step-by-step **Merge Sort** on the following array:
`[38, 27, 43, 3, 9, 82, 10]`

* Clearly show the "Divide" steps until the array is broken down into individual elements.
* Demonstrate the "Merge" process at each level, showing how the sorted subarrays are combined.
* Draw the state of the array after every major merge operation.

---

[📄 **View Answer Sheet**](../answers/answer-01.md)
