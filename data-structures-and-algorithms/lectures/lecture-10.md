<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737029.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2R5KzK%2B555YW3MQfGyAcvODC%2BKU%3D&Expires=1774267537' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 10

Divide and Conquer - 2

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737087.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5u8HpP%2BT3aK9w%2F4dWTrCni4KClg%3D&Expires=1774267537' alt='OCR图片'/></div>

## Merge sort

Merge Sort is a sorting algorithm based on divide and conquer.

Its worst-case running time has a lower order of growth than insertion sort.

The merge sort algorithm closely follows the divide-and-conquer paradigm. Intuitively, it operates as follows.

- Divide: Divide the n-element sequence to be sorted into two subsequences of n/2 elements each.

- Conquer: Sort the two subsequences recursively using merge sort.

- Combine: Merge the two sorted subsequences to produce the sorted answer.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737096.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mCvgn%2Ba1h1f2KWRjgEKCy74MnIU%3D&Expires=1774267537' alt='OCR图片'/></div>

## Merge sort

Divide by splitting into two subarrays A[p..q] and A[q+1..r], where q is the halfway point of A[p..r].

Conquer by recursively sorting the two subarrays A[p..q] and A[q+1..r].

Combine by merging the two sorted subarrays A[p..q] and A[q+1..r] to produce a single sorted subarray A[p..r].

To accomplish this step, we'll define a procedure MERGE(A,p,q,r).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737128.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Bn%2FvRx%2FetEQ%2BZcHnvRLUzSxGPgA%3D&Expires=1774267537' alt='OCR图片'/></div>

## Merge sort procedure

Input : A an array in the range 1 to n.

Output : Sorted array A.

## MERGESORT (A,p,r)

1. if p<r

2. $ q=\lfloor( p+r )/2 \rfloor $

3. MERGESORT (A,p,q)

4. MERGESORT (A, q+1, r)

5. MERGE (A,p,q,r)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737189.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GMYZuNax3Td%2F60jQePJCPqD%2FWwY%3D&Expires=1774267537' alt='OCR图片'/></div>

## Merge procedure

MERGE($A, p, q, r$)

1. $n_1 = q - p + 1$

2. $n_2 = r - q$

3. create arrays $L[1..n_1 + 1]$ and $R[1..n_2 + 1]$

4. **for** $i = 1$ **to** $n_1$

5. $L[i] = A[p + i - 1]$

6. **for** $j = 1$ **to** $n_2$

7. $R[j] = A[q + j]$

8. $L[n_1 + 1] = \infty$

9. $R[n_2 + 1] = \infty$

10. $i = 1$

11. $j = 1$

12. **for** $k = p$ **to** $r$

13. **if** $L[i] \leq R[j]$

14. $A[k] = L[i]$

15. $i = i + 1$

16. **else** $A[k] = R[j]$

17. $j = j + 1$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737197.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Y4kj%2FGGpO6cMVY1zFXmcjeiiZeI%3D&Expires=1774267537' alt='OCR图片'/></div>

Illustration when the subarray A[9..16] contains the sequence $ \langle 2,4,5,7,1,2,3,6 \rangle $

<table border="1"><tr><td rowspan="2">A</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>...</td><td>2</td><td>4</td><td>5</td><td>7</td><td>1</td><td>2</td><td>3</td><td>6</td><td>...</td></tr><tr><td></td><td>k</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

<div align="center">

L

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_2_1773662737204.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QmQB%2BeNXyP6WO3JWZw0tolvODuo%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

R

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_3_1773662737227.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aGAp8ujbvXRFfXO7IhHp6X2C0ko%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

(a)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_4_1773662737266.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=H1wRlUlI2%2BlkyoO%2B3knjGLdiAzg%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

L

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_5_1773662737273.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Bgu8SIeb81Vqr3TjsEghyDwdz2Q%3D&Expires=1774267537' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_6_1773662737279.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2sko5NIGL6s5UFXncqLjkgi%2BjZk%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

R

</div>

<div align="center">

(b)

</div>

<table border="1"><tr><td></td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>A</td><td>...</td><td>1</td><td>2</td><td>5</td><td>7</td><td>1</td><td>2</td><td>3</td><td>6</td><td>...</td></tr><tr><td></td><td colspan="10">k</td></tr></table>

<div align="center">

L

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_7_1773662737286.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Opyyh%2Bmj65TZouHn9bGR5UgiSxg%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

(c)

</div>

<div align="center">

R

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_8_1773662737292.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XpMkCFeOLlpO2AqUh98E61TFotM%3D&Expires=1774267537' alt='OCR图片'/></div>

<table border="1"><tr><td></td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>A</td><td>...</td><td>1</td><td>2</td><td>2</td><td>7</td><td>1</td><td>2</td><td>3</td><td>6</td><td>...</td></tr><tr><td></td><td colspan="10">k</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_9_1773662737298.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5GmAu2BLxNtxbetTk6t45mT3udo%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

R

</div>

<div align="center">

(d)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_10_1773662737304.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FC%2B6FHbkQimSvGZgpQb8xKihai8%3D&Expires=1774267537' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737322.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hRi44xdC2L8uz8L8QvQJ60MA4WI%3D&Expires=1774267537' alt='OCR图片'/></div>

<table border="1"><tr><td></td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>A</td><td>...</td><td>1</td><td>2</td><td>2</td><td>3</td><td>1</td><td>2</td><td>3</td><td>6</td><td>...</td></tr></table>

<div align="center">

L

</div>

<div align="center">

K

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_2_1773662737328.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FCCjWHHeW%2BiRN9Dw8FuVmthg%2BW4%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

R

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_3_1773662737335.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1HCOYj8Bv2c%2B5DfIhcWTIpU2Y9c%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

(e)

</div>

<div align="center">

L

</div>

<table border="1"><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>...</td><td>1</td><td>2</td><td>2</td><td>3</td><td>4</td><td>5</td><td>3</td><td>6</td><td>...</td></tr><tr><td colspan="10">k</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_4_1773662737342.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=47N7mu6qOe%2BQa0L5%2FyYzyhEvmHE%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

R

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_5_1773662737350.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=i8qwd%2FNtjiY6XHR56xSUa6gV3uE%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

(ga)

</div>

<table border="1"><tr><td></td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>A</td><td>...</td><td>1</td><td>2</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>...</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>k</td></tr></table>

<div align="center">

L

</div>

<div align="center">

L

</div>

<div align="center">

A

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_6_1773662737361.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wIfwgo0Hzgh1oVq1JYGi9oB1S7o%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

R

</div>

<table border="1"><tr><td></td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>A</td><td>...</td><td>1</td><td>2</td><td>2</td><td>3</td><td>4</td><td>2</td><td>3</td><td>6</td><td>...</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_7_1773662737410.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9Ak9DA%2BPrpc2dM0fYv0lptwHxxE%3D&Expires=1774267537' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_8_1773662737418.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wmxY6IR7TQ14h6ex3uNRtMaHkYc%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

(f)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_9_1773662737425.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mDNOT%2B2xFHIFyd7mcGqLoAqFOvs%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

i

</div>

<div align="center">

k

</div>

<div align="center">

R

</div>

<table border="1"><tr><td></td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr><tr><td>A</td><td>...</td><td>1</td><td>2</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>6</td><td>...</td></tr></table>

<div align="center">

k

</div>

<div align="center">

L

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_10_1773662737435.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BqNaOMasUyGJ1kbqBs6X549dWcY%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

R

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_11_1773662737464.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ixw0ttMwmXvQWbWF30EN%2BK2xVl0%3D&Expires=1774267537' alt='OCR图片'/></div>

<div align="center">

(h)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737472.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4Nv8TEgcPbHmPrNEzzdtEcdcQTA%3D&Expires=1774267537' alt='OCR图片'/></div>

## Analysis of Merge Sort

- To find the middle of the sub array will take $ \Theta(1). $

- To recursively solve each sub problem will take 2T(n/2).

- To combine sub arrays will take $ \Theta(n). $

Therefore $ \mathrm{T(n)}=2 \mathrm{T(n/2)}+\Theta(\mathrm{n})+\Theta(1) $

We can ignore $ \Theta(1) $ term.

$$
T (n) = 2 T (n / 2) + \Theta (n)
$$

## MERGESORT (A, p, r)

1. if p<r

2. $ q=\lfloor( p+r )/2 \rfloor $

3. MERGESORT (A,p,q)

4. MERGESORT (A, q+1, r)

5. MERGE (A,p,q,r)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_1_1773662737478.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5WzwFtQ3ceCud23ghU4YUA%2FNQnU%3D&Expires=1774267537' alt='OCR图片'/></div>

## Analysis of Merge Sort

$$
\mathrm {T} (\mathrm {n}) = 2 \mathrm {T} (\mathrm {n} / 2) + \mathrm {c n}
$$

$$
2 \mathrm {T} (\mathrm {n} / 2) = 4 \mathrm {T} (\mathrm {n} / 4) + 2 \mathrm {c n} / 2
$$

$$
\begin{array}{l} 4 T (n / 4) = 8 T (n / 8) + 4 c n / 4 \\ - \\ - \\ - \\ T (2) = n T (1) + (n / 2) c ^ {*} 2 \\ \end{array}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005028d73e44eccd64303%2Fcrop_2_1773662737485.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0AFGtrzLU6sViY6Kfu58oie6%2BDw%3D&Expires=1774267537' alt='OCR图片'/></div>

add and cancel:

$$
\begin{array}{l} T (n) = n T (1) + c n + c n + \dots + c n \\ = n T (1) + c n ^ {*} \log_ {2} n = \Theta (n \log n) \\ \end{array}
$$