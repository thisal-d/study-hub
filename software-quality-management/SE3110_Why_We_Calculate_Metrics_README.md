# 🧠 The "Why" Behind Software Metrics: Theoretical & Conceptual Rationale Guide
### SE3110 — Software Engineering Process and Quality Management
> **Purpose of this Guide:** This document does **not** focus on mechanical calculations. Instead, it explains **WHY** each metric, variable, and weight was invented, what software engineering or psychological problem it solves, why the formulas combine them the way they do (addition vs. multiplication), and how to interpret their meaning in practice.

---

## 🧭 Navigation & Conceptual Overview

```
                      SOFTWARE METRICS SPECTRUM
                      ─────────────────────────
      LECTURE 3                 LECTURE 4                  LECTURE 5
┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│   McCabe's V(G)    │ ── │      WCC Metric    │ ── │      CFS Metric    │
│  (Paths & Testing) │    │(Tokens, Nest, OOP) │    │(Cognitive Working  │
│                    │    │                    │    │      Memory)       │
└────────────────────┘    └────────────────────┘    └────────────────────┘
   d, e, n, V(G), Vg       S, Wc, Wn, Wi, Wt, WC, WCC    BCS, Ni, No, Wc, Sf, CWU
```

### The Fundamental Problem of Software Measurement
Before analyzing individual variables, consider why simple metrics like Lines of Code (LOC) fail:
* **Why not just count Lines of Code (LOC)?** 
  A 100-line sequence of simple print statements is trivial to test and maintain. Conversely, a 20-line algorithm with 4 nested loops and recursive calls can be virtually impossible to debug or test completely. LOC measures **typing volume**, not **intellectual difficulty**, **structural risk**, or **testing effort**.
* **Why multiple metrics across 3 lectures?**
  Each metric examines software through a fundamentally different lens:
  1. **Lecture 3 (McCabe):** Focuses on **execution paths & testing limits** (*How many test cases do I need?*).
  2. **Lecture 4 (WCC):** Focuses on **syntactic density & architectural overhead** (*How heavy is each statement when factoring in token count, nesting depth, and OOP class hierarchies?*).
  3. **Lecture 5 (CFS):** Focuses on **human cognitive comprehension & working memory** (*How many cognitive mental units does a human brain expend trying to understand and maintain this component?*).

---

## 1. 📊 LECTURE 3: Cyclomatic Complexity Measure (McCabe)

### The Core Goal
To quantify the **number of linearly independent execution paths** through a piece of code, establishing the mathematical minimum number of test cases required for complete branch/path coverage.

---

### Variable-by-Variable: The "WHY"

#### 1. $V(G) = e - n + 2$ (Graph-Based Cyclomatic Complexity)
* **What it is:** Calculated from a Control Flow Graph (CFG) where $e$ is edges and $n$ is nodes.
* **Why calculate it?**
  * **Testing Lower Bound:** $V(G)$ defines the **basis set** of paths. If a function has $V(G) = 5$, it is mathematically impossible to test all decisions and branches with fewer than 5 test cases.
  * **Bug Proneness Indicator:** Empirical studies show that functions with high cyclomatic complexity have exponentially higher defect densities.
* **Why "+ 2"?**
  In graph theory, Euler's formula for the cyclomatic number of a planar graph with a single connected component is $e - n + 1$. In program control graphs, McCabe considers an imaginary return edge from exit to entry (forming a strongly connected graph), which changes the formula to $e - n + 2p$ (where $p = 1$ for a single method).

#### 2. $V(G) = d + 1$ (Decision-Based Cyclomatic Complexity)
* **What it is:** $d$ is the number of predicate/decision nodes (`if`, `while`, `for`, `case`).
* **Why calculate it instead of drawing graphs?**
  Drawing a CFG for a 2,000-line codebase is tedious and error-prone. Calculating $d + 1$ allows static code analysis tools (and human reviewers) to compute cyclomatic complexity in linear time directly from source code.
* **Why "+ 1"?**
  A program with **zero decisions** ($d = 0$) is purely sequential. It still has **1 independent path** that runs straight from start to stop. Each decision node adds an alternative branch, increasing the path count by 1 above the baseline path.

#### 3. Why does $(2d + p) - (d + p + 1) + 2$ reduce to $d + 1$? (The Derivation)
* **Why do we study this derivation?**
  To prove that **non-decision procedural nodes ($p$) contribute zero path complexity**.
  * Total nodes in CFG: $n = d + p + \text{Start} + \text{Stop} = d + p + 1$ (since Stop is shared).
  * Total edges in CFG: $e = 2d + 1p$ (each decision has 2 outgoing edges; each procedure node has 1 outgoing edge).
  * Substitute into $e - n + 2$:
    $$(2d + p) - (d + p + 1) + 2 = 2d - d + p - p - 1 + 2 = d + 1$$
  * **The Insight:** Procedural nodes cancel out completely ($p - p = 0$). Only decision nodes ($d$) increase path complexity!

#### 4. $V_g = \sum_{i=1}^{n} V(G_i) = n + \sum d_i$ (Class-Level Cyclomatic Complexity)
* **What it is:** The sum of cyclomatic complexities of all $n$ methods in a class.
* **Why calculate it at the class level?**
  * Individual methods might each look simple ($V(G) \le 3$), but if a class has 30 methods, the class as a whole represents an enormous web of decision points.
  * Identifies **"God Classes"** that violate the Single Responsibility Principle (SRP).
  * Helps QA leads budget unit-testing effort across classes in an OOP system.
* **Why the $+ n$ term?**
  Because every method starts with a baseline path of 1 ($d_i + 1$). Across $n$ methods, the baselines sum to $n$.

#### 5. Bytecode CC vs. Source Code CC
* **What it is:** Measuring complexity on `.class` compiled bytecode vs. `.java` source code.
* **Why calculate it on bytecode?**
  Source code hides complexity behind syntactic sugar. The Java compiler (`javac`) expands high-level syntax into explicit bytecode branches:
  1. **Short-Circuit Evaluation:** `if (A && B)` looks like 1 decision in source code, but compiles into two consecutive conditional jumps (`ifeq` / `ifne`).
  2. **Implicit Compiler Constructs:** `try-finally` blocks, foreach iterators, switch table structures (`tableswitch` vs `lookupswitch`), and synthetic bridge methods create additional branching at the bytecode level.
* **The Key Takeaway:** Bytecode CC is often **higher** than source code CC because it reveals the true execution pathways executed by the JVM runtime.

---

## 2. 🏗️ LECTURE 4: Weighted Composite Complexity (WCC)

### The Core Goal
To overcome the blind spots of McCabe's metric. McCabe treats every decision equally: an `if` containing 1 simple line has the same $V(G) = 2$ as an `if` containing 50 lines of complex logic nested 3 levels deep inside an inherited subclass. WCC was engineered to incorporate **Size, Control Type, Nesting, and OOP Inheritance**.

---

### Variable-by-Variable: The "WHY"

```
┌────────────────────────────────────────────────────────────────────────┐
│                     WCC FORMULA DECONSTRUCTION                         │
│                                                                        │
│   WCC = Σ [ S × ( Wc + Wn + Wi ) ]                                    │
│             │     ────────────                                         │
│             │          │                                               │
│             ▼          ▼                                               │
│       Statement Size   Environmental Gravity Factor (Wt)               │
│       (Token Count)    (Control Type + Nesting + Inheritance)          │
└────────────────────────────────────────────────────────────────────────┘
```

#### 1. $S_j$ (Size of the $j^{\text{th}}$ Executable Statement in Tokens)
* **What it is:** The total number of meaningful syntactic tokens in statement $j$.
* **Why count Tokens instead of Lines or Characters?**
  * Character counts are distorted by long variable names or whitespace indentation.
  * Lines of code are distorted by formatting (e.g., placing multiple operations on one line vs. breaking one statement across three lines).
  * A **token** is an atomic lexical entity. Each token represents one discrete conceptual chunk that a compiler or a developer must parse and hold in working memory.
* **Why exclude punctuation (`;`, `{`, `}`) and access flags (`public`, `private`)?**
  They are syntactic wrappers required by the compiler's parser, not operational payload. They do not alter the computational data flow of the statement.
* **Why count variable definition (`int x = 5;` $\to$ 4 tokens) differently from declaration (`int x;` $\to$ 1 token)?**
  A declaration merely reserves a type symbol in the symbol table (low cognitive impact). A definition assigns an initial state and binds a value, altering runtime memory state.

#### 2. $W_c$ (Weight Due to Type of Control Structure)
* **What it is:** Weights assigned based on control flow type:
  * Sequential = **0**
  * Branch (`if`, `else-if`, `catch`) = **1**
  * Iterative (`for`, `while`, `do-while`) = **2**
  * Switch with $n$ cases = **$n$**
* **Why calculate it?**
  Different control structures impose fundamentally different cognitive and algorithmic friction:
  * **Why Sequential = 0?** A sequential line executes in straight-line sequence. It causes zero flow diversion or condition evaluation.
  * **Why Branch = 1?** The program must evaluate a boolean predicate and choose one of two distinct paths.
  * **Why Iterative = 2?** A loop does everything a branch does (condition checking) PLUS maintains loop counter state, checks loop invariants, creates back-edges, and introduces the risk of infinite execution.
  * **Why Switch = $n$?** A switch evaluates a selector and branches into one of $n$ distinct execution pathways.

#### 3. $W_n$ (Weight Due to Nesting Level of Control Structures)
* **What it is:** 
  * Method level / Sequential = **0**
  * Inside 1st level control structure = **1**
  * Inside 2nd level control structure = **2**
  * Inside $n^{\text{th}}$ level = **$n$**
* **Why calculate it?**
  * Nesting is the primary cause of software comprehension collapse (the dreaded "Pyramid of Doom" / "Arrow Anti-pattern").
  * **The Human Context Buffer:** To understand a statement nested 3 levels deep (`if` inside `while` inside `for`), a developer cannot evaluate it in isolation. They must simultaneously hold Condition 1 AND Condition 2 AND Condition 3 true in their head. The mental effort scales directly with depth.

#### 4. $W_i$ (Weight Due to Inheritance Level of Statements)
* **What it is:**
  * Base class / Root class = **1** (under Rule 17 for Java/OOP)
  * 1st derived class = **2**
  * 2nd derived class = **3**
  * $n^{\text{th}}$ derived class = **$n + 1$**
* **Why calculate it?**
  * Addresses the **"Fragile Base Class" problem** in Object-Oriented systems.
  * A statement written in a subclass does not operate in a vacuum—it implicitly inherits fields, invariants, virtual dispatch tables, and side effects from its ancestors.
  * The deeper the inheritance tree, the harder it is to predict runtime behavior, maintain encapsulation, and debug overridden behavior.

#### 5. $W_t = W_c + W_n + W_i$ (Total Weight of a Statement)
* **What it is:** The sum of control type weight, nesting weight, and inheritance weight.
* **Why ADD them instead of multiplying?**
  $W_c$, $W_n$, and $W_i$ represent three **orthogonal (independent) dimensions of structural environment**:
  * $W_c$: What kind of structure immediately encloses the statement?
  * $W_n$: How deep in the block hierarchy does the statement sit?
  * $W_i$: How deep in the class hierarchy does the statement sit?
  Summing them creates a single composite **"Environmental Severity Multiplier"** ($W_t$) representing how hostile the statement's surroundings are.

#### 6. $WC = S \times W_t$ (Weighted Complexity of a Single Statement)
* **What it is:** The product of statement token size ($S$) and its total environmental weight ($W_t$).
* **Why MULTIPLY $S$ by $W_t$?**
  This is the core insight of WCC:
  * A 10-token statement in a simple, flat, root-level method has $W_t = 0 + 0 + 1 = 1 \implies WC = 10 \times 1 = \mathbf{10}$.
  * That exact same 10-token statement placed inside a 2nd-level nested loop in a 1st derived class has $W_c = 2, W_n = 2, W_i = 2 \implies W_t = 6 \implies WC = 10 \times 6 = \mathbf{60}$.
  * **Multiplication ensures that heavy statements in hazardous environments receive an exponentially higher complexity penalty**, accurately mirroring real-world maintenance costs.

#### 7. $WCC = \sum_{j=1}^{n} WC_j$ (Weighted Composite Complexity of the Program)
* **What it is:** The sum of all $WC$ values across all executable statements.
* **Why calculate it?**
  * It provides a **single, unified metric** for an entire class or program.
  * It allows architects to compare two candidate designs or refactorings objectively. If refactoring deep inheritance into composition drops $WCC$ from 340 to 120, the refactoring is provably superior in complexity reduction.

---

## 3. 🧠 LECTURE 5: Cognitive Functional Size (CFS)

### The Core Goal
While WCC measures syntactic code weight, CFS measures **how much cognitive mental effort a human brain expends** to comprehend a software component, combined with **the volume of information it exchanges with the external world**. It is **Paradigm Independent** (works identically on procedural, OOP, functional, or service-oriented code).

---

### Variable-by-Variable: The "WHY"

```
┌────────────────────────────────────────────────────────────────────────┐
│                     CFS FORMULA DECONSTRUCTION                         │
│                                                                        │
│   Sf = ( Ni + No ) × Wc  [CWU]                                         │
│        ───────────   ──                                                │
│             │         │                                                │
│             ▼         ▼                                                │
│      Functional I/O  Internal Cognitive Weight                         │
│      Information     (BCS Mental Processing Load)                      │
│      Boundary                                                          │
└────────────────────────────────────────────────────────────────────────┘
```

#### 1. Basic Control Structures (BCSs) and Their Cognitive Weights
The weights are derived from psychological experiments on human working memory (George Miller's $7 \pm 2$ chunk capacity):

| Category | Structure | Weight ($W_c$) | **WHY this specific weight?** |
|---|---|:---:|---|
| **Sequence** | Sequence (`SEQ`) | **1** | **Baseline Unit:** The simplest cognitive act. Code executes line-by-line in predictable order; no branching, no state backtracking. |
| **Branch** | If-then-[else] (`ITE`) | **2** | **Bifurcation:** The brain must construct and evaluate two alternative mental models (what happens if true vs. what happens if false). |
| **Branch** | Case (`CASE`) | **3** | **Multi-selection:** Evaluating a selector against multiple target constants requires multi-way cognitive indexing and boundary checking. |
| **Iteration** | For (`Ri`), While (`R0`), Do-While (`R1`) | **3** | **Temporal State Tracking:** Loops require mental simulation of state changes across multiple iterations, monitoring loop invariants, and identifying exit condition correctness. |
| **Embedded** | Function Call (`FC`) | **2** | **Context Switching:** The developer must mentally suspend the current execution frame, mentally transition to the callee's scope, map arguments, and return. |
| **Embedded** | Recursion (`REC`) | **3** | **Self-Referential Stack Modeling:** Recursion is among the most demanding cognitive tasks; the human mind must track an expanding stack frame in memory and verify inductive termination. |

#### 2. The Golden Rule: Why Linear Blocks ADD ($\sum$) but Nested Blocks MULTIPLY ($\prod$)?
* **Linear Formula:** $W_c = \sum W_c(j, i)$
  * **Why ADD?** When two structures are sequential (e.g., an `if` block followed by a separate `for` loop), the human brain processes the `if`, clears its working memory registers, and then processes the `for` loop. The cognitive load is **additive**.
* **Nested Formula:** $W_c = \sum \left[ \prod_{k=1}^{m} \sum_{i=1}^{n} W_c(j, k, i) \right]$
  * **Why MULTIPLY?** When a `for` loop is placed **inside** an `if` block, you **cannot** clear your mental working memory! You must hold the enclosing condition active while simultaneously tracing the inner loop iterations.
  * Cognitive strain does not increase by a step; it **compounds exponentially**. If an outer `for` ($W_c = 3$) contains an inner `if` ($W_c = 2$), the nested weight is $3 \times 2 = \mathbf{6}$, not $3 + 2 = 5$.

#### 3. $N_i$ (Number of Inputs) and $N_o$ (Number of Outputs)
* **What they are:**
  * $N_i$: Distinct input variables/parameters received by the method (e.g., method parameters, `Scanner` inputs).
  * $N_o$: Distinct output variables/results produced (e.g., return value, display statements).
* **Why calculate them?**
  * A component is fundamentally a **transformer of data**. Its size from a user or functional perspective depends on how much data crosses its interface boundary.
* **Why is $N_o = 1$ in an `if-else if-else` chain?**
  * Although there may be 4 different `System.out.println()` statements in an `if-else` ladder, **only one branch can execute on any given invocation**. The functional output generated per execution cycle is exactly 1.

#### 4. $S_f = (N_i + N_o) \times W_c$ (Cognitive Functional Size in CWU)
* **What it is:** The product of boundary data flow $(N_i + N_o)$ and total internal cognitive weight ($W_c$). Measured in **Cognitive Weight Units (CWU)**.
* **Why multiply $(N_i + N_o)$ by $W_c$?**
  * Functional size cannot be measured by I/O alone (a 5-input method with trivial sequential logic is easy to write).
  * Functional size cannot be measured by internal logic alone (a complex algorithm that takes 0 inputs and outputs nothing does not deliver functional value).
  * **Multiplying them couples the functional interface footprint with internal algorithmic complexity**, yielding a true measure of cognitive functional footprint.

#### 5. $S_f(c) = \sum S_f$ and $\hat{S}_f = \sum S_f(k)$ (System-Level Functional Sizing)
* **Why aggregate to Component and System level?**
  * **Project Estimation:** $\hat{S}_f$ allows software project managers to estimate total development hours, staffing requirements, testing budgets, and expected defect counts before code is written or during early design.

---

## 4. 🗂️ Master Comparison: Every Symbol at a Glance

| Symbol | Formal Name | Lecture | What It Measures | **WHY We Calculate It** | Mathematical Nature |
|:---:|---|:---:|---|---|:---:|
| **$V(G)$** | Cyclomatic Complexity | Lec 3 | Independent execution paths | Minimum number of test cases needed for full branch coverage | Count ($e - n + 2$ or $d + 1$) |
| **$d$** | Decision Count | Lec 3 | Number of branching points | Each decision splits execution flow, adding 1 independent path | Additive integer |
| **$p$** | Procedure Node Count | Lec 3 | Non-decision sequential blocks | Proves that sequential code contributes 0 additional testing paths | Cancels out in derivation |
| **$V_g$** | Class Cyclomatic Complexity | Lec 3 | Aggregate decisions in a class | Detects "God Classes" and checks adherence to Single Responsibility | Summation ($\sum V(G_i)$) |
| **$S$** | Statement Size | Lec 4 | Number of tokens in a statement | Quantifies semantic informational density of each line | Token count per line |
| **$W_c$ (WCC)** | Control Structure Weight | Lec 4 | Friction of enclosing control type | Differentiates trivial sequential lines (0) from branches (1) and loops (2) | Categorical scalar (0, 1, 2, $n$) |
| **$W_n$** | Nesting Level Weight | Lec 4 | Depth of control structure nesting | Penalizes code buried deep in conditions ("Pyramid of Doom") | Depth index (0, 1, 2, $\dots$) |
| **$W_i$ (WCC)** | Inheritance Level Weight | Lec 4 | Depth of class in inheritance tree | Accounts for Fragile Base Class problem and inherited side effects | Inheritance index (1, 2, 3, $\dots$) |
| **$W_t$** | Total Statement Weight | Lec 4 | Overall environmental hazard | Combines control type, nesting, and inheritance into one gravity factor | Sum ($W_c + W_n + Wi$) |
| **$WC$** | Single Statement Complexity | Lec 4 | Complexity of 1 specific line | Heavily penalizes dense statements that sit in dangerous environments | Product ($S \times W_t$) |
| **$WCC$** | Weighted Composite Complexity | Lec 4 | Overall architectural weight of module | Unified quality score to objectively evaluate code refactoring | Sum ($\sum WC$) |
| **$W_c$ (CFS)** | Cognitive Weight | Lec 5 | Psychological comprehension effort | Models human working memory load based on Miller's $7 \pm 2$ rule | Sequential: 1, Branch: 2, Loop: 3 |
| **$\sum$ vs $\prod$** | BCS Combination Rules | Lec 5 | Linear vs. Nested mental retention | Linear code clears mental registers ($\sum$); nested code traps context ($\prod$) | Additive vs. Multiplicative |
| **$N_i, N_o$** | Inputs and Outputs | Lec 5 | Data crossing component boundary | Quantifies external functional communication with user/caller | Discrete I/O count |
| **$S_f$** | Cognitive Functional Size | Lec 5 | Cognitive functional footprint | Couples external data exchange with internal cognitive difficulty | Product ($(N_i + N_o) \times W_c$) |
| **CWU** | Cognitive Weight Unit | Lec 5 | Standardized unit of cognitive size | Enables cross-project, cross-language software estimation | Measurement unit |

---

## 5. 🎯 Common Conceptual Exam Traps & "Why" Questions

### Trap 1: "Why does Sequential code have $W_c = 0$ in WCC, but Sequence has $W_c = 1$ in CFS?"
* **Why in WCC ($W_c = 0$)?** In WCC, weights represent **control structure overhead**. Sequential code has no control structure (no branching, no loop); it adds zero structural overhead above its token size $S$.
* **Why in CFS ($W_c = 1$)?** In CFS, weights represent **human cognitive effort**. Even a purely linear block takes mental effort to read and comprehend. Hence, it serves as the **baseline unit of 1 CWU**.

### Trap 2: "Why is Wi starting at 1 for Java classes under Rule 17?"
* Because in Java/OOP, every concrete base class already encapsulates state and methods. Beginning at 1 accounts for the base class itself; derived classes increment to 2, 3, etc., scaling with inheritance depth.

### Trap 3: "Why doesn't `else` or `do` have its own token or weight?"
* `else` cannot exist without `if`; `do` cannot exist without `while`. They do not create an independent decision; they are complementary syntactic markers of the same single control structure (`if-else()`, `do-while()`). Counting them twice would artificially inflate complexity.

### Trap 4: "Why does Bytecode CC differ from Source Code CC?"
* Because the compiler makes decisions on how to translate human syntax into machine jumps. Short-circuit operators (`&&`, `||`) are broken down into individual jump opcodes, and exception handling creates jump tables that do not exist explicitly in the source lines.

---

## 💡 Quick Summary for Revision

> * **McCabe ($V(G)$):** *"How many test cases must I write to touch every pathway?"*
> * **WCC ($S \times W_t$):** *"How syntactically dense is this line, and how hostile is the nesting/inheritance environment it lives in?"*
> * **CFS ($(N_i + N_o) \times W_c$):** *"How much external data enters/leaves, and how many working memory units does a human need to understand the algorithm?"*

---
*Created for SE3110 Software Engineering Process and Quality Management.*  
*Reference: Lectures 3, 4, 5 and WCC Tokenisation Guidelines.*
