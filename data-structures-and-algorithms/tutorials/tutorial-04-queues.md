<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316194529e4c471f90aee4136%2Fcrop_1_1773661547661.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hzJIUbnpqPyvQ93LhUzZZRZDj%2FI%3D&Expires=1774266347' alt='OCR图片'/></div>

<div align="center">

# BSc (Hons) in Information Technology

</div>

Year 1

Data Structures and Algorithms - IT1170 Tutorial 4 - Queues

## Question 1

a) Write one advantage of having a circular queue instead of a linear queue

b) Consider the following Circular Queue and draw the queue frames after executing each statement given below.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316194529e4c471f90aee4136%2Fcrop_2_1773661547672.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=a5cLu4%2BmzUImL2gktMmAAJjFUGU%3D&Expires=1774266347' alt='OCR图片'/></div>

i) insert('R')

ii) peekFront()

iii) insert('S')

iv) insert('T')

v) remove()

## c) What will happen if the above queue is a linear queue?

## Question 2

a) How do you find whether a linear queue is full?

b) How do you find whether a circular queue is full?

c) How do you find whether a linear queue is empty?

d) How do you find whether a circular queue is empty?

## Question 3

i) Implement isEmpty() and isFull() methods of the circular queue class.

ii) Assume that a circular queue class has already been implemented with insert(), remove() and peekFront() methods. It is used to store characters. Write a code segment to insert the following characters to a 'myQueue' object created from the queue class; 'I' , 'm' , 'n' 'o'.

iii) Write code segment to display all the values in a queue by removing them.

Question 4

Consider the below remove() method implemented for a circular queue. Code contains errors. Write the line numbers with errors and correct them.

1. public int remove()

2. {

3.     if (rear == -1)

4.     {

5.         System.out.println("Queue is empty");

6.         return false;

7.     }

8.     else

9.     {

10.         int temp = queueArray[front++];

11.         nItems--;

12.         return temp;

13.     }

14.}

## Question 5

Consider the following circular queue with initial values given below.

Initials values are:

- Front=0

- Rear=4

- Count=5

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316194529e4c471f90aee4136%2Fcrop_1_1773661547680.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gAsjU4yKz0CdzUMkPMBmveFwagk%3D&Expires=1774266347' alt='OCR图片'/></div>

Show how the above parameter values (Front, Rear and Count) will change after each of the operations by completing the table given below.

i) insert(60)

ii) insert(70)

iii) delete( )

iv) insert(80)

v) insert( 90)

vi) insert(100)

## Question 6

"front - rear + 1 can be used to find the no of items in a linear queue" Do you agree with the above statement? If you agree, justify your answer using a diagram. If you do not agree, write the correct answer.