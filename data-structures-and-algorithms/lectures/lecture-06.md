## IT1170-Data Structures and Algorithms

Lecture 06

Trees-1

## What is a tree?

A tree consist of nodes connected by edges.

In a picture of a tree the nodes are represented as circles and the edges as lines connecting the circles.

In a tree, the nodes represent the data items and the edges represent the way the nodes are related.

A tree with nodes which has maximum of two children is called a binary tree.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267595.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PYjnmPkVSysFkConcmDeEW2sVRI%3D&Expires=1774267067' alt='OCR图片'/></div>

## What is root, parent and children in a tree?

- The node at the top of the tree is called root.

- Any node which has exactly one edge running upwards to other node is called a child

- The two children of each node in a binary tree is called left child and right child.

- Any node which has one or more lines running downwards to other nodes is called a parent

- A node that has no children is called a leaf node or leaf

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267650.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kXINdiH4cFKuQ0ToiNc9M1m3YEc%3D&Expires=1774267067' alt='OCR图片'/></div>

## What is path and subtree in a tree

- Sequence of nodes from one node to another along the edges is called a path.

- Any node which consist of its children and it's children's children and so on is called a sub tree

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267657.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pX2Av1%2B1HZFJV5Ee1ajvmlVWPRA%3D&Expires=1774267067' alt='OCR图片'/></div>

## Key value of a node

- Each node in a tree stores objects containing information.

- Therefore one data item is usually designated as a key value.

- The key value is used to search for a item or to perform other operations on it.

- eg: person object-social security number car parts object-part number

## Binary Search Tree

## Binary Search Tree

is a tree that has at most two children.

a node's left child must have a key less than its parent and node's right child must have a key greater than or equal to its parent.

## Operations of Binary Search Tree

- There are four main operations perform in a binary search tree

Find-find a node with a given key

Insert - insert a new node

Delete - delete a node

Traverse - visit all the nodes

## Operations-Find

- Find always start at the root.

- Compare the key value with the value at root.

- If the key value is less, then compare with the value at the left child of root.

- If the key value is higher, then compare with the value at the right child of root

- Repeat this, until the key value is found or reach to a leaf node.

## Find value 57

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267664.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mvUMYHxoB3i%2FDzafQlfXvEMeF%2BI%3D&Expires=1774267067' alt='OCR图片'/></div>

## Find value 75

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267672.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kVzf%2F1bOFAVVrtvc%2B7UnhO8aUZE%3D&Expires=1774267067' alt='OCR图片'/></div>

## Operations - Insert

- Create a new node.

- Find the place (parent) to insert a new node.

- When the parent is found, the new node is connected as its left or right child, depending on whether the new node's key is less than or greater than that of the parent.

## Insert value 45

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267678.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=sHLePAx6%2BMTlfwBxdGNhoLIG6q0%3D&Expires=1774267067' alt='OCR图片'/></div>

<div align="center">

a) Before insertion

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_2_1773662267685.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0gRzsz%2B7AWYcTfib7x1UzlwBog8%3D&Expires=1774267067' alt='OCR图片'/></div>

<div align="center">

b) After insertion

</div>

## Question 1

- Draw a tree after inserting number 8,73,63

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267691.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lGwbWYIPWAPnPkcGHzwujQHO3qs%3D&Expires=1774267067' alt='OCR图片'/></div>

## BFS vs DFS for Binary Tree

A Tree is typically traversed in two ways:

- Breadth First Traversal (Or Level Order Traversal)

- Depth First Traversals

1. Inorder Traversal (Left-Root-Right)

2. Preorder Traversal (Root-Left-Right)

3. Postorder Traversal (Left-Right-Root)

BFS and DFSs of above Tree

Breadth First Traversal:12345

Depth First Traversals:

Preorder Traversal:12453

Inorder Traversal : 42513

Postorder Traversal : 4 5 2 3 1

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267699.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RE0NIZew9haToKkufLUqMwnoYoc%3D&Expires=1774267067' alt='OCR图片'/></div>

## Traversing

- Traverse a tree means to visit all the nodes in some specified order.

- There are three common ways to traverse a tree

Pre order

In order

Post order

InOrder(root) visits nodes in the following order: 4,10,12,15,18,22,24,25,31,35,44,50,66,70,90

A Pre-order traversal visits nodes in the following order: 25,15,10,4,12,22,18,24,50,35,31,44,70,66,90

A Post-order traversal visits nodes in the following order: 4,12,10,18,24,22,15,31,44,35,66,90,70,50,25

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195725ed7bb32df1484bb9%2Fcrop_1_1773662267705.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=z2%2B1ihFwcM5dr1PY6ofUL3HhJhY%3D&Expires=1774267067' alt='OCR图片'/></div>