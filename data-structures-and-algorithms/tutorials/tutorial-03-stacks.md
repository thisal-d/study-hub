<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316194200d8c2129ed2e1406d%2Fcrop_1_1773661343821.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BSLdxCZCqXEOOegGumX9rkfQ5Vg%3D&Expires=1774266143' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

<div align="center">

# Data Structures and Algorithms - IT1170 Tutorial 3 - Stacks

</div>

## Question 1

a) Consider the following Stack and draw the Stack frames after executing each statement given below.

int a=22,b=44;

i) theStack.push(2);

ii) theStack.push(a);

iii) theStack.push(a+b);

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316194200d8c2129ed2e1406d%2Fcrop_2_1773661343877.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=N96BHdeaUhHVmhXPeqvJH7jDjcY%3D&Expires=1774266143' alt='OCR图片'/></div>

iv) theStack.pop();

v) theStack.push(b);

vi) theStack.push(a-b);

## Question 2

Consider the stackX class given below.

int top

int maxSize

int stackArr[]

StackX(int size)

void push(int no)

int pop()

boolean isEmpty()

boolean isFull()

int getCount()

i) Implement isEmpty() and isFull() methods of the stack class.

ii) Implement getCount() method to return the no of items in the stack.

## Question 3

Constructor of the stack class is implemented as follows,

```java

public StackX()

{

    stArr = new double[10];

    maxSize = 10;

    top = -1;

}

```

i) Mention one disadvantage of having the above constructor.

ii) Rewrite the constructor to avoid the disadvantage mentioned above.

## Question 4

i. A stack class has already been implemented with push() , pop() and peek() methods. It is a. used to store characters. Write a code segment to insert following characters to a 'myStack' object created from the stack class.

b. 'g' , 't' , 'o' , 'p'

ii. Write code segment to display all the values in a stack by removing them.

## Question 5

iii. What is the result of section ii) above?

Fill in the following blanks.

i) Most popular data structure is ___

ii) The process of retrieving the element at the top of a stack without removing it is called ___.

iii) A stack can be implemented using ___ or ___

iv) In a stack, if the “top” pointer is equal -1, then the stack is ___

v) The time complexity of the push and pop operations on a stack implementation are; push - ___ and pop - ___

## Question 6

Consider the initial stack frame of a stack given below.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316194200d8c2129ed2e1406d%2Fcrop_1_1773661343882.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aWERIF%2BLDUh%2BLKdHJFFs0IwFH4Q%3D&Expires=1774266143' alt='OCR图片'/></div>

Below stack frames are obtained after executing three operations one after another to the above stack frame. Write down the operations.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316194200d8c2129ed2e1406d%2Fcrop_2_1773661343887.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GgykKkewkxEbjihud7P7Ls2QnDo%3D&Expires=1774266143' alt='OCR图片'/></div>