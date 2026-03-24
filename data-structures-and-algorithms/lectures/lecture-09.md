<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654673.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Co5rjTvBClsUGMK5WK3YKjx7%2Bow%3D&Expires=1774267454' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 09

Divide and Conquer -1

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654729.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=G7isNthSyLzXvZyvhOKFOT6j0gI%3D&Expires=1774267454' alt='OCR图片'/></div>

## Today's Lecture

- Divide and Conquer

- Applications

- Quick Sort

- Merge Sort

- Analysis

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654736.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Cgfg7ldxURiXrYNp69E4HDEokYQ%3D&Expires=1774267454' alt='OCR图片'/></div>

## Divide and Conquer

Divide: Break the problem into sub problem recursively.

Conquer: Solve each sub problems.

Combine: All the solutions of sub problems are combined to get the solution of the original problem.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654744.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iKtcyOnMSWFo3xupoFA7I7xhnpY%3D&Expires=1774267454' alt='OCR图片'/></div>

## Applications

- Quick Sort

- More work on divide phase.

- Less work for others.

- Merge Sort

- Vice versa of Quick sort.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654758.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SH5IHdUo%2FWY6KRhaMK82mWkR1Mo%3D&Expires=1774267454' alt='OCR图片'/></div>

## Quick Sort (contd.)

## Divide:

Partition (rearrange) the array A[p..r] into two (possibly empty) sub arrays A[p..q-1] and A[q+1..r]

- Each element of A[p..q-1] is less than or equal to A[q]

- Each element of A[q+1..r]is greater than or equal to A[q].

- Compute the index q as part of this partitioning procedure.

Conquer: Sort the two subarrays A[p..q-1] and A[q+1..r] by recursive calls to quicksort.

Combine: Since the sub arrays are sorted in place, no work is needed to combine them: the entire array A[p..r] is now sorted.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654764.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=q4BrmXCEDpNT0ss8xtLUq5DfRZw%3D&Expires=1774267454' alt='OCR图片'/></div>

## Quick Sort procedure

Input: Unsorted Array (A,p,r) Output: Sorted sub array A(1..r)

QUICKSORT (A,p,r)

1 if p < r

2 q = PARTITION(A,p,r)

3 QUICKSORT (A,p,q-1)

4 QUICKSORT (A,q+1,r)

To sort an entire array A, the initial call is QUICKSORT(A,1,A.length).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654770.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5x4Q2DBJjUoZXD%2BWuyo%2FB%2B0%2FEto%3D&Expires=1774267454' alt='OCR图片'/></div>

## Partition Algorithm

PARTITION(A, p, r)

1 $ x=A[r] $

2 $ i=p-1 $

3 **for** $ j=p $ **to** $ r-1 $

4 **if** $ A[j] \leq x $

5 $ i=i+1 $

6 exchange $ A[i] $ with $ A[j] $

7 exchange $ A[i+1] $ with $ A[r] $

8 **return** $ i+1 $

The key to the algorithm is the PARTITION procedure, which rearranges the sub array A [p..r] in place.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654780.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WDF6cKHF40uiT0igDEQ25blyw2I%3D&Expires=1774267454' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_2_1773662654812.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lsnYc%2BJoRN%2Bza0hpc8QuiLfiHQ4%3D&Expires=1774267454' alt='OCR图片'/></div>

Operation of PARTITION on an 8-element array.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654835.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WA0ssZI2M8qaubc7%2FLtiFe%2FXRTI%3D&Expires=1774267454' alt='OCR图片'/></div>

first partition with values <= pivot

second partition with values > pivot

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654843.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u7qMPau9uyAVO9b5MJDDPbROG90%3D&Expires=1774267454' alt='OCR图片'/></div>

## Example

## 8 6 1 2 5 3 9 4

QUICKSORT (A,p,r)

1 if p < r

2 q = PARTITION(A,p,r)

3 QUICKSORT (A,p,q-1)

4 QUICKSORT (A,q+1,r)

## PARTITION(A,p,r)

1 $ x=A[r] $

2 $ i=p-1 $

3 for j=p to r-1

4 if $ A[j]\leq x $

5 $ i=i+1 $

6 exchange $ A[i] $ with $ A[j] $

7 exchange $ A[i+1] $ with $ A[r] $

8 return i+1

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654859.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rUqLQnY6ikMMXzt5dBiNA2NXg60%3D&Expires=1774267454' alt='OCR图片'/></div>

## Analysis of Quick sort

The running time of quick sort depends on the partitioning of the sub arrays:

## (a) Worst case partitioning (Unbalanced partitioning)

- Worst case occurs when the sub arrays are completely unbalanced. i.e.0 elements in one sub array and n-1 elements in the other sub array

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_2_1773662654866.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8dx0m3VuH9SNtST9UeSoVHUlVeM%3D&Expires=1774267454' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654883.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lIQj0WGzW9L1O%2BpyJHWH47Fdau8%3D&Expires=1774267454' alt='OCR图片'/></div>

## Analysis of Quick sort

## Worst case partitioning (Repeated Substituted method)

- Partitioning $ \rightarrow \Theta (n) $

- Recursive call on an array of size 0 $ \rightarrow $ $ \mathrm{T}(0)=\Theta(1) $

- Recursive call on an array of size (n-1) $ \rightarrow $ T(n-1)

Therefore Recurrence Equation is

$$
\begin{array}{l} T (n) = T (n - 1) + T (0) + \Theta (n) \\ = T (n - 1) + \Theta (n) \\ = T (n - 2) + \Theta (n - 1) + \Theta (n) \\ \dots \dots \dots \dots \dots \\ = T (0) + \Theta (1) + \Theta (2) + \dots + \Theta (n - 1) + \Theta (n) \\ = \sum_ {k = 1} ^ {n} \left(\Theta (k)\right) = \Theta \sum_ {k = 1} ^ {n} k = \Theta \left(n ^ {2}\right) \\ \end{array}
$$

Worst case Running Time is $ \Theta(n^{2}) $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654888.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YT06pUvtuDi1alaK5kz2TijcwiQ%3D&Expires=1774267454' alt='OCR图片'/></div>

## Analysis of Quick sort

## (b) Best case partitioning

Best case occurs when PARTITION produces two sub arrays, one is of size (n-1)/2 and the other is of size (n-1)/2. In this case, quicksort runs much faster.

Recurrence equation is

$$
\mathrm {T} (\mathrm {n}) = 2 \mathrm {T} (\mathrm {n} / 2) + \Theta (\mathrm {n})
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_1_1773662654894.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tVdwHDLHajiWmZxCxW0JRt89fzw%3D&Expires=1774267454' alt='OCR图片'/></div>

## Analysis of Quick Sort (with recursion tree)

## Best Case:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200351366fd9b812a84b9e%2Fcrop_2_1773662654900.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1jzc3gTr50lUdC18ksQPkkrZ6dw%3D&Expires=1774267454' alt='OCR图片'/></div>

Best case Running Time is $ \Theta(n \lg n) $