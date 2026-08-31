# 📏 Software Quality Management
### SE3110 — Software Engineering Process and Quality Management

> Lecture notes, tokenisation guidelines, and full practice question sets covering
> **Cyclomatic Complexity** and the **Weighted Composite Complexity (WCC)** metric.

---

## 🗂️ Quick Navigation

| # | File | Type | What's inside |
|---|------|------|---------------|
| 1 | [📖 Lecture 3 — Cyclomatic Complexity](./SE3110_Lecture_3_Cyclomatic_Complexity.md) | Lecture | V(G) = e−n+2, d+1, Vg for classes, CFG drawing rules |
| 2 | [📖 Lecture 4 — WCC Metric](./SE3110_Lecture_4_WCC_Metric.md) | Lecture | S, Wc, Wn, Wi, Wt, WC, WCC — full worked example |
| 3 | [📋 WCC Tokenisation Guidelines](./SE3110_WCC_Tokenisation_Guidelines.md) | Reference | All 17 rules for counting tokens (what IS and is NOT a token) |
| 4 | [📖 Lecture 5 — Cognitive Functional Size (CFS)](./SE3110_Lecture_5_Cognitive_Functional_Size.md) | Lecture | BCS cognitive weights, Ni, No, Sf = (Ni + No) × Wc [CWU] |
| 5 | [🧠 The "Why" Behind Software Metrics Guide](./SE3110_Why_We_Calculate_Metrics_README.md) | Study Guide ⭐ | Explains WHY we calculate Wi, Wc, Wn, Wt, WCC, Sf, etc., rather than how to calculate them |
| 6 | [📁 Practice Set →](./SE3110_Practice/) | Folder | All practice questions, calculations, and 60 MCQ exam |

---

## 📁 Practice Set — File Index

| File | Type | Questions | Topics |
|------|------|-----------|--------|
| [SE3110_Practice_Questions.md](./SE3110_Practice/SE3110_Practice_Questions.md) | Mixed | **15 Qs** | Conceptual definitions, CFG drawing (3 Qs), WCC calculation (5 Qs), class Vg (2 Qs) |
| [SE3110_Answer_Sheet.md](./SE3110_Practice/SE3110_Answer_Sheet.md) | Answers | 15 | Full step-by-step working for all 15 mixed questions |
| [SE3110_Metrics_Calculation_10_Questions.md](./SE3110_Practice/SE3110_Metrics_Calculation_10_Questions.md) | Pure Calc | **10 Qs** | One question per control structure — compute Tokens, S, Wc, Wn, Wi, Wt, WC, WCC, V(G), Vg |
| [SE3110_Metrics_Calculation_10_Answers.md](./SE3110_Practice/SE3110_Metrics_Calculation_10_Answers.md) | Answers | 10 | Token-by-token working, full WCC tables, CFG counts, rule citations |
| [SE3110_Lecture_5_CFS_Questions_and_Answers.md](./SE3110_Practice/SE3110_Lecture_5_CFS_Questions_and_Answers.md) | Lecture 5 Q&A | **10 Qs** | Cognitive Functional Size, BCS weights, linear/nested Wc, Ni, No, Sf in CWU |
| [SE3110_Comprehensive_MCQ_Exam.md](./SE3110_Practice/SE3110_Comprehensive_MCQ_Exam.md) | MCQ Exam ⭐ | **60 MCQs** | Full exam covering Lectures 3, 4, 5 & Token Guidelines + Answer Key |

---

## 🧮 Control Structures Covered in Calculation Questions

| Q | Control Structure | Key Tokenisation Rule Tested |
|---|-----------------|------------------------------|
| Q-CALC-01 | `if` (no else) | Rule 9: `if()` ≠ `if-else()` |
| Q-CALC-02 | `if-else` | Rule 9: `if-else()` as one token |
| Q-CALC-03 | `else-if` chain | Rule 9: `else-if()` as distinct token |
| Q-CALC-04 | `while` loop | Rule 7: definition vs declaration |
| Q-CALC-05 | `do-while` loop | Rule 9: `do` not a token; `do-while()` on closing line |
| Q-CALC-06 | `for` loop | Rule 7: for-init definition; Rule 9: `for()` token |
| Q-CALC-07 | `switch` (4 cases) | Rule 10: `case:` / `default:` as tokens; `break` IS a token |
| Q-CALC-08 | `try-catch` | Rule 11: `try` not a token; `catch()` = one token |
| Q-CALC-09 | Nested `for` + `if` | Wn = 1 → 2 → 3 nesting cascade |
| Q-CALC-10 | Inheritance + method calls | Rule 8: user-defined args NOT tokens; library-method args ARE tokens |

---

## 🔑 Formula Reference

### Cyclomatic Complexity (Lecture 3)

```
V(G) = e − n + 2          where e = edges, n = nodes in CFG
V(G) = d + 1              where d = number of decision statements

Vg = Σ(di + 1) = n + Σdi  (class-level complexity across all methods)
```

### Weighted Composite Complexity (Lecture 4)

```
WCC = Σ (Sj × Wtj)        (sum over all executable statements)
Wt  = Wc + Wn + Wi
WC  = S × Wt              (per-statement complexity)
```

### Weight Tables

| Wc — Control Type | Weight |
|-------------------|--------|
| Sequential | 0 |
| Branch (`if`, `else-if`, `catch`) | 1 |
| Iterative (`for`, `while`, `do-while`) | 2 |
| Switch with n cases | n |

| Wn — Nesting Level | Weight |
|--------------------|--------|
| Method level (no enclosing control) | 0 |
| Inside 1st (outermost) control structure | 1 |
| Inside 2nd level control structure | 2 |
| Inside nth level | n |

| Wi — Inheritance Level | Weight |
|------------------------|--------|
| Base class / root class | **1** |
| 1st derived class (1st subclass / 1st inheritance) | **2** |
| 2nd derived class (2nd subclass / 2nd inheritance) | **3** |
| nth derived class | **n + 1** |

> **Inheritance Weight Rule (Rule 17):** In Java/OOP where there is no built-in root class counted, Wi begins at **1** for the base class, **2** for the first derived class (first subclass), **3** for the second derived class, and increments accordingly.

---

## 📌 Tokenisation Quick-Reference (All 17 Rules)

| Rule | Summary |
|------|---------|
| 1 | Token counting begins **after** the class declaration line |
| 2 | Keywords (not access flags), operators, strings, identifiers, numbers = tokens |
| 3 | Everything inside `"..."` or `'...'` = **one** token |
| 4 | Array name + `[]` = **one** token (e.g. `arr[]`) |
| 5 | Each `,` separating components = separate token |
| 6 | `{` and `}` are **not** tokens |
| 7 | Variable **declaration** → data type is token, name is NOT; Variable **definition** (with `=`) → data type, name, `=`, value all ARE tokens |
| 8 | Method name + `()` = one token. Arguments inside user-defined method `()` = NOT tokens. Arguments inside library/non-user-defined method `()` ARE tokens |
| 9 | Decisional keywords + brackets = one token each: `if()`, `if-else()`, `else-if()`, `for()`, `while()`, `do-while()`, `switch()`. The words `else` and `do` alone are NOT tokens |
| 10 | `case N:` and `default:` in switch = separate tokens each |
| 11 | `catch()` = one token. `try` alone is NOT a token |
| 12 | `.` operator = separate token. Each name connected by `.` = separate token |
| 13 | `;` (statement terminator) = NOT a token |
| 14 | Manipulators (`endl`, `"\n"`) = tokens |
| 15 | `*` in pointer declaration = NOT a token |
| 16 | `return` = NOT a token |
| 17 | No built-in root class → Wi allocation starts at **1** |

**Summary of non-tokens:** `public`, `private`, `static`, `abstract`, `else`, `do`, `return`, `try`, `;`, `{`, `}` — and pointer `*`

---

### Cognitive Functional Size Metric (Lecture 5)

```
Sf = (Ni + No) × Wc           (Basic component / single method, in CWU)
Sf(c) = Σ Sf(c)               (Complex component with n methods)
Ŝf = Σ Sf(k)                  (Component-based software system with p components)
```

#### BCS Cognitive Weights:
| Category | Structure | Weight ($W_c$) |
|---|---|:---:|
| Sequence | Sequence (`SEQ`) | **1** |
| Branch | If-then-[else] (`ITE`) | **2** |
| Branch | Case (`CASE`) | **3** |
| Iteration | For-do (`Ri`), Do-while (`R1`), While-do (`R0`) | **3** |
| Embedded | Function Call (`FC`) | **2** |
| Embedded | Recursion (`REC`) | **3** |

* **Linear blocks:** $W_c = \sum W_c(i)$ (sum weights)
* **Nested blocks:** $W_c = \sum [\prod \sum W_c]$ (weights multiply across nesting layers)
* **$N_i$:** Number of inputs (parameters, scanner reads)
* **$N_o$:** Number of outputs (return values, single output executed at a given time)

---

## ⚠️ Topics Not Yet in Uploaded Material

| Symbol | Status |
|--------|--------|
| Halstead Metrics (n1, n2, N1, N2, V, D, E, B) | ❌ Not in uploaded lectures — upload Halstead slides to add questions |

---

## 🔗 Back to Study Hub

[← Back to Study Hub root](../README.md)

---

*Subject: SE3110 — Software Engineering Process and Quality Management*
*Last updated: 2026-08-30*
