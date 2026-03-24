<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747712.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cY6SIfCH65YbFJ5%2BtCVmwPGTEVk%3D&Expires=1774267547' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 11

Heaps

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747768.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VZQ%2FG5zPvIbDKZMr%2BzPwIhYVU50%3D&Expires=1774267547' alt='OCR图片'/></div>

## Contents for Today

- Tree

- Binary Tree

- Complete Binary Tree

- Heaps

- Heap Algorithms

- Maintaining Heap Property

- Building Heaps

- HeapSort Algorithms

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747773.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZTPDwvOZ94OSXKz0lyd%2BiPywfXQ%3D&Expires=1774267547' alt='OCR图片'/></div>

## Height of a Full Binary Tree

- A Full binary tree of height h that contains exactly $ 2^{h+1}-1 $ nodes

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662747783.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=selKqaO1oLMuZfwScVkiYDtSan4%3D&Expires=1774267547' alt='OCR图片'/></div>

Height, $ \boldsymbol{h}=2 $ , nodes= $ 2^{2+1}-1=7 $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747797.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eqSI4By31vqGIhUXj6O4t4Esn2E%3D&Expires=1774267547' alt='OCR图片'/></div>

## Height of a complete binary tree

Height of a complete binary tree that contains n elements is $ \lfloor \log_{2}(n) \rfloor $

## Example

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662747805.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iajPM73gs3oqAqqoNM03DTqV%2BzM%3D&Expires=1774267547' alt='OCR图片'/></div>

- Above is a Complete Binary Tree with height = 3

- No of nodes: n=10

$$
\cdot \mathrm {H e i g h t} = \left\lfloor \log_ {2} (n) \right\rfloor = \left\lfloor \log_ {2} (1 0) \right\rfloor = 3
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747811.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u6uhdoIXlCAsDmQf8oeniJSFcWU%3D&Expires=1774267547' alt='OCR图片'/></div>

## Heaps

Heap is an array object that can be viewed as a complete binary tree. There are two kinds of heaps

max heaps and min heaps

In both case, values in the nodes satisfy Heap Property which depend on the kind of heap

max-heap $ \rightarrow $ max-heap property: The value of each node is greater than or equal to those of its children.

min-heap $ \rightarrow $ min-heap property: The value of each node is less than or equal to those of its children.

Max-heaps are used in heapsort algorithm

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747860.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Nj9MndOr2TvMJImJTMt6iSpPh0k%3D&Expires=1774267547' alt='OCR图片'/></div>

## Heaps

Complete Binary Tree with the max-heap property - examples

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662747875.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2PJghaizyEya0XlA75Xn0O2Y7nA%3D&Expires=1774267547' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_3_1773662747884.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AWkyRYn0P24qawCDFn9XhMo0hTA%3D&Expires=1774267547' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747890.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wdjgQaDbYWX7cAJFc2sn2IG7r9g%3D&Expires=1774267547' alt='OCR图片'/></div>

## Heaps (contd.)

- A heap can be represented in a one-dimensional array

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662747938.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lJdH6IbfCE4cHpImdLHeGex0gko%3D&Expires=1774267547' alt='OCR图片'/></div>

Array

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747950.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=k%2FlYESp84t9Mws0QCLwk79d11So%3D&Expires=1774267547' alt='OCR图片'/></div>

## Heaps (contd.)

After representing a heap using an array A

- Root of the tree is A[1]

<table border="1"><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr><tr><td>16</td><td>14</td><td>10</td><td>8</td><td>7</td><td>9</td><td>3</td><td>2</td><td>4</td><td>1</td></tr></table>

Given node with index i,

- PARENT(i) is the index of parent of i;

$$
P A R E N T (i) = \lfloor i / 2 \rfloor
$$

- LEFT_CHILD(i) is the index of left child of i ;

LEFT_CHILD(i) = 2 $ \times i $

- RIGHT_CHILD(i) is the index of right child of i; RIGHT_CHILD(i) = 2 $ \times $ i+1

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747960.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qoqt7UqIltEnl4w%2BV0mY4ygnmhs%3D&Expires=1774267547' alt='OCR图片'/></div>

## Heap Algorithms

## MAX_HEAPIFY:

To maintain max-heap property

A[PARENT(i)] $ \geq $ A[i]

## BUILD_MAX_HEAP

To build max-heap from an unsorted input array

## HEAPSORT

Sorts an array in place.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747970.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gsHnRemmLZ9n6nGLUFyC%2F4yzVK8%3D&Expires=1774267547' alt='OCR图片'/></div>

## MAX_HEAPIFY

- The MAX_HEAPIFY algorithm checks the heap elements for violation of the heap property and restores max-heap property;

## A[PARENT(i)] $ \geq $ A[i]

- Input: An array A and index i to the array. i=1 if we want to heapify the whole tree. Subtrees rooted at LEFT_CHILD(i) and RIGHT_CHILD(i) are heaps

- Output: The elements of array A forming subtree rooted at i satisfy the heap property.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747978.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3M5bgnPfjCisHbCcM6zYw83buI8%3D&Expires=1774267547' alt='OCR图片'/></div>

## Maintaining the Heap Property

MAX_HEAPIFY (A,i)

1. $ l=\mathrm{LEFT}(i); $

2. $ r=\mathrm{RIGHT}(i); $

3. if $ l\leq A.\mathrm{heap\_size}$ and $ A[l]>A[i] $

4. largest = l;

5. else largest = i;

6. if $ r\leq A.\mathrm{heap\_size}$ and $ A[r]>A[largest] $

7. largest = r;

8. if $ largest\neq i $

9. exchange $ A[i] $ with $ A[largest] $

10. MAX_HEAPIFY (A,largest)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662747989.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=E7UtGjF7DyaCWa4pBi8sTvDdPk0%3D&Expires=1774267547' alt='OCR图片'/></div>

## Example

You are given the following array

<div align="center">

A

</div>

<table border="1"><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr><tr><td>7</td><td>24</td><td>19</td><td>21</td><td>14</td><td>03</td><td>10</td><td>2</td><td>13</td><td>11</td></tr></table>

Now we are going to maintain the max-heap property Drawing a heap would make our work easy

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662747997.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bnojd4wwpP%2FD062X2VbgfFT74rM%3D&Expires=1774267548' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662748005.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uiOJ0j%2F5BvDvapWuKN4A6pTxn80%3D&Expires=1774267548' alt='OCR图片'/></div>

## MAX_HEAPIFY (A,1)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662748011.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eXtMHyCDMn1FSUkGdvTVT4G8%2BZw%3D&Expires=1774267548' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_3_1773662748031.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mQZDlx49%2B%2F4QdaAgzfMrtbUxX40%3D&Expires=1774267548' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_4_1773662748037.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zdG8qWvAB918yqG0reE%2BpN5D79A%3D&Expires=1774267548' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_5_1773662748043.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bWgt%2BvY14K%2B1sMC8sa5fDvUz5vg%3D&Expires=1774267548' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_6_1773662748053.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MHqC53HDV6ntawVm5V7OIp1KBZI%3D&Expires=1774267548' alt='OCR图片'/></div>

To be contd.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662748063.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=R1c2TrW6SN3z2IKblmD8VKt88ZU%3D&Expires=1774267548' alt='OCR图片'/></div>

## MAX_HEAPIFY (A,1) (contd.)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662748071.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FP3%2BdGjXRysrCuv8ZsbJgJ7iW1s%3D&Expires=1774267548' alt='OCR图片'/></div>

Important point Although we represent this process using a heap actually all the task in done on the input array

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_3_1773662748108.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Bb3oUMcM4get3geCw6Ic49xV99g%3D&Expires=1774267548' alt='OCR图片'/></div>

Resulting Heap

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662748122.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HN8sEPr9B%2FSSbzcf6JF%2FUXjgce4%3D&Expires=1774267548' alt='OCR图片'/></div>

<div align="center">

Array view of MAX_HEAPIFY Algorithm

</div>

<table border="1"><tr><td>7</td><td>24</td><td>19</td><td>21</td><td>14</td><td>03</td><td>10</td><td>02</td><td>13</td><td>11</td></tr><tr><td>24</td><td>7</td><td>19</td><td>21</td><td>14</td><td>03</td><td>10</td><td>02</td><td>13</td><td>11</td></tr><tr><td>24</td><td>21</td><td>19</td><td>07</td><td>14</td><td>03</td><td>10</td><td>02</td><td>13</td><td>11</td></tr><tr><td>24</td><td>21</td><td>19</td><td>13</td><td>14</td><td>03</td><td>10</td><td>02</td><td>07</td><td>11</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662748134.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UzHDWI8VkeQS7gCc8P7DiYITz5w%3D&Expires=1774267548' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_1_1773662748142.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=raPHrA525KxtxCCVtcFjQc5%2FL8A%3D&Expires=1774267548' alt='OCR图片'/></div>

## Analysis of Heapify Algorithm.

- The running time of MAX-HEAPIFY on a subtree of size n rooted at given node i is the $ \Theta(1) $ time plus the time to run MAX-HEAPIFY on a subtree rooted at one of the children of node i.

- The children's subtrees -the worst case occurs when the last row of the tree is exactly half full

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162005188419f8b3cd784beb%2Fcrop_2_1773662748151.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ejBzk5%2BfS7dsmSa1%2FPX4zTr5Uco%3D&Expires=1774267548' alt='OCR图片'/></div>

- Alternatively, we can characterize the running time of MAX-HEAPIFY on a node of height h as O(h).

The solution to this recurrence is

$$
T (n) = O (\lg n)
$$