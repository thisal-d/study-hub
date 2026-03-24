## IT1170-Data Structures and Algorithms

Lecture 07

Trees-2

## Inorder traversing

- Call itself to traverse the node's left subtree

- Visit the node

- Call itself to traverse the node's right subtree

Inorder traversing cont...

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572300.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nPpeHum53qJqvP9Viz4EaV6JO5w%3D&Expires=1774267372' alt='OCR图片'/></div>

## Preorder traversing

- Visit the node

- Call itself to traverse the node's left subtree

- Call itself to traverse the node's right subtree

## Question 2

- Write the output, if the following tree is traverse in preorder.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572360.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SPbtH5MrA2cIz9XUWv%2FTdg50O3w%3D&Expires=1774267372' alt='OCR图片'/></div>

## Postorder traversing

- Call itself to traverse the node's left subtree

- Call itself to traverse the node's right subtree

- Visit the node

## Question 3

- Write the output, if the following tree is traverse in postorder.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572370.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jf0a5dcnJ6n8%2BgqB2yACwFY2gsg%3D&Expires=1774267372' alt='OCR图片'/></div>

## Binary search tree - Implementation

Node Class

Node contains the information about an object.

Each node should have a key, data and reference to left and right child.

```java

class Node

{

    public int iData; // data item (used as key value)

    public double dData; //other data

    public Node leftChild; // this node’s left child

    public Node rightChild; //this node’s right child

    public void displayNode( ){

        System.out.print(“{”);

        System.out.print(iData);

        System.out.print(”, “);

        System.out.print(dData);

        System.out.print( “}”);

    }

}

```

## Binary search tree - Implementation

## Tree Class

class Tree

{

    private Node root; // first node of tree

    public Tree(){

        root = null;

    }

    public void insert (int id, double dd){

    }

    public boolean delete (int id){

    }

    public Node find (int key){

    }

}

## Binary search tree - Implementation

Tree Class – Find Method

```java

class Tree {

    private Node root;

    public Tree(){

        root = null;

    }

    public void insert (int id, double dd){

    }

    public void delete (int id){

    }

    public Node find(int key){

        Node current = root;

        while (current.iData != key)

        {

            if(key < current.iData)

                current = current.leftChild;

            else

                current = current.rightChild;

            if (current == null)

                return null;

        }

        return current;

    }

}

```

## Binary search tree - Implementation

```java

class Tree{

    private Node root;

    ...

    ...

    public void insert ( int id , double dd){

        Node newNode = new Node();

        newNode.iData = id;

        newNode.dData = dd;

        if (root == null) // no node in root

            root = newNode;

        else            // root occupied

        {

            Node current = root; //start at root

            Node parent;

            while (true)

            {

                parent = current;

            }

            if (id < current.iData) // go left

            {

                current = current.leftChild;

                if (current == null) {

                    parent.leftChild = newNode;

                    return;

                }

            }

            else // go right

            {

                current = current.rightChild;

                if (current == null) {

                    parent.rightChild = newNode;

                    return;

                }

            }

        }

    }

}

```

## Binary search tree - Implementation

## Tree Class-Inorder Traversing Method

```java

private void inOrder(Node localRoot)

{

    if (localRoot != null)

    {

        inOrder(localRoot.leftChild);

        localRoot.displayNode();

        inOrder(localRoot.rightChild);

    }

}

```

## Binary search tree - Implementation

## Tree Class - Preorder Traversing Method

private void preOrder(Node localRoot)

{

    if (localRoot != null)

    {

        localRoot.displayNode();

        preOrder(localRoot.leftChild);

        preorder(localRoot.rightChild);

    }

}

## Binary search tree - Implementation

## Tree Class - Postorder Traversing Method

```java

private void postOrder(Node localRoot)

{

    if (localRoot != null)

    {

        postOrder(localRoot.leftChild);

        postOrder(localRoot.rightChild);

        localRoot.displayNode();

    }

}

```

## Operations - Delete

- First find the node to be deleted.

- If the node to be deleted is found there are three cases to be considered. Whether

The node to be deleted is a leaf

The node to be deleted has one child

The node to be deleted has two children.

## Case 1: The node to be deleted has no children

## Delete 7

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572378.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PIScQxmmGo4i%2BoDzFBzDZ3UPR0g%3D&Expires=1774267372' alt='OCR图片'/></div>

<div align="center">

a) Before deletion

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_2_1773662572387.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=H7M%2BjugE6i8oS%2BSJsETibIZjbmE%3D&Expires=1774267372' alt='OCR图片'/></div>

<div align="center">

b) After deletion

</div>

Awaiting garbage collection

## Case 2: The node to be deleted has one child

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572400.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=L%2BYG7ms2lFftzKl6NRb9PhWvOjg%3D&Expires=1774267372' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_2_1773662572411.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EZTlU3DyUaJs2OltA9edUX0judo%3D&Expires=1774267372' alt='OCR图片'/></div>

<div align="center">

b) After deletion

</div>

## Case 3: The node to be deleted has two children

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572419.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LgUzQUhVxDSOHowktuKECxBHVK8%3D&Expires=1774267372' alt='OCR图片'/></div>

<div align="center">

a) Before deletion

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_2_1773662572427.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fpXf9v7MtD37iZFFq0SjcZad0QA%3D&Expires=1774267372' alt='OCR图片'/></div>

<div align="center">

b) After deletion

</div>

## How to find a successor of a node?

- In a Binary Search Tree, successor of a node is a node with next-highest key.

To find successor of this node

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572455.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UJtl3RLjPf5yywuhrgDfF%2FeNjx0%3D&Expires=1774267372' alt='OCR图片'/></div>

## Tree Terminology

- Degree of a node: The number of children it has

- Depth: The depth of x in a tree is the length of the path from the root to a node x.

- Height: The largest depth of any node in a tree.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572462.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FGaJkrMFsJmNtkiEgKxfoPqX2w0%3D&Expires=1774267372' alt='OCR图片'/></div>

<div align="center">

(a)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_2_1773662572469.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Fk0YnPUG9keSnkCrEJ1WYs16WLE%3D&Expires=1774267372' alt='OCR图片'/></div>

## Full Binary Tree

- A Full binary tree of height h that contains exactly $ 2^{h+1}-1 $ nodes

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572479.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QRVe2FECgMSA0xm6I%2B8BJUuq3Yo%3D&Expires=1774267372' alt='OCR图片'/></div>

Height, h=2, nodes=2 $ ^{2+1}-1=7 $

## Complete Binary Tree

- It is a Binary tree where each node is either a leaf or has degree $ \leq2. $

- Completely filled, except possibly for the bottom level

- Each level is filled from left to right

- All nodes at the lowest level are as far to the left as possible

- Full binary tree is also a complete binary tree

## Question

- Find Complete Binary Trees

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572486.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jjLBPgBTkyb8JfB6pyhKPHzX2MY%3D&Expires=1774267372' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_2_1773662572494.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cFZHkCR44CGndmocZG4eLXYfB9I%3D&Expires=1774267372' alt='OCR图片'/></div>

3

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_3_1773662572526.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GsCUTVZd7BnKYcIHeP7abW3DKcE%3D&Expires=1774267372' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_4_1773662572534.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=853PDjC0%2Bw28i5Pb1GbJoAH1N6A%3D&Expires=1774267372' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_5_1773662572541.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=t50HTK6PLcgU1yqSMmfK5Uc1KGg%3D&Expires=1774267372' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_6_1773662572554.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bWMVx6fLEl7ZTt%2BwP5aosnk1MGE%3D&Expires=1774267372' alt='OCR图片'/></div>

## Height of a complete binary tree

- Height of a complete binary tree that contains n elements is $ \lfloor\log_{2}(n)\rfloor $

- Example

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603162002175aa7755f17dd489e%2Fcrop_1_1773662572559.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1%2FzXVHrSMPH6i28ZhJaQbawyHDI%3D&Expires=1774267372' alt='OCR图片'/></div>

Above is a Complete Binary Tree with height = 3

No of nodes: n=10

Height $ = \lfloor \log_{2}(n)\rfloor = \lfloor \log_{2}(10)\rfloor = 3 $