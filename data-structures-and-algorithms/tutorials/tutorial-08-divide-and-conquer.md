<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195359d9e6ccc7cae64679%2Fcrop_1_1773662053463.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SLGbTWNNKfghjSehgG8ULVCACXw%3D&Expires=1774266853' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

Data Structures and Algorithms-IT1170 Worksheet 8- Divide and Conquer 1

2024

## 1. The pseudo codes for the QUICKSORT are given below.

Procedure QUICKSORT (A, p, r)

1 if p < r

2 then q $ \leftarrow $ PARTITION(A, p, r)

3 QUICKSORT (A, p, q)

4 QUICKSORT (A, q+1, r)

Procedure PARTITION(A,p,r)

1 $ x \leftarrow $ A[p]

2 $ i \leftarrow $ p-1

3 $ j \leftarrow $ r+1

4 while TRUE

5 do repeat $ j \leftarrow j-1 $

6 until $ A[j] \leq x $

7 repeat $ i \leftarrow i+1 $

8 until $ A[i] \geq x $

9 if $ i < j $

10 then exchange $ A[i] \leftrightarrow A[j] $

11 else return j

a) Illustrate the operations QUICKSORT (A, p, r) for the array with the given set of elements. (For the illustration process assign values only once to the given algorithm codes and then use diagrammatic way to reach the answer.

A = (10,25,4,30,0,20).

b) Do you get the best or worst case if all elements of the array are having the same value in Quick Sort? Justify your answer.

c) Do you get the best or worst case if all elements of the array are having the same value in Quick Sort? Justify your answer.