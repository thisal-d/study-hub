# SE3110 — Software Engineering Process and Quality Management
## Practice Question Set: Software Metrics
### Covers: Lectures 3 & 4 + WCC Guidelines Sheet

---

> **⚠️ NOTE ON HALSTEAD METRICS**
> Your uploaded lecture files (Lecture 3, Lecture 4, WCC Guidelines) do **not** contain Halstead
> metrics (n1, n2, N1, N2, Volume, Difficulty, Effort, etc.). These appear to be taught in a
> different lecture or resource not yet uploaded. The questions below therefore cover **only the
> metrics present in your uploaded material**. Once you upload the Halstead lecture, a supplement
> can be added. The notation n1, n2, N1, N2, V, D, E used in your request has not been defined
> anywhere in your files, so no Halstead questions are included — flagged as required.

> **⚠️ NOTE ON No / Ni / Sf**
> Your uploaded files do **not** define No, Ni, or Sf. These symbols are absent from Lectures 3
> & 4 and from the WCC Guidelines. If these appear in a different handout, please upload it.

---

## SECTION A — Conceptual / Definition Questions

---

### Q1 [Conceptual — Easy]

Define the following terms **exactly as they appear in Lecture 3**:

**(a)** What does **V(G)** measure, and what does each variable in the formula **V(G) = e − n + 2** represent?

**(b)** State the alternative formula **V(G) = d + 1** and explain what **d** represents.

**(c)** How does the lecture derive V(G) = d + 1 from V(G) = e − n + 2? Express the node count
and edge count formulas given in terms of **d** (decision nodes) and **p** (procedure nodes),
then show the algebraic derivation.

---

### Q2 [Conceptual — Easy]

According to **Lecture 4**, the WCC (Weighted Composite Complexity) metric is based on **four key factors**. Name all four factors and briefly describe what each one captures.

---

### Q3 [Conceptual — Easy]

The WCC guidelines sheet lists **17 tokenisation rules**. Answer the following using those exact rules:

**(a)** Which of the following are **not** tokens? (Circle all that apply):
`public`, `static`, `else`, `do`, `return`, `;`, `{`, `}`

**(b)** In the statement `System.out.println("Hello");`, identify each token and state which
guideline rule applies to each one.

**(c)** In a `switch` statement, how are `case 1:` and `default:` treated as tokens?

**(d)** In a method declaration such as `public void calculate(int x, int y)`, what tokens are
counted and why are `x` and `y` not tokens here (state the rule number)?

---

### Q4 [Conceptual — Medium]

Explain the difference between **Wc, Wn, and Wi** as defined in Lecture 4.

**(a)** Write out the complete weight table for **Wc** (all four types of control structures and their assigned weights).

**(b)** Write out the complete weight table for **Wn** (all nesting levels and weights).

**(c)** Write out the complete weight table for **Wi** (all inheritance levels and weights).

**(d)** What is the formula for **Wt**?

**(e)** What is the formula for **WC** (Weighted Complexity of a single statement)?

**(f)** What is the formula for the overall **WCC** value of a program?

---

### Q5 [Conceptual — Medium]

The **Vg formula for a class** is given in Lecture 3 as:

$$V_g = \sum_{i=1}^{n}(d_i + 1) = n + \sum_{i=1}^{n} d_i$$

**(a)** Define every symbol in this formula.

**(b)** A class has 4 methods. Method A has 0 decisions, method B has 2 decisions,
method C has 1 decision, method D has 3 decisions. Calculate **Vg** for the class
**step by step** using both the summation form and the simplified form.

**(c)** Lecture 3 states: *"The CC value obtained from the class file can be higher than CC
obtained from the source file."* Explain briefly why this is the case.

---

## SECTION B — Calculation Problems

---

### Q6 [Calculation — Easy] *Cyclomatic Complexity from Edge/Node Count*

A control flow graph has the following properties:

| Graph | Edges (e) | Nodes (n) |
|-------|-----------|-----------|
| G1    | 5         | 4         |
| G2    | 7         | 6         |
| G3    | 9         | 7         |
| G4    | 3         | 3         |

**(a)** Calculate **V(G)** for each graph using the formula V(G) = e − n + 2.

**(b)** For G3, also verify your answer using V(G) = d + 1, where d = number of decision nodes.
(The graph has 2 decision nodes and 4 procedure nodes.)

---

### Q7 [Calculation — Medium] *Token Counting (S)*

Given the following Java method declaration line:

```java
public void processOrder(int quantity, double price) {
```

**(a)** Using the WCC guidelines, list **every token** present in this statement and state which
rule number from the guidelines sheet justifies counting (or not counting) each element.

**(b)** What is the **Size (S)** of this statement?

---

### Q8 [Calculation — Medium] *Full WCC Table — Simple Program*

Consider the following Java program. Assume this class has **no parent class** (root/base class).

```java
public class Counter {                           // Line 1
    public void increment(int count) {           // Line 2
        count++;                                 // Line 3
    }                                            // Line 4
    public static void main(String[] args) {     // Line 5
        Counter c = new Counter();               // Line 6
        c.increment(1);                          // Line 7
    }                                            // Line 8
}                                                // Line 9
```

Complete the table below for **all executable statements**, then compute the **WCC value**:

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
|  2   |           |        |   |    |    |    |    |    |
|  3   |           |        |   |    |    |    |    |    |
|  5   |           |        |   |    |    |    |    |    |
|  6   |           |        |   |    |    |    |    |    |
|  7   |           |        |   |    |    |    |    |    |
| **WCC** | | | | | | | | **?** |

*(Use the exact tokenisation rules from the WCC guidelines sheet.)*

---

### Q9 [Calculation — Hard] *Full WCC Table — Program with Loop and Nesting*

The class `Processor` **extends** `BaseClass` (so `Processor` is the **first derived class**).

```java
public class Processor extends BaseClass {       // Line 1
    public void analyse(int[] data) {            // Line 2
        for (int i = 0; i < data.length; i++) {  // Line 3
            if (data[i] > 0) {                   // Line 4
                System.out.println(data[i]);      // Line 5
            }                                    // Line 6
        }                                        // Line 7
    }                                            // Line 8
}                                                // Line 9
```

**(a)** For each executable statement, list the tokens, determine S, Wc, Wn, and Wi,
then compute Wt and WC.

**(b)** Sum all WC values to obtain the **WCC** of the program.

**(c)** Identify the nesting level of Line 5. Justify your answer using the Wn table from Lecture 4.

---

### Q10 [Calculation — Medium] *WCC with a Switch Statement*

Consider the following snippet from a **root class** (no parent):

```java
public class Grade {                                       // Line 1
    public void printGrade(int score) {                    // Line 2
        switch (score) {                                   // Line 3
            case 1: System.out.println("Distinction");     // Line 4
                    break;
            case 2: System.out.println("Merit");           // Line 5
                    break;
            default: System.out.println("Pass");           // Line 6
                    break;
        }
    }
}
```

**(a)** What is the **Wc** value for Line 3 (the switch statement)? Justify using the Wc table.

**(b)** Are `break` statements counted as tokens? Which rule applies?

**(c)** Compute S for Line 4: `case 1: System.out.println("Distinction");`

**(d)** Compute the full WCC for this program, showing your complete working table.

---

## SECTION C — Control Flow Graph (CFG) Problems

---

### Q11 [CFG + V(G) — Easy]

Draw the **control flow graph** and compute **V(G)** for the following method:

```java
public static void checkAge(int age) {
    if (age >= 18)
        System.out.println("Adult");
    else
        System.out.println("Minor");
}
```

**Instructions:**
- Label the **start node**, all **decision nodes** (with the condition), all **procedure nodes**, and the **stop node**.
- Label all edges with directions and T/F where applicable.
- State the values of **e** (edges) and **n** (nodes) from your graph.
- Compute V(G) using **both** V(G) = e − n + 2 **and** V(G) = d + 1, and verify they agree.

---

### Q12 [CFG + V(G) — Medium]

Draw the **control flow graph** and compute **V(G)** for the following method:

```java
public static void classify(int x) {
    if (x > 0) {
        System.out.println("Positive");
    } else {
        if (x == 0) {
            System.out.println("Zero");
        } else {
            System.out.println("Negative");
        }
    }
}
```

**Instructions:**
- Include all node types and edge directions.
- Count edges and nodes, then compute V(G) = e − n + 2.
- Verify using V(G) = d + 1.
- State the **number of linearly independent paths** this implies.

---

### Q13 [CFG + V(G) — Hard]

Draw the **control flow graph** and compute **V(G)** for the following method,
which contains both a loop and a nested conditional:

```java
public static void process(int n) {
    int i = 0;
    while (i < n) {
        if (i % 2 == 0)
            System.out.println("Even: " + i);
        else
            System.out.println("Odd: " + i);
        i++;
    }
}
```

**Instructions:**
- Clearly distinguish the `while` decision node from the `if` decision node.
- Draw the back-edge for the loop.
- Count all edges (including the back-edge) and all nodes.
- Compute V(G) = e − n + 2.
- Also compute Vg using the class-level formula if this were a class with only this one method
  (n = 1 method, count all decisions).

---

## SECTION D — Mixed / Integration Problems

---

### Q14 [Mixed — Medium] *Cyclomatic Complexity of a Class*

A Java class named `Calculator` contains the following methods:

| Method | Description | Decision Statements (d) |
|--------|-------------|-------------------------|
| `add()`      | Simple addition | 0 |
| `divide()`   | Division with a zero-check | 1 |
| `classify()` | Uses if-else-if chain | 3 |
| `loop()`     | Contains a for-loop and one if inside | 2 |

**(a)** Calculate **V(G)** for each method individually using V(G) = d + 1.

**(b)** Calculate the **total class-level cyclomatic complexity Vg** using:
$$V_g = \sum_{i=1}^{n}(d_i + 1)$$

**(c)** Verify using the simplified form: **Vg = n + Σdi**, where n = number of methods.

---

### Q15 [Mixed — Hard] *Full Analysis: CFG + WCC on the Same Program*

Perform a **complete analysis** of the following Java program. Assume this is a **root class**.

```java
public class Evaluator {                                // Line 1
    public void evaluate(int score) {                   // Line 2
        if (score >= 50) {                              // Line 3
            System.out.println("Pass");                 // Line 4
        } else {                                        // Line 5
            System.out.println("Fail");                 // Line 6
        }                                               // Line 7
    }                                                   // Line 8
}                                                       // Line 9
```

**Part A — Cyclomatic Complexity:**
1. Draw the complete control flow graph for the `evaluate` method, labelling all nodes and edges.
2. Count e and n from your graph.
3. Compute V(G) using e − n + 2.
4. Verify using d + 1.
5. Compute Vg for the class (class has only this one method).

**Part B — WCC Analysis:**
1. Identify all executable statements (skip non-executable lines per the guidelines).
2. For each executable statement, list tokens, S, Wc, Wn, Wi, Wt, and WC.
3. Sum all WC values to get the final **WCC**.
4. Interpret what the WCC value tells you about this program's complexity.

---

*End of Question Set — 15 Questions*

**Sources:** SE3110 Lecture 3 (Cyclomatic Complexity), Lecture 4 (WCC Metric), WCC Guidelines Sheet
