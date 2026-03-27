# 📝 Data Structures & Algorithms (DSA) - Exam Paper 4

---

## 🔹 Part 1: Basic Concepts & Short Questions

### 1. Step Counting Challenges
Analyze the following algorithms and determine the total number of steps or iterations. Assume standard operation costs (1 step each).

**a)** Simple step-based for loop:
```python
count = 0
for i in range(1, 11, 2): # i = 1 to 10 with step 2
    count = count + i
```

**b)** Independent nested loops:
```python
for i from 1 to 5:
    for j from 1 to 10:
        print(j)
```

**c)** Exponential growth (Logarithmic iterations):
```python
x = 1
while x < 100:
    print(x)
    x = x + x
```

**d)** Selective nested execution:
```python
for i from 1 to 5:
    if i == 3:
        for j from 1 to 5:
            print(j)
    else:
        print(i)
```

**e)** Dependant loop structure:
```python
for i from 1 to 4:
    j = 1
    while j <= i:
        print(j)
        j = j + 1
```

**f)** Boolean condition in nested loops:
```python
for i from 1 to 3:
    for j from 1 to 3:
        if i + j > 4:
            print("Target Reached")
```

### 2. Binary Tree (Fill in the Blanks)
Given a BST with root node 100. Left child 80, right child 120. Node 80 has left child 70, right child 90. Node 120 has left child 110, right child 130.

*   **Tree Diagram:**
    ```text
                100
              /     \
            80       120
           /  \     /   \
          70   90  110   130
    ```

*   **Task:** Determine where the values **65** and **115** should be inserted.



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

### 1. Scenario: E-Commerce Product Catalog
An online shopping platform manages its product catalog using a **Binary Search Tree (BST)**, where each product is indexed by its unique **Product Code**. Products are added to the system in the following order:

**Product Codes:** `500, 300, 700, 200, 400, 600, 800, 100, 900`

a) **Building the Catalog:** Draw the BST that represents the product catalog after all products are listed.

*[Draw your tree here]*

b) **New Product Launch:** A new product with **Code 350** is launched on the platform. Show the updated catalog tree and list every product node the system visits while searching for the correct position.

*[Show updated tree and path here]*

c) **Discontinuing a Product:** Product **Code 300** is discontinued. This product node has two sub-categories (two children). Explain the two replacement strategies (**inorder predecessor** vs. **inorder successor**) and show the resulting catalog after replacing it with its **inorder successor**.

*[Show final tree and explanation here]*


---

### 2. Sorting Algorithm: Quick Sort
Perform a step-by-step **Quick Sort** on the following array:
`[45, 15, 65, 5, 55, 25, 35]`

* Choose the **last element** (`35`) as the pivot.
* Clearly show the "Partitioning" steps until the array is sorted.
* Identify the left and right sub-arrays in each partition.
* Highlight the pivot's final position after each pass.

---

[📄 **View Answer Sheet**](../answers/answer-04.md)

