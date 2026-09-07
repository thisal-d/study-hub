# SE3110 — Software Metrics Practice: ANSWER SHEET
### Full Step-by-Step Working for All 15 Questions

---

## SECTION A — Conceptual / Definition Answers

---

### A1 — Cyclomatic Complexity Definitions

**(a) V(G) = e − n + 2**

From Lecture 3:
> *"Measures the number of linearly independent paths in a program."*

- **V(G)** = Cyclomatic complexity value
- **e** = Number of **edges** in the control flow graph
- **n** = Number of **nodes** in the control flow graph
- **+2** is a constant from the graph theory formula for a strongly connected graph

**(b) V(G) = d + 1**

- **d** = Number of **decision statements** (if, for, while, do-while, switch cases, etc.) in the method
- This is the simplified form: for each decision node you add 1 independent path, plus the baseline path with no decisions taken

**(c) Algebraic Derivation of d + 1 from e − n + 2**

From Lecture 3, the node and edge counts are:

| Component | Nodes contributed | Edges contributed |
|-----------|-------------------|-------------------|
| Decision node (d each) | d | 2d (two outgoing: True/False) |
| Procedure node (p each) | p | p (one outgoing edge each) |
| Start node | 1 | 0 (counted in procedure/decision edges) |
| Stop node | counted as a procedure node | 0 outgoing |

Total nodes: **n = d + p + 1** (d decisions + p procedures + 1 start/stop pair — Lecture 3 simplifies this as d + p + 1)
Total edges: **e = 2d + p** (decisions produce 2 edges each; procedures produce 1 edge each; the last edge goes to stop)

Substituting into V(G) = e − n + 2:

```
V(G) = (2d + p) − (d + p + 1) + 2
     = 2d + p − d − p − 1 + 2
     = d + 1
```
✅ **V(G) = d + 1** confirmed.

---

### A2 — Four Key Factors of WCC

From Lecture 4:

| Factor | What it captures |
|--------|-----------------|
| **Size** | The number of tokens in each statement (S) |
| **Type of control structures** | Whether a statement is sequential, branch (if/else), iterative (loop), or switch — captured by Wc |
| **Nesting level of control structures** | How deeply nested the statement is inside control structures — captured by Wn |
| **Inheritance level of statements** | Which level of class hierarchy the statement belongs to — captured by Wi |

---

### A3 — Tokenisation Rules

**(a) Which are NOT tokens?**

From Guidelines rules and the summary line at the bottom of the guidelines sheet:
> *"access flags (public, private, static, etc), do, else, return, ; are not tokens"*
> Rule 13: "The statement terminator (;) is not identified as a token."
> Rule 6: "Brackets are not identified as separate tokens."

Not tokens: **`public`, `static`, `else`, `do`, `return`, `;`, `{`, `}`**

ALL of them are not tokens! (Access flags, keywords do/else/return, statement terminator, and brackets are all excluded.)

**(b) Tokens in `System.out.println("Hello");`**

| Element | Token? | Rule |
|---------|--------|------|
| `System` | ✅ Yes — class name identifier | Rule 12: '.' connects classes/fields/methods; connected names are tokens |
| `.` | ✅ Yes — '.' operator | Rule 12: '.' is a separate token |
| `out` | ✅ Yes — field name | Rule 12 |
| `.` | ✅ Yes — '.' operator | Rule 12 |
| `println()` | ✅ Yes — method name + brackets = one token | Rule 8: method name + round brackets = one token |
| `"Hello"` | ✅ Yes — string literal = one token | Rule 3: everything inside quotes = single token |
| `;` | ❌ No | Rule 13 |

**Tokens: System, ·, out, ·, println(), "Hello" → S = 6**

**(c) `case` and `default` in switch statements**

From Rule 10:
> *"The 'case :' and 'default :' in a switch statement are identified as separate tokens."*

So `case 1:` = **one token**, and `default:` = **one token**.

**(d) Method declaration `public void calculate(int x, int y)`**

Tokens counted: `void`, `calculate()`
- `public` — ❌ Not a token (access flag, Rule 2 / guideline summary)
- `void` — ✅ Token (keyword, Rule 2)
- `calculate()` — ✅ Token (method name + round brackets = one token, Rule 8)
- `int` — ❌ Not a token in a *declaration*
- `x`, `y` — ❌ Not tokens

**Rule justification:** Rule 8 states:
> *"The components inside the round brackets of user-defined methods are not identified as tokens."*
And Rule 7:
> *"In a program statement that contains a variable declaration, the variable name is not identified as a token."*

Since `int x` and `int y` inside the method signature are parameter **declarations**, neither the data types nor the variable names are tokens.

**S = 2** (void + calculate())

---

### A4 — Weight Tables and Formulas

**(a) Wc Table (Weight due to type of control structure)**

| Type of Control Structure | Wc Weight |
|--------------------------|-----------|
| Sequential (no control structure) | **0** |
| Branch (if, if-else, else-if) | **1** |
| Iterative (for, while, do-while) | **2** |
| Switch statement with n cases | **n** (number of cases) |

**(b) Wn Table (Weight due to nesting level)**

| Nesting Level | Wn Weight |
|---------------|-----------|
| Sequential statements (outside any control structure) | **0** |
| Statements inside the outermost / first level of control structures | **1** |
| Statements inside the second level control structures | **2** |
| Statements inside the third level control structures | **3** |
| Statements inside the nth level control structures | **n** |

**(c) Wi Table (Weight due to inheritance level)**

| Inheritance Level | Wi Weight |
|------------------|-----------|
| Statements inside the base class / root class | **1** |
| Statements inside the first derived class (1st subclass / 1st inheritance) | **2** |
| Statements inside the second derived class (2nd subclass / 2nd inheritance) | **3** |
| Statements inside the nth derived class | **n + 1** |

> **⚠️ Guideline Rule 17:** *"For a program which does not have a built-in root class, the weight allocation of the Wi attribute begins at 1."*
> This means: the base class starts at **Wi = 1**. The first derived class (first subclass) has **Wi = 2**, the second derived class has **Wi = 3**, and so on.

**(d) Formula for Wt:**
$$W_t = W_c + W_n + W_i$$

**(e) Formula for WC (Weighted Complexity of a single statement):**
$$WC = S \times W_t$$

**(f) Formula for overall WCC:**
$$WCC = \sum_{j=1}^{n} S_j \times (W_t)_j = \sum_{j=1}^{n} WC_j$$

---

### A5 — Class-Level Vg

**(a) Symbol definitions:**

| Symbol | Meaning |
|--------|---------|
| Vg | Total cyclomatic complexity for the entire class |
| n | Number of methods in the class |
| V(Gi) | Cyclomatic complexity of the ith method's flow graph |
| di | Number of decision statements in the ith method |

**(b) Calculation for the given class:**

Given: 4 methods — d_A = 0, d_B = 2, d_C = 1, d_D = 3

**Using summation form:**
```
Vg = Σ(di + 1)
   = (0+1) + (2+1) + (1+1) + (3+1)
   = 1 + 3 + 2 + 4
   = 10
```

**Using simplified form:**
```
Vg = n + Σdi
   = 4 + (0 + 2 + 1 + 3)
   = 4 + 6
   = 10
```

✅ Both give **Vg = 10**

**(c) Why bytecode CC can be higher than source CC:**

From Lecture 3:
> *"The CC value obtained from the class file can be higher than CC obtained from the source file."*

The compiler generates additional branching instructions for null checks, exception handling, string comparisons, and other implicit operations that are not visible in source code. When you analyse bytecode directly (as in the D1 method example in Lecture 3 using ifeq/goto instructions), each bytecode branch counts as a decision, adding to the complexity count beyond what the source code shows.

---

## SECTION B — Calculation Answers

---

### A6 — V(G) from Edge/Node Count

**(a) V(G) = e − n + 2 for each graph:**

| Graph | e | n | V(G) = e − n + 2 | Answer |
|-------|---|---|-------------------|--------|
| G1    | 5 | 4 | 5 − 4 + 2 = **3** | 3 |
| G2    | 7 | 6 | 7 − 6 + 2 = **3** | 3 |
| G3    | 9 | 7 | 9 − 7 + 2 = **4** | 4 |
| G4    | 3 | 3 | 3 − 3 + 2 = **2** | 2 |

**(b) Verification for G3 using V(G) = d + 1:**

Given: d = 2 decision nodes
```
V(G) = d + 1 = 2 + 1 = 3
```

> ⚠️ **Discrepancy:** The edge/node formula gives 4, but d+1 gives 3.
> This discrepancy occurs because V(G) = d + 1 is derived assuming a clean CFG where every node is either a decision node with exactly 2 outgoing edges, or a procedure node with exactly 1. The given graph (e=9, n=7) does not conform to this ratio — for d=2, p=4+1=5 nodes: expected e = 2(2) + 5 = 9, n = 2+5 = 7. Let's recheck:
>
> Actually: n = d + p + 1 = 2 + 4 + 1 = 7 ✅, e = 2d + p = 4 + 4 = 8 ≠ 9
>
> The extra edge (9 instead of 8) means there is one extra path not accounted for by simple d+p nodes — possibly a back-edge from a loop. The e−n+2 formula handles this correctly. V(G) = **4** is the correct answer from the graph; d+1 = 3 would only apply if d counted all loop back-edges as decision nodes too.

---

### A7 — Token Counting for Method Declaration

Statement: `public void processOrder(int quantity, double price) {`

Applying guidelines:

| Element | Token? | Rule | Notes |
|---------|--------|------|-------|
| `public` | ❌ | Rule 2 / summary | Access flag |
| `void` | ✅ | Rule 2 | Keyword (not access flag) |
| `processOrder()` | ✅ | Rule 8 | Method name + brackets = one token |
| `int` | ❌ | Rule 8 | Parameters inside () of user-defined method are not tokens |
| `quantity` | ❌ | Rule 8 | Same — inside user-defined method's () |
| `,` | ❌ | Rule 8 | Also inside the brackets; brackets' contents not tokenised |
| `double` | ❌ | Rule 8 | Same |
| `price` | ❌ | Rule 8 | Same |
| `{` | ❌ | Rule 6 | Brackets not tokens |

**Tokens: `void`, `processOrder()`**
**(b) S = 2**

---

### A8 — Full WCC Table: Counter class (root class, Wi starts at 1 per Rule 17)

**Step 1 — Identify executable statements (skip non-executable):**
- Line 1: `public class Counter {` — class declaration, not executable (Guideline Rule 1: token identification begins *after* class declaration)
- Line 2: `public void increment(int count) {` — method declaration, executable for WCC
- Line 3: `count++;` — executable
- Line 5: `public static void main(String[] args) {` — method declaration, executable for WCC
- Line 6: `Counter c = new Counter();` — executable
- Line 7: `c.increment(1);` — executable

**Step 2 — Tokenise each statement:**

**Line 2:** `public void increment(int count) {`
- `void` ✅ (keyword), `increment()` ✅ (Rule 8)
- Tokens: void, increment() → **S = 2**

**Line 3:** `count++;`
- `count` ✅ (variable — being *used*, not just declared), `++` ✅ (operator)
- Tokens: count, ++ → **S = 2**

**Line 5:** `public static void main(String[] args) {`
- `void` ✅, `main()` ✅ (Rule 8)
- Tokens: void, main() → **S = 2**

**Line 6:** `Counter c = new Counter();`
- `Counter` ✅ (class name/type — this is a variable *definition*, so per Rule 7 we include the data type AND the variable name)
- `c` ✅ (variable name — definition, Rule 7), `=` ✅ (operator), `new` ✅ (keyword), `Counter()` ✅ (Rule 8 — constructor name + brackets)
- Tokens: Counter, c, =, new, Counter() → **S = 5**

**Line 7:** `c.increment(1);`
- `c` ✅ (identifier), `.` ✅ (Rule 12), `increment()` ✅ (Rule 8)
- Note: `1` — argument inside user-defined method's brackets → ❌ (Rule 8)
- Tokens: c, ·, increment() → **S = 3**

**Step 3 — Assign Wc, Wn, Wi:**

*(Counter is a root/base class. Per Rule 17, since Java has implicit Object root, Wi = 1 for all statements in this class — same pattern as in the Lecture 4 example where a standalone class had Wi=1)*

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void increment(int count)` | void, increment() | 2 | 0 (sequential) | 0 (not inside control) | 1 (first/only inheritance level) | 1 | **2** |
| 3 | `count++;` | count, ++ | 2 | 0 | 0 | 1 | 1 | **2** |
| 5 | `public static void main(String[] args)` | void, main() | 2 | 0 | 0 | 1 | 1 | **2** |
| 6 | `Counter c = new Counter();` | Counter, c, =, new, Counter() | 5 | 0 | 0 | 1 | 1 | **5** |
| 7 | `c.increment(1);` | c, ·, increment() | 3 | 0 | 0 | 1 | 1 | **3** |
| | | | | | | | **WCC** | **14** |

**WCC = 2 + 2 + 2 + 5 + 3 = 14**

---

### A9 — Full WCC Table: Processor (extends BaseClass → Wi = 1 for first derived class)

**Tokenisation:**

**Line 2:** `public void analyse(int[] data) {`
- `void` ✅, `analyse()` ✅ (Rule 8)
- `int[] data` inside () → ❌ (Rule 8, parameters of user-defined method not tokens)
- Tokens: void, analyse() → **S = 2**

**Line 3:** `for (int i = 0; i < data.length; i++) {`
- `for()` ✅ (Rule 9: keyword + round brackets = one token)
- Contents inside `for()` are decision/control data — per Rule 9, the bracket contents are NOT separate tokens
- Actually Rule 9 says the brackets are part of the `for()` token; however the *condition components* (i, <, data.length, i++) are inside the for() brackets. Per the lecture 4 example the for() itself is 1 token and the components inside are separate.

> **⚠️ NOTATION NOTE:** The Lecture 4 example shows `if-else()` as one token followed by the condition components as separate tokens (e.g., marks, >, -1, &&, marks, <, 50 for S=8 total). For `for()`, a similar approach applies: `for()` = 1 token + init/condition/update as separate tokens.

- Applying the if-else pattern to for: `for()`, `i`, `<`, `data.length` (= data ·, length as per Rule 12?), `i++` (= i, ++)

For `data.length`: data ✅, · ✅, length ✅ → 3 tokens  
For `i++`: i ✅, ++ ✅ → 2 tokens  
For init `int i = 0`: `i` = 0 is inside for() — treat as part of the for() token overall.

Following the lecture's approach strictly (as shown with if-else counting 8 tokens for a compound condition):
Tokens: for(), i, <, data, ·, length, i, ++ → **S = 8**

**Line 4:** `if (data[i] > 0) {`
- This is a plain `if` (no else visible at this nesting level for its own block).
- Per Rule 9: `if()` = 1 token (with brackets)
- Contents: `data[i]` — per Rule 4: array name + brackets = one token → `data[]` ✅ as 1 token; `i` is the index... wait, Rule 4 says "Along with the array name, the square brackets of an array are considered as one token." So `data[i]` = 1 token.
- `>` ✅, `0` ✅
- Tokens: if(), data[i], >, 0 → **S = 4**

**Line 5:** `System.out.println(data[i]);`
- `System` ✅, `.` ✅, `out` ✅, `.` ✅, `println()` ✅ (Rule 8)
- `data[i]` is an argument inside `println()` which is a library method (not user-defined). Rule 8 applies to user-defined methods. For library methods, arguments may count.

> **⚠️ NOTATION NOTE:** The Lecture 4 example counts `"Fail"` as a token inside `println()` (for `System.out.println("Fail")` → S = 6: System, ·, out, ·, println(), "Fail"). So arguments to library methods like println() DO count.

- `data[i]` as argument: per Rule 4, array + brackets = 1 token → `data[i]` ✅
- Tokens: System, ·, out, ·, println(), data[i] → **S = 6**

**Wc, Wn, Wi assignments:**

- Line 2 (`analyse()` declaration): sequential, nesting=0, Wi=2 (first derived class / first subclass)
- Line 3 (`for` loop): iterative → Wc=2, nesting=1 (inside class method but at outermost control level), Wi=2
- Line 4 (`if` inside for): branch → Wc=1, nesting=2 (inside the for loop = second level), Wi=2
- Line 5 (`println` inside if): sequential → Wc=0, nesting=2 (still inside the if which is inside the for = second level), Wi=2

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void analyse(int[] data)` | void, analyse() | 2 | 0 | 0 | 2 | 2 | **4** |
| 3 | `for(int i=0; i<data.length; i++)` | for(), i, <, data, ·, length, i, ++ | 8 | 2 | 1 | 2 | 5 | **40** |
| 4 | `if(data[i] > 0)` | if(), data[i], >, 0 | 4 | 1 | 2 | 2 | 5 | **20** |
| 5 | `System.out.println(data[i])` | System, ·, out, ·, println(), data[i] | 6 | 0 | 2 | 2 | 4 | **24** |
| | | | | | | | **WCC** | **88** |

**(b) WCC = 4 + 40 + 20 + 24 = 88**

**(c) Nesting level of Line 5:**
Line 5 is `System.out.println(data[i])`, which sits:
1. Inside the `if` block (first level of nesting)
2. Which is itself inside the `for` loop (second level of nesting)

→ Nesting level = **2** → **Wn = 2**

From the Wn table: "Statements inside the second level control structures → Weight = 2"

---

### A10 — WCC with Switch Statement

**(a) Wc for Line 3 (switch with 3 cases: case 1, case 2, default):**

From Wc table: "Switch statement with n cases → Weight = n"
The switch has **3 cases** (case 1, case 2, default).
→ **Wc = 3**

**(b) Are `break` statements tokens?**

`break` is a keyword. It does not fall under access flags (public/private/static). It is also not `do`, `else`, or `return`.
Rule 2 states: "all operators, keywords (except access flags such as public, static, etc.), strings, identifiers, and numerical values are identified as separate tokens."
→ **`break` IS a token** (it is a keyword not in the exclusion list).
→ Rule 13 handles `;` (not a token).
→ So `break;` → token: `break`, S = 1

**(c) S for Line 4: `case 1: System.out.println("Distinction");`**

- `case 1:` ✅ → one token (Rule 10)
- `System` ✅, `.` ✅, `out` ✅, `.` ✅, `println()` ✅, `"Distinction"` ✅ (Rule 3)
- `;` ❌ (Rule 13)

Tokens: case 1:, System, ·, out, ·, println(), "Distinction" → **S = 7**

**(d) Full WCC Table for Grade class (root class, Wi = 1):**

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void printGrade(int score)` | void, printGrade() | 2 | 0 | 0 | 1 | 1 | **2** |
| 3 | `switch(score)` | switch(), score | 2 | 3 | 1 | 1 | 5 | **10** |
| 4 | `case 1: System.out.println("Distinction")` | case 1:, System, ·, out, ·, println(), "Distinction" | 7 | 0 | 1 | 1 | 2 | **14** |
| — | `break;` | break | 1 | 0 | 1 | 1 | 2 | **2** |
| 5 | `case 2: System.out.println("Merit")` | case 2:, System, ·, out, ·, println(), "Merit" | 7 | 0 | 1 | 1 | 2 | **14** |
| — | `break;` | break | 1 | 0 | 1 | 1 | 2 | **2** |
| 6 | `default: System.out.println("Pass")` | default:, System, ·, out, ·, println(), "Pass" | 7 | 0 | 1 | 1 | 2 | **14** |
| — | `break;` | break | 1 | 0 | 1 | 1 | 2 | **2** |
| | | | | | | | **WCC** | **60** |

**WCC = 2 + 10 + 14 + 2 + 14 + 2 + 14 + 2 = 60**

> **Note on Wn for switch contents:** The case statements are inside the `switch` = nesting level 1 → Wn = 1.

---

## SECTION C — Control Flow Graph Answers

---

### A11 — CFG and V(G): checkAge (if-else)

**Control Flow Graph:**

```
      ┌─────────────────┐
      │   START         │ (start node)
      └────────┬────────┘
               │
      ┌────────▼────────┐
      │ if (age >= 18)  │ (decision node)
      └────┬───────┬────┘
      T    │       │  F
           │       │
  ┌────────▼──┐  ┌─▼──────────────┐
  │ println   │  │ println         │
  │ "Adult"   │  │ "Minor"         │ (procedure nodes)
  └────────┬──┘  └─┬──────────────┘
           │       │
           └───┬───┘
      ┌─────────▼────────┐
      │   STOP           │ (stop node)
      └──────────────────┘
```

**Node count (n):**
1. Start
2. Decision (if)
3. Procedure (println "Adult")
4. Procedure (println "Minor")
5. Stop

→ **n = 5**

**Edge count (e):**
1. Start → Decision
2. Decision →T Println "Adult"
3. Decision →F Println "Minor"
4. Println "Adult" → Stop
5. Println "Minor" → Stop

→ **e = 5**

**V(G) = e − n + 2 = 5 − 5 + 2 = 2**

**Verification via d + 1:**
d = 1 (one if-else decision node)
V(G) = 1 + 1 = **2** ✅

---

### A12 — CFG and V(G): classify (nested if-else)

**Control Flow Graph (textual description):**

```
START
  │
  ▼
[D1: if (x > 0)]
  │T                     │F
  ▼                      ▼
[P1: println "Positive"] [D2: if (x == 0)]
  │                       │T          │F
  │                       ▼           ▼
  │               [P2: println   [P3: println
  │                "Zero"]        "Negative"]
  │                       │           │
  └───────────────────────┴───────────┘
                          │
                          ▼
                        STOP
```

**Node count (n):**
1. Start
2. D1 (if x > 0)
3. P1 (println Positive)
4. D2 (if x == 0)
5. P2 (println Zero)
6. P3 (println Negative)
7. Stop

→ **n = 7**

**Edge count (e):**
1. Start → D1
2. D1 →T P1
3. D1 →F D2
4. P1 → Stop
5. D2 →T P2
6. D2 →F P3
7. P2 → Stop
8. P3 → Stop

→ **e = 8** (this matches the Lecture 3 Q5 answer: "V(G) = 7 − 6 + 2 = 3" — the lecture counts slightly differently; let me recount)

From Lecture 3 Q5: V(G) = e − n + 2 = **7 − 6 + 2 = 3**
The lecture's graph uses 6 nodes and 7 edges. The difference is that in the lecture version, the two println procedure nodes on each true-branch merge back through a single merge node rather than going directly to stop, compressing nodes. Both approaches give V(G) = 3.

Using the lecture's count: **n = 6, e = 7**

```
V(G) = 7 − 6 + 2 = 3
```

**Verification via d + 1:**
d = 2 (D1 and D2 are the two decision nodes)
V(G) = 2 + 1 = **3** ✅

**Linearly independent paths:** V(G) = 3 means there are **3 independent paths** through this method:
1. x > 0 (Positive)
2. x == 0 (Zero)
3. x < 0 (Negative)

---

### A13 — CFG and V(G): process (while loop + nested if)

**Control Flow Graph:**

```
START
  │
  ▼
[P0: int i = 0]
  │
  ▼
[D1: while (i < n)] ◄──────────────┐
  │F                 │T            │
  │                  ▼             │
  ▼            [D2: if (i%2==0)]  │
 STOP           │T           │F   │
                ▼             ▼   │
          [P1: println   [P2: println │
            "Even: "+i]   "Odd: "+i] │
                │             │    │
                └──────┬──────┘    │
                       ▼           │
                  [P3: i++] ───────┘
```

**Node count (n):**
1. Start
2. P0 (int i = 0) — initial statement
3. D1 (while condition)
4. D2 (if i%2 == 0)
5. P1 (println Even)
6. P2 (println Odd)
7. P3 (i++)
8. Stop

→ **n = 8**

**Edge count (e):**
1. Start → P0
2. P0 → D1
3. D1 →F Stop
4. D1 →T D2
5. D2 →T P1
6. D2 →F P2
7. P1 → P3
8. P2 → P3
9. P3 → D1 (back-edge, loop)

→ **e = 9**

```
V(G) = e − n + 2 = 9 − 8 + 2 = 3
```

**Verification via d + 1:**
d = 2 (D1: while, D2: if)
V(G) = 2 + 1 = **3** ✅

**Class-level Vg (single method):**
Using: Vg = Σ(di + 1) for n = 1 method, d = 2
```
Vg = (2 + 1) = 3
```
Vg = **3**

---

## SECTION D — Mixed / Integration Answers

---

### A14 — Cyclomatic Complexity of Calculator class

**(a) V(G) per method using d + 1:**

| Method | d (decisions) | V(G) = d + 1 |
|--------|--------------|--------------|
| `add()` | 0 | **1** |
| `divide()` | 1 | **2** |
| `classify()` | 3 | **4** |
| `loop()` | 2 | **3** |

**(b) Class-level Vg using summation:**

```
Vg = Σ(di + 1)
   = (0+1) + (1+1) + (3+1) + (2+1)
   = 1 + 2 + 4 + 3
   = 10
```

**(c) Verification using simplified form (Vg = n + Σdi):**

```
n = 4 methods
Σdi = 0 + 1 + 3 + 2 = 6

Vg = 4 + 6 = 10
```

✅ **Vg = 10** confirmed by both formulas.

---

### A15 — Full Analysis: Evaluator class

**Part A — Cyclomatic Complexity:**

**CFG for `evaluate` method:**

```
START
  │
  ▼
[D1: if (score >= 50)]
  │T                  │F
  ▼                   ▼
[P1: println "Pass"] [P2: println "Fail"]
  │                   │
  └────────┬──────────┘
           ▼
          STOP
```

**n = 5** (Start, D1, P1, P2, Stop)
**e = 5** (Start→D1, D1→T P1, D1→F P2, P1→Stop, P2→Stop)

```
V(G) = e − n + 2 = 5 − 5 + 2 = 2
```

**Verification via d + 1:**
d = 1 (one if-else)
V(G) = 1 + 1 = **2** ✅

**Class-level Vg:**
1 method with d = 1:
```
Vg = Σ(di + 1) = (1 + 1) = 2
```

**Part B — WCC Analysis:**

Executable statements (root class, Wi = 1 per Rule 17):

**Line 2:** `public void evaluate(int score) {`
- Tokens: void, evaluate() → S = 2
- Sequential, not inside control structure → Wc = 0, Wn = 0

**Line 3:** `if (score >= 50) {`
- Per Rule 9: `if-else()` = 1 token (the if has an else branch, so it's if-else())
- score ✅, >= ✅, 50 ✅
- Tokens: if-else(), score, >=, 50 → S = 4
- Branch statement → Wc = 1, inside first level (method body) → Wn = 1

**Line 4:** `System.out.println("Pass");`
- Tokens: System, ·, out, ·, println(), "Pass" → S = 6
- Sequential, inside the if (nesting level 1) → Wc = 0, Wn = 1

**Line 6:** `System.out.println("Fail");`
- Tokens: System, ·, out, ·, println(), "Fail" → S = 6
- Sequential, inside the else (nesting level 1) → Wc = 0, Wn = 1

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void evaluate(int score)` | void, evaluate() | 2 | 0 | 0 | 1 | 1 | **2** |
| 3 | `if (score >= 50)` | if-else(), score, >=, 50 | 4 | 1 | 1 | 1 | 3 | **12** |
| 4 | `System.out.println("Pass")` | System, ·, out, ·, println(), "Pass" | 6 | 0 | 1 | 1 | 2 | **12** |
| 6 | `System.out.println("Fail")` | System, ·, out, ·, println(), "Fail" | 6 | 0 | 1 | 1 | 2 | **12** |
| | | | | | | | **WCC** | **38** |

**WCC = 2 + 12 + 12 + 12 = 38**

**Interpretation:**
- V(G) = 2 indicates **low cyclomatic complexity** — only 2 independent paths, easy to test (requires only 2 test cases for full path coverage).
- WCC = 38 reflects the combined effect of size (token count), control structure type (branch = Wc=1), nesting (inside the if/else = Wn=1), and inheritance level (Wi=1). Compared to the Lecture 4 worked example (WCC = 60 for a similar structure), this simpler program scores lower, indicating lower overall complexity. WCC is more sensitive than V(G) alone because it also accounts for statement size and class hierarchy context.

---

*End of Answer Sheet*

**Sources:** SE3110 Lecture 3, Lecture 4, WCC Guidelines Sheet
