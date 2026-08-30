# SE3110 — Comprehensive Practice Exam: 60 MCQs
## Software Engineering Process and Quality Management
### Covering Lecture 3 (Cyclomatic Complexity), Lecture 4 & Guidelines (WCC Metric), and Lecture 5 (Cognitive Functional Size)

---

## 📋 Exam Instructions
* Total Questions: **60 Multiple Choice Questions**
* Sections:
  * **Section 1 (Q01 – Q15):** Cyclomatic Complexity & Control Flow Graphs (Lecture 3)
  * **Section 2 (Q16 – Q35):** Weighted Composite Complexity & Tokenisation (Lecture 4 & Guidelines)
  * **Section 3 (Q36 – Q50):** Cognitive Functional Size Metric (Lecture 5)
  * **Section 4 (Q51 – Q60):** Code Snippet Analysis & Integrated Calculations
* A complete **Answer Key with Detailed Explanations** is provided at the end of the document.

---

## SECTION 1: Cyclomatic Complexity & Control Flow Graphs (Lecture 3)

#### Q01. What does Cyclomatic Complexity $V(G)$ primarily measure in a program?
A) The total number of executable lines of source code  
B) The number of linearly independent execution paths through a program  
C) The memory footprint of the compiled class file  
D) The execution runtime of the slowest algorithm  

#### Q02. In a Control Flow Graph (CFG), what does a "predicate node" represent?
A) A statement terminator (`;`)  
B) A sequence of non-branching statements  
C) A decision statement (such as `if`, `while`, `for`) from which two or more edges emanate  
D) The terminal stop node of a method  

#### Q03. Given a Control Flow Graph with $e = 11$ edges and $n = 9$ nodes, what is the cyclomatic complexity $V(G)$?
A) 2  
B) 3  
C) 4  
D) 5  

#### Q04. The alternative formula for Cyclomatic Complexity based on decision statements is:
A) $V(G) = d - 1$  
B) $V(G) = d + 1$  
C) $V(G) = 2d + 1$  
D) $V(G) = d \times 2$  

#### Q05. In the derivation of $V(G) = d + 1$ from $V(G) = e - n + 2$, what is the total number of nodes in a CFG containing $d$ decision nodes and $p$ procedure nodes?
A) $d + p$  
B) $d + p + 1$  
C) $2d + p$  
D) $d + p + 2$  

#### Q06. In the same derivation, what is the total number of edges ($e$) in terms of decision nodes ($d$) and procedure nodes ($p$)?
A) $e = d + p$  
B) $e = 2d + p$  
C) $e = 2d + 2p$  
D) $e = d + 2p + 1$  

#### Q07. A Java class contains 3 methods: Method A has 2 decisions, Method B has 0 decisions, and Method C has 3 decisions. What is the class-level cyclomatic complexity $V_g$?
A) 5  
B) 7  
C) 8  
D) 9  

#### Q08. The formula for the cyclomatic complexity of a class $V_g$ with $n$ methods and $d_i$ decisions in method $i$ is:
A) $V_g = \sum_{i=1}^{n} d_i$  
B) $V_g = \sum_{i=1}^{n} (d_i + 1) = n + \sum_{i=1}^{n} d_i$  
C) $V_g = \prod_{i=1}^{n} (d_i + 1)$  
D) $V_g = n \times \sum_{i=1}^{n} d_i$  

#### Q09. Why can the Cyclomatic Complexity obtained from a Java `.class` bytecode file be higher than that obtained from the source `.java` file?
A) Bytecode adds comments that count as decision points  
B) Compilers may decompose compound logical expressions (`&&`, `||`) into multiple conditional jump instructions  
C) The Java Virtual Machine executes code in parallel  
D) Bytecode always doubles the number of loops  

#### Q10. In a Control Flow Graph, how are Start and Stop nodes graphically represented according to Lecture 3?
A) A diamond  
B) An open circle with labeled text  
C) A rectangle with double borders  
D) A dashed arrow  

#### Q11. A method has a single `while` loop with a simple condition. What is its cyclomatic complexity $V(G) = d + 1$?
A) 1  
B) 2  
C) 3  
D) 4  

#### Q12. According to McCabe's complexity evaluation scale, a method with $V(G) = 14$ is classified as:
A) Simple procedure with low risk  
B) More complex with moderate risk  
C) Complex, high risk  
D) Untestable, extremely high risk  

#### Q13. According to McCabe's scale, a procedure with $V(G) > 50$ is considered:
A) Low risk  
B) Optimal structure  
C) Moderate risk  
D) Untestable and extremely high risk  

#### Q14. In a Control Flow Graph, edges MUST always:
A) Be undirected lines  
B) Indicate directions with arrows  
C) Connect only decision nodes to each other  
D) Have a numerical weight written on them  

#### Q15. A procedure node in a CFG represents:
A) Exactly one decision statement  
B) One or more non-decisional (sequential) statements grouped together  
C) The exit point of the entire application  
D) An exception handler only  

---

## SECTION 2: WCC Metric & Tokenisation Rules (Lecture 4 & Guidelines)

#### Q16. According to Guideline Rule 1, when does the identification of tokens begin?
A) At the very first line of the file, including `import` and `package` statements  
B) After the class declaration line  
C) Inside the `main` method only  
D) When the first control structure is encountered  

#### Q17. According to Guideline Rule 2, which of the following is NOT identified as a token?
A) The keyword `void`  
B) The access flag `public`  
C) The identifier `total`  
D) The numerical value `0`  

#### Q18. In the statement `System.out.println("Hello, World!");`, how many tokens are produced by the string `"Hello, World!"` (Rule 3)?
A) 2 (two words)  
B) 1 (all characters inside a pair of quotes form a single token)  
C) 13 (one per character)  
D) 0 (strings are ignored)  

#### Q19. According to Guideline Rule 4, how are an array name and its square brackets counted?
A) The array name is 1 token, `[` is 1 token, and `]` is 1 token (total 3)  
B) The square brackets are completely ignored  
C) Along with the array name, the square brackets are considered as ONE token (e.g., `data[]`)  
D) Square brackets count as 2 tokens only if multidimensional  

#### Q20. According to Guideline Rule 6, how are curly braces `{` and `}` identified?
A) Each `{` is 1 token and each `}` is 1 token  
B) They are identified as a single token pair  
C) Brackets `{ }` are NOT identified as tokens  
D) They count as tokens only if enclosing a loop  

#### Q21. Consider the variable declaration statement: `int a, b, c;`. According to Guideline Rule 7, what is the token count ($S$)?
A) 1 (`int` only)  
B) 3 (`int`, `,`, `,`)  
C) 4 (`int`, `a`, `b`, `c`)  
D) 6 (`int`, `a`, `,`, `b`, `,`, `c`)  

#### Q22. Consider the variable definition statement: `int count = 5;`. According to Guideline Rule 7, what is the token count ($S$)?
A) 2 (`int`, `count`)  
B) 3 (`int`, `=`, `5`)  
C) 4 (`int`, `count`, `=`, `5`)  
D) 5 (`int`, `count`, `=`, `5`, `;`)  

#### Q23. According to Guideline Rule 8, in the user-defined method call `calculate(x, y);`, what is counted?
A) `calculate()` is 1 token; parameters `x` and `y` are NOT tokens $\rightarrow S = 1$  
B) `calculate` is 1, `(` is 1, `x` is 1, `,` is 1, `y` is 1, `)` is 1 $\rightarrow S = 6$  
C) `calculate()` is 1, `x` is 1, `y` is 1 $\rightarrow S = 3$  
D) User-defined method calls are not counted  

#### Q24. When calling a non-user-defined (library) method such as `System.out.println("Pass");`, how is the argument `"Pass"` treated (Rule 8)?
A) It is ignored because it is inside round brackets  
B) It IS identified as a token because the argument exclusion only applies to user-defined methods  
C) It is counted as 2 tokens  
D) It is only counted if it is an integer  

#### Q25. According to Guideline Rule 9, which of the following words are NOT considered tokens?
A) `for` and `while`  
B) `if` and `switch`  
C) `else` and `do`  
D) `case` and `default`  

#### Q26. In an `else if (score >= 50)` construct, what is the decisional token per Rule 9?
A) `else` is 1 token and `if()` is 1 token  
B) `else-if()` is identified as ONE token  
C) Only `if` counts; `else` is ignored  
D) No tokens are counted for branch statements  

#### Q27. In a switch statement, how are `case 1:` and `default:` identified (Rule 10)?
A) They are not tokens  
B) `case 1:` is identified as a token, and `default:` is identified as a token  
C) Only the numerical value `1` is a token  
D) The colon `:` is a separate token from `case`  

#### Q28. In a `try-catch` block, how are the keywords `try` and `catch` treated (Rule 11)?
A) `try` is 1 token; `catch()` is 1 token  
B) `try` is NOT a token; `catch()` is identified as ONE token  
C) Both `try` and `catch` are excluded  
D) `try` is 1 token; `catch` is excluded  

#### Q29. According to Guideline Rule 12, how many tokens are in `student.getName()`?
A) 1 token  
B) 2 tokens (`student`, `getName()`)  
C) 3 tokens (`student`, `.`, `getName()`)  
D) 4 tokens (`student`, `.`, `getName`, `()`)  

#### Q30. According to Guideline Rule 13 and Rule 16, which two elements are NOT considered tokens?
A) `;` (semicolon) and `return`  
B) `+` (plus) and `int`  
C) `class` and `new`  
D) `break` and `while`  

#### Q31. In the WCC metric, what is the control structure weight ($W_c$) for an iterative statement (`for`, `while`, `do-while`)?
A) 0  
B) 1  
C) 2  
D) 3  

#### Q32. In the WCC metric, what is the control structure weight ($W_c$) for a `switch` statement with 5 cases?
A) 1  
B) 2  
C) 5  
D) 10  

#### Q33. What is the nesting level weight ($W_n$) for a statement located directly inside the method body (outside any loop, `if`, or `switch`)?
A) 0  
B) 1  
C) 2  
D) -1  

#### Q34. According to Guideline Rule 17 (as applied in OOP/Java where no built-in root class is counted), what is the inheritance weight ($W_i$) for a base/root class and its first derived class?
A) Base class = 0, First derived = 1  
B) Base class = 1, First derived = 2  
C) Base class = 0, First derived = 0  
D) Base class = 2, First derived = 3  

#### Q35. What is the formula for the Total Weight ($W_t$) and Weighted Complexity ($WC$) of a statement?
A) $W_t = W_c \times W_n \times W_i$; $WC = S + W_t$  
B) $W_t = W_c + W_n + W_i$; $WC = S \times W_t$  
C) $W_t = W_c + W_n$; $WC = S \times (W_t + W_i)$  
D) $W_t = S \times W_c$; $WC = W_t + W_n + W_i$  

---

## SECTION 3: Cognitive Functional Size Metric (Lecture 5)

#### Q36. What distinguishes the Cognitive Functional Size (CFS) metric from traditional OO metrics?
A) It is only applicable to Python programs  
B) It is a paradigm-independent metric  
C) It ignores control structures completely  
D) It relies exclusively on lines of code (LOC)  

#### Q37. CFS is a function of which three fundamental factors?
A) Lines of code, Number of comments, Number of classes  
B) Cognitive weights of BCSs, Number of inputs ($N_i$), Number of outputs ($N_o$)  
C) Number of operands, Number of operators, Vocabulary  
D) Cyclomatic complexity, Bytecode instructions, Execution time  

#### Q38. What is the cognitive weight ($W_c$) of a Sequence structure (`SEQ`)?
A) 0  
B) 1  
C) 2  
D) 3  

#### Q39. What is the cognitive weight ($W_c$) of an If-then-[else] branch structure (`ITE`)?
A) 1  
B) 2  
C) 3  
D) 4  

#### Q40. What is the cognitive weight ($W_c$) of a `Case` branch structure (`CASE`)?
A) 1  
B) 2  
C) 3  
D) 4  

#### Q41. In the BCS cognitive weight table, which weight is assigned to all iteration structures (`For-do`, `Do-while`, `While-do`)?
A) 1  
B) 2  
C) 3  
D) 4  

#### Q42. What are the cognitive weights for a Function Call (`FC`) and Recursion (`REC`) respectively?
A) `FC` = 1, `REC` = 2  
B) `FC` = 2, `REC` = 3  
C) `FC` = 3, `REC` = 2  
D) `FC` = 2, `REC` = 4  

#### Q43. When control structures are executed sequentially without nesting ($m = 1$), how is the total cognitive weight ($W_c$) calculated?
A) By multiplying all weights together  
B) By taking the maximum weight among them  
C) By summing the weights of all individual BCSs: $W_c = \sum \sum W_c(j, i)$  
D) By dividing the sum by the number of statements  

#### Q44. When a control structure is nested inside another control structure ($m > 1$), how does nesting affect the total cognitive weight?
A) Nesting weights are subtracted  
B) Weights of nested layers multiply across the layers  
C) Only the innermost layer's weight is counted  
D) Nesting is ignored in cognitive functional size  

#### Q45. A method consists of a `for` loop ($W = 3$) enclosing an `if-else` statement ($W = 2$). What is the cognitive weight of this nested block?
A) $3 + 2 = 5$  
B) $3 \times 2 = 6$  
C) $3^2 = 9$  
D) $2^3 = 8$  

#### Q46. What is the formula for the Cognitive Functional Size ($S_f$) of a basic software component (single method)?
A) $S_f = N_i \times N_o \times W_c$  
B) $S_f = (N_i + N_o) \times W_c$  
C) $S_f = (N_i + N_o) + W_c$  
D) $S_f = \frac{N_i + N_o}{W_c}$  

#### Q47. What is the standard measurement unit for Cognitive Functional Size ($S_f$)?
A) FP (Function Points)  
B) LOC (Lines of Code)  
C) CWU (Cognitive Weight Units)  
D) CC (Cyclomatic Complexity)  

#### Q48. How is the cognitive functional size of a complex component with $n$ methods ($S_f(c)$) calculated?
A) By multiplying the $S_f$ of all methods  
B) By summing the $S_f$ of all $n$ methods: $S_f(c) = \sum_{c=1}^{n} S_f(c)$  
C) By taking the average $S_f$ of all methods  
D) It is equal to the $S_f$ of the longest method  

#### Q49. In determining $N_o$ for a basic method, if an `if-else` statement has a print statement in the `if` branch and another in the `else` branch, what is $N_o$?
A) 2, because two print statements are written in code  
B) 1, because only one output statement is executed at any given time  
C) 0, because console printing is not considered an output  
D) 4, because of true and false outcomes  

#### Q50. How is the Cognitive Functional Size of a component-based software system ($\hat{S}_f$) with $p$ components calculated?
A) $\hat{S}_f = \prod_{k=1}^{p} S_f(k)$  
B) $\hat{S}_f = \sum_{k=1}^{p} S_f(k)$  
C) $\hat{S}_f = \max(S_f(1), \dots, S_f(p))$  
D) $\hat{S}_f = \frac{1}{p} \sum_{k=1}^{p} S_f(k)$  

---

## SECTION 4: Code Snippet Analysis & Integrated Calculations

#### Q51. Consider the following code snippet:
```java
public void check(int n) {
    if (n > 0)
        System.out.println("Positive");
    else
        System.out.println("Non-positive");
}
```
What is the Cyclomatic Complexity $V(G)$ of this method?
A) 1  
B) 2  
C) 3  
D) 4  

#### Q52. For the statement `i++;`, what is the token count ($S$)?
A) 1 (`i++` is 1 token)  
B) 2 (`i`, `++`)  
C) 3 (`i`, `+`, `+`)  
D) 0 (increments are ignored)  

#### Q53. In the statement `double[] scores = { 85.5, 90.0 };`, what is the token count ($S$)?
A) 4  
B) 5  
C) 6 (`double`, `scores[]`, `=`, `85.5`, `,`, `90.0`)  
D) 8  

#### Q54. What is the token count ($S$) for the method declaration line `public int calculateSum(int a, int b) {`?
A) 2 (`int`, `calculateSum()`)  
B) 4 (`public`, `int`, `calculateSum()`, `int a, int b`)  
C) 6  
D) 7  

#### Q55. In the following code:
```java
for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 5; j++) {
        System.out.println(i * j);
    }
}
```
In the **WCC metric (Lecture 4)**, what is the nesting level weight ($W_n$) of `System.out.println(i * j);`?
A) 0  
B) 1  
C) 2  
D) 3  

#### Q56. For the exact same nested loop code in Question 55, what is the Total Cognitive Weight ($W_c$) under **Lecture 5 (CFS metric)**?
*(Hint: 1 sequence block + outer loop $W=3$ enclosing inner loop $W=3$)*
A) $3 + 3 = 6$  
B) $1 + (3 \times 3) = 10$  
C) $1 + 3 + 3 = 7$  
D) $3 \times 3 \times 2 = 18$  

#### Q57. In the following method:
```java
public void test(int x) {
    if (x > 10) {
        if (x < 20) {
            System.out.println("Between 10 and 20");
        }
    }
}
```
In the **WCC metric**, what is the nesting level weight ($W_n$) of `System.out.println("Between 10 and 20");`?
A) 0  
B) 1  
C) 2  
D) 3  

#### Q58. In the method below:
```java
public void readData() {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    System.out.println(a + b);
}
```
Under **Lecture 5 (CFS metric)**, what are the values of $N_i$ and $N_o$?
A) $N_i = 1, N_o = 2$  
B) $N_i = 2, N_o = 1$  
C) $N_i = 3, N_o = 1$  
D) $N_i = 2, N_o = 2$  

#### Q59. If a method has $N_i = 2$, $N_o = 1$, and its control structure is purely sequential ($W_c = 1$), what is its Cognitive Functional Size ($S_f$)?
A) 2 CWU  
B) 3 CWU  
C) 6 CWU  
D) 1 CWU  

#### Q60. Consider `Processor extends BaseClass`. If `BaseClass` has $W_i = 1$, what is the $W_i$ value assigned to statements inside `Processor`?
A) 0  
B) 1  
C) 2  
D) 3  

---

# 🗝️ Complete Answer Key & Explanations

| Q | Answer | Topic | Brief Explanation |
|:---:|:---:|:---|:---|
| **01** | **B** | Cyclomatic Complexity | Measures linearly independent paths through the code. |
| **02** | **C** | Control Flow Graph | Predicate nodes are decision points with out-degree $\ge 2$. |
| **03** | **C** | $V(G) = e - n + 2$ | $V(G) = 11 - 9 + 2 = 4$. |
| **04** | **B** | $V(G) = d + 1$ | Fundamental formula based on decision count $d$. |
| **05** | **B** | Graph Node Count | Total nodes $n = d + p + 1$ (start node is the $+1$). |
| **06** | **B** | Graph Edge Count | Decisions emit 2 edges, procedures emit 1 edge $\rightarrow e = 2d + p$. |
| **07** | **C** | Class $V_g$ | $V_g = \sum(d_i + 1) = (2+1) + (0+1) + (3+1) = 3 + 1 + 4 = 8$. |
| **08** | **B** | Class $V_g$ formula | $V_g = \sum_{i=1}^n (d_i + 1) = n + \sum d_i$. |
| **09** | **B** | Bytecode CC | Compilers expand compound conditions (`&&`, `||`) into multiple bytecode branches. |
| **10** | **B** | CFG Notation | Start and Stop nodes are drawn as open circles with labels. |
| **11** | **B** | Decision $V(G)$ | 1 `while` loop decision $\rightarrow d = 1 \rightarrow V(G) = 1 + 1 = 2$. |
| **12** | **B** | McCabe scale | 11–20 is moderate complexity and moderate risk. |
| **13** | **D** | McCabe scale | $> 50$ is untestable, very high risk. |
| **14** | **B** | CFG Edges | Edges represent control flow direction and must have arrows. |
| **15** | **B** | Procedure nodes | Procedure nodes represent non-decisional executable statements. |
| **16** | **B** | Guideline Rule 1 | Token counting begins after the class declaration line. |
| **17** | **B** | Guideline Rule 2 | Access flags (`public`, `private`, `static`) are NOT tokens. |
| **18** | **B** | Guideline Rule 3 | Characters enclosed in quotes form a single string token. |
| **19** | **C** | Guideline Rule 4 | Array name + square brackets form 1 token (e.g. `data[]`). |
| **20** | **C** | Guideline Rule 6 | Brackets `{` and `}` are not identified as tokens. |
| **21** | **B** | Guideline Rule 7 | In declaration, variable names are ignored; tokens are `int`, `,`, `,` ($S=3$). |
| **22** | **C** | Guideline Rule 7 | In definition, variable name is counted: `int`, `count`, `=`, `5` ($S=4$). |
| **23** | **A** | Guideline Rule 8 | Arguments inside user-defined method `()` are not tokens $\rightarrow$ only `calculate()` ($S=1$). |
| **24** | **B** | Guideline Rule 8 | Argument exclusion only applies to user-defined methods; library args count. |
| **25** | **C** | Guideline Rule 9 | `else` and `do` alone are not tokens. |
| **26** | **B** | Guideline Rule 9 | `else-if()` is specifically identified as one token. |
| **27** | **B** | Guideline Rule 10 | `case 1:` and `default:` are separate tokens. |
| **28** | **B** | Guideline Rule 11 | `try` is not a token; `catch()` is identified as one token. |
| **29** | **C** | Guideline Rule 12 | `.` is a token; tokens are `student`, `.`, `getName()` ($S=3$). |
| **30** | **A** | Guideline Rule 13 & 16 | Statement terminator `;` and `return` keyword are NOT tokens. |
| **31** | **C** | $W_c$ table (WCC) | Iterative structures have weight $W_c = 2$. |
| **32** | **C** | $W_c$ table (WCC) | Switch with $n$ cases has weight $W_c = n$ ($W_c = 5$). |
| **33** | **A** | $W_n$ table (WCC) | Sequential statements outside control structures have $W_n = 0$. |
| **34** | **B** | Guideline Rule 17 | Base class starts at $W_i = 1$; first derived class has $W_i = 2$. |
| **35** | **B** | WCC Formulas | $W_t = W_c + W_n + W_i$ and $WC = S \times W_t$. |
| **36** | **B** | CFS Characteristics | CFS is a paradigm-independent cognitive complexity metric. |
| **37** | **B** | CFS 3 Factors | Cognitive weights ($W_c$), Inputs ($N_i$), and Outputs ($N_o$). |
| **38** | **B** | BCS Weights | Sequence (`SEQ`) has weight 1. |
| **39** | **B** | BCS Weights | If-then-[else] (`ITE`) has weight 2. |
| **40** | **C** | BCS Weights | Case structure (`CASE`) has weight 3. |
| **41** | **C** | BCS Weights | All loops (`For-do`, `Do-while`, `While-do`) have weight 3. |
| **42** | **B** | BCS Weights | Function Call = 2, Recursion = 3. |
| **43** | **C** | Linear $W_c$ | Linear structures simply sum their weights: $W_c = \sum W_c$. |
| **44** | **B** | Nested $W_c$ | Nested layers multiply their weights. |
| **45** | **B** | Nested $W_c$ | For loop (3) enclosing If (2) $\rightarrow 3 \times 2 = 6$. |
| **46** | **B** | $S_f$ Formula | $S_f = (N_i + N_o) \times W_c$. |
| **47** | **C** | CFS Units | Cognitive Weight Units (`CWU`). |
| **48** | **B** | Complex Component | $S_f(c) = \sum S_f(c)$ (sum of method sizes). |
| **49** | **B** | Output count $N_o$ | Only one branch executes at a time $\rightarrow N_o = 1$. |
| **50** | **B** | System Size $\hat{S}_f$ | $\hat{S}_f = \sum S_f(k)$ (sum over all components). |
| **51** | **B** | Decision $V(G)$ | 1 if-else branch $\rightarrow d = 1 \rightarrow V(G) = 1 + 1 = 2$. |
| **52** | **B** | Increment Token | `i` (identifier) + `++` (operator) = 2 tokens. |
| **53** | **C** | Array Definition | `double`, `scores[]`, `=`, `85.5`, `,`, `90.0` $\rightarrow S = 6$. |
| **54** | **A** | Method Signature | `int` + `calculateSum()` = 2 tokens (parameters inside user `()` excluded). |
| **55** | **C** | Nesting level $W_n$ | Inside outer for (level 1) and inner for (level 2) $\rightarrow W_n = 2$. |
| **56** | **B** | Nested CFS $W_c$ | Sequence (1) + Outer loop (3) $\times$ Inner loop (3) $= 1 + 9 = 10$. |
| **57** | **C** | Nesting level $W_n$ | Inside outer if (level 1) and inner if (level 2) $\rightarrow W_n = 2$. |
| **58** | **B** | Inputs/Outputs | Two `sc.nextInt()` inputs ($N_i=2$) and one print output ($N_o=1$). |
| **59** | **B** | $S_f$ Calculation | $S_f = (2 + 1) \times 1 = 3\text{ CWU}$. |
| **60** | **C** | Inheritance $W_i$ | Base class is 1 $\rightarrow$ first subclass (1st derived) has $W_i = 2$. |

---

*End of Exam Paper*
