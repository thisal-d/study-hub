<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753581.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kYSXohFKv6Um8VNDE3gT2At1F%2F0%3D&Expires=1788701553' alt='OCR图片'/></div>

SOFTWARE ENGINEERING PROCESS AND QUALITY MANAGEMENT

LECTURE 6

## Software Metrics (Cognitive Functional Size Metric)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753589.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pleuZM7UjD%2B3%2F7mdd1nT3UajihA%3D&Expires=1788701553' alt='OCR图片'/></div>

## Cognitive Functional Size Metric

Paradigm Independent metric.

CFS is a function of three fundamental factors:

## Cognitive Weights

Cognitive weights of Basic

Control Structures (BCSs)

## Inputs

Number of inputs (Ni)

## Outputs

Number of outputs (No)

The cognitive weight of software is the degree of difficulty or effort required to understand a software component based on its control structures

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753596.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PFVEhCe6toGoUENXzYxtLIzT9o8%3D&Expires=1788701553' alt='OCR图片'/></div>

## Basic Control Structures

Sequence Structures

A series of actions completed in a specific order.

## public static void main(String[] args) {

System.out.println("Step 1: Start the program.");

System.out.println("Step 2: Get user input.");

System.out.println("Step 3: Process data.");

System.out.println("Step 4: Display result.");

System.out.println("Step 5: End the program.");

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753601.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3dXc5t8WRS1VJ%2F1E4lxa7HJwA3c%3D&Expires=1788701553' alt='OCR图片'/></div>

## Basic Control Structures

Branch Structures

Executes certain code only when a condition is met.

```java

public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter your age: ");

    int age = scanner.nextInt();

    if (age >= 18) {

        System.out.println("You are eligible to vote.");

    } else {

        System.out.println("You are not eligible to vote.");

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753608.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kC5eMPdpMKJYd7sqwzKqNfjkhPI%3D&Expires=1788701553' alt='OCR图片'/></div>

## Basic Control Structures

Iterative Structures

Executes a code block repeatedly until a condition is met.

```java

public static void main(String[] args) {

    for (int i = 1; i <= 5; i++) {

        System.out.println("Iteration " + i);

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753613.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hlMT%2Boirq8kPcCIILMWMppmW9po%3D&Expires=1788701553' alt='OCR图片'/></div>

## Basic Control Structures

<table border="1"><tr><td>Category</td><td>BCS</td><td>Structure</td><td>Wi</td></tr><tr><td>Sequence</td><td>Sequence (SEQ)</td><td></td><td>1</td></tr><tr><td>Branch</td><td>If-then-[else] (ITE)</td><td></td><td>2</td></tr><tr><td></td><td>Case (CASE)</td><td></td><td>3</td></tr></table>

<table border="1"><tr><td>Category</td><td>BCS</td><td>Structure</td><td>Wi</td></tr><tr><td rowspan="3">Iteration</td><td>For-do(Ri)</td><td></td><td>3</td></tr><tr><td>Do-while(R1)</td><td></td><td>3</td></tr><tr><td>While-do(R0)</td><td></td><td>3</td></tr></table>

<table border="1"><tr><td>Category</td><td>BCS</td><td>Structure</td><td>W1</td></tr><tr><td>Embedded component</td><td>Function call(FC)</td><td></td><td>2</td></tr><tr><td></td><td>Recursion(REC)</td><td></td><td>3</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753618.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Yzzk2KOK4Qlf77g%2FOprqGsCeKXs%3D&Expires=1788701553' alt='OCR图片'/></div>

## Total Cognitive Weight

The total cognitive weight of a software component, Wc is defined as the sum of the cognitive weights of its q linear blocks composed of the individual BCSs.

Since each block may consist of m layers of nesting of BCSs, and each layer of n linear BCSs, Wc is calculated as follows

$$
W _ {c} = \sum_ {j = 1} ^ {q} \left[ \prod_ {k = 1} ^ {m} \sum_ {i = 1} ^ {n} W _ {c} (j, k, i) \right]
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753623.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=W2A8m6jk93sZAokezmIIr8GYz9g%3D&Expires=1788701553' alt='OCR图片'/></div>

## Total Cognitive Weight

If there is no embedded BCS in any of the q blocks, i.e m=1 then the previous equation can be simplified as follows

$$
W _ {c} = \sum_ {j = 1} ^ {q} \sum_ {i = 1} ^ {n} W _ {c} (j, i)
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753629.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DNDkonxb%2BMC%2FCzMucRY4MJdO9R0%3D&Expires=1788701553' alt='OCR图片'/></div>

## Calculating Total Cognitive Weight

<table border="1"><tr><td>Source Code</td><td>Structure of BCSs</td><td>Cognitive Weight</td></tr><tr><td>public void bubbleSort(){int out, in;for(out=nElems-1;out&gt;1;out--)for(in=0;in&lt;out;in++)if(a[in]＞a[in+1])swap(in,in+1);}</td><td>SEQUENCEFORIFFUNCTIONCALL</td><td>WC=∑j=1q[∏m=1n∑i=1Wc(j,k,i)]WC=1+3(3(2(2))WC=1+36WC=37</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753634.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=j3N7horQvzlWas%2BAfzJJDr3STO8%3D&Expires=1788701553' alt='OCR图片'/></div>

## Calculating Total Cognitive Weight

Calculate the Total Cognitive Weight (Wc) for the program below

public static void main(String[] args) {

    String[] modules = {"SEPQM", "DS", "ESD", "AF", "SA"};

    for (int i = 0; i < modules.length; i++) {

        System.out.println(modules[i]);

    }

    System.out.println("In reverse order:");

    for (int i = modules.length - 1; i >= 0; i--) {

        System.out.println(modules[i]);

    }

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753644.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BsTXLDMt1ejViIY6uwrRLC%2Fwq4c%3D&Expires=1788701553' alt='OCR图片'/></div>

## Calculating Total Cognitive Weight

<table border="1"><tr><td>Source Code</td><td>Structure of BCSs</td><td>Cognitive Weight</td></tr><tr><td>public static void main(String[] args) {
String[] modules = {“SEPQM”，“DS”，“ESD”，“AF”，“SA”};
for (int i=0;i&lt;modules.length;i++) {
System.out.println(modules[i]);
}</td><td>SEQUENCE
FOR
FOR</td><td>Wc=∑j=1q∑i=1nWc(j,i)
Wc=1+3+3
Wc=7</td></tr><tr><td>System.out.println(“In reverse order:”);
for (int i=modules.length-1;i&gt;=0;i--) {
System.out.println(modules[i]);
}</td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753649.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lA4v16yjAT9Fyivcan%2BOdDjhZ0U%3D&Expires=1788701553' alt='OCR图片'/></div>

## Cognitive Functional Size of a Basic Component

The cognitive functional size of a basic software component that only consists of one method Sf is defined as a product of the sum of inputs and outputs (Ni/No) and the total cognitive weight (Wc). More formally, it can be defined as follows

$$
S _ {f} = \left(N _ {i} + N _ {o}\right) \times W _ {c}
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753653.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GgyoJXS6MCtHCoA8QFx5Lr7MZfU%3D&Expires=1788701553' alt='OCR图片'/></div>

## Cognitive Functional Size of a Complex Component

The cognitive functional size of a complex software component with n methods Sf(c) is defined as follows

$$
S _ {f} (c) = \sum_ {c = 1} ^ {n} S _ {f} (c)
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753659.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=t0qdapy0ekqO%2BYcbBED073h1AOM%3D&Expires=1788701553' alt='OCR图片'/></div>

## Cognitive Functional Size of a Software System

The cognitive functional size of a component based software system, S, with p components Sf is defined as follows

$$
\hat {S} _ {f} = \sum_ {k = 1} ^ {p} S _ {f} (k)
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753664.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xdO1H%2BiJ5NynQEFhJ87BQzcBKLs%3D&Expires=1788701553' alt='OCR图片'/></div>

## Calculate the Cognitive Functional Size

```java

import java.util.Scanner;

public class Results {

    public static void main(String[] args) {

        System.out.print("Enter your marks: ");

        Scanner sc = new Scanner(System.in);

        int marks = sc.nextInt();

        while(marks < 0 || marks > 100) {

            System.out.print("Enter a valid mark: ");

            marks = sc.nextInt();

        }

        if (marks>75)

            System.out.println("A Pass");

        else if (marks<=75 && marks>65)

            System.out.println("B Pass");

        else if (marks<=65 && marks>45)

            System.out.println("C Pass");

        else

            System.out.println("Fail");

    }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753668.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EPp%2Bw7YXDy0rGNdDG7ey%2BYNMhzU%3D&Expires=1788701553' alt='OCR图片'/></div>

## Calculate the Cognitive Functional Size

<table border="1"><tr><td>Source Code</td><td>Structure of BCSs</td><td>Cognitive Functional Size</td></tr><tr><td>import java.util.Scanner;
public class Results{
public static void main(String[] args){
System.out.print(“Enter your marks:”);
Scanner sc=new Scanner(System.in);
int marks=sc.nextInt();
while(marks&lt;0||marks&gt;100){
System.out.print(“Enter a valid mark:”);
marks=sc.nextInt();
}
if(marks&gt;75)
System.out.println(“A Pass”);
else if(marks&lt;=75&amp;&amp;marks&gt;65)
System.out.println(“B Pass”);
else if(marks&lt;=65&amp;&amp;marks&gt;45)
System.out.println(“C Pass”);
else
System.out.println(“Fail”);
}</td><td>SEQUENCE
WHILE
IF
ELSE IF
ELSE IF</td><td>Wc=∑j=1q[∏k=1m∑i=1nWc(j,k,i)]
Wc=1+3+2+2+2
Wc=10
Ni=2
N0=1(Only one S.O.P statement is excuted at a given time)
Sf=(Ni+N0)×Wc
Sf=(2+1)×10
Sf=30[CWU]</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260830213204192910843d1f47d4%2Fcrop_1_1788096753672.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RPsuJ%2BszSFOMr%2F6XvTTv3XOGnmU%3D&Expires=1788701553' alt='OCR图片'/></div>

THANK YOU!