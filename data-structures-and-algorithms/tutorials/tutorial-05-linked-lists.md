<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619490937196b0caf3b4d21%2Fcrop_1_1773661763599.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BwEQr9CJb3lWL%2B017ht5%2BZ8uhw0%3D&Expires=1774266563' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

Data Structures and Algorithms - IT1170 Tutorial 5 - Linked Lists

## PART A

Question 1

Consider the below linked list.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619490937196b0caf3b4d21%2Fcrop_2_1773661763609.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=57%2BwnpfXBiIvspahoQtbclN7Y5M%3D&Expires=1774266563' alt='OCR图片'/></div>

Write code segment to change the above linked list to the link list given below

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619490937196b0caf3b4d21%2Fcrop_3_1773661763615.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zDrjfyh%2F0zNafMozVPM6jGrvyDo%3D&Expires=1774266563' alt='OCR图片'/></div>

## Question 2

Consider the below linked list.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619490937196b0caf3b4d21%2Fcrop_4_1773661763620.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FjG4EaYhi9s2UFW8yl4J8WtLX4M%3D&Expires=1774266563' alt='OCR图片'/></div>

Execute below code segments on the link list given. Display the output after executing the code segments.

i) Link temp = first;

while (temp != NULL)

{

    System.out.print(temp.ID);

    temp = temp.next;

}

ii) Link temp = first;

while (temp.next != NULL)

{

    System.out.print(temp.ID);

    temp = temp.next;

}

iii) first = first.next;

System.out.print(first.next.ID);

## Question 3

Consider the link class and linked list class given below.

Link

int iData;

Link next;

Link(int id)

void displayLink()

<table border="1"><tr><td>Link first;</td></tr><tr><td>void LinkList()</td></tr><tr><td>boolean isEmpty()</td></tr><tr><td>void displayList()</td></tr><tr><td>boolean delete(int key)</td></tr><tr><td>boolean insertAfter(int key, int newData)</td></tr><tr><td>Link find(int key)</td></tr></table>

i) Implement insertAfter(int key, int newData) method of the LinkList class. InsertAfter() method finds the link with the given key and the new link (with newData value) is inserted immediately after that.

ii) Implement the delete(int key) method of the LinkList class. delete() method finds the link with the given key and remove it from the link list.

iii) Write an application to enter numbers from the keyboard to a link list.

1) Add a new link after a given number and display the list.

2) Delete a link from the link list and display the list.

## PART B

## Question 4

Consider the below Link class and the LinkList class. Assume the classes have already been implemented. addFirst() method in the LinkList class inserts a new link as the first link and removeFirst() method deletes the first link of the link list.

<div align="center">

Link

</div>

<table border="1"><tr><td>int ID
Link next</td></tr><tr><td>Link(int IDNo)</td></tr></table>

<div align="center">

LinkList

</div>

<table border="1"><tr><td>Link first;</td></tr><tr><td>void LinkList()</td></tr><tr><td>boolean isEmpty()</td></tr><tr><td>void addFirst(int ID)</td></tr><tr><td>int removeFirst()</td></tr></table>

i) Modify the LinkList class by adding another method called deleteAllLinks(). This method deletes all the links in the link list and display the IDs of the deleted links. Implement the method deleteAllLinks().

ii) Consider the below link list. What is the output you get after calling deleteAllLinks() method?

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619490937196b0caf3b4d21%2Fcrop_1_1773661763626.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DzeWfxuUwSiOuNGNF%2FU%2Fi%2FqJuBo%3D&Expires=1774266563' alt='OCR图片'/></div>

iii) Modify the method implemented in b) i) to remove all the links except the last link.

Question 5

How do you implement a "Stack" using a linked list instead of an array?

Question 6

Consider the following doubly link list.

i) Illustrate and write the steps to be followed if the link P0 is to be deleted.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619490937196b0caf3b4d21%2Fcrop_2_1773661763632.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PLp2cXQlDYQ6PnYRKXOosQaYDo0%3D&Expires=1774266563' alt='OCR图片'/></div>

ii) Illustrate the steps and write the statements to be followed to delete the first link.

iii) Illustrate the steps and write the statements to be followed to insert a new link as the first link