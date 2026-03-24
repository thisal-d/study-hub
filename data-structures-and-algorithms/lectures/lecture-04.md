<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490073.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=etIPzbhJ9KTlGb56lU6pnRMfJsg%3D&Expires=1774267290' alt='OCR图片'/></div>

## IT1170-Data Structures and Algorithms

Lecture 04

Introduction to Queue

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490082.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8Wev9%2FWYyyHsgdIMZz%2FKyP%2B%2BrY8%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queues

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490087.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jtVNy%2FpZ1BQdIZf%2FOobZBKMhnPY%3D&Expires=1774267290' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_3_1773662490108.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fRXxo7qFAaymAhKWBMJSfxiqfJw%3D&Expires=1774267290' alt='OCR图片'/></div>

- Imagine a queue in real life

- The first item inserted is the first item to be removed

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490119.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=A5Ijah69T%2Fs4mYJ%2B%2BtBbrwG%2BfLM%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queues

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490126.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nvnmtqkxIvsE%2B9Lu7bXA5Cxun6o%3D&Expires=1774267290' alt='OCR图片'/></div>

- In a queue all insertions are made at the Rear end and deletions are made at the Front end.

- Insertions and deletions are restricted from the Middle of the Queue.

- Adding an item is called insert

- Removing an item is called remove

- The elements are inserted and removed according to the First-In-First-Out (FIFO) principle.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490138.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4q%2Bp6zzOa8sUmvpQJkYa%2B%2FrjXSQ%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue - Insert

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490144.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IypkFb7LusJ22RAk%2FQ2JcNw89Tc%3D&Expires=1774267290' alt='OCR图片'/></div>

Before inserting

Item 45 is inserted to the rear

After inserting

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490150.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FDwvF4F%2Fc7nHrsV7GF5sl4Tx5Xw%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue - Remove

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490156.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=U40i310Wak0KHRCDmYCVn7wpIDI%3D&Expires=1774267290' alt='OCR图片'/></div>

Before removing

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_3_1773662490165.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MfF877HObveGLGv72LGizAH1Kfs%3D&Expires=1774267290' alt='OCR图片'/></div>

Front item is removed

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_4_1773662490177.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=29G8Czoni54AxUQZ4Y9bpDw7MfM%3D&Expires=1774267290' alt='OCR图片'/></div>

After removing

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490184.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0eaUi936iXUNDelMExN37IbRneE%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue - PeekFront

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490192.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Njle9e28nN081rRCnQZGtewraRE%3D&Expires=1774267290' alt='OCR图片'/></div>

Peek is used to read the value from the Front of the queue without removing it. You can peek only the Front item, all the other items are invisible to the queue user.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490202.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=j3%2BH4R%2FtHUf2eOcKPCY0RsPiZbg%3D&Expires=1774267290' alt='OCR图片'/></div>

## Question 01

Draw the Queue frame after performing the below operations to the queue given below.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490214.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FSFmPT6OKjmWecd5JN90LhYNkUE%3D&Expires=1774267290' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_3_1773662490222.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Ccdzkjnp3BLEu0qqRBBm6b2c4oE%3D&Expires=1774267290' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490228.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KOFa65CzClp%2FscQDX4uMo3Mt03w%3D&Expires=1774267290' alt='OCR图片'/></div>

## Uses of Queue

- There are various queues quietly doing their job in a computer's operating system.

- printer queue

- stores keystroke data as you type at the keyboard

- pipeline

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490247.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2BlDWlP5eYNBtCqIP25HORAfrvM%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue - Implementation

Queue implementation using an array with restricted access

- Constructor creates a new Queue of a size specified in its argument.

- Variable `front`, which stores the index of the item on the front of the queue.

- Variable `rear`, which stores the index of the item on the end of the queue.

- Variable `nItems`, which stores the total number of the items in the queue.

```java

class QueueX {

    private int maxSize;    // size of queue array

    private int [] queArray;

    private int front;       //front of the queue

    private int rear;       //rear of the queue

    private int nItems;     //no of items of the queue

    public QueueX (int s) { // constructor

        maxSize = s;     // set array size

        queArray = new int [maxSize];

        front = 0;

        rear = -1;

        nItems = 0;      // no items

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490253.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Kf%2Ff5GV3TiUkx8y6J%2F32lClFixs%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue-Implementation-insert

class QueueX {

    private int maxSize; // size of queue array

    private int [] queArray;

    private int front; //front of the queue

    private int rear; //rear of the queue

    private int nItems; //no of items of the queue

    public QueueX(int s) { // constructor

        maxSize = s; // set array size

        queArray = new int [maxSize];

        front = 0;

        rear = -1;

        nItems = 0; // no items

    }

    public void insert(int j) {

        // increment rear

        // insert an item

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490263.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8WS2hoq%2By3eidAPL9gOGcw0N4J0%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue-Implementation-insert

class QueueX {

    private int maxSize;    // size of queue array

    private int [] queArray;

    private int front;        //front of the queue

    private int rear;        //rear of the queue

    private int nItems;    //no of items of the queue

    public QueueX(int s) { // constructor

        maxSize = s;    // set array size

        queArray = new int [maxSize];

        front = 0;

        rear = -1;

        nItems = 0;    // no items

    }

    public void insert(int j) {

        // increment rear and insert an item

        queArray[++rear] = j;

        nItems++;

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490268.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ruOT1t8GTZnY4%2BdETw3IokzZyhw%3D&Expires=1774267290' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490291.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nLaKqwKfgwE0v3YObXHvnIrDf9U%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue-Implementation-insert

```java

class QueueX {

    private int maxSize;    // size of queue array

    private int [] queArray;

    private int front;      //front of the queue

    private int rear;      //rear of the queue

    private int nItems;    //no of items of the queue

    public QueueX(int s) {// constructor

        maxSize = s;     // set array size

        queArray = new int [maxSize];

        front = 0;

        rear = -1;

        nItems = 0;      // no items

    }

}

public void insert(int j) {

    // check whether queue is full

    if (rear == maxSize - 1)

        System.out.println("Queue is full");

    else {

        queArray[++rear] = j;

        nItems++;

    }

}

}

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490296.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0kmEngcwg3EVzCfCUuMlppRLuoA%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue-Implementation-remove/peekFront

```java

class QueueX {

    private int maxSize;    // size of queue array

    private int [] queArray;

    private int front;       //front of the queue

    private int rear;       //rear of the queue

    private int nItems;    //no of items of the queue

    public QueueX(int s) { // constructor

        maxSize = s;     // set array size

        queArray = new int [maxSize];

        front = 0;

        rear = -1;

        nItems = 0;      // no items

    }

    public void insert(int j) {

        // check whether queue is full

        if (rear == maxSize - 1)

            System.out.println("Queue is full");

        else {

            queArray[++rear] = j;

            nItems++;

        }

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490301.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LE2JPSgT2UfVwKWmMjp8MD12WNI%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue-Implementation-remove

```java

class QueueX{

    private int maxSize;    // size of queue array

    private int [] queArray;

    private int front;      //front of the queue

    private int rear;      //rear of the queue

    private int nItems;    //no of items of the queue

    public QueueX(int s) {// constructor

        maxSize = s;     // set array size

        queArray = new int [maxSize];

        front = 0;

        rear = -1;

        nItems = 0;      // no items

    }

    public void insert(int j) {

        // check whether queue is full

        if (rear == maxSize - 1)

            System.out.println("Queue is full");

        else {

            queArray[++rear] = j;

            nItems++;

        }

    }

}

```

public int remove() {

    if (nItems == 0) {

        System.out.println("Queue is empty");

        return -99;

    }

    else {

        nItems--;

        return queArray[front++];

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490306.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=G7h3Q63srYUmkRAZ25fncblrYDg%3D&Expires=1774267290' alt='OCR图片'/></div>

## Queue-Implementation-peekFront

```java

class QueueX{

    private int maxSize;    // size of queue array

    private int [] queArray;

    private int front;      //front of the queue

    private int rear;      //rear of the queue

    private int nItems;    //no of items of the queue

    public QueueX(int s) {// constructor

        maxSize = s;     // set array size

        queArray = new int [maxSize];

        front = 0;

        rear = -1;

        nItems = 0;      // no items

    }

    public void insert(int j) {

        // check whether queue is full

        if (rear == maxSize - 1)

            System.out.println("Queue is full");

        else {

            queArray[++rear] = j;

            nItems++;

        }

    }

}

```

public int peekFront() {

    if (nItems == 0) {

        System.out.println("Queue is empty");

        return -99;

    }

    else {

        return queArray[front];

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490312.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pNtcXDU5HKfuSIXUKQp51idMwcM%3D&Expires=1774267290' alt='OCR图片'/></div>

## Question 02

isEmpty() method of the Queue class returns true if the Queue is empty and isFull() method returns true if the Queue is full.

Implement isEmpty() and isFull() methods of the Queue class.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490320.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BhsdzsNBUHfv%2Bxv4UoAASRsOXds%3D&Expires=1774267290' alt='OCR图片'/></div>

## Question 03

Draw the Queue frame after performing the below operations to the queue given below.

<table border="1"><tr><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>67</td><td>12</td><td>22</td><td>55</td><td>34</td><td>70</td><td>60</td></tr><tr><td colspan="6">Front</td><td>Rear</td></tr><tr><td>i)</td><td>remove</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>ii)</td><td>remove</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>iii)</td><td>remove</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>iv)</td><td>Insert item 88</td><td></td><td></td><td></td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490326.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=o8aS7IsaVhkWRq%2BQU4%2FgvQdjruw%3D&Expires=1774267290' alt='OCR图片'/></div>

## Question 03 Contd..

Draw the Queue frame after performing the below operations to the queue given below.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490340.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=f9ppNIcnBwzwKZvXHgan1UC8l3Q%3D&Expires=1774267290' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490348.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kaYGYJYnovACxE7Gi6ArhERkbMM%3D&Expires=1774267290' alt='OCR图片'/></div>

How to overcome this situation??

We can use a Circular Queue

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490360.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eA6QE4YAeavNZ2GDqWSn8OakkCI%3D&Expires=1774267290' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490377.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xOsXA%2B26Xj4UywRD6mAqEtcfN%2FQ%3D&Expires=1774267290' alt='OCR图片'/></div>

## Circular Queue

- Circular queues are queues that wrap around themselves.

- These are also called ring buffers.

- The problem in using the linear queue can be overcome by using circular queue.

- When we want to insert a new element we can insert it at the beginning of the queue.

i.e. if the queue is not full we can make the rear start from the beginning by wrapping around

If rear was 3 then the next element should be stored in index 4 If rear was 7 then the next element should be stored in index 0

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490383.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5a210%2FseSp%2Flswp6gH3iZX0DoHk%3D&Expires=1774267290' alt='OCR图片'/></div>

## Question 04

Draw the Queue frame after performing the below operations to the circular queue given below.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490388.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dpuoYEuk%2Fky6SZxHxoTIpigOMLA%3D&Expires=1774267290' alt='OCR图片'/></div>

i) insert(14);

ii) insert(29);

iii) insert(33);

iv) insert(88);

v) peekFront();

vi) remove();

vii) remove();

viii) insert(90);

ix) insert(100);

x) peekFront();

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490395.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=M7Qyb5HzuutNSXM5q2D6dT1KhJw%3D&Expires=1774267290' alt='OCR图片'/></div>

## Inserting an element to Linear Queue

## Inserting an element to Circular Queue

```java

public void insert(int j) {

    // check whether queue is full

    if ( rear == maxSize - 1)

        System.out.println("Queue is full");

    else {

        queArray[++rear] = j;

        nItems++;

    }

}

}

```

```java

public void insert(int j) {

    // check whether queue is full

    if (nItems == maxSize)

        System.out.println("Queue is full");

    else {

        if(rear == maxSize - 1)

            rear = -1;

        queArray[++rear] = j;

        nItems++;

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490400.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=s1XJM%2FMU5bTRqZrtNUUdlXdXBnw%3D&Expires=1774267290' alt='OCR图片'/></div>

## Removing an element from Linear Queue

## Removing an element from Circular Queue

```java

public int remove() {

    // check whether queue is empty

    if ( nItems == 0)

        System.out.println("Queue is empty");

    else {

        nItems--;

        return queArray[front++];

    }

}

```

public int remove() {

    // check whether queue is empty

    if ( nItems == 0)

        System.out.println("Queue is empty");

    else {

        int temp = queArray[front++];

        if (front == maxSize)

            front = 0;

        nItems--;

        return temp;

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490406.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=j2sXUdhDAPrNaURknysR13nhNu4%3D&Expires=1774267290' alt='OCR图片'/></div>

## Question 05

Implement isFull(), isEmpty() and peekFront() methods of the Circular Queue class.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490412.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Tq%2Fo4%2FWEj63fjhxZMi1SfJMSA3w%3D&Expires=1774267290' alt='OCR图片'/></div>

<div align="center">

# Question 06 Creating a Queue

</div>

Using the implemented QueueX class, Write a program to create a queue with maximum size 10 and insert the following items to the queue.

<table border="1"><tr><td>10</td><td>25</td><td>55</td><td>65</td><td>85</td></tr></table>

Delete all the items from the queue and display the deleted items.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490417.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=sFyq9JEK%2Bdab3JmwRZIOURyruRo%3D&Expires=1774267290' alt='OCR图片'/></div>

## Creating a Queue

```java

class QueueApp {

    public static void main(String[] args) {

        QueueX theQueue = new QueueX(10); // create a queue with max size 10

        theQueue. insert(10); // insert given items

        theQueue. insert(25);

        theQueue. insert(55);

        theQueue. insert(65);

        theQueue. insert(85);

        while( !theQueue.isEmpty() ) { // until it is empty, delete item from queue

            int val = theQueue.remove();

            System.out.print(val);

            System.out.print(" ");

        }

    }

} // end of class

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_1_1773662490422.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9FCBQ60XhFQ%2F093Dk6AHHng%2BCis%3D&Expires=1774267290' alt='OCR图片'/></div>

## References

1. Mitchell Waite,Robert Lafore, Data Structures and Algorithms in Java,2nd Edition, Waite Group Press,1998.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260316200045daf68b27f98448a8%2Fcrop_2_1773662490429.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nUJv9O3mzG9n%2FjvCbGdmFqrW5jw%3D&Expires=1774267290' alt='OCR图片'/></div>