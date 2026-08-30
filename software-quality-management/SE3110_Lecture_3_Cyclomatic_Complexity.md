<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047126.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Yj7D3E8UFBKZc%2BXvAim28wd52Q8%3D&Expires=1788667847' alt='OCR图片'/></div>

SOFTWARE ENGINEERING PROCESS AND QUALITY MANAGEMENT

LECTURE 3

## Software Metrics (Cyclomatic Complexity Measure)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047132.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1f%2BDCWAvhOO0Q2ihs1qP8LOgSBg%3D&Expires=1788667847' alt='OCR图片'/></div>

## How Can Software Quality Be Measured

Software quality metrics:

Code Quality

Reliability

Correctness

Performance

Maintainability

Usability

Integrity

Security

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047143.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Bh7oMjijIMBoJcIFZ%2FlTYTpGa5k%3D&Expires=1788667847' alt='OCR图片'/></div>

## Why are these metrics important

- They help developers track and improve software quality.

- They ensure users get a good experience.

- They reduce risks and costs related to software failures.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047148.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=D62g%2Feke4IW1EiEBH%2B8bBOkOm8k%3D&Expires=1788667847' alt='OCR图片'/></div>

## Approaches to Measure the cyclomatic complexity

Explain some approaches that can be used to measure the Cyclomatic Complexity of a program

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047153.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=09zap%2FqLGW1ncrc02wyo7m6k4UY%3D&Expires=1788667847' alt='OCR图片'/></div>

## Cyclomatic Complexity Measure

Measures the number of linearly independent paths in a program.

$$
\mathrm {V} (\mathrm {G}) = \mathrm {e} - \mathrm {n} + 2
$$

V(G) = d+1

Vg = No of decision statements in each method + No of methods in a class

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047158.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dKF2JS%2FgfsqbKrCFitZfDRQeX2g%3D&Expires=1788667847' alt='OCR图片'/></div>

## Calculating Cyclomatic Complexity of a Byte Code

Calculate the cyclomatic complexity of the following bytecode?

<table border="1"><tr><td colspan="2">Method void D1(boolean,java.lang.String,java.lang.String)</td></tr><tr><td>0</td><td>iload_0</td></tr><tr><td>1</td><td>ifeq 14</td></tr><tr><td>4</td><td>getstatic #2&lt;Field java.io.PrintStream out&gt;</td></tr><tr><td>7</td><td>aload_1</td></tr><tr><td>8</td><td>invokevirtual #3&lt;Method void println(java.lang.String)&gt;</td></tr><tr><td>11</td><td>goto 21</td></tr><tr><td>14</td><td>getstatic #2&lt;Field java.io.PrintStream out&gt;</td></tr><tr><td>17</td><td>aload_2</td></tr><tr><td>18</td><td>invokevirtual #3&lt;Method void println(java.lang.String)&gt;</td></tr><tr><td>21</td><td>return</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047161.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FwBCncFOQ41Z4AgbPBI%2FNbKBv3M%3D&Expires=1788667847' alt='OCR图片'/></div>

## Calculating Cyclomatic Complexity of a Compound Statements

- You can't expect the same cyclomatic complexity from all the approaches

- The CC value obtained from the class file can be higher than CC obtained from the source file

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047165.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=E2Dn0Fkcd5sfnPwJf2KG9zvWCTg%3D&Expires=1788667847' alt='OCR图片'/></div>

## How to draw the Control Flow Graph

- To represent a start or a stop node use the notation

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047169.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6m4%2B0t3Ab6zCZVL9TLHIPyrj9c8%3D&Expires=1788667847' alt='OCR图片'/></div>

- To represent an intermediary node use the notation

- Start node, stop node, decision nodes and true/false paths have to be labeled.

- Edges should always indicate the directions.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_3_1788063047176.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xYjGUG%2B3WOYuo%2BUuxC5b%2Fn0scNE%3D&Expires=1788667847' alt='OCR图片'/></div>

- Along with a start node, procedure nodes, and decisions can also be represented.

- A procedure node represents one or more non-decisional statements.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047180.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Zos1Yy5%2FhoypN9%2Bpfv71KYdmxiQ%3D&Expires=1788667847' alt='OCR图片'/></div>

## Control Flow Graph

int p;

if(p <10)

## System.out.println("Value of pis less than 10"); else

System.out.println("Value of pis a grater than or equal to 10");

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047185.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7akP6bCT0rjh3yqCEZZOa09YR3w%3D&Expires=1788667847' alt='OCR图片'/></div>

## Control Flow Graph

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047189.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rLk8vBiY4M8uuBl95JYyThsER8s%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047194.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PeRWHxwzm7afy5FXkxEwjyxYEMg%3D&Expires=1788667847' alt='OCR图片'/></div>

## Control Flow Graph

start, decision(if)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047198.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Bjs6C5yMC%2BGLjEUdYozWWAwj570%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047206.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1Qg7RYqcjlqSqlEmAcoDITdmPbU%3D&Expires=1788667847' alt='OCR图片'/></div>

## Control Flow Graph

start, decision(if)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047218.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yLw389wf9REUrRrqMaM7GmmFBw4%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_3_1788063047223.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xdV9QXl3Tn9pbGDcxqTDSyWtBWY%3D&Expires=1788667847' alt='OCR图片'/></div>

$$
\begin{array}{l} V (G) = e - n + 2 \\ = 4 - 4 + 2 \\ = 2 \\ \end{array}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047227.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qiV9%2By6elpNWK7bWzGEnTtuuthg%3D&Expires=1788667847' alt='OCR图片'/></div>

## Cyclomatic Complexity of a Class

Total Cyclomatic Complexity = Sum of the cyclomatic complexity for a class $ \left( V_{g}\right) $ of each method

$$
V _ {\mathrm {g}} = \sum_ {\mathrm {i} = 1} ^ {\mathrm {n}} V \left(G _ {\mathrm {i}}\right)
$$

Where:

$$
V _ {\mathrm {g}} = \sum_ {\mathrm {i} = 1} ^ {\mathrm {n}} \left(d _ {\mathrm {i}} + 1\right)
$$

n = Number of methods in the class

$ \mathrm{G_{i}} $ = Flow graph for method i

$$
V _ {\mathrm {g}} = \mathrm {n} + d _ {\mathrm {i}}
$$

$ d_{i} $ = Number of decisions in method i

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047233.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=E69w9HlapuKZYUdZcmqxexMfbR8%3D&Expires=1788667847' alt='OCR图片'/></div>

## How has the V(G) = d+1 equation derived from V(G) = e-n+2

Nodes in a control flow graph:

- Decision nodes (d)

- Procedure nodes (p)

- Start node

- Stop node

Total number of nodes in a control flow graph = d+p+1

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047237.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wDI1jWYEQUIs5Sr74jGXLinaTbU%3D&Expires=1788667847' alt='OCR图片'/></div>

## How has the $ \mathrm{V(G)}=\mathrm{d}+1 $ equation derived from $ \mathrm{V(G)}=\mathrm{e}-\mathrm{n}+2 $

Edges in a control flow graph:

Total number of edges in a control flow graph = 2d+1p

Decision node (d)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047242.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DH8%2F30XorOmTJtsYfYv0KcKB9wA%3D&Expires=1788667847' alt='OCR图片'/></div>

Procedure node (p)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_3_1788063047246.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dXSZ7r59Gq%2BT%2FLI4cRSP50CyyG8%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047250.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QoJZVoEOyPL3OmQwXKNnmcdBFvU%3D&Expires=1788667847' alt='OCR图片'/></div>

How has the V(G) = d+1 equation derived from V(G) = e-n+2

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047255.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=sivszdpFKhsSnf2CbQxpQIZoo4M%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047260.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eGVHYMeDakiFzJs0uTBHAHY49%2Bg%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 1

```java

public static void D0 (boolean a, String x){

if(a)

    System.out.println("x");

}

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047267.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kw02kG%2BXno9piM20xHhbgClunxA%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 1 - Answer

```java

public static void D0 (boolean a, String x){

if(a)

    System.out.println("x");

}

}

```

start, decision(if)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047271.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GO2PCwwKxo%2FuoquB1OAHbsVdZqs%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047275.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LDtT64ebyCAhmN2BpdmXTvNmvFk%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 2

```java

public static void D1 (boolean a, String x, String y) {

if(a)

    System.out.println("x");

else

    System.out.println("y");

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047280.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MgFc5lEPETcjRL8xJQcLQagqbLk%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 2 - Answer

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047284.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FC1gdD51i%2FmwbN%2F3l3NvaJYqmFU%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047289.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=OvWbDg9WTpctegX4Ib2IIAqYPdo%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 3

public static void D3(int m, String x) {

for(int i=0; i<m; i++)

System.out.println("x");

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047293.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uYMtnhvRj9%2FzMNbOG18ylXMyzeE%3D&Expires=1788667847' alt='OCR图片'/></div>

Question 3 - Answer

start, decision(for)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047304.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eODsNElDIOg3UMzl7qBqGvbHO4k%3D&Expires=1788667847' alt='OCR图片'/></div>

stop

$$
\begin{array}{l} V (G) = e - n + 2 \\ = 3 - 3 + 2 \\ = 2 \\ \end{array}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047308.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GD8b1C7mkUSBLWW7OJvuHWsphe8%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 4

```java

public static void D3(int a, String x) {

do

{

System.out.println("x");

a++;

} while (a <10)

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047312.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YN8rTzztW07JtVNE2uVvcD7789s%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 4 - Answer

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047316.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oSGCDF2BrVwCZhvkiLpILes9PWg%3D&Expires=1788667847' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047325.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rKwNBSWcSQBzU%2B%2BGULCBA1qlW50%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 5

```java

void composite (boolean a, boolean b, String x, String y, String z) {

    if (a)

        System.out.println(x);

    else {

        if (b)

            System.out.println(y);

        else

            System.out.println(z);

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047329.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bhle9wfye48YMeguWoq3I0D8FNg%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 5 - Answer

Start, decision (if)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047335.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5Czuiahq2%2FvZrbjgg5rAbQpFOyg%3D&Expires=1788667847' alt='OCR图片'/></div>

$$
\begin{array}{l} V (G) = e - n + 2 \\ = 7 - 6 + 2 \\ = 3 \\ \end{array}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047339.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jz1TwjkAx07FVMrdHJTrjN6Ajkc%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 6

```java

public static void main (String[ ] args) {

    int i = 0;

    switch (i) {

    case 1: System.out.println("its 1");

        break;

    case 2: System.out.println("its 2");

        break;

    case 3: System.out.println("its 3");

        break;

    default: System.out.println("its none");

        break;

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047343.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LBlkapzhqUuBkRsaa5uZQXkNC2I%3D&Expires=1788667847' alt='OCR图片'/></div>

## Question 6 - Answer

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_2_1788063047347.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lUOP7ZIiofoFWPTyegEQbcLV6FI%3D&Expires=1788667847' alt='OCR图片'/></div>

$$
\begin{array}{l} V (G) = e - n + 2 \\ = 8 + 6 + 2 \\ = 4 \\ \end{array}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830121023a61fdc4046074964%2Fcrop_1_1788063047352.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cQJ%2BnpoyWe5T3l7x7aIWPUhVzYY%3D&Expires=1788667847' alt='OCR图片'/></div>

THANK YOU!