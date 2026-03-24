<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195757a87e410556154597%2Fcrop_1_1773662292339.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4KOWcNXW6%2Fo3idmQbk3z9MR%2BtYc%3D&Expires=1774267092' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

Data Structures and Algorithms - IT1170 Tutorial 9 - Heaps

2024

## Question1

a) What is a binary tree?

b) Show that the relationship between height (h) of a Full Binary Tree and the number of nodes (n) is given by $ n=2^{h+1}-1. $

## Question 2

a) The following are the algorithms for Heap sort, Max Build Heap and Max_Heapify.

HEAPSORT(A)

1. BUILD_HEAP[A]

2. for $i = A.length$ down to 2

3. Exchange A[1] with A[i]

4. A.heap_size = A.heap_size-1;

5. MAX_HEAPIFY(A,1)

MAX_BUILD_HEAP (A)

1. A.heap_size = A.length

2. for $i = \lfloor A.length/2 \rfloor$ downto 1

3. MAX_HEAPIFY(A, i)

MAX_HEAPIFY ($A,i$)

1. $l = LEFT_CHILD(i)$;

2. $r = RIGHT_CHILD(i)$;

3. if $l \leq A.heap_size$ and $A[l] > A[i]$

4. then largest = $l$;

5. else largest = $i$;

6. if $r \leq A.heap_size$ and $A[r] > A[largest]$

7. then largest = $r$;

8. if $largest \neq i$

9. then exchange A[i] with A[largest]

10. MAX_HEAPIFY (A, largest)

Illustrate the operations of the Heap sort for the array A of elements given below. (For the purpose of illustration, assign the values only once to the given algorithm and use diagrammatic way to reach the answer.)

<table border="1"><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td></td><td>4</td><td>20</td><td>30</td><td>1</td><td>50</td><td>60</td><td>0</td><td>80</td></tr></table>

b) We can compute the upper bound on the running time of BUILD-HEAP as follows.

$ T ( n )=\sum_{h=0}^{\lfloor\lg n\rfloor}\left[\frac{n}{2^{h+1}}\right] O ( h ) $ Briefly explain two components of the above equation.