<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662230999.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Qk%2FY39zwwBq18SjRgMkhOv3JZDs%3D&Expires=1774267031' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 02 Insertion Sort and Big O Notation

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231005.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=z4J67tzKUetkPmwpeJpjwZd%2F9sc%3D&Expires=1774267031' alt='OCR图片'/></div>

## Recap

- What is an algorithm?

- Properties of an algorithm.

- Design methods.

- Pseudocode.

- Analysis(Operation count & Step count, RAM model).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231012.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iU%2BTQYc%2FSyootnsc5Hw5PBKQ%2BAc%3D&Expires=1774267031' alt='OCR图片'/></div>

## Insertion sort

<div align="center">

Key>2

</div>

<div align="center">

(a)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_2_1773662231017.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zXVVfFls6SbtlCD3P1UG5C3z3SU%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(d)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_3_1773662231022.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5T6f%2BLmQk0mGG4zaRv224gqXNh8%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(b)

</div>

<div align="center">

Key>4

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_4_1773662231029.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9N6A90QLUk3BRBmeGaJKfgqM%2B%2F0%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(e)

</div>

<div align="center">

(c)

</div>

<div align="center">

Key > 6

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_5_1773662231036.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=q0iD4e%2BLF9s4WgdltwBh3FPBfMU%3D&Expires=1774267031' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_6_1773662231045.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Fnesj6t5LSwrLe7C6MO7mL%2FVaRw%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(f)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_7_1773662231074.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EGakzCW8U6akPtbcxLcV9rO587c%3D&Expires=1774267031' alt='OCR图片'/></div>

Sorted Array

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231089.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YqPJj0qSlCOlP0tZYz8kcWJ0TME%3D&Expires=1774267031' alt='OCR图片'/></div>

## Pseudocode for insertion sort.

## INSERTION-SORT(A)

1 for j = 2 to A.length

2 key = A[j]

3 // Insert A[j] into the sorted sequence A[1..j-1]

4 i = j - 1

5 While i > 0 and A[i] > key

6 $ A[i+1] = A[i] $

7 i = i-1

8 $ A[i+1] = key $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231095.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=flOCr5muiOQFK8QqZdnd8DvNFps%3D&Expires=1774267031' alt='OCR图片'/></div>

## Insertion sort - Example

<div align="center">

(a)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_2_1773662231101.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BuDmXNXYp%2BcUUhZggrJdA3GtA%2Fw%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(b)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_3_1773662231109.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=l1o%2FyZPR5SM1WbJd3GQHe3vCxR4%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(c)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_4_1773662231116.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TyzvVXHqet%2BUX7N9cMc4LGKGIlQ%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(d)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_5_1773662231121.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cdnuLQ8J9G4qPFTT9IVxwLPGgcs%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(e)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_6_1773662231126.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=icdn8mVVjn9U11wnCUezfrYJMLA%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

(f)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_7_1773662231132.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YyQhSSFMGNweb7reu2l6FtxxoSQ%3D&Expires=1774267031' alt='OCR图片'/></div>

sorted array

(a)-(e) The iterations of the for loop $ \rightarrow $ lines 1-8.

In each iteration, the black rectangle holds the key taken from $ A[j] $

Key is compared with the values in shaded rectangles to its left $ \rightarrow $ line 5.

Shaded arrows show array values moved one position to the right line 6,

Black arrows indicate where the key is moved to line 8.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231137.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=b1I4E8M%2BmKsUymeCXYT6mSrvXFo%3D&Expires=1774267031' alt='OCR图片'/></div>

## Exact analysis of Insertion sort

- Time taken for the algorithm will depend on the input size (number of elements of the array)

## Running Time (Time complexity):

This is the number of primitive operations or steps executed through an algorithm given a particular input.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231143.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=L%2BVAhZvHoTLb1TOHYGFSHuIwk1o%3D&Expires=1774267031' alt='OCR图片'/></div>

## Running Time: T(n)

<table border="1"><tr><td></td><td>INSERTION-SORT(A)</td><td>Cost</td><td>Times</td></tr><tr><td>1</td><td>for j=2 to A.length</td><td>$c_{1}$</td><td>n</td></tr><tr><td>2</td><td>key=A[j]</td><td>$c_{2}$</td><td>n-1</td></tr><tr><td>3</td><td>// Insert A[j] into the sorted // sequence A[1..j-1]</td><td>0</td><td>n-1</td></tr><tr><td>4</td><td>i=j-1</td><td>$c_{4}$</td><td>n-1</td></tr><tr><td>5</td><td>While i&gt;0 and A[i]＞key</td><td>$c_{5}$</td><td>$\sum_{j=2}^{n} t_{j}$</td></tr><tr><td>6</td><td>A[i+1]=A[i]</td><td>$c_{6}$</td><td>$\sum_{j=2}^{n}(t_{j}-1)$</td></tr><tr><td>7</td><td>i=i-1</td><td>$c_{7}$</td><td>$\sum_{j=2}^{n}(t_{j}-1)$</td></tr><tr><td>8</td><td>A[i+1]=key</td><td>$c_{8}$</td><td>n-1</td></tr></table>

$ i^{th} $ line takes time $ c_{i} $ where $ c_{i} $ is a constant.

For each j=2,3,...,n , $ t_{j} $ be the number of times the while loop is executed for that value of j

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231149.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FXgmrkT3at8ERCbVdcJ87Gbwtns%3D&Expires=1774267031' alt='OCR图片'/></div>

## Running Time(contd.)

$$
\begin{array}{l} T (n) = c _ {1} n + c _ {2} (n - 1) + c _ {4} (n - 1) + c _ {5} \sum_ {j = 2} ^ {n} t _ {j} \\ + c _ {6} \sum_ {j = 2} ^ {n} \left(t _ {j} - 1\right) + c _ {7} \sum_ {j = 2} ^ {n} \left(t _ {j} - 1\right) _ {+} c _ {8} (n - 1) \\ \end{array}
$$

- Best Case (Array is in sorted order)

T(n) $ \rightarrow $ an+b

- Worst Case (Array is in reverse sorted order)

$$
\mathrm {T} (\mathrm {n}) \rightarrow \mathrm {c n} ^ {2} + \mathrm {d n} + \mathrm {e}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231155.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=obq%2Bxw%2Bt8uWWrc8lSYvVjD4dmZQ%3D&Expires=1774267031' alt='OCR图片'/></div>

## Worst Case T(n) $ \rightarrow $ $ \mathrm{c n^{2}+d n+e} $

Worst case: The array is in reverse sorted order.

- Always find that $ A[i] > key $ in while loop test.

- Have to compare key with all elements to the left of the jth position $ \Rightarrow $ compare with j-1 elements.

- Since the while loop exits because i reaches 0, there's one additional test after the j-1 tests $ \Rightarrow t_{j}=j. $

$$
\cdot \sum_ {j = 2} ^ {n} t _ {j} = \sum_ {j = 2} ^ {n} j \mathrm {a n d} \sum_ {j = 2} ^ {n} \left(t _ {j} - 1\right) = \sum_ {j = 2} ^ {n} (j - 1).
$$

- $ \sum_{j=1}^{n} j $ is known as an arithmetic series, and equation (A.1) shows that it equals $ \frac{n(n+1)}{2}. $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231160.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9AockfYKIQUM6kSZI70wFrwV39U%3D&Expires=1774267031' alt='OCR图片'/></div>

## Worst Case T(n) $ \rightarrow $ $ \mathrm{c n^{2}+d n+e} $

- Since $ \sum_{j=2}^{n} j=\left(\sum_{j=1}^{n} j\right)-1 $ , it equals $ \frac{n(n+1)}{2}-1. $

[The parentheses around the summation are not strictly necessary. They are there for clarity, but it might be a good idea to remind the students that the meaning of the expression would be the same even without the parentheses.]

- Letting k = j-1, we see that $ \sum_{j=2}^{n} ( j-1)=\sum_{k=1}^{n-1} k=\frac{n(n-1)}{2}. $

- Running time is

$$
\begin{array}{l} T (n) = c _ {1} n + c _ {2} (n - 1) + c _ {4} (n - 1) + c _ {5} \left(\frac {n (n + 1)}{2} - 1\right) \\ + c _ {6} \left(\frac {n (n - 1)}{2}\right) + c _ {7} \left(\frac {n (n - 1)}{2}\right) + c _ {8} (n - 1) \\ = \left(\frac {c _ {5}}{2} + \frac {c _ {6}}{2} + \frac {c _ {7}}{2}\right) n ^ {2} + \left(c _ {1} + c _ {2} + c _ {4} + \frac {c _ {5}}{2} - \frac {c _ {6}}{2} - \frac {c _ {7}}{2} + c _ {8}\right) n \\ - \left(c _ {2} + c _ {4} + c _ {5} + c _ {8}\right). \\ \end{array}
$$

- Can express $ T ( n ) $ as $ a n^{2}+b n+c $ for constants a,b,c (that again depend on statement costs) $ \Rightarrow T ( n ) $ is a quadratic function of n.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231164.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FnsKE95fjlxoronwnt%2Bd6RJgwTg%3D&Expires=1774267031' alt='OCR图片'/></div>

## Asymptotic Notations

- RAM Model has some problems.

- Exact analysis is very complicated.

## Therefore we move to asymptotic notation

- Here we focus on determining the biggest term in the complexity function.

- Sufficiently large size of n.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231168.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=s53%2FqGYrlJ5paPTyF8xgsx5FrqI%3D&Expires=1774267031' alt='OCR图片'/></div>

## Asymptotic Notations(Contd.)

- There are three notations.

O - Notation

$\Theta$ - Notation

$ \Omega $ - Notation

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231174.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=obkQX8F0c6m4CkWGfCR2WD%2B4Mog%3D&Expires=1774267031' alt='OCR图片'/></div>

## Big O - Notation

- Introduced by Paul Bechman in 1892.

- We use Big O-notation to give an upper bound on a function.

## Definition:

$ \mathrm{O} (\mathrm{g} (\mathrm{n}))=\{f (\mathrm{n}): $ there exist positive constants c and $ n_{o} $ such that

$$
0 \leq f (n) \leq c g (n) \mathrm {f o r a l l} n \geq n _ {o} \}.
$$

Eg: What is the big O value of f(n)=2n+6?

$ c=4 $

$ n_{o}=3 $

g(n)=n therefore

f(n) = O(n)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_2_1773662231182.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xY6l2Kj1fnM6XzIVZQrahFeb3yM%3D&Expires=1774267031' alt='OCR图片'/></div>

g(n) is an asymptotic upper bound for f(n). If f(n) $ \in $ O(g(n)), we write f(n) = O(g(n))

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231188.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NlrrolAtgJ%2BI6nOMqGUf5vZYUng%3D&Expires=1774267031' alt='OCR图片'/></div>

## Back to the example

- Alternative calculation:

<table border="1"><tr><td></td><td>cost</td><td>times</td></tr><tr><td>sum=0</td><td>$c_{1}$</td><td>1</td></tr><tr><td>for i=1 to n</td><td>$c_{2}$</td><td>n+1</td></tr><tr><td>sum=sum+A[i]</td><td>$c_{3}$</td><td>n</td></tr></table>

$$
\begin{array}{l} T (n) = c _ {1} + c _ {2} (n + 1) + c _ {3} n \\ = \left(c _ {1} + c _ {2}\right) + \left(c _ {2} + c _ {3}\right) n \\ = c _ {4} + c _ {5} n \rightarrow O (n) \\ \end{array}
$$

Proof: $ c_{4}+c_{5} $ n $ \leq c $ n $ \rightarrow $ TRUE for n $ \geq 1 $ and $ c\geq c_{4}+c_{5} $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231195.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QesVwuJi4tY8jbySqFeBVK7npQw%3D&Expires=1774267031' alt='OCR图片'/></div>

## Big O-Notation(Contd.)

Assignment (s=1) Addition (s+1) Multiplication (s*2) Comparison (S<10)

O(1)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231202.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DNSna%2B6AXQLxrZ12r7MkITu4L5Y%3D&Expires=1774267031' alt='OCR图片'/></div>

## Question

- Find the Big O value for following fragment of code.

for i = 1 to n

for j = 1 to i

Print j

O(n²)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231211.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dmh%2F7guIKWtU7ddYfWwK%2BeVJdBQ%3D&Expires=1774267031' alt='OCR图片'/></div>

## Graphs of functions

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_2_1773662231221.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MIdR2QkA100rhCy8lFF6jcwq2%2F8%3D&Expires=1774267031' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_3_1773662231228.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2ZCT3GF4v7NSd901RsoDhFSeUC4%3D&Expires=1774267031' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231233.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9mR3448Keb22yGdxzlmqEjsU%2F1Q%3D&Expires=1774267031' alt='OCR图片'/></div>

<table border="1"><tr><td>n</td><td>logn</td><td>n</td><td>nlogn</td><td>n2</td><td>n3</td><td>2n</td></tr><tr><td>4</td><td>2</td><td>4</td><td>8</td><td>16</td><td>64</td><td>16</td></tr><tr><td>8</td><td>3</td><td>8</td><td>24</td><td>64</td><td>512</td><td>256</td></tr><tr><td>16</td><td>4</td><td>16</td><td>64</td><td>256</td><td>4096</td><td>65536</td></tr><tr><td>32</td><td>5</td><td>32</td><td>160</td><td>1024</td><td>32768</td><td>4294967296</td></tr><tr><td>64</td><td>6</td><td>64</td><td>384</td><td>4094</td><td>262144</td><td>1.84*1019</td></tr><tr><td>128</td><td>7</td><td>128</td><td>896</td><td>16384</td><td>2097152</td><td>3.40*1038</td></tr><tr><td>256</td><td>8</td><td>256</td><td>2048</td><td>65536</td><td>16777216</td><td>1.15*1077</td></tr><tr><td>512</td><td>9</td><td>512</td><td>4608</td><td>262144</td><td>134217728</td><td>1.34*10154</td></tr><tr><td>1024</td><td>10</td><td>1024</td><td>10240</td><td>1048576</td><td>1073741824</td><td>1.79*10308</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231238.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dFGnvYsKcpgCstWRwqTfmXgahw0%3D&Expires=1774267031' alt='OCR图片'/></div>

## Big O-Notation(Contd.)

- Find the Big O value for the following functions.

(i) $ T ( n )=3+5 n+3 n^{2} $

(ii) f(n) = 2^n + n^2 +8n+7

(iii) $ T ( n )=n+\log n+6 $

Answers:

(i) $ \mathrm{O}\left(n^{2}\right) $

(ii) $ O ( 2^{n} ) $

(iii) O(n)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231244.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PDDrfJ0QO9nLaS%2FXp2t3yLf8Kn4%3D&Expires=1774267031' alt='OCR图片'/></div>

## $ \Omega $ - Notation

- Provides the lower bound of the function.

## Definition:

$ \Omega ( \mathrm{g} ( \mathrm{n}))=\{f ( \mathrm{n}): $ there exist positive constants c and $ n_{0} $ such that $ 0\leq c g ( n ) $ $ \leq f ( n ) $ for all n $ \geq n_{o} $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_2_1773662231249.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XmSFGh3mYr8yyPFLZi19Q9oHgjE%3D&Expires=1774267031' alt='OCR图片'/></div>

<div align="center">

g(n) is an asymptotic lower bound for f(n).

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231254.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Bc7h2dJ%2FpQXMRdI11aMT6yj9WCs%3D&Expires=1774267031' alt='OCR图片'/></div>

## $\Theta$ - Notation

- This is used when the function f can be bounded both from above and below by the same function g.

## Definition:

$ \Theta ( \mathrm{g} ( \mathrm{n} ) )=\{f ( \mathrm{n} ) $ : there exist positive constant $ c_{1}, c_{2}, $ and $ n_{0} $ such that $ 0\leq c_{1} \ g ( \mathrm{n} ) \leq f ( \mathrm{n} ) \leq c_{2} \ g ( \mathrm{n} ) $ for all $ n\geq n_{0} $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_2_1773662231264.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eEB13WSjdNrDNDttZsQxM3XUAnI%3D&Expires=1774267031' alt='OCR图片'/></div>

g(n) is an asymptotically tight bound for f(n).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161956339ec9940c365e4657%2Fcrop_1_1773662231271.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PJ44uEP9iXckoUImaAIileFocy8%3D&Expires=1774267031' alt='OCR图片'/></div>

## References