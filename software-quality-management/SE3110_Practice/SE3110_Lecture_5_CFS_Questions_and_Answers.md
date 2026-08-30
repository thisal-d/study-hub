# SE3110 — Lecture 5: Cognitive Functional Size (CFS) Practice
## 10 Practice Problems with Complete Step-by-Step Solutions

> **Based on Lecture 5 / Lecture 6:** *Software Metrics (Cognitive Functional Size Metric)*  
> **Key Metric:** $S_f = (N_i + N_o) \times W_c \quad [\text{CWU}]$

---

## 🔑 Formula & Weight Quick Reference Card

### 1. Three Fundamental Factors of CFS:
1. **Cognitive Weights ($W_c$):** Difficulty/effort to comprehend control structures.
2. **Number of Inputs ($N_i$):** Inputs provided to the component (parameters, `Scanner` input calls).
3. **Number of Outputs ($N_o$):** Outputs generated (return values, `println` statements executed at a given time).

### 2. Cognitive Weights of Basic Control Structures (BCSs):

| Category | BCS Name | Notation | Cognitive Weight ($W_c$) |
|:---|:---|:---:|:---:|
| **Sequence** | Sequence Structure | `SEQ` | **1** |
| **Branch** | If-then-[else] | `ITE` | **2** |
| | Case / Switch branch | `CASE` | **3** |
| **Iteration** | For-do | `Ri` | **3** |
| | Do-while | `R1` | **3** |
| | While-do | `R0` | **3** |
| **Embedded** | Function Call | `FC` | **2** |
| | Recursion | `REC` | **3** |

### 3. Total Cognitive Weight ($W_c$):
* **Linear (Sequential blocks, no nesting, $m=1$):**
  $$W_c = \sum_{j=1}^{q} \sum_{i=1}^{n} W_c(j, i)$$
  *(Sum all individual BCS weights)*

* **Nested (Embedded layers, $m > 1$):**
  $$W_c = \sum_{j=1}^{q} \left[ \prod_{k=1}^{m} \sum_{i=1}^{n} W_c(j, k, i) \right]$$
  *(Nesting multiplies across layers!)*

### 4. Cognitive Functional Size Formulas:
* **Basic Component (Single Method):**
  $$S_f = (N_i + N_o) \times W_c \quad [\text{CWU}]$$
* **Complex Component ($n$ Methods):**
  $$S_f(c) = \sum_{c=1}^{n} S_f(c)$$
* **Software System ($p$ Components):**
  $$\hat{S}_f = \sum_{k=1}^{p} S_f(k)$$

*(Unit: **CWU** = Cognitive Weight Units)*

---

## 📝 Practice Problems (Q1 – Q10)

---

### Problem 1 [Conceptual — BCS Cognitive Weights]
Match each of the following programming constructs to its exact category, abbreviation, and cognitive weight according to Lecture 5:
1. `do { ... } while (condition);`
2. `switch(x) { case 1: ... }`
3. A series of sequential assignment and print statements
4. A recursive call `factorial(n - 1)`
5. An `if-else` statement
6. Calling a helper method `calculateTax()`

---

### Problem 2 [Calculation — Linear $W_c$ with Sequential & Branch]
Calculate the total cognitive weight ($W_c$) for a method containing:
- 1 sequence block of variable initializations
- An `if-then-else` block checking a condition
- Followed sequentially by another independent `if-then-else` block

---

### Problem 3 [Calculation — Linear $W_c$ with Independent Loops]
Calculate the total cognitive weight ($W_c$) for the following method:

```java
public static void process(int[] arr) {
    // Block 1: Sequence
    int sum = 0;
    int max = arr[0];

    // Block 2: Loop 1
    for (int i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Block 3: Loop 2
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]; // Note: treat this as an if inside the loop
    }
}
```
*(Hint: Watch whether the second loop contains nesting!)*

---

### Problem 4 [Calculation — Nested $W_c$: Loop enclosing If]
A method has:
- Initial sequential statements
- A `for` loop, inside of which is an `if-else` branch statement

Calculate the total cognitive weight ($W_c$) step-by-step using the nesting formula.

---

### Problem 5 [Calculation — Deep Nesting: Triple Layers (Bubble Sort Pattern)]
Consider the following `bubbleSort` implementation from the lecture notes:

```java
public void bubbleSort() {
    int out, in;
    for (out = nElems - 1; out > 1; out--) {
        for (in = 0; in < out; in++) {
            if (a[in] > a[in + 1]) {
                swap(in, in + 1);
            }
        }
    }
}
```

Calculate the total cognitive weight ($W_c$) showing all nesting multiplications clearly.

---

### Problem 6 [Analysis — Determining $N_i$ (Inputs)]
For each of the following method headers or code snippets, determine the number of inputs ($N_i$):
1. `public int add(int a, int b, int c)`
2. A method with no parameters that calls `sc.nextInt()` twice to read user input from the console
3. `public void updateRecord(int id, String name, double salary)`
4. A method that takes an array parameter `int[] data` and also calls `scanner.nextLine()` once

---

### Problem 7 [Analysis — Determining $N_o$ (Outputs)]
Determine the number of outputs ($N_o$) for the following cases based on Lecture 5 guidelines:
1. A method `public double getPi()` that executes `return 3.14159;`
2. A method with an `if-else` structure where the `if` branch executes `System.out.println("Pass");` and the `else` branch executes `System.out.println("Fail");`
3. A method that prints 3 separate lines sequentially: `System.out.println("A"); System.out.println("B"); System.out.println("C");`

---

### Problem 8 [Full Calculation — Complete $S_f$ for a Basic Component]
Analyze the following Java method and calculate its Cognitive Functional Size ($S_f$):

```java
public void verifyPassword() {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter password: ");
    String pwd = sc.next();

    while (pwd.length() < 8) {
        System.out.print("Password too short. Re-enter: ");
        pwd = sc.next();
    }

    if (pwd.equals("Admin@123")) {
        System.out.println("Access Granted");
    } else {
        System.out.println("Access Denied");
    }
}
```

**Required:**
1. Identify all BCSs and calculate $W_c$.
2. Determine $N_i$ and $N_o$.
3. Compute $S_f$ in `[CWU]`.

---

### Problem 9 [Complex Component — Multiple Methods in a Class $S_f(c)$]
A class `AccountManager` contains two methods:
* **Method 1 (`deposit`):** $N_i = 1$, $N_o = 1$, Structure = Sequence + 1 If-else branch.
* **Method 2 (`applyInterest`):** $N_i = 2$, $N_o = 1$, Structure = Sequence + 1 `for` loop enclosing an `if` branch.

Calculate:
1. $S_f$ for Method 1
2. $S_f$ for Method 2
3. Total Cognitive Functional Size of the complex component $S_f(c)$

---

### Problem 10 [Software System — Component-Based System $\hat{S}_f$]
An enterprise grading system consists of 3 software components:
* **Component 1 (InputModule):** $S_f = 24\text{ CWU}$
* **Component 2 (GradingEngine):** $S_f = 90\text{ CWU}$
* **Component 3 (ReportGenerator):** $S_f = 45\text{ CWU}$

Calculate the total Cognitive Functional Size of the entire software system ($\hat{S}_f$).

---

# 📖 Complete Step-by-Step Solutions

---

### Solution 1

| Construct | Category | BCS Name | Notation | Weight ($W_c$) |
|:---|:---|:---|:---:|:---:|
| 1. `do-while` loop | Iteration | Do-while | `R1` | **3** |
| 2. `switch-case` | Branch | Case | `CASE` | **3** |
| 3. Sequential actions | Sequence | Sequence | `SEQ` | **1** |
| 4. Recursive call | Embedded | Recursion | `REC` | **3** |
| 5. `if-else` | Branch | If-then-[else] | `ITE` | **2** |
| 6. Helper method call | Embedded | Function Call | `FC` | **2** |

---

### Solution 2
* **Structure:** Linear (no nesting) $\rightarrow m = 1$.
* **BCSs present:**
  1. Sequence (`SEQ`) $\rightarrow W_c = 1$
  2. First Branch (`ITE`) $\rightarrow W_c = 2$
  3. Second Branch (`ITE`) $\rightarrow W_c = 2$
* **Formula:**
  $$W_c = \sum W_c(i) = 1 + 2 + 2 = \mathbf{5}$$

---

### Solution 3
Let's analyze the blocks:
* **Block 1 (Sequence):** Initial variable assignments $\rightarrow \text{SEQ} = 1$
* **Block 2 (Loop 1):** Independent `for` loop with sequential body $\rightarrow \text{Ri} = 3$
* **Block 3 (Loop 2 with inner if):**
  * Outer structure: `for` loop ($\text{Ri} = 3$)
  * Inner nested structure: `if` statement ($\text{ITE} = 2$)
  * Because the `if` is **nested inside** the loop, their weights **multiply**:
    $$\text{Nested Block} = 3 \times 2 = 6$$
* **Total $W_c$:**
  $$W_c = \text{Sequence} + \text{Loop 1} + (\text{Loop 2} \times \text{If}) = 1 + 3 + (3 \times 2) = 1 + 3 + 6 = \mathbf{10}$$

---

### Solution 4
* **Block 1 (Sequence):** Initial assignments $\rightarrow W_c = 1$
* **Block 2 (Nested Control Structure):**
  * Layer 1 (Outer): `for` loop $\rightarrow \text{Ri} = 3$
  * Layer 2 (Inner): `if-else` $\rightarrow \text{ITE} = 2$
  * Nesting multiplication: $3 \times 2 = 6$
* **Total $W_c$:**
  $$W_c = 1 + (3 \times 2) = 1 + 6 = \mathbf{7}$$

---

### Solution 5 (`bubbleSort`)
* **Layer 0 (Outer Sequence):** `int out, in;` $\rightarrow \text{SEQ} = 1$
* **Layer 1:** Outer `for` loop $\rightarrow \text{Ri} = 3$
* **Layer 2 (Nested in Layer 1):** Inner `for` loop $\rightarrow \text{Ri} = 3$
* **Layer 3 (Nested in Layer 2):** `if` condition $\rightarrow \text{ITE} = 2$
* **Layer 4 (Nested in Layer 3):** `swap()` function call $\rightarrow \text{FC} = 2$

Using the nested product formula from Lecture 5 (Slide 143):
$$W_c = \sum_{j=1}^q \left[ \prod_{k=1}^m \sum_{i=1}^n W_c(j, k, i) \right]$$
$$W_c = 1 + [3 \times (3 \times (2 \times 2))]$$
$$W_c = 1 + [3 \times 3 \times 4] = 1 + 36 = \mathbf{37}$$

---

### Solution 6
1. `add(int a, int b, int c)`: 3 input parameters $\rightarrow \mathbf{N_i = 3}$
2. Two `sc.nextInt()` input operations $\rightarrow \mathbf{N_i = 2}$
3. `updateRecord(int id, String name, double salary)`: 3 parameters $\rightarrow \mathbf{N_i = 3}$
4. 1 parameter array + 1 `scanner.nextLine()` call $\rightarrow 1 + 1 = \mathbf{N_i = 2}$

---

### Solution 7
1. `return 3.14159;` $\rightarrow$ Single return value $\rightarrow \mathbf{N_o = 1}$
2. `if-else` where only one `System.out.println` executes at a given time:
   * Per Lecture 5 Slide 296: *"Only one S.O.P statement is executed at a given time"* $\rightarrow \mathbf{N_o = 1}$
3. Three sequential `println` statements executed unconditionally one after another:
   * Each executed line produces an output $\rightarrow \mathbf{N_o = 3}$

---

### Solution 8 (`verifyPassword`)

#### 1. Calculate $W_c$:
* **Sequence (SEQ):** Initial scanner and print statements $\rightarrow 1$
* **While loop (R0):** `while (pwd.length() < 8)` $\rightarrow 3$
* **If-then-else (ITE):** `if (pwd.equals(...))` $\rightarrow 2$
* All structures run sequentially (the `while` finishes, then the `if` executes):
  $$W_c = 1 + 3 + 2 = \mathbf{6}$$

#### 2. Determine $N_i$ and $N_o$:
* **$N_i$ (Inputs):** `sc.next()` is called twice (once before loop, once inside loop) $\rightarrow \mathbf{N_i = 2}$
* **$N_o$ (Outputs):** Only one final decision message is output at a given time (`Access Granted` or `Access Denied`) $\rightarrow \mathbf{N_o = 1}$

#### 3. Calculate $S_f$:
$$S_f = (N_i + N_o) \times W_c$$
$$S_f = (2 + 1) \times 6 = 3 \times 6 = \mathbf{18\text{ [CWU]}}$$

---

### Solution 9 (`AccountManager`)

#### Method 1 (`deposit`):
* $W_c = \text{Sequence} + \text{Branch} = 1 + 2 = 3$
* $N_i = 1, N_o = 1 \rightarrow (N_i + N_o) = 2$
* $S_f(1) = 2 \times 3 = \mathbf{6\text{ CWU}}$

#### Method 2 (`applyInterest`):
* $W_c = \text{Sequence} + (\text{For} \times \text{If}) = 1 + (3 \times 2) = 1 + 6 = 7$
* $N_i = 2, N_o = 1 \rightarrow (N_i + N_o) = 3$
* $S_f(2) = 3 \times 7 = \mathbf{21\text{ CWU}}$

#### Complex Component $S_f(c)$:
$$S_f(c) = \sum_{c=1}^2 S_f(c) = S_f(1) + S_f(2) = 6 + 21 = \mathbf{27\text{ [CWU]}}$$

---

### Solution 10 (System Size $\hat{S}_f$)
$$\hat{S}_f = \sum_{k=1}^p S_f(k) = S_f(\text{InputModule}) + S_f(\text{GradingEngine}) + S_f(\text{ReportGenerator})$$
$$\hat{S}_f = 24 + 90 + 45 = \mathbf{159\text{ [CWU]}}$$
