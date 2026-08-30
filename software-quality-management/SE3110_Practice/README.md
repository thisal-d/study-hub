# 📝 SE3110 — Practice Questions & Answers

> All practice materials for **Software Quality Management (SE3110)**.
> Covers Cyclomatic Complexity, Control Flow Graphs, and WCC metric calculations.

[← Back to Software Quality Management](../README.md) · [← Back to Study Hub](../../README.md)

---

## 📂 Files in This Folder

| File | Questions | Type | Description |
|------|-----------|------|-------------|
| [SE3110_Practice_Questions.md](./SE3110_Practice_Questions.md) | 15 | Mixed | Sections A–D: definitions, CFG drawing, calculation, integration |
| [SE3110_Answer_Sheet.md](./SE3110_Answer_Sheet.md) | 15 | Answers | Step-by-step working for all 15 mixed questions |
| [SE3110_Metrics_Calculation_10_Questions.md](./SE3110_Metrics_Calculation_10_Questions.md) | 10 | Pure Calc ⭐ | One question per control structure; fill-in metric tables |
| [SE3110_Metrics_Calculation_10_Answers.md](./SE3110_Metrics_Calculation_10_Answers.md) | 10 | Answers ⭐ | Full token lists, WCC tables, V(G) and Vg with rule citations |

---

## 🗺️ Question Map — 15 Mixed Questions

### Section A — Conceptual / Definition (Q1–Q5)

| Q | Topic | Difficulty |
|---|-------|-----------|
| Q1 | V(G) formulas: e−n+2, d+1, and algebraic derivation | ⭐ Easy |
| Q2 | Four key factors of WCC | ⭐ Easy |
| Q3 | Tokenisation rules — identify tokens, apply Rules 1–17 | ⭐ Easy |
| Q4 | Weight tables: Wc, Wn, Wi, Wt, WC, WCC formulas | ⭐⭐ Medium |
| Q5 | Class-level Vg formula, calculation, bytecode CC explanation | ⭐⭐ Medium |

### Section B — Calculation (Q6–Q10)

| Q | Topic | Difficulty |
|---|-------|-----------|
| Q6 | V(G) from given edge/node counts (4 graphs) | ⭐ Easy |
| Q7 | Token counting (S) for a method declaration | ⭐⭐ Medium |
| Q8 | Full WCC table — simple Counter class | ⭐⭐ Medium |
| Q9 | Full WCC table — loop + nested if (inherited class) | ⭐⭐⭐ Hard |
| Q10 | Full WCC table — switch with 3 cases + default | ⭐⭐ Medium |

### Section C — Control Flow Graphs (Q11–Q13)

| Q | Topic | Difficulty |
|---|-------|-----------|
| Q11 | CFG + V(G) for if-else (draw, count e/n, both formulas) | ⭐ Easy |
| Q12 | CFG + V(G) for nested if-else | ⭐⭐ Medium |
| Q13 | CFG + V(G) for while + nested if (with back-edge) | ⭐⭐⭐ Hard |

### Section D — Integration (Q14–Q15)

| Q | Topic | Difficulty |
|---|-------|-----------|
| Q14 | Class-level Vg for 4-method Calculator class | ⭐⭐ Medium |
| Q15 | Complete: CFG + V(G) + Vg + full WCC table | ⭐⭐⭐ Hard |

---

## 🗺️ Question Map — 10 Pure Calculation Questions

| Q | Control Structure | WCC | V(G) | New rule focus |
|---|-----------------|-----|------|----------------|
| [Q-CALC-01](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-01--if-no-else--root-class) | `if` (no else) | 32 | 2 | `if()` token, no else |
| [Q-CALC-02](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-02--if-else--root-class) | `if-else` | 38 | 2 | `if-else()` token |
| [Q-CALC-03](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-03--else-if-chain--root-class) | `else-if` chain | 62 | 3 | `else-if()` token |
| [Q-CALC-04](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-04--while-loop--root-class) | `while` | 38 | 2 | Rule 7 definition |
| [Q-CALC-05](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-05--do-while-loop--root-class) | `do-while` | 38 | 2 | `do` not a token |
| [Q-CALC-06](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-06--for-loop-with-variable-definition--root-class) | `for` loop | 62 | 2 | for-init as definition |
| [Q-CALC-07](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-07--switch-statement--root-class) | `switch` | 78 | 4 | `case:` / `default:` tokens |
| [Q-CALC-08](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-08--try-catch--root-class) | `try-catch` | 41 | 2 | `try` not a token; `catch()` |
| [Q-CALC-09](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-09--nested-for--nested-if-3-nesting-levels--root-class) | Nested for + if | 136 | 4 | Wn = 1, 2, 3 |
| [Q-CALC-10](./SE3110_Metrics_Calculation_10_Questions.md#q-calc-10--multi-method-class--inheritance--base-class--derived-class) | Inheritance | 106 (A:14, D:92) | varies | Wi=1 (base) vs Wi=2 (1st derived); Rule 8 user vs library |

---

## 💡 Study Tips

1. **Start with the Formula Reference** in the [subject README](../README.md) — keep it open while solving
2. **Always check the 17 rules** before tokenising any statement
3. **The hardest traps:**
   - `else` alone ≠ token; `else-if()` = 1 token (Rule 9)
   - `do` alone ≠ token; `do-while()` appears on the **closing** line (Rule 9)
   - `try` ≠ token; `catch()` = 1 token (Rule 11)
   - User-defined method arguments = NOT tokens (Rule 8)
   - Library/non-user-defined method arguments = ARE tokens (Rule 8)
   - Variable **declaration** = type only; **definition** (with `=`) = type + name + `=` + value (Rule 7)
4. **Practice order:** Q-CALC-01 → Q-CALC-02 → Q-CALC-03 → Q-CALC-04 → Q-CALC-05 → Q-CALC-06 → Q-CALC-07 → Q-CALC-08 → Q-CALC-09 → Q-CALC-10

---

*Folder: `software-quality-management/SE3110_Practice/`*
