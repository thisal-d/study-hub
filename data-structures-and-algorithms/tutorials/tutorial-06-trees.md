<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195124eefa178a4e14468d%2Fcrop_1_1773661895953.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XwOWJ4ilg6oAT7H5AgcLUqmfvbg%3D&Expires=1774266695' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

<div align="center">

# Data Structures and Algorithms-IT1170 Tutorial 6-Trees

</div>

## Question 1

Arrange the following sequence of integers into a binary search tree

280 308 180 416 298 350 156 255 580 275 12

## Question 2

Print the elements in the tree built in Question1 using the following traversing methods.

a) inorder

b) preorder

c) postorder

## Question 3

Draw the tree structures for the binary tree created in Question 1 for each of the following delete commands.

a) Delete(255)

b) Delete(308)

c) Delete (180)

d) Delete(280)

## Question 4

Consider the Node class and Tree class given below. Implement a method called minimum( ) which find the minimum key in a tree.

<table border="1"><tr><td>Node</td></tr><tr><td>int iData</td></tr><tr><td>double dData</td></tr><tr><td>Node leftChild</td></tr><tr><td>Node rightChild</td></tr><tr><td>void displayNode( )</td></tr></table>

<table border="1"><tr><td>Tree</td></tr><tr><td>Node root</td></tr><tr><td>Node find(int key)
void insert(int id, double dd)
boolean delete(int id)
void inOrder()</td></tr></table>

## Question 5

Write a java program to implement the following.

a) Implement a Node class to store a height of a child. In the same class implement displayNode ( ) method to display the data stored in a Node.

b) Implement the Tree class with the following data members and methods.

<table border="1"><tr><td>Tree</td></tr><tr><td>Node root</td></tr><tr><td>void insert(int height)
Node minimum( )
Node maximum( )
void descendingOrder( )</td></tr></table>

c) In your application, enter the height of 10 children in a class from the key board and store them in a tree. Use the above implemented methods to display the height of the tallest child, shortest child in the class. Also display the height of all ten children in descending order.