# SE3110 — Metrics Calculation Practice: ANSWER SHEET
### Full Step-by-Step Working for All 10 Questions

---

> **Notation used throughout:**
> - `·` = dot operator token
> - ✅ = IS a token | ❌ = NOT a token
> - Each rule cited as **(R#)** e.g. (R8) = Rule 8 from WCC Guidelines

---

## ANSWER: Q-CALC-01 | `if` (no else) · Root class · `Validator`

### Tokenisation Walkthrough

**Line 2:** `public void isEven(int n) {`
| Element | Token? | Rule |
|---------|--------|------|
| `public` | ❌ | (R2) access flag |
| `void` | ✅ | (R2) keyword, not an access flag |
| `isEven()` | ✅ | (R8) method name + brackets = 1 token |
| `int n` inside `()` | ❌ | (R8) components inside user-defined method's () not tokens |
| `{` | ❌ | (R6) |

→ **Tokens: void, isEven() → S = 2**

**Line 3:** `if (n % 2 == 0)`
This `if` has **no else** branch → token type is **`if()`** (R9)
| Element | Token? | Rule |
|---------|--------|------|
| `if()` | ✅ | (R9) keyword + brackets = 1 token |
| `n` | ✅ | (R2) identifier |
| `%` | ✅ | (R2) operator |
| `2` | ✅ | (R2) numerical value |
| `==` | ✅ | (R2) operator |
| `0` | ✅ | (R2) numerical value (including zero per R2) |

→ **Tokens: if(), n, %, 2, ==, 0 → S = 6**

**Line 4:** `System.out.println("Even")`
| Element | Token? | Rule |
|---------|--------|------|
| `System` | ✅ | (R12) identifier connected via `.` |
| `.` | ✅ | (R12) `.` operator is separate token |
| `out` | ✅ | (R12) field name connected via `.` |
| `.` | ✅ | (R12) |
| `println()` | ✅ | (R8) method name + brackets = 1 token |
| `"Even"` | ✅ | (R3) all chars inside quotes = 1 token |
| `;` | ❌ | (R13) statement terminator |

→ **Tokens: System, ·, out, ·, println(), "Even" → S = 6**

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void isEven(int n)` | void, isEven() | 2 | 0 (sequential) | 0 (method level) | 1 (R17: no built-in root) | **1** | **2** |
| 3 | `if (n % 2 == 0)` | if(), n, %, 2, ==, 0 | 6 | 1 (branch) | 1 (1st level control) | 1 | **3** | **18** |
| 4 | `System.out.println("Even")` | System, ·, out, ·, println(), "Even" | 6 | 0 (sequential) | 1 (inside 1st level if) | 1 | **2** | **12** |
| | | | | | | | **WCC** | **32** |

### V(G) for `isEven()`
**Method:** d = 1 (one `if` decision)
- **V(G) = d + 1 = 1 + 1 = 2**
- **CFG nodes:** Start → if() → [T: println("Even")] → Stop; plus [F: directly to Stop]
  - n = 4 (Start, if-decision, println-procedure, Stop)
  - e = 4 (Start→if, if→T→println, if→F→Stop, println→Stop)
  - **V(G) = e − n + 2 = 4 − 4 + 2 = 2 ✅**

### Vg for `Validator`
One method with d=1: **Vg = Σ(di + 1) = (1 + 1) = 2**

---

## ANSWER: Q-CALC-02 | `if-else` · Root class · `Grader`

### Tokenisation Walkthrough

**Line 2:** `public void grade(int marks)`
→ **Tokens: void, grade() → S = 2** (same reasoning as Q1-L2)

**Line 3:** `if (marks >= 50)` — **has an `else` branch → token is `if-else()`** (R9)
| Element | Token? | Rule |
|---------|--------|------|
| `if-else()` | ✅ | (R9) — the presence of an `else` makes the whole construct `if-else()` |
| `marks` | ✅ | (R2) identifier |
| `>=` | ✅ | (R2) operator |
| `50` | ✅ | (R2) numerical value |

→ **Tokens: if-else(), marks, >=, 50 → S = 4**

**Line 4:** `System.out.println("Pass")` → **Tokens: System, ·, out, ·, println(), "Pass" → S = 6**

**Line 5:** `System.out.println("Fail")` → **Tokens: System, ·, out, ·, println(), "Fail" → S = 6**

*(The `else` keyword on its own line is NOT a token per R9 and the guideline summary)*

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void grade(int marks)` | void, grade() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `if (marks >= 50)` | if-else(), marks, >=, 50 | 4 | 1 | 1 | 1 | **3** | **12** |
| 4 | `System.out.println("Pass")` | System, ·, out, ·, println(), "Pass" | 6 | 0 | 1 | 1 | **2** | **12** |
| 5 | `System.out.println("Fail")` | System, ·, out, ·, println(), "Fail" | 6 | 0 | 1 | 1 | **2** | **12** |
| | | | | | | | **WCC** | **38** |

*(This matches the worked Lecture 4 example pattern: WCC = 38 for a simple if-else structure)*

### V(G) and Vg
- d = 1 → **V(G) = 2**; CFG: e=5, n=5 → V(G) = 5−5+2 = **2 ✅**
- Vg for `Grader` (1 method): **Vg = 2**

---

## ANSWER: Q-CALC-03 | `else-if` chain · Root class · `Scorer`

### Key Rule 9 Decision: Which token type for Line 3?

Line 3 `if (score >= 75)` is the **first** branch of a multi-branch chain that ends with an `else`.
→ The overall structure is `if-else`, so Line 3 uses token: **`if-else()`**

Line 5 `else if (score >= 50)` → explicitly named in Rule 9 as **`else-if()`** — one token.

### Tokenisation

**Line 2:** void, classify() → **S = 2**

**Line 3:** `if (score >= 75)` → **if-else()**, score, >=, 75 → **S = 4**

**Line 4:** `System.out.println("Distinction")` → System, ·, out, ·, println(), "Distinction" → **S = 6**

**Line 5:** `else if (score >= 50)` → **else-if()**, score, >=, 50 → **S = 4**
*(The `else` keyword is absorbed into the `else-if()` token per R9)*

**Line 6:** `System.out.println("Pass")` → System, ·, out, ·, println(), "Pass" → **S = 6**

**Line 7:** `System.out.println("Fail")` → System, ·, out, ·, println(), "Fail" → **S = 6**
*(The final `else` keyword is NOT a token; the statement inside it IS counted)*

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void classify(int score)` | void, classify() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `if (score >= 75)` | if-else(), score, >=, 75 | 4 | 1 | 1 | 1 | **3** | **12** |
| 4 | `System.out.println("Distinction")` | System, ·, out, ·, println(), "Distinction" | 6 | 0 | 1 | 1 | **2** | **12** |
| 5 | `else if (score >= 50)` | else-if(), score, >=, 50 | 4 | 1 | 1 | 1 | **3** | **12** |
| 6 | `System.out.println("Pass")` | System, ·, out, ·, println(), "Pass" | 6 | 0 | 1 | 1 | **2** | **12** |
| 7 | `System.out.println("Fail")` | System, ·, out, ·, println(), "Fail" | 6 | 0 | 1 | 1 | **2** | **12** |
| | | | | | | | **WCC** | **62** |

### V(G) and Vg
- d = 2 (two decision points: `if` at line 3, `else-if` at line 5)
- **V(G) = d + 1 = 2 + 1 = 3**
- CFG: Start, D1(if), P1(Distinction), D2(else-if), P2(Pass), P3(Fail), Stop → n=7, e=8
  - V(G) = 8 − 7 + 2 = **3 ✅**
- Vg for `Scorer` (1 method, d=2): **Vg = (2+1) = 3**

---

## ANSWER: Q-CALC-04 | `while` loop · Root class · `Counter`

### Line 3: Rule 7 — Definition vs Declaration

`int i = 0` — has an assignment (`= 0`), so this is a **variable DEFINITION** (not just a declaration).
→ Rule 7 definition: **data type, variable name, operator, value** are ALL tokens.

| Element | Token? | Rule |
|---------|--------|------|
| `int` | ✅ | (R7) data type in definition |
| `i` | ✅ | (R7) variable name in DEFINITION (with assignment) |
| `=` | ✅ | (R2) operator |
| `0` | ✅ | (R2) numerical value (including zero) |
| `;` | ❌ | (R13) |

→ **Tokens: int, i, =, 0 → S = 4**

**Line 4:** `while (i < limit)` — **`while()`** is the token (R9)
→ **Tokens: while(), i, <, limit → S = 4**

**Line 5:** `System.out.println(i)` — `println()` is non-user-defined; argument `i` IS a token
→ **Tokens: System, ·, out, ·, println(), i → S = 6**

**Line 6:** `i++`
→ **Tokens: i, ++ → S = 2**

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void countUp(int limit)` | void, countUp() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `int i = 0` | int, i, =, 0 | 4 | 0 (sequential) | 0 (before any control) | 1 | **1** | **4** |
| 4 | `while (i < limit)` | while(), i, <, limit | 4 | 2 (iterative) | 1 (1st level control) | 1 | **4** | **16** |
| 5 | `System.out.println(i)` | System, ·, out, ·, println(), i | 6 | 0 | 1 (inside while = 1st level) | 1 | **2** | **12** |
| 6 | `i++` | i, ++ | 2 | 0 | 1 (inside while) | 1 | **2** | **4** |
| | | | | | | | **WCC** | **38** |

### V(G) and Vg
- d = 1 (while loop = 1 decision)
- **V(G) = 1 + 1 = 2**
- CFG: Start → P(int i=0) → D(while) → [T: P(println) → P(i++) → back to D(while)] → [F: Stop]
  - n = 5, e = 6 (including back-edge) → V(G) = 6 − 5 + 2 = **3**

> ⚠️ **Discrepancy note:** V(G) = d+1 gives 2, but e−n+2 gives 3 (due to the back-edge in the loop).
> This is because back-edges in loops create additional linearly independent paths.
> **The graph formula (e−n+2 = 3) is the more accurate measure** when the CFG is drawn correctly.

- Vg for `Counter` (1 method): using d+1 approach → **Vg = 2** (or 3 from CFG)

---

## ANSWER: Q-CALC-05 | `do-while` · Root class · `Repeater`

### Key: Where does `do-while()` token appear?

Rule 9 states: "`do-while()` is identified as one token." However, "`do`" alone is not a token.
→ The **`do-while()` token** appears on the **closing `} while (condition)` line** (Line 6).
→ The opening `do {` keyword generates **zero tokens**.

**Line 3:** `int count = 1` — definition (has assignment)
→ **Tokens: int, count, =, 1 → S = 4** (R7)

**Line 4:** `System.out.println("Hello")` — inside do-while body (Wn = 1)
→ **Tokens: System, ·, out, ·, println(), "Hello" → S = 6** (R3, R8, R12)

**Line 5:** `count++` — inside do-while body (Wn = 1)
→ **Tokens: count, ++ → S = 2**

**Line 6:** `} while (count <= times)` — this IS the `do-while()` control structure token
| Element | Token? | Rule |
|---------|--------|------|
| `do-while()` | ✅ | (R9) — appears on the closing while line |
| `count` | ✅ | (R2) identifier |
| `<=` | ✅ | (R2) operator |
| `times` | ✅ | (R2) identifier |
| `;` | ❌ | (R13) |

→ **Tokens: do-while(), count, <=, times → S = 4**

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void repeat(int times)` | void, repeat() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `int count = 1` | int, count, =, 1 | 4 | 0 | 0 | 1 | **1** | **4** |
| 4 | `System.out.println("Hello")` | System, ·, out, ·, println(), "Hello" | 6 | 0 | 1 | 1 | **2** | **12** |
| 5 | `count++` | count, ++ | 2 | 0 | 1 | 1 | **2** | **4** |
| 6 | `} while (count <= times)` | do-while(), count, <=, times | 4 | 2 (iterative) | 1 (1st level control) | 1 | **4** | **16** |
| | | | | | | | **WCC** | **38** |

### V(G) and Vg
- d = 1 (do-while loop condition)
- **V(G) = d + 1 = 2** (or 3 from CFG with back-edge)
- Vg for `Repeater` (1 method): **Vg = 2**

---

## ANSWER: Q-CALC-06 | `for` loop with definition · Root class · `Accumulator`

### Line 4: `for()` tokenization — applying lecture pattern

Following the same pattern as the Lecture 4 `if-else()` example where condition components inside the brackets are listed as separate tokens:

`for (int i = 1; i <= n; i++)`
- `for()` = 1 token (R9: keyword + brackets = 1 token)
- **Init `int i = 1`:** This is a variable **definition** inside the for-header (R7 — has assignment)
  → int ✅, i ✅ (variable name in definition), = ✅, 1 ✅ → 4 tokens
- **Condition `i <= n`:** i ✅, <= ✅, n ✅ → 3 tokens
- **Update `i++`:** i ✅, ++ ✅ → 2 tokens
- Semicolons inside for = NOT tokens (R13)

→ **Tokens: for(), int, i, =, 1, i, <=, n, i, ++ → S = 10**

**Line 3:** `int total = 0` — definition (has assignment) → int, total, =, 0 → **S = 4** (R7)

**Line 5:** `total = total + i` — inside for loop (Wn=1)
→ **Tokens: total, =, total, +, i → S = 5** (R2: identifiers and operators)

**Line 6:** `System.out.println(total)` — **AFTER** the for loop → Wn = 0
- `println()` is **non-user-defined** → argument `total` **IS** a token (R8)
→ **Tokens: System, ·, out, ·, println(), total → S = 6**

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void sum(int n)` | void, sum() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `int total = 0` | int, total, =, 0 | 4 | 0 | 0 | 1 | **1** | **4** |
| 4 | `for (int i = 1; i <= n; i++)` | for(), int, i, =, 1, i, <=, n, i, ++ | 10 | 2 (iterative) | 1 (1st level) | 1 | **4** | **40** |
| 5 | `total = total + i` | total, =, total, +, i | 5 | 0 | 1 (inside for) | 1 | **2** | **10** |
| 6 | `System.out.println(total)` | System, ·, out, ·, println(), total | 6 | 0 | 0 (after for, back at method level) | 1 | **1** | **6** |
| | | | | | | | **WCC** | **62** |

### V(G) and Vg
- d = 1 (for loop = 1 decision)
- **V(G) = d + 1 = 2** (or 3 via graph formula with back-edge)
- Vg for `Accumulator`: **Vg = 2**

---

## ANSWER: Q-CALC-07 | `switch` · Root class · `Season`

### Switch: Wc value determination

The switch has **4 branches**: `case 1`, `case 2`, `case 3`, `default`
→ Wc table: "Switch statement with n cases → n"
→ **Wc = 4** (4 cases total, including default)

### Is `break` a token?

`break` is a keyword. The guideline exclusion list says: *"access flags (public, private, static, etc), do, else, return, ; are not tokens."*
`break` is **NOT** in the exclusion list → **`break` IS a token** (Rule 2: all keywords except access flags).
→ **Tokens: break → S = 1**

### `case` and `default` tokens (Rule 10)

- `case 1:` = **one token** (R10) — the colon is part of the case token
- `default:` = **one token** (R10)

### Line-by-line tokenisation

**Line 2:** void, printSeason() → **S = 2**

**Line 3:** `switch (month)` → switch() (R9) + month → **S = 2**

**Line 4:** `case 1: System.out.println("Winter")`
→ **case 1:, System, ·, out, ·, println(), "Winter" → S = 7**

**Line 5:** `break` → **S = 1**

**Lines 6, 7:** same as 4, 5 with "Spring" → **S = 7, S = 1**

**Lines 8, 9:** same with "Summer" → **S = 7, S = 1**

**Line 10:** `default: System.out.println("Autumn")`
→ **default:, System, ·, out, ·, println(), "Autumn" → S = 7** (R10 for default:, R3 for string)

**Line 11:** `break` → **S = 1**

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void printSeason(int month)` | void, printSeason() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `switch (month)` | switch(), month | 2 | 4 (switch, 4 cases) | 1 (1st level) | 1 | **6** | **12** |
| 4 | `case 1: System.out.println("Winter")` | case 1:, System, ·, out, ·, println(), "Winter" | 7 | 0 | 1 | 1 | **2** | **14** |
| 5 | `break` | break | 1 | 0 | 1 | 1 | **2** | **2** |
| 6 | `case 2: System.out.println("Spring")` | case 2:, System, ·, out, ·, println(), "Spring" | 7 | 0 | 1 | 1 | **2** | **14** |
| 7 | `break` | break | 1 | 0 | 1 | 1 | **2** | **2** |
| 8 | `case 3: System.out.println("Summer")` | case 3:, System, ·, out, ·, println(), "Summer" | 7 | 0 | 1 | 1 | **2** | **14** |
| 9 | `break` | break | 1 | 0 | 1 | 1 | **2** | **2** |
| 10 | `default: System.out.println("Autumn")` | default:, System, ·, out, ·, println(), "Autumn" | 7 | 0 | 1 | 1 | **2** | **14** |
| 11 | `break` | break | 1 | 0 | 1 | 1 | **2** | **2** |
| | | | | | | | **WCC** | **78** |

**WCC = 2 + 12 + (14+2)×4 = 2 + 12 + 64 = 78**

### V(G) and Vg

The switch has 4 branches → the switch node creates 3 binary-equivalent decisions.
- d = 3 (switch with 4 paths = 3 decision points): **V(G) = d + 1 = 4**
- CFG: switch node → 4 branches → 4 break/merge paths → Stop
  - n = 7 (Start, switch-decision, 4 case-procedure-nodes, Stop)
  - e = 8 (Start→switch, switch→4 cases=4 edges, 4 cases→Stop via breaks=... actually 4 edges to Stop)
  - e = 1 + 4 + 4 = 9... → using lecture's Q6 result: e=8, n=6 → V(G) = 4
- Vg for `Season` (1 method, d=3): **Vg = (3+1) = 4**

---

## ANSWER: Q-CALC-08 | `try-catch` · Root class · `SafeOp`

### Key Rule 11 application

- **`try`** keyword: **NOT** a token (R11: *"the word 'try' is not considered for the complexity calculation"*)
- **`catch()`**: keyword + brackets = **one token** (R11: *"the keyword 'catch' and the round brackets are identified as one operator"*)
- Contents inside `catch()` (i.e., `Exception e`): these are the catch parameter. Since catch() is treated similarly to method declarations (R8 reasoning), the contents inside `catch()` are **not** additional tokens.

### What Wc does `catch()` have?

`catch` is a **branching control structure** — it represents an alternate execution path (like the `else` side of an if-else). → **Wc = 1** (branch)

### Nesting levels for try block contents

The try-catch creates a first-level control structure. Code inside the `try` block is **inside this first-level control** → **Wn = 1**.

### Tokenisation

**Line 2:** `public void divide(int a, int b)` → void, divide() → **S = 2**
*(Parameters `int a, int b` inside user-defined method () → NOT tokens, R8)*

**Line 3:** `int result = a / b` — **definition** (has assignment, R7)
| Element | Token? |
|---------|--------|
| `int` | ✅ data type in definition |
| `result` | ✅ variable name in definition |
| `=` | ✅ operator |
| `a` | ✅ identifier |
| `/` | ✅ operator |
| `b` | ✅ identifier |

→ **Tokens: int, result, =, a, /, b → S = 6** *(inside try block, Wn = 1)*

**Line 4:** `System.out.println(result)` — non-user-defined, argument IS a token
→ **Tokens: System, ·, out, ·, println(), result → S = 6** *(inside try, Wn = 1)*

**Line 5:** `catch (Exception e)` → catch() is 1 token; `Exception e` inside () = not tokens
→ **Tokens: catch() → S = 1** *(Wc = 1 branch, Wn = 1 — the catch() is at the same control level)*

**Line 6:** `System.out.println("Error: /0")` — inside catch block
→ **Tokens: System, ·, out, ·, println(), "Error: /0" → S = 6** *(R3: everything inside quotes = 1 token)*

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void divide(int a, int b)` | void, divide() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `int result = a / b` | int, result, =, a, /, b | 6 | 0 | 1 (inside try) | 1 | **2** | **12** |
| 4 | `System.out.println(result)` | System, ·, out, ·, println(), result | 6 | 0 | 1 | 1 | **2** | **12** |
| 5 | `catch (Exception e)` | catch() | 1 | 1 (branch) | 1 (1st level) | 1 | **3** | **3** |
| 6 | `System.out.println("Error: /0")` | System, ·, out, ·, println(), "Error: /0" | 6 | 0 | 1 (inside catch) | 1 | **2** | **12** |
| | | | | | | | **WCC** | **41** |

### V(G) and Vg
- d = 1 (the try-catch = 1 branch point, like if-else)
- **V(G) = d + 1 = 2**
- CFG: Start → P(int result) → P(println result) → D(catch/exception?) → [T-catch: P(println Error)] → Stop; [No exception: straight to Stop]
  - n = 5, e = 5: **V(G) = 5 − 5 + 2 = 2 ✅**
- Vg for `SafeOp` (1 method): **Vg = 2**

---

## ANSWER: Q-CALC-09 | Nested `for` + `if` (3 levels) · Root class · `MatrixChecker`

### Nesting Level Assignment (critical for this question)

From Lecture 4, a control structure AT LEVEL N assigns Wn = N to **itself and all statements directly in its body**:

| Statement | Control level | Wn |
|-----------|-------------|-----|
| Method declaration | Method level (no control) | 0 |
| Outer for() — first/outermost control structure | 1st level | **1** |
| Inner for() — second level (inside outer for's body) | 2nd level | **2** |
| if() — third level (inside inner for's body) | 3rd level | **3** |
| println() — inside if's body | 3rd level (same as its enclosing if) | **3** |

### Tokenisation

**Line 2:** void, checkDiagonal() → **S = 2**

**Line 3:** `for (int i = 0; i < n; i++)` — outer for (Wn = 1)
- for(), int(R7-def), i(R7-def), = , 0, i, <, n, i, ++
→ **Tokens: for(), int, i, =, 0, i, <, n, i, ++ → S = 10**

**Line 4:** `for (int j = 0; j < n; j++)` — inner for (Wn = 2)
- for(), int, j, =, 0, j, <, n, j, ++
→ **Tokens: for(), int, j, =, 0, j, <, n, j, ++ → S = 10**

**Line 5:** `if (i == j)` — no else → `if()` (R9); inside inner for body (Wn = 3)
→ **Tokens: if(), i, ==, j → S = 4**

**Line 6:** `System.out.println("Diag")` — inside if body (Wn = 3)
→ **Tokens: System, ·, out, ·, println(), "Diag" → S = 6**

### WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| 2 | `public void checkDiagonal(int n)` | void, checkDiagonal() | 2 | 0 | 0 | 1 | **1** | **2** |
| 3 | `for (int i = 0; i < n; i++)` | for(), int, i, =, 0, i, <, n, i, ++ | 10 | 2 (iterative) | 1 (1st level) | 1 | **4** | **40** |
| 4 | `for (int j = 0; j < n; j++)` | for(), int, j, =, 0, j, <, n, j, ++ | 10 | 2 (iterative) | 2 (2nd level) | 1 | **5** | **50** |
| 5 | `if (i == j)` | if(), i, ==, j | 4 | 1 (branch) | 3 (3rd level) | 1 | **5** | **20** |
| 6 | `System.out.println("Diag")` | System, ·, out, ·, println(), "Diag" | 6 | 0 | 3 (3rd level) | 1 | **4** | **24** |
| | | | | | | | **WCC** | **136** |

> **Note:** The WCC of 136 vs the Q1 value of 32 shows how dramatically nesting increases complexity.
> The inner for's WC alone is 50 — 25× the method declaration's WC — purely from nesting weight.

### V(G) and Vg
- d = 3 (outer for, inner for, if)
- **V(G) = d + 1 = 4**
- Vg for `MatrixChecker` (1 method): **Vg = (3+1) = 4**

---

## ANSWER: Q-CALC-10 | Inheritance + User/Non-User Method Calls

### Part A — Animal class (Wi = 0, root class)

> Rule 17: "For a program which does **not** have a built-in root class, Wi begins at 1."
> However, if we **explicitly designate** `Animal` as the root class (no parent), Wi = 0.

**Line A2:** `public void eat()` → void, eat() → **S = 2**

**Line A3:** `System.out.println("Eating")` → System, ·, out, ·, println(), "Eating" → **S = 6**

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| A2 | `public void eat()` | void, eat() | 2 | 0 | 0 | **0** (root) | **0** | **0** |
| A3 | `System.out.println("Eating")` | System, ·, out, ·, println(), "Eating" | 6 | 0 | 1 (inside eat's body) | **0** | **1** | **6** |
| | | | | | | | **WCC_Animal** | **6** |

### Part B — Dog class (Wi = 1, first derived class)

### Rule 8 Deep-Dive: user-defined vs non-user-defined methods

| Method call | Type | Argument token? | Rule |
|-------------|------|-----------------|------|
| `eat()` | user-defined | N/A — no args | R8: no arguments visible |
| `bark(3)` | user-defined | `3` = **NOT** a token | R8: *"components inside () of user-defined methods are not tokens"* |
| `System.out.println("Done")` | non-user-defined (library) | `"Done"` = **IS** a token | R8 only excludes *user-defined* methods' contents |

**Line D2:** `public void bark(int times)` → void, bark() → **S = 2**

**Line D3:** `for (int i = 0; i < times; i++)` → for(), int, i, =, 0, i, <, times, i, ++ → **S = 10**

**Line D4:** `System.out.println("Woof")` → System, ·, out, ·, println(), "Woof" → **S = 6**

**Line D5:** `public void perform()` → void, perform() → **S = 2**

**Line D6:** `eat()` — user-defined method call, no arguments
→ **Tokens: eat() → S = 1** (R8: method name + brackets = 1 token)

**Line D7:** `bark(3)` — user-defined method call WITH argument `3`
→ `3` is inside user-defined method's brackets → **NOT a token** (R8)
→ **Tokens: bark() → S = 1**

*(This is the critical distinction: even though 3 is a numerical value, it's excluded because it's inside a user-defined method's brackets)*

**Line D8:** `System.out.println("Done")` — non-user-defined library method
→ `"Done"` is the argument; non-user-defined methods are NOT excluded → argument IS a token
→ **Tokens: System, ·, out, ·, println(), "Done" → S = 6**

### Dog WCC Table

| Line | Statement | Tokens | S | Wc | Wn | Wi | Wt | WC |
|------|-----------|--------|---|----|----|----|----|-----|
| D2 | `public void bark(int times)` | void, bark() | 2 | 0 | 0 | **1** | **1** | **2** |
| D3 | `for (int i = 0; i < times; i++)` | for(), int, i, =, 0, i, <, times, i, ++ | 10 | 2 | 1 (1st level) | **1** | **4** | **40** |
| D4 | `System.out.println("Woof")` | System, ·, out, ·, println(), "Woof" | 6 | 0 | 1 (inside for) | **1** | **2** | **12** |
| D5 | `public void perform()` | void, perform() | 2 | 0 | 0 | **1** | **1** | **2** |
| D6 | `eat()` | eat() | 1 | 0 | 0 | **1** | **1** | **1** |
| D7 | `bark(3)` | bark() | 1 | 0 | 0 | **1** | **1** | **1** |
| D8 | `System.out.println("Done")` | System, ·, out, ·, println(), "Done" | 6 | 0 | 0 | **1** | **1** | **6** |
| | | | | | | | **WCC_Dog** | **64** |

### V(G) per method and Vg

| Class | Method | d (decisions) | V(G) = d+1 |
|-------|--------|--------------|------------|
| Animal | eat() | 0 | **1** |
| Dog | bark() | 1 (for loop) | **2** |
| Dog | perform() | 0 | **1** |

**Vg for Animal** (n=1 method):
```
Vg = Σ(di + 1) = (0 + 1) = 1
```

**Vg for Dog** (n=2 methods):
```
Vg = Σ(di + 1) = (1+1) + (0+1) = 2 + 1 = 3
   = n + Σdi = 2 + 1 = 3 ✅
```

---

## Summary Table — All 10 Questions

| Q | Pattern | WCC | V(G) | Vg |
|---|---------|-----|------|----|
| Q-CALC-01 | `if` (no else) | **32** | 2 | 2 |
| Q-CALC-02 | `if-else` | **38** | 2 | 2 |
| Q-CALC-03 | `else-if` chain | **62** | 3 | 3 |
| Q-CALC-04 | `while` loop | **38** | 2 | 2 |
| Q-CALC-05 | `do-while` loop | **38** | 2 | 2 |
| Q-CALC-06 | `for` loop | **62** | 2 | 2 |
| Q-CALC-07 | `switch` (4 cases) | **78** | 4 | 4 |
| Q-CALC-08 | `try-catch` | **41** | 2 | 2 |
| Q-CALC-09 | Nested for+if (3 levels) | **136** | 4 | 4 |
| Q-CALC-10 | Inheritance + method calls | WCC_A=6, WCC_D=64 | Various | Vg_A=1, Vg_D=3 |

> **Key insight from the WCC values:** Nesting is the dominant cost factor.
> Q-CALC-09 (nested loops) scores 136 vs Q-CALC-02's 38 for a similar amount of code —
> entirely because Wn multiplies aggressively at deeper nesting levels.

---

*End of Answer Sheet*

**File:** `SE3110_Metrics_Calculation_10_Answers.md`
