<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583089.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IC0v3aPG9lB9uBfwJrF33d5NCzI%3D&Expires=1774267383' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 08

Recursion

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583145.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cXs2GiST0kH4XenkJjFV6H2QjDw%3D&Expires=1774267383' alt='OCR图片'/></div>

## Recursion -Example 1

Factorial

$$
n! = n ^ {*} (n - 1) ^ {*} (n - 2) ^ {*} \dots^ {*} 2 ^ {*} 1, \mathrm {a n d t h a t} 0! = 1.
$$

A recursive definition is

$$
\begin{array}{l} (n)! = \{n ^ {*} (n - 1)! \quad \mathrm {i f} n > 0 \} \\ \{1 \quad \mathrm {i f} n = 0 \} \\ \end{array}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583154.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Fgxa%2Bxw2l1Es6isWvz%2BaL2n%2Bk6E%3D&Expires=1774267383' alt='OCR图片'/></div>

## Factorial-A graphical view

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_2_1773662583160.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oW4syUZqK8uOJRXRat9zjTaDV4U%3D&Expires=1774267383' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583173.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pGUyX1NOfC5r6ChkoyCGI3bEDx0%3D&Expires=1774267383' alt='OCR图片'/></div>

## Exercise

- Draw the recursive tree for 5!

- How does it calculate 5!? Is it:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_2_1773662583182.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NgwnGEkIv9UFhmPXT%2BvoKrhIquY%3D&Expires=1774267383' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583194.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VLhZV%2Bfg%2Bz0On4T3XqcrIpgq6%2BQ%3D&Expires=1774267383' alt='OCR图片'/></div>

## Factorial(contd.)

$(n)! = \{n * (n - 1)! \text{ if } n > 0\}$

$\{1 \text{ if } n = 0\}$

```c

int factorial(int n) {

    if (n == 0)

        return 1;

    else

        return (n * factorial(n-1));

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583202.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=l8ZxURqc8cdmVQuxn6NUXmDYvZE%3D&Expires=1774267383' alt='OCR图片'/></div>

## Recursion

## What is recursion?

A function that calls itself directly or indirectly to solve a smaller version of its task until a final call which does not require a self-call is a recursive function.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583211.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yKMz482%2ByXS3PPNjF5PVo7xSmt8%3D&Expires=1774267383' alt='OCR图片'/></div>

## Recurrence equation

- Mathematical function that defines the running time of recursive functions.

- This describes the overall running time on a problem of size n in terms of the running time on smaller inputs.

Ex:

$$
T (N) = T (N - 1) + b
$$

$$
T (N) = T (N / 2) + c
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583225.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FTwDn4LXPBp892UMYuxYM5rpgv4%3D&Expires=1774267383' alt='OCR图片'/></div>

## Recurrence - Example1

## Find the Running time of the following function

```c

int factorial(int n) {

    if (n == 0)        //A

        return 1;      //B

    else

        return (n * factorial(n -1));    //C

}

```

Statement A takes time a $ \rightarrow $ for the conditional evaluation

Statement B takes time b $ \rightarrow $ for the return assignment

Statement C takes time:

c $ \rightarrow $ for the operations(multiplication & return)

T(n-1) $ \rightarrow $ to determine (n-1)!

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583233.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=S2kGs6WYyX1%2BdDOluOnvcTQLLi0%3D&Expires=1774267383' alt='OCR图片'/></div>

## Recurrence - Example1 (Contd.)

T(n) = Time to execute A & C

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_2_1773662583249.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=il84SNZrKI3zsGXWpeEAoy%2BSwF0%3D&Expires=1774267383' alt='OCR图片'/></div>

- This method is called iteration method (or repeated substitution)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583259.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Lg01dWbsedhwPw6ucbtOpF0c%2BHk%3D&Expires=1774267383' alt='OCR图片'/></div>

## Exercise

- Solve the recurrence

$$
T (n) = T (n / 2) + 2
$$

You are given that

n=16 and

$$
T (1) = 1
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583266.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yxdtDkgZDaiHojvX0To0K0EG5fk%3D&Expires=1774267383' alt='OCR图片'/></div>

## Finding a solution to a recurrence.

## Other methods

- Recursion tree.

- Master Theorem.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583293.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bJg5rk3a17RdSmyhw4y%2FjWS8i90%3D&Expires=1774267383' alt='OCR图片'/></div>

## The recursion-tree method

- Although the substitution method can provide a succinct proof that a solution to a recurrence is correct, it is sometimes difficult to come up with a good guess. Drawing out a recursion tree,is a straightforward way to devise a good guess. In a recursion tree, each node represents the cost of a single subproblem somewhere in the set of recursive function invocations.

- A recursion tree is best used to generate a good guess, which is then verified by the substitution method.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583299.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7l9GNvNnOHmJJR15YbSFgZNN3W8%3D&Expires=1774267383' alt='OCR图片'/></div>

## Recursion tree for $ T (n)=3 T (n/4)+c n^{2} $

<div align="center">

T(n)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_2_1773662583313.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wREN4D%2BwBOa49OpRvEtM%2FchHBOs%3D&Expires=1774267383' alt='OCR图片'/></div>

<div align="center">

(a)

</div>

<div align="center">

(b)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_3_1773662583356.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YQ28yyzs93JP7Dx5rzPGZoF3ykE%3D&Expires=1774267383' alt='OCR图片'/></div>

<div align="center">

(c)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583368.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Hy3YRV4REhq16zlbk7f9A0qklmM%3D&Expires=1774267383' alt='OCR图片'/></div>

## Recursion tree for $ T ( n )=3 T ( n / 4 )+c n^{2} $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_2_1773662583380.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YxIBG4vnmEsB1Zwimp%2B3BfwW3A0%3D&Expires=1774267383' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583387.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FclOzC01GxSxXe0G4i4JP7cuzxA%3D&Expires=1774267383' alt='OCR图片'/></div>

## The Master Method

- The Master method applies to recurrences of the form

$$
T (n) = a T (n / b) + f (n)
$$

where a $ \geq1 $ and b>1, and f(n) is an asymptotically positive function.

The recurrence describes the running time of an algorithm that divides a problem of size n into a subproblems, each of size n/b, where a and b are positive constants. The a subproblems are solved recursively, each in time T (n/b). The cost of dividing the problem and combining the results of the subproblems is described by the function f (n).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583393.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MVatmjN8lF0IwH%2BiEKcTfUjjMdw%3D&Expires=1774267383' alt='OCR图片'/></div>

## The master theorem

- The master method depends on the following theorem.

- Let a $ \geq1 $ and b>1 be constants,let f(n) be a function,and let T(n) be defined on the nonnegative integers by the recurrence

$$
T (n) = a T (n / b) + f (n),
$$

where we interpret n/b to mean either $ \lfloor n/b\rfloor $ or $ \lceil n/b \rceil $ . Then T(n) can be bounded asymptotically as follows.

## The master theorem

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583403.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Z%2B8p7WetoR4CV9HoyAfspNtvlFo%3D&Expires=1774267383' alt='OCR图片'/></div>

Compare $ n^{\log_b a} $ vs. $ f(n): $

Case 1: $ f(n)=O\left(n^{\log_b a-\epsilon}\right) $ for some constant $ \epsilon>0. $

( $ f(n) $ is polynomially smaller than $ n^{\log_b a}. $ )

Solution: $ T(n)=\Theta\left(n^{\log_b a}\right). $

Case 2: $ f(n)=\Theta\left(n^{\log_b a}\lg^k n\right), $ where $ k\geq0. $

( $ f(n) $ is within a polylog factor of $ n^{\log_b a}, $ but not smaller.)

Solution: $ T(n)=\Theta\left(n^{\log_b a}\lg^{k+1} n\right). $

(Intuitively: cost is $ n^{\log_b a}\lg^k n $ at each level, and there are $ \Theta(\lg n) $ levels.)

Simple case: $ k=0 \Rightarrow f(n)=\Theta\left(n^{\log_b a}\right)\Rightarrow T(n)=\Theta\left(n^{\log_b a}\lg n\right). $

Case 3: $ f(n)=\Omega\left(n^{\log_b a+\epsilon}\right) $ for some constant $ \epsilon>0 $ and $ f(n) $ satisfies the regularity condition $ af(n/b)\leq cf(n) $ for some constant $ c<1 $ and all sufficiently large $ n. $

( $ f(n) $ is polynomially greater than $ n^{\log_b a}. $ )

Solution: $ T(n)=\Theta(f(n)). $

(Intuitively: cost is dominated by root.)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583410.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oeub%2BmggITFytYZy5X0DZ9yCIhw%3D&Expires=1774267383' alt='OCR图片'/></div>

## The master theorem

$$
T (n) = \left\{ \begin{array}{l l} \Theta \left(n ^ {\log_ {b} a}\right) & f (n) = O \left(n ^ {\log_ {b} a - \varepsilon}\right) \rightarrow f (n) < n ^ {\log_ {b} a} \\ \Theta \left(n ^ {\log_ {b} a} \lg n\right) & f (n) = \Theta \left(n ^ {\log_ {b} a}\right) \rightarrow f (n) = n ^ {\log_ {b} a} \\ \Theta \left(f (n)\right) & f (n) = \Omega \left(n ^ {\log_ {b} a + \varepsilon}\right) \rightarrow f (n) > n ^ {\log_ {b} a} \\ \mathrm {i f} a f (n / b) \leq c f (n) \mathrm {f o r} c < 1 \mathrm {a n d l a r g e} \end{array} \right.
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583420.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=793thiAOOvYGKFDNmj5E9kz7Iso%3D&Expires=1774267383' alt='OCR图片'/></div>

## Master Theorem-Case 1 example

Give tight asymptotic bound for

$$
\mathrm {T} (\mathrm {n}) = 9 \mathrm {T} (\mathrm {n} / 3) + \mathrm {n}
$$

Solution:

a=9, b=3, and f(n) = n.

$$
n ^ {\log_ {b} a} = n ^ {\log_ {3} 9} = n ^ {2}
$$

f (n) = O $ ( n^{ \log_{3} 9-\varepsilon} ) $ for $ \varepsilon=1 $ or f (n) < $ n^{ \log_{3} 9} $ → case1

$$
\therefore \mathrm {T} (\mathrm {n}) = \Theta \left(\mathrm {n} ^ {2}\right)
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583432.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YSR7YZbR1COODvZfcmD02XGw0eg%3D&Expires=1774267383' alt='OCR图片'/></div>

## Master Theorem-Case 2 example

Give tight asymptotic bound for

$$
\mathrm {T} (\mathrm {n}) = \mathrm {T} (2 \mathrm {n} / 3) + 1
$$

Solution:

a=1, b=3/2, and f(n) =1.

$$
n ^ {\log_ {b} a} = n ^ {\log_ {3 / 2} 1} = n ^ {0} = 1
$$

f (n) = $ \Theta \left( n^{{\log}_{b} a} \right) $ or f (n) = $ n^{{\log}_{b} a} \rightarrow $ case 2

$$
\therefore \mathrm {T} (\mathrm {n}) = \Theta (\log n)
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583441.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tOE%2Bp4pjDARl0peBGFgaRQuXl%2BM%3D&Expires=1774267383' alt='OCR图片'/></div>

## Master Theorem-Case 3 example

- Give tight asymptotic bound for

- $ T ( n )=3 T ( n / 4 )+n \log n $

- Solution:

- a=3,b=4,and f(n)=n log n

$$
n ^ {\log_ {b} a} = n ^ {\log_ {4} 3} = O \left(n ^ {0. 7 9 3}\right)
$$

f (n) = $ \Omega \left(n^{{\log}_{4}3+\varepsilon}\right), $ for $ \varepsilon\approx 0. 2 $ or f (n) > $ n^{{\log}_{4}3} $ $ \rightarrow $ case 3

Note: n $ \lg n \geq $ c. $ n^{ \log_{4} 3} $ . $ n^{0.2} $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200226cd62edc2aef742ac%2Fcrop_1_1773662583451.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cD%2BaaeXzAmITCr%2Fp4VD4yOUPdpk%3D&Expires=1774267383' alt='OCR图片'/></div>

## Exercises.

- Use the master method to give tight asymptotic bounds for the following recurrences.

1. $ T ( n )=4 T ( n / 2 )+n. $

2. $ T ( n )=4 T ( n / 2 )+n^{2}. $

3. $ T ( n )=4 T ( n / 2 )+n^{3}. $

- Use the master method to show that the solution to the binary-search recurrence $ T ( n )=T ( n / 2 )+\Theta(1) $ is $ T ( n )=\Theta(\lg n). $