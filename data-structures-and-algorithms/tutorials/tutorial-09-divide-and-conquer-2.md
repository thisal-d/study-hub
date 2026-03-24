<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603161957014550ceccf13a4b8a%2Fcrop_1_1773662237774.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dogncawwfvpChFaMejzDw%2Fr8wR4%3D&Expires=1774267037' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

Data Structures and Algorithms-IT1170 Worksheet 9- Divide and Conquer 2

2024

## 1. The pseudo codes for the merge sort are given below.

MERGESORT (A,l,r)

1. if l < r

2. then q = $ \lfloor(l+r)/2\rfloor $

3. MERGESORT (A,l,q)

4. MERGESORT (A,q+1, r)

5. MERGE (A,l,q,r)

MERGE (A,l,q,r)

1. i = l

2. j = q+1

3. k = 0

4. while (i ≤ q) and ( j ≤ r) do

5. k = k+1

6. if A[i] ≤ A[j] then

7. TEMP [k] = A [i]

8. i = i +1

9. else

10. TEMP [k] = A [j]

11. j = j +1

12. if j > r then

13. for t = 0 to q - i do

14. A [r-t] = A [q-t]

15. for t = 0 to k-1 do

16. A [l+t] = TEMP [t +1]

a) Illustrate operation of merge sort on the array A = (6,4,8,1,7,2,5,3).

b) What is the purpose of the Temp array in the merge sort algorithm?

c) Why do it execute line no 13 and 14?

d) Modify the above MERGESORT (A, I, r) algorithm to sort the numbers in descending order. [Only the modified line should be described]

2. Two algorithms for the Maximum Sub Sequence Sum Problem are given below. Which algorithm will be the faster one? Justify your answer with Big O notation.

## Algorithm 01

1. **for** (j=0;j< n ;j++)

2. { ThisSum=0;

3. for (k=j;k< n ;k++)

4. { ThisSum += A[k];

5. if (ThisSum>MaxSum)

6. MaxSum=ThisSum;

7. }

8. }

## Algorithm 02

1. **for** (j=0;j< n ;j++)

2. {

3. ThisSum += A[j];

4. **if** (ThisSum>MaxSum)

5. MaxSum=ThisSum;

6. **else if** (ThisSum < 0)

7. ThisSum = 0;

8. }

3. Fill the table entries giving the time complexity in Big O notation.

<table border="1"><tr><td rowspan="2">Algorithm</td><td colspan="2">Time Complexity</td></tr><tr><td>Best Case</td><td>Worst Case</td></tr><tr><td>Insertion sorting</td><td></td><td></td></tr><tr><td>Quick sort</td><td></td><td></td></tr><tr><td>Merge sort</td><td></td><td></td></tr></table>