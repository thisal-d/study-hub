<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161952120d2747558b624392%2Fcrop_1_1773661941178.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JseUDdhpGT8Qarr4QanEi5VbDmQ%3D&Expires=1774266741' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

<div align="center">

# Data Structures and Algorithms - IT1170 Tutorial 7 - Recursion

</div>

1. The power function can be defined as $ \mathrm{p o w}(x,n)=x^{n} $ . This can be evaluated using the multiplication as $ x^{n}=x\times x^{n-1} $ where x is any real number and n is a non-negative integer. [Hint: $ \mathrm{p o w}(x,n-1)=x^{n-1} $ ]

a) Write a recursive relation for pow(x, n) where x is any real number and n is a nonnegative integer. Clearly define the initial condition(s).

b) Write a recursive algorithm in pseudo code for the above recursive relation.

c) Write a recurrence equation that describe the running time T (n) for the above part b) recursive algorithm.

2. Consider a recurrence relation $ T ( n )=1 6 T \left( \begin{array}{c} n \\ 4 \end{array} \right)+1 0 n $ . Solve the recurrence relation using the following Master Theorem definition.

$$
T (n) = \left\{ \begin{array}{l l} \Theta \left(n ^ {\log_ {b} a}\right) & f (n) = O \left(n ^ {\log_ {b} a - \varepsilon}\right) \rightarrow f (n) < n ^ {\log_ {b} a} \\ \Theta \left(n ^ {\log_ {b} a} \lg n\right) & f (n) = \Theta \left(n ^ {\log_ {b} a}\right) \rightarrow f (n) = n ^ {\log_ {b} a} \\ \Theta (f (n)) & f (n) = \Omega \left(n ^ {\log_ {b} a + \varepsilon}\right) \rightarrow f (n) > n ^ {\log_ {b} a} \\ & \text {i f a f} (n / b) \leq c f (n) \text {f o r} c < 1 \text {a n d l a r g e} n \end{array} \right.
$$

3. Consider the function f(n), which is defined below. n is a nonnegative integer.

n/4 n is even

f(n) =

f(n+1) n is odd

a) Use the above equation to manually compute f(3).

b) Identify the base and recursive component of the function definition.

c) Write a recursive algorithm in pseudo code for the above recursive relation f(n).

4. The function sum(n) is defined as the sum of integers from 1 to n. $ \mathrm{s u m} ( n )=1+2+3+4\dots\dots+n $

a. Write a recursive relation for sum(n) where n is a non-negative integer. Clearly define the initial condition(s). [Hint: $ \sum(n-1)=1+2+3+4\dots\dots+(n-1) $]

b. Write a recursive and iterative algorithms in pseudo code for the above recursive relation.

c. Write a recurrence equation that describe the running time T (n) for the above part b) recursive algorithm.