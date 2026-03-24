<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267835.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jr7mJbVUg8i5pF%2BQFk2V4d65ys0%3D&Expires=1774267067' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 05

Linked Lists

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267849.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=M0FHbX%2FFf45Tk8KujKk9V0e3hg4%3D&Expires=1774267067' alt='OCR图片'/></div>

## Difference between arrays and linked lists

Array - each item occupies a particular position and can be directly accessed using an index number.

Linked list - need to follow along the chain of element to find a particular element. A data item cannot be accessed directly.

Array

<table border="1"><tr><td>12</td><td>34</td><td>4</td><td>78</td><td>5</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662267857.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mKtzDsBdLp2LOdijWavx%2FOD64JM%3D&Expires=1774267067' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267863.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2B1BR7HF24y0%2B2MbLWA9MjQLbre8%3D&Expires=1774267067' alt='OCR图片'/></div>

## Applications of linked list in real world-

- Image viewer - Previous and next images are linked, hence can be accessed by next and previous button.

- Previous and next page in web browser- We can access previous and next url searched in web browser by pressing back and next button since, they are linked as linked list.

- Music Player- Songs in music player are linked to previous and next song. you can play songs either from starting or ending of the list.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267868.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c5%2FzeZEcqZ%2FRykUPQjEPnfpcXK0%3D&Expires=1774267067' alt='OCR图片'/></div>

## Applications of linked list in computer science-

- Implementation of stacks and queues

- Implementation of graphs: Adjacency list representation of graphs is most popular which is uses linked list to store adjacent vertices.

- Dynamic memory allocation : We use linked list of free blocks.

- Maintaining directory of names

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267875.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GG1UGfhFWXbJrVQQunBqrkEYjUA%3D&Expires=1774267067' alt='OCR图片'/></div>

## Linked Allocation in File System

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662267880.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rY%2Fxz2UpWTIgqaXiaG1UxFeJWOY%3D&Expires=1774267067' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_3_1773662267887.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Z8ZswNlyhcS1HktQOYGnlqnT5rE%3D&Expires=1774267067' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267893.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DnsbTj2gOCv%2FfD40YfaiWzP%2FUxo%3D&Expires=1774267067' alt='OCR图片'/></div>

## Linked List

Linked lists are probably the second most commonly used general purpose storage structures after arrays.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662267901.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eTWKZ0Y4%2F4yJ3etcyUEuxqYZ2Qw%3D&Expires=1774267067' alt='OCR图片'/></div>

- In a linked list each data item is embedded in a link.

- There are many similar links.

- Each link object contains a reference to the next link in the list.

- In a typical application there would be many more data items in a link.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267907.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bbWeGSD1j6l47djX3sdUFdqNotM%3D&Expires=1774267067' alt='OCR图片'/></div>

## Operations

- Mainly the following operations can be performed on a linked list.

- Find

Find a link with a specified key value.

- Insert

Insert links anywhere in the list.

- Delete

Delete a link with the specified value.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267914.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MWTY3epMyZ%2FqTJMbL1Z70fHziDE%3D&Expires=1774267067' alt='OCR图片'/></div>

## Operations-Find

Start with the first item, go to the second link, then the third, until you find what you are looking for.

<div align="center">

Ex: Find Item 35

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662267921.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mLKHJ6FEAR%2FYR%2FGcaaKocnc0ob4%3D&Expires=1774267067' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_3_1773662267934.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aMWLQFomrhVc%2B%2B1XiLzuzUTO6l8%3D&Expires=1774267067' alt='OCR图片'/></div>

Step 3 :

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_4_1773662267945.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GpRO5hqGc0dW5I%2BjvgfXWhEnsVM%3D&Expires=1774267067' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267953.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yiBKNai%2FKFltSDLbAoiPia%2FidaU%3D&Expires=1774267067' alt='OCR图片'/></div>

## Operations-Insert

Inserting an item at the beginning of the list

Before inserting

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662267963.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=m2X0b4dq7LP5Nm3EM03CDIT4Gz8%3D&Expires=1774267067' alt='OCR图片'/></div>

Step 1: create a new link

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_3_1773662267968.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2Y2UY4jIVd4BXHXh%2BsMJfxDIRuU%3D&Expires=1774267067' alt='OCR图片'/></div>

Step 2: 'next' field of the new link points to the old first link

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_4_1773662267973.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dru5gY0K5KSRo07bCn0geQSmYOM%3D&Expires=1774267067' alt='OCR图片'/></div>

Step 3: 'first' points to the newly created link

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_5_1773662267985.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3bXR4ErxFMQq0YZGiqUlU7Zgkfs%3D&Expires=1774267067' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662267991.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=THvMAVknqEjAvF46KTtfpmDX8tg%3D&Expires=1774267067' alt='OCR图片'/></div>

## InsertFirst()

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662267997.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=deJ5cNbdHEUt1XltU9q7kwDMk1Q%3D&Expires=1774267068' alt='OCR图片'/></div>

b) After Insertion

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268005.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RSgW42Y3RG45qjRJ2um6mt1H1m0%3D&Expires=1774267068' alt='OCR图片'/></div>

## Operations - Insert

Inserting an item in the middle of the list

Before inserting

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268010.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qHS8MfFtQDy5RuOvyyiA81chrAo%3D&Expires=1774267068' alt='OCR图片'/></div>

Question:

What steps need to be followed if a new link is inserted after the link '17'?

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268021.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jhGEW0udOBIFK1m2OV63aqPNxBk%3D&Expires=1774267068' alt='OCR图片'/></div>

## Operations - Delete

Deleting an item from the beginning of the list

<div align="center">

Step 1: Save reference to first link

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268030.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9o4U9n%2FTUVSv5ZbqPknPY87FJYA%3D&Expires=1774267068' alt='OCR图片'/></div>

<div align="center">

Step 2: Disconnect the first link by rerouting first to point to the second link

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_3_1773662268036.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BzA1qL9gVVhaWz8i6s8afmbOM3o%3D&Expires=1774267068' alt='OCR图片'/></div>

<div align="center">

Step 3: Return the deleted link (temp)

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268041.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VZJIwBofupHkGtn5y0GofmfajXA%3D&Expires=1774267068' alt='OCR图片'/></div>

## deleteFirst()

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268047.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QBRssFZ4aSWB7rphI%2BZS4xoIyOs%3D&Expires=1774267068' alt='OCR图片'/></div>

b) After Deletion

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268054.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5czD0RMJxcV2D%2FIJ%2BylmrDaFIT4%3D&Expires=1774267068' alt='OCR图片'/></div>

## Operations - Delete

Deleting a given item from the list

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268059.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1WpbdeWxqE9cPKci6tJUVY7m%2BU4%3D&Expires=1774267068' alt='OCR图片'/></div>

Question:

What steps need to be followed to delete the link '17'?

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268090.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qkQjh3shYQsilVOFlRelGKePGcA%3D&Expires=1774267068' alt='OCR图片'/></div>

## Linked List - Implementation

## Link Class

Link Class

- In a linked list, a link is an object of a class called something like “Link”.

- There are many similar links in a linked list.

- Each link contains Data Items and a reference to the next link in the list.

class Link {

    public int iData; // data item

    public Link next; // reference to the next link

    public Link(int id) { // constructor

        iData = id;

        next = null;

    }

    public void displayLink() { // display data item

        System.out.println(iData);

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268101.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lDYTRegt%2BhlN5mefQlA8LtaG%2F8I%3D&Expires=1774267068' alt='OCR图片'/></div>

## Linked List - Implementation

Link List Class

- The LinkList class contains only one data item, a reference to the first link on the list called ‘first’.

- It is possible to find the other links by following the chain of references from ‘first’, using each link’s next field.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268111.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BO6F66JsY92yRGWeTcQaA9ApN00%3D&Expires=1774267068' alt='OCR图片'/></div>

## Linked List - Implementation

Link List Class-Contd.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268122.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MU9rtpO%2B8en4WrthydjhjBRMy0Q%3D&Expires=1774267068' alt='OCR图片'/></div>

class LinkList {

    private Link first;

    public LinkList() { //constructor

        first = null;

    }

    public boolean isEmpty() { // true if list is empty

        return (first == null);

    }

    public void displayList()    {

        Link current = first;

        while (current != null) {

            current.displayLink();

            current = current.next;

        }

        System.out.println(" ");

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268130.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CxULBABaL2XtxrHGGkIg7SRiYEs%3D&Expires=1774267068' alt='OCR图片'/></div>

## Linked List - Implementation

Link List Class-Contd.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268139.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rZyCgfhoX1Os9OY8CXXj84wxtp8%3D&Expires=1774267068' alt='OCR图片'/></div>

class LinkList {

    private Link first;

    public LinkList() { //constructor

        first == null;

    }

    public boolean isEmpty() { // true if list is empty

        return (first == null);

    }

    public void displayList() {

        Link current = first;

        while (current != null) {

            current.displayLink();

            current = current.next;

        }

        System.out.println(" ");

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268144.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Krw6%2F5lh7ozwkTUpDIgn%2FNDZ%2BSk%3D&Expires=1774267068' alt='OCR图片'/></div>

## Linked List - Implementation

Link List Class – Contd.

class LinkList {

    private Link first;

    public LinkList() { //constructor

        first = null;

    }

    public boolean isEmpty() { // true if list is empty

        return (first == null);

    }

    public void displayList() {

        Link current = first;

        while (current != null) {

            current.displayLink();

            current = current.next;

        }

        System.out.println(" ");

    }

}

// insertFirst Method

public void insertFirst(int id) {

    Link newLink = new Link(id);

    newLink.next = first;

    first = newLink;

}

// deleteFirst Method

public Link deleteFirst() {

    Link temp = first;

    first = first.next;

    return temp;

}

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268149.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7KsUq6HXBzTk0j1E18pbivcSX60%3D&Expires=1774267068' alt='OCR图片'/></div>

## Question 1

## Write a program to

i) Create a new linked list and insert four new links.

ii) Display the list.

iii) Remove the items one by one until the list is empty.

(Use the LinkList class created)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268155.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aFfKEHOkAmh%2B%2BO58JuQJbmuXDjY%3D&Expires=1774267068' alt='OCR图片'/></div>

## Answer1

```java

class myList {

    public static void main(String[] args) {

        LinkList theList = new LinkList();    // create a new list

        theList.insertFirst(23);    // insert four items

        theList.insertFirst(89);

        theList.insertFirst(12);

        theList.insertFirst(55);

        theList.displayList();        //display the list

        while( !theList.isEmpty() ) {  // delete item one by one

            Link aLink = theList.deleteFirst();

            System.out.print("Deleted ");

            aLink.displayLink();

        }

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268169.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Zg%2BXM%2F0x1GnOAbCIrtFDGAzmdQk%3D&Expires=1774267068' alt='OCR图片'/></div>

## Double-Ended List

A double-ended list is similar to an ordinary linked list with an additional reference to the last link.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268177.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GuMyL0Gwov5MZq83eQGldeFys98%3D&Expires=1774267068' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268183.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jBC2GlRuv2Z6bzNraNnbdsDEqxc%3D&Expires=1774267068' alt='OCR图片'/></div>

## Doubly Linked List

A doubly linked list allows to traverse backwards as well as forward through the list. Each link has two references.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_2_1773662268189.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5M4xfwS6OKSTIXO4C4V7BzIwHaU%3D&Expires=1774267068' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316195714e785f6aad4ab466a%2Fcrop_1_1773662268196.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0JPwDkDZ2MXUcCyi54DT%2FT%2B3k58%3D&Expires=1774267068' alt='OCR图片'/></div>

## References

Mitchell Waite, Robert Lafore, Data Structures and Algorithms in Java, $ 2^{n d} $ Edition, Waite Group Press,1998.