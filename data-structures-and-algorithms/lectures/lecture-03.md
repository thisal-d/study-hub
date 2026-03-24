<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237340.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3HMH%2FkudsG5dKm2ofzvGRgALvD8%3D&Expires=1774267037' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 03 Introduction to Stack

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237394.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=B%2FzhfEW0xQAH7pVUXt4qqbUitYM%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237407.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uAsTU9GTvPZ%2F5qWIYVEte3AOGJE%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_3_1773662237417.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SaSvrAC%2FAT1S348h0%2F%2FM15bzEJY%3D&Expires=1774267037' alt='OCR图片'/></div>

- Allows access to only one data item; the last item inserted

- If you remove this item, then you can access the next-to-last item inserted

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237424.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CCoKvA4lQ8PenUrTmKyQ%2Fwl0GOU%3D&Expires=1774267037' alt='OCR图片'/></div>

## Application of Stacks

- String Reverse

- Page visited history in Web browser.

- Undo sequence of text editor.

- Recursive function calling.

- Auxiliary data structure for Algorithms.

- Stack in memory for a process

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237432.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uDPZ2YmdsIiUh4HmZqAPk45RF58%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237443.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cmj68Rb3sF%2BROCttr9WGbemdVrk%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237454.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2eEV8x1cLY%2BvLxJs4zPF2yLpZB4%3D&Expires=1774267037' alt='OCR图片'/></div>

- In a stack all insertions and deletions are made at one end (Top). Insertions and deletions are restricted from the Middle and at the End of a Stack

- Adding an item is called Push

- Removing an item is called Pop

- Elements are removed from a Stack in the reverse order of that in which the elements were inserted into the Stack

- The elements are inserted and removed according to the Last-In-First-Out (LIFO) principle.

## Stack - Push

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237460.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7Xw8bSzyb9HucosAOBCDZXPMvds%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237466.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TxjZjmG8tmzWrCebLgWtfzess14%3D&Expires=1774267037' alt='OCR图片'/></div>

Before inserting

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_3_1773662237473.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HqEQI0Lsz9RmNNylP166kSjOF3s%3D&Expires=1774267037' alt='OCR图片'/></div>

Item 49 is inserted on top

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_4_1773662237480.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vtom5HlwscD8LZ%2BP8yBe5dQcoOA%3D&Expires=1774267037' alt='OCR图片'/></div>

After inserting

## Stack-Pop

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237489.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dqXaAXHsL9sBxu0U%2FmzIR8bI3SE%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237494.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=B7lqVg4V%2F8M4pYztGLULlRnh%2FYA%3D&Expires=1774267037' alt='OCR图片'/></div>

Before removing

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_3_1773662237507.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=t4QQdYLwldvFjPlq9JH00YEDsY0%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_4_1773662237513.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=euVlfeELweq09mj%2F2q29lMSJj8w%3D&Expires=1774267037' alt='OCR图片'/></div>

Top item is removed

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_5_1773662237519.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SXZB1WOZOzk2m0W1VEc3CXBhlEM%3D&Expires=1774267037' alt='OCR图片'/></div>

After removing

## Stack- Peek

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237524.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pPcU2oaNaRip5djUyE8KzGadQtc%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237530.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qtIjsIaIf9Gmuov9W6%2BUlKZwWzM%3D&Expires=1774267037' alt='OCR图片'/></div>

Stack remains the same

Peek is used to read the value from the top of the stack without removing it. You can peek only the Top item, all the other items are invisible to the stack user.

## Question

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237539.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tHkVLP4d1C9jueb6efsFaMT0%2BGE%3D&Expires=1774267037' alt='OCR图片'/></div>

Draw the stack frame after performing the below operations to the stack given below.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237546.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hVduPn7jlwTuHZ2ZaVVVBLTnlRM%3D&Expires=1774267037' alt='OCR图片'/></div>

i) Push item 50

ii) Push item 500

iii) Peek

iv) Push item 100

v) Pop

vi) Pop

vii) Pop

viii) Pop

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_3_1773662237553.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wS3QwJT9C%2BKfPU7QwzzpIANHMW0%3D&Expires=1774267037' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237559.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UJ6H1F8LoOyPtYlY2s%2FvjI9DAtw%3D&Expires=1774267037' alt='OCR图片'/></div>

## Uses of Stack

- The stack operations are built into the microprocessor.

- When a method is called, its return address and arguments are pushed onto a stack, and when it returns they're popped off.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237567.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KgUSBY%2FJitVN0S55C7pMZdevBl0%3D&Expires=1774267037' alt='OCR图片'/></div>

## Stack-Implementation

Stack implementation using an array

- Constructor creates a new stack of a size specified in its argument.

- Variable `top`, which stores the index of the item on the top of the stack.

```java

class StackX {

    private int maxSize;    // size of stack array

    private double[] stackArray;

    private int top;        //top of the stack

    public StackX(int s) {    // constructor

        maxSize = s;      // set array size

        stackArray = new double[maxSize];

        top = -1;        // no items

    }

    ...

    ...

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237575.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BkbAvbQg%2Brs%2B5IfXKwSkkDFlQjo%3D&Expires=1774267037' alt='OCR图片'/></div>

## Implementation - push

class StackX{

    private int maxSize;    // size of stack array

    private double[] stackArray;

    private int top;        //top of the stack

    public StackX(int s) { // constructor

        maxSize = s;      // set array size

        stackArray = new double[maxSize];

        top = -1;        // no items

    }

    public void push(double j) {

        // increment top

        // insert item

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237583.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DBvt3MMJYHFn%2FMmNAQelNxL%2F9k8%3D&Expires=1774267037' alt='OCR图片'/></div>

## Implementation - push

class StackX {

    private int maxSize; // size of stack array

    private double[] stackArray;

    private int top; //top of the stack

    public StackX(int s) {// constructor

        maxSize = s; // set array size

        stackArray = new double[maxSize];

        top = -1; // no items

    }

    public void push(double j) {

        // increment top. insert item

        stackArray[++top] = j;

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237589.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bnchNt%2BqYEYIvKd%2FXv0Dg2YE1QI%3D&Expires=1774267037' alt='OCR图片'/></div>

## Implementation - push

class StackX

{

    private int maxSize;    // size of stack array

    private double[] stackArray;

    private int top;        //top of the stack

    public StackX(int s) {// constructor

        maxSize = s;      // set array size

        stackArray = new double[maxSize];

        top = -1;        // no items

    }

    public void push(double j) {

        // check whether stack is full

        if (top == maxSize - 1)

            System.out.println("Stack is full");

        else

            stackArray[++top] = j;

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237596.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wg9O3ha8USbA9KGRLsjAPjRoePU%3D&Expires=1774267037' alt='OCR图片'/></div>

## Implementation-pop/peek

class StackX

{

    private int maxSize; // size of stack array

    private double[] stackArray;

    private int top; //top of the stack

    public StackX(int s) {// constructor

        maxSize = s; // set array size

        stackArray = new double[maxSize];

        top = -1; // no items

    }

    public void push(double j) {

        // check whether stack is full

        if (top == maxSize - 1)

            System.out.println("Stack is full");

        else

            stackArray[++top] = j;

    }

}

public double pop() {

    // check whether stack is empty

    // if not

    // access item and decrement top

}

public double peek() {

    // check whether stack is empty

    // if not

    // access item

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237602.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MGs2FzjiEU4bHDF3KN94FncPUBU%3D&Expires=1774267037' alt='OCR图片'/></div>

## Implementation-pop/peek

class StackX {

private int maxSize; // size of stack array

private double[] stackArray;

private int top; //top of the stack

public StackX(int s) { // constructor

maxSize = s; // set array size

stackArray = new double[maxSize];

top = -1; // no items

}

public void push(double j) {

// check whether stack is full

if (top == maxSize - 1)

System.out.println("Stack is full");

else

stackArray[++top] = j;

}

public double pop() {

    if (top == -1)

        return -99;

    else

        return stackArray[top--];

}

public double peek() {

    if (top == -1)

        return -99;

    else

        return stackArray[top];

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237607.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=x4KwgOSdMD%2Bb5UDmyfX2ojuYKDs%3D&Expires=1774267037' alt='OCR图片'/></div>

## Question

isEmpty() method returns true if the stack is empty and isFull() method return true if the Stack is full.

Implement isEmpty() and isFull() methods of the stack class.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237612.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VId8lF4mNT%2F30XT3QzZPmIxAy%2BQ%3D&Expires=1774267037' alt='OCR图片'/></div>

## Creating a stack

## Question

Using the implemented StackX class, Write a program to create a stack with maximum size 10 and insert the following items to the stack.

30 80 100 25

Delete all the items from the stack and display the deleted items.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237618.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QCMeZv7PbtEBgZxhY9h60VuadN4%3D&Expires=1774267037' alt='OCR图片'/></div>

## Creating a stack

```java

class StackApp {

    public static void main(String[] args) {

        StackX theStack = new StackX(10); // create a stack with max size 10

        theStack.push(30); // insert given items

        theStack.push(80);

        theStack.push(100);

        theStack.push(25);

        while( !theStack.isEmpty() ) { // until it is empty, delete item from stack

            double val = theStack.pop();

            System.out.print(val);

            System.out.print(" ");

        }

    }

} // end of class

```

## References

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_1_1773662237625.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=a9rVj1JsQlKDSP5j34LoF0Q6kJs%3D&Expires=1774267037' alt='OCR图片'/></div>

1. Mitchell Waite,Robert Lafore, Data Structures and Algorithms in Java,2nd Edition, Waite Group Press,1998.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026031619564717f509b8312b4613%2Fcrop_2_1773662237630.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nko0APx%2FmAKl%2FTEnfCgjPZROWdE%3D&Expires=1774267037' alt='OCR图片'/></div>