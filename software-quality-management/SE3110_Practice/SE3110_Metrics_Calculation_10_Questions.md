# SE3110 — Metrics Calculation Practice (10 Questions)
### Pure Calculation Only — No Theory Questions
#### Each question: compute Tokens · S · Wc · Wn · Wi · Wt · WC · WCC · V(G) · Vg

---

> **⚠️ IMPORTANT — Ni, No, Sf**
> After a thorough re-read of **Lecture 3**, **Lecture 4**, and the **WCC Guidelines** sheet,
> the symbols **Ni**, **No**, and **Sf** are **not defined anywhere** in your uploaded material.
> They do not appear in any formula, table, or definition in those three files.
> These symbols are therefore **not included** in these questions.
> If your lecturer uses them in another slide deck or handout, upload that document and
> the questions will be extended.

---

> **⚠️ IMPORTANT — for() tokenization note**
> Rule 9 states that `for()` is one token (keyword + brackets). Following the **same pattern**
> as the Lecture 4 worked example (where `if-else()` is 1 token *and* the condition components
> inside the brackets are counted separately), the **condition components** inside `for()` are
> treated as separate tokens in these questions. The `for()` keyword/bracket structure = 1 token;
> init / condition / update components = additional tokens.

---

## 🔑 Formula Reference Card

| Metric | Formula | Source |
|--------|---------|--------|
| **S** (Size) | Number of tokens in a statement | Guidelines Rule 2 |
| **Wc** | Sequential=0, Branch=1, Iterative=2, Switch=n | Lecture 4 |
| **Wn** | Method level=0, 1st control level=1, 2nd=2, nth=n | Lecture 4 |
| **Wi** | Base class=1, 1st derived (subclass)=2, 2nd derived=3, nth derived=n+1 | Lecture 4 / Rule 17 |
| **Wt** | Wc + Wn + Wi | Lecture 4 |
| **WC** | S × Wt | Lecture 4 |
| **WCC** | Σ WC (sum of all WC values) | Lecture 4 |
| **V(G)** | e − n + 2  or  d + 1 | Lecture 3 |
| **Vg** | Σ(di + 1) = n + Σdi  (class level) | Lecture 3 |

**NOT tokens:** `public`, `private`, `static`, `else`, `do`, `return`, `;`, `{`, `}`
**Inheritance Weight Rule (Rule 17):** Base class starts at **Wi = 1**, 1st derived class (first subclass) has **Wi = 2**, 2nd derived class has **Wi = 3**, nth derived has **Wi = n + 1**.

---

## Q-CALC-01 | `if` (no else) · Root class

```java
public class Validator {
    public void isEven(int n) {          // Line 2
        if (n % 2 == 0)                  // Line 3
            System.out.println("Even");  // Line 4
    }
}
```

**Complete the table and compute all metrics:**

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | `public void isEven(int n)` | | | | | | | |
| 3 | `if (n % 2 == 0)` | | | | | | | |
| 4 | `System.out.println("Even")` | | | | | | | |
| | | | | | | | **WCC =** | |

**Also compute:**
- V(G) for `isEven()` using **both** e−n+2 and d+1
- Vg for the `Validator` class

**Guideline rules exercised:** Rule 2, 3, 6, 8, 9, 12, 13, 16, 17

---

## Q-CALC-02 | `if-else` · Root class

```java
public class Grader {
    public void grade(int marks) {          // Line 2
        if (marks >= 50)                    // Line 3
            System.out.println("Pass");     // Line 4
        else
            System.out.println("Fail");     // Line 5
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | | | | | | | | |
| 3 | `if (marks >= 50)` — note: has `else` branch | | | | | | | |
| 4 | `System.out.println("Pass")` | | | | | | | |
| 5 | `System.out.println("Fail")` | | | | | | | |
| | | | | | | | **WCC =** | |

- V(G) for `grade()` using both formulas
- Vg for `Grader`

**Guideline rules exercised:** Rule 2, 3, 8, 9 (`if-else()` token), 12, 13, 17

---

## Q-CALC-03 | `else-if` chain · Root class

```java
public class Scorer {
    public void classify(int score) {             // Line 2
        if (score >= 75)                          // Line 3
            System.out.println("Distinction");    // Line 4
        else if (score >= 50)                     // Line 5
            System.out.println("Pass");           // Line 6
        else
            System.out.println("Fail");           // Line 7
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | | | | | | | | |
| 3 | `if (score >= 75)` | | | | | | | |
| 4 | `System.out.println("Distinction")` | | | | | | | |
| 5 | `else if (score >= 50)` | | | | | | | |
| 6 | `System.out.println("Pass")` | | | | | | | |
| 7 | `System.out.println("Fail")` | | | | | | | |
| | | | | | | | **WCC =** | |

> **Hint:** Rule 9 names `else-if()` as a distinct token type. The `else` keyword alone is not a
> token. What token type does Line 3 use — `if()` or `if-else()`?

- V(G) for `classify()` using both formulas
- Vg for `Scorer`

**Guideline rules exercised:** Rule 2, 3, 8, 9 (`if-else()` and `else-if()` tokens), 12, 13, 17

---

## Q-CALC-04 | `while` loop · Root class

```java
public class Counter {
    public void countUp(int limit) {       // Line 2
        int i = 0;                         // Line 3
        while (i < limit) {               // Line 4
            System.out.println(i);         // Line 5
            i++;                           // Line 6
        }
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | `public void countUp(int limit)` | | | | | | | |
| 3 | `int i = 0` | | | | | | | |
| 4 | `while (i < limit)` | | | | | | | |
| 5 | `System.out.println(i)` | | | | | | | |
| 6 | `i++` | | | | | | | |
| | | | | | | | **WCC =** | |

> **Hint Line 3:** Is `int i = 0` a *declaration* or a *definition*? Apply Rule 7 carefully.

- V(G) for `countUp()` using both formulas
- Vg for `Counter`

**Guideline rules exercised:** Rule 2, 7 (definition vs declaration), 8, 9 (`while()`), 12, 13, 17

---

## Q-CALC-05 | `do-while` loop · Root class

```java
public class Repeater {
    public void repeat(int times) {         // Line 2
        int count = 1;                      // Line 3
        do {                               // ← 'do' is NOT a token (Rule 9)
            System.out.println("Hello");   // Line 4
            count++;                        // Line 5
        } while (count <= times);          // Line 6  ← do-while() token here
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | `public void repeat(int times)` | | | | | | | |
| 3 | `int count = 1` | | | | | | | |
| 4 | `System.out.println("Hello")` | | | | | | | |
| 5 | `count++` | | | | | | | |
| 6 | `} while (count <= times)` | | | | | | | |
| | | | | | | | **WCC =** | |

> **Hint Line 6:** Rule 9 defines `do-while()` as a single token. The `do` keyword alone (at the
> top of the loop) is NOT a token. Where does the `do-while()` token appear?

- V(G) for `repeat()` using both formulas
- Vg for `Repeater`

**Guideline rules exercised:** Rule 2, 3, 7, 9 (`do-while()` placement), 13, 17

---

## Q-CALC-06 | `for` loop with variable definition · Root class

```java
public class Accumulator {
    public void sum(int n) {              // Line 2
        int total = 0;                    // Line 3
        for (int i = 1; i <= n; i++) {   // Line 4
            total = total + i;            // Line 5
        }
        System.out.println(total);        // Line 6
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | `public void sum(int n)` | | | | | | | |
| 3 | `int total = 0` | | | | | | | |
| 4 | `for (int i = 1; i <= n; i++)` | | | | | | | |
| 5 | `total = total + i` | | | | | | | |
| 6 | `System.out.println(total)` | | | | | | | |
| | | | | | | | **WCC =** | |

> **Hint Line 4:** `for()` = 1 token. Then list each component of the for-expression as
> separate tokens (matching the lecture's pattern for `if-else()` condition components).
> For the init `int i = 1`: apply Rule 7 — is this a *declaration* or *definition*?
> **Hint Line 6:** Is `total` a token when it is the *argument* of the non-user-defined
> `println()` method? Check Rule 8 for non-user-defined vs user-defined distinction.

- V(G) for `sum()` using both formulas
- Vg for `Accumulator`

**Guideline rules exercised:** Rule 2, 7, 8, 9 (`for()` token + condition components), 12, 13, 17

---

## Q-CALC-07 | `switch` statement · Root class

```java
public class Season {
    public void printSeason(int month) {               // Line 2
        switch (month) {                               // Line 3
            case 1: System.out.println("Winter");      // Line 4
                    break;                             // Line 5
            case 2: System.out.println("Spring");      // Line 6
                    break;                             // Line 7
            case 3: System.out.println("Summer");      // Line 8
                    break;                             // Line 9
            default: System.out.println("Autumn");     // Line 10
                     break;                            // Line 11
        }
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | `public void printSeason(int month)` | | | | | | | |
| 3 | `switch (month)` | | | | | | | |
| 4 | `case 1: System.out.println("Winter")` | | | | | | | |
| 5 | `break` | | | | | | | |
| 6 | `case 2: System.out.println("Spring")` | | | | | | | |
| 7 | `break` | | | | | | | |
| 8 | `case 3: System.out.println("Summer")` | | | | | | | |
| 9 | `break` | | | | | | | |
| 10 | `default: System.out.println("Autumn")` | | | | | | | |
| 11 | `break` | | | | | | | |
| | | | | | | | **WCC =** | |

> **Hints:**
> - Rule 10: `case 1:` = one token, `default:` = one token
> - Rule 9: `switch()` = one token; what is Wc for a switch with 4 branches (3 cases + default)?
> - Is `break` a token? It is a keyword — check the exclusion list in the guideline summary.

- V(G) for `printSeason()` using e−n+2 (draw the CFG node/edge count) and verify
- Vg for `Season`

**Guideline rules exercised:** Rule 2, 3, 9 (`switch()`), 10 (`case:` / `default:` tokens), 12, 13, 17

---

## Q-CALC-08 | `try-catch` · Root class

```java
public class SafeOp {
    public void divide(int a, int b) {         // Line 2
        try {                                  // ← 'try' is NOT a token (Rule 11)
            int result = a / b;                // Line 3
            System.out.println(result);        // Line 4
        } catch (Exception e) {                // Line 5  ← catch() token here
            System.out.println("Error: /0");   // Line 6
        }
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | `public void divide(int a, int b)` | | | | | | | |
| 3 | `int result = a / b` | | | | | | | |
| 4 | `System.out.println(result)` | | | | | | | |
| 5 | `catch (Exception e)` | | | | | | | |
| 6 | `System.out.println("Error: /0")` | | | | | | | |
| | | | | | | | **WCC =** | |

> **Hints:**
> - Rule 11: `try` is **not** a token. `catch()` is **one** token.
> - Contents inside `catch()` (i.e., `Exception e`) — apply Rule 8 reasoning (catch's parameter).
> - What Wc type is `catch()`? Is it Sequential (0), Branch (1), or Iterative (2)?
> - Line 3 is inside the `try` block — what is its Wn?

- V(G) for `divide()` using both formulas
- Vg for `SafeOp`

**Guideline rules exercised:** Rule 2, 3, 7 (definition), 8, 11 (`catch()` token, `try` excluded), 12, 13, 17

---

## Q-CALC-09 | Nested `for` + nested `if` (3 nesting levels) · Root class

```java
public class MatrixChecker {
    public void checkDiagonal(int n) {          // Line 2
        for (int i = 0; i < n; i++) {           // Line 3  — nesting level ?
            for (int j = 0; j < n; j++) {       // Line 4  — nesting level ?
                if (i == j) {                   // Line 5  — nesting level ?
                    System.out.println("Diag"); // Line 6  — nesting level ?
                }
            }
        }
    }
}
```

| Line | Statement | Tokens (list each) | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|-------------------|---|----|----|----|----|-----|
| 2 | `public void checkDiagonal(int n)` | | | | | | | |
| 3 | `for (int i = 0; i < n; i++)` | | | | | | | |
| 4 | `for (int j = 0; j < n; j++)` | | | | | | | |
| 5 | `if (i == j)` | | | | | | | |
| 6 | `System.out.println("Diag")` | | | | | | | |
| | | | | | | | **WCC =** | |

> **Wn assignment rule (from Lecture 4):**
> A control structure at level N assigns Wn = N to **itself and all statements directly inside it**.
> - Line 3 outer for() = first level control → Wn = 1
> - Line 4 inner for() is inside level-1 for, so it IS the second level control → Wn = 2
> - Line 5 if() is inside level-2 for → it IS the third level control → Wn = 3
> - Line 6 inside if → also Wn = 3

- V(G) for `checkDiagonal()` using d+1
- Vg for `MatrixChecker`

**Guideline rules exercised:** Rule 2, 3, 7, 9 (nested `for()`, `if()` tokens), 12, 13, 17 — Wn levels 1, 2, 3

---

## Q-CALC-10 | Multi-method class + Inheritance · Base class + Derived class

This question covers:
- **User-defined method call WITH argument** → argument is NOT a token (Rule 8)
- **Non-user-defined method call** → argument IS a token (Rule 8)
- **Inheritance**: base class (Wi=1) and first derived class (Wi=2)
- **Multiple methods in one class** → compute Vg

```java
// ── BASE CLASS ──────────────────────────────────────────
public class Animal {                                // (Base class: Wi = 1)
    public void eat() {                              // Line A2
        System.out.println("Eating");               // Line A3
    }
}

// ── DERIVED CLASS ────────────────────────────────────────
public class Dog extends Animal {                    // (1st derived class: Wi = 2)
    public void bark(int times) {                    // Line D2
        for (int i = 0; i < times; i++) {           // Line D3
            System.out.println("Woof");              // Line D4
        }
    }
    public void perform() {                          // Line D5
        eat();                                       // Line D6  ← user-defined call, no explicit arg
        bark(3);                                     // Line D7  ← user-defined call WITH arg
        System.out.println("Done");                  // Line D8  ← non-user-defined call
    }
}
```

**Part A — Animal class table (Wi = 1 for base class):**

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| A2 | `public void eat()` | | | | | 1 | | |
| A3 | `System.out.println("Eating")` | | | | | 1 | | |
| | | | | | | | **WCC_Animal =** | |

**Part B — Dog class table (Wi = 2 for first derived class):**

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| D2 | `public void bark(int times)` | | | | | 2 | | |
| D3 | `for (int i = 0; i < times; i++)` | | | | | 2 | | |
| D4 | `System.out.println("Woof")` | | | | | 2 | | |
| D5 | `public void perform()` | | | | | 2 | | |
| D6 | `eat()` | | | | | 2 | | |
| D7 | `bark(3)` | | | | | 2 | | |
| D8 | `System.out.println("Done")` | | | | | 2 | | |
| | | | | | | | **WCC_Dog =** | |

> **Critical hints for D6 and D7:**
> - D6 `eat()`: this is a **user-defined method call with no arguments**. What is S?
> - D7 `bark(3)`: this is a **user-defined method call WITH argument `3`**. Per Rule 8,
>   *"the components inside the round brackets of user-defined methods are not identified
>   as tokens."* So is `3` a token? What is S for `bark(3)`?
> - D8 `System.out.println("Done")`: `println()` is a **non-user-defined (library) method**.
>   Per Rule 8, its argument `"Done"` **IS** a token (only user-defined method arguments
>   are excluded). What is S?

**Also compute:**
- V(G) for each method in both classes
- Vg for `Animal`
- Vg for `Dog`

**Guideline rules exercised:** ALL 17 rules — particularly Rules 7, 8 (user-defined vs non-user-defined), 9, 12, 17

---

*End of 10 Calculation Questions*

**File:** `SE3110_Metrics_Calculation_10_Questions.md`
**Answers:** See `SE3110_Metrics_Calculation_10_Answers.md`
