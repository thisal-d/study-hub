<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148434.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BoSiF4wEz7a38trbDyNKiAtxyd8%3D&Expires=1788667948' alt='OCR图片'/></div>

SOFTWARE ENGINEERING PROCESS AND QUALITY MANAGEMENT

LECTURE 4

## Software Metrics (Weighted Composite Complexity Metric)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148487.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0anovSNDuKGPLATPtdaNIW7P8BU%3D&Expires=1788667948' alt='OCR图片'/></div>

## Weighted Composite Complexity (WCC)

Measure the complexity of the program.

Object Oriented Metric

Based on 4 key factors

Size

Type of control structures

Nesting level of control structures

Inheritance level of statements

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148491.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=26NdRsBqSr%2BU0MYymRlg3aL7bSo%3D&Expires=1788667948' alt='OCR图片'/></div>

## Computing the WCC Value

- WCCM value of a program $ = \sum_{j=1}^{n} S_{j} * (W_{t})_{j} $

- Sj = Size of $ j^{th} $ executable statement in terms of token count

- n = Total number of executable statements in a program

- (Wt)j = Total weight of the $ \mathrm{j}^{th} $ executable statement in the program

- Wt = Wc + Wn + Wi

- Wc = Weight due to type of control structures

- Wn = Weight due to nesting level of control structures

- Wi = Weight due to inheritance level of statements

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148496.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9ZtDxS10Q7CQM3gRgxOILBrMXZM%3D&Expires=1788667948' alt='OCR图片'/></div>

## Identify the Size(s) of a Statement

- The Size (s) of a statement is the total number of tokens it contains.

- In WCC, a token is a fundamental program element used to measure the size of a statement.

- However, not everything in the code is a token.

- Refer to the guidelines document to identify the tokens in a program statement. (uploaded in Courseweb)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148500.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Z9%2B9rpWIPRsc0TQ18pP2kbClfQo%3D&Expires=1788667948' alt='OCR图片'/></div>

## Identify the tokens and the size value of each statement of the following program

<table border="1"><tr><td>Line No</td><td>Program Statements</td></tr><tr><td>1</td><td>public class Result{</td></tr><tr><td>2</td><td>public void outresult(int marks){</td></tr><tr><td>3</td><td>if (marks&gt;-1&&marks&lt;50)</td></tr><tr><td>4</td><td>System.out.println("Fail");</td></tr><tr><td>5</td><td>else</td></tr><tr><td>6</td><td>System.out.println("Pass");</td></tr><tr><td></td><td>}</td></tr><tr><td>7</td><td>public static void main(String args[]){</td></tr><tr><td>8</td><td>Result r=new Result( );</td></tr><tr><td>9</td><td>r.outresult(50);</td></tr><tr><td></td><td>}</td></tr><tr><td></td><td>}</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148505.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Kd%2FayapHXjRnWbTX2NguJjotMMs%3D&Expires=1788667948' alt='OCR图片'/></div>

<div align="center">

Sri Lanka Institute of Information Technology

</div>

<table border="1"><tr><td>Line No</td><td>Program Statements</td><td>Tokens</td><td>Size(S)</td></tr><tr><td>1</td><td>public class Result{</td><td></td><td></td></tr><tr><td>2</td><td>public void outresult(int marks){</td><td>void, outresult()</td><td>2</td></tr><tr><td>3</td><td>if(marks&gt;-1&&marks&lt;50)</td><td>if-else(), marks,&gt;,-1,&&,marks,&lt;,50</td><td>8</td></tr><tr><td>4</td><td>System.out.println("Fail");</td><td>System,·,out,·,println(),"Fail"</td><td>6</td></tr><tr><td>5</td><td>else</td><td></td><td></td></tr><tr><td>6</td><td>System.out.println("Pass");</td><td>System,·,out,·,println(),"Pass"</td><td>6</td></tr><tr><td></td><td>}</td><td></td><td></td></tr><tr><td>7</td><td>public static void main(String args[]){</td><td>void,main()</td><td>2</td></tr><tr><td>8</td><td>Result r=new Result();</td><td>Result,r,=,new,Result()</td><td>5</td></tr><tr><td>9</td><td>r.outresult(50);</td><td>r,·,outresult()</td><td>3</td></tr><tr><td></td><td>}</td><td></td><td></td></tr><tr><td></td><td>}</td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148511.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=X8S0W%2FzYfFAV%2BwWdRwLMYInNg2A%3D&Expires=1788667948' alt='OCR图片'/></div>

## Weight due to Type of Control Structure (Wc)

<table border="1"><tr><td>Type of control structure</td><td>Weight</td></tr><tr><td>Sequential</td><td>0</td></tr><tr><td>Branch</td><td>1</td></tr><tr><td>Iterative</td><td>2</td></tr><tr><td>Switch statement with n cases</td><td>n</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148516.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xhB5yVSDKij5Ozn6W0EtPP1FQGY%3D&Expires=1788667948' alt='OCR图片'/></div>

<table border="1"><tr><td>Line No</td><td>Program Statements</td><td>Tokens</td><td>S</td><td>Wc</td></tr><tr><td>1</td><td>public class Result{</td><td></td><td></td><td></td></tr><tr><td>2</td><td>public void outresult(int marks){</td><td>void, outresult()</td><td>2</td><td>0</td></tr><tr><td>3</td><td>if(marks&gt;-1&&marks&lt;50)</td><td>if-else(), marks, &gt;,-1, &&, marks, &lt;, 50</td><td>8</td><td>1</td></tr><tr><td>4</td><td>System.out.println("Fail");</td><td>System, -, out, -, println(), "Fail"</td><td>6</td><td>0</td></tr><tr><td>5</td><td>else</td><td></td><td></td><td></td></tr><tr><td>6</td><td>System.out.println("Pass");</td><td>System, -, out, -, println(), "Pass"</td><td>6</td><td>0</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td></tr><tr><td>7</td><td>public static void main(String args[]){</td><td>void, main()</td><td>2</td><td>0</td></tr><tr><td>8</td><td>Result r=new Result()</td><td>Result,r,=,new,Result()</td><td>5</td><td>0</td></tr><tr><td>9</td><td>r. outresult(50)</td><td>r, -, outresult()</td><td>3</td><td>0</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td></tr><tr><td></td><td>}</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>WCC Value</td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148520.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tzEIIdmPtH4V3cNCSAdTQvKxKJ8%3D&Expires=1788667948' alt='OCR图片'/></div>

## Weight due to Nesting level of Control Structure (Wn)

<table border="1"><tr><td>Nesting Level of Statements</td><td>Weight</td></tr><tr><td>Sequential statements</td><td>0</td></tr><tr><td>Statements inside the outer most level/first level of control structures</td><td>1</td></tr><tr><td>Statements inside the second level control structures</td><td>2</td></tr><tr><td>Statements inside the third level control structures</td><td>3</td></tr><tr><td>Statements inside the nth level control structures</td><td>n</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148525.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=beINRU6Y%2BlW1qRFyGLfvF4G9fB8%3D&Expires=1788667948' alt='OCR图片'/></div>

<table border="1"><tr><td>Line No</td><td>Program Statements</td><td>Tokens</td><td>S</td><td>Wc</td><td>Wn</td></tr><tr><td>1</td><td>public class Result{</td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td>public void outresult(int marks){</td><td>void, outresult()</td><td>2</td><td>0</td><td>0</td></tr><tr><td>3</td><td>if(marks&gt;-1&&marks&lt;50)</td><td>if-else(), marks,&gt;,-1,&&,marks,&lt;,50</td><td>8</td><td>1</td><td>1</td></tr><tr><td>4</td><td>System.out.println("Fail");</td><td>System,·,out,·,println(),"Fail"</td><td>6</td><td>0</td><td>1</td></tr><tr><td>5</td><td>else</td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>System.out.println("Pass");</td><td>System,·,out,·,println(),"Pass"</td><td>6</td><td>0</td><td>1</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>public static void main(String args[]){</td><td>void,main()</td><td>2</td><td>0</td><td>0</td></tr><tr><td>8</td><td>Result r=new Result();</td><td>Result,r,=,new,Result()</td><td>5</td><td>0</td><td>0</td></tr><tr><td>9</td><td>r. outresult(50);</td><td>r,·,outresult()</td><td>3</td><td>0</td><td>0</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148533.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=o%2BJ0SDLTJ9haF%2FfZofOlZpJE244%3D&Expires=1788667948' alt='OCR图片'/></div>

## Weight due to Inheritance level of Statements (Wi)

<table border="1"><tr><td>Inheritance Level of Statements</td><td>Weight</td></tr><tr><td>Statements inside the base class/root class</td><td>0</td></tr><tr><td>Statements inside the first derived class</td><td>1</td></tr><tr><td>Statements inside the second derived class</td><td>2</td></tr><tr><td>Statements inside the nth derived class</td><td>n</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148538.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AU%2B67yo3QZ%2BmYexby4iA7gX%2Bhuo%3D&Expires=1788667948' alt='OCR图片'/></div>

<table border="1"><tr><td>Line No</td><td>Program Statements</td><td>Tokens</td><td>S</td><td>Wc</td><td>Wn</td><td>Wi</td></tr><tr><td>1</td><td>public class Result{</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td>public void outresult(int marks){</td><td>void, outresult()</td><td>2</td><td>0</td><td>0</td><td>1</td></tr><tr><td>3</td><td>if(marks&gt;-1&&marks&lt;50)</td><td>if-else(), marks,&gt;,-1,&&,marks,&lt;,50</td><td>8</td><td>1</td><td>1</td><td>1</td></tr><tr><td>4</td><td>System.out.println("Fail");</td><td>System,-,out,-,println(),"Fail"</td><td>6</td><td>0</td><td>1</td><td>1</td></tr><tr><td>5</td><td>else</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>System.out.println("Pass");</td><td>System,-,out,-,println(),"Pass"</td><td>6</td><td>0</td><td>1</td><td>1</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>public static void main(String args[]){</td><td>void, main()</td><td>2</td><td>0</td><td>0</td><td>1</td></tr><tr><td>8</td><td>Result r=new Result();</td><td>Result,r,=,new,Result()</td><td>5</td><td>0</td><td>0</td><td>1</td></tr><tr><td>9</td><td>r. outresult(50);</td><td>r,-,outresult()</td><td>3</td><td>0</td><td>0</td><td>1</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148544.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=y0BlKfQCAkIitf%2FfbIUbYboXNFA%3D&Expires=1788667948' alt='OCR图片'/></div>

## Total Weight (Wt)

Total Weight of a statement. It combines three dimensions of complexity into one value:

$$
W t = W c + W n + W i
$$

Wc = Weight due to Type of Control Structure

Wn = Weight due to Nesting Level

Wi = Weight due to Inheritance Level

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148549.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zs0I433I6W62FjP9vH%2BD1W4nL3U%3D&Expires=1788667948' alt='OCR图片'/></div>

<table border="1"><tr><td>Line No</td><td>Program Statements</td><td>Tokens</td><td>S</td><td>Wc</td><td>Wn</td><td>Wi</td><td>Wt</td></tr><tr><td>1</td><td>public class Result{</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td>public void outresult(int marks){</td><td>void, outresult()</td><td>2</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>3</td><td>if(marks&gt;-1&&marks&lt;50)</td><td>if-else(),marks,&gt;,-1,&&,marks,&lt;,50</td><td>8</td><td>1</td><td>1</td><td>1</td><td>3</td></tr><tr><td>4</td><td>System.out.println("Fail");</td><td>System,-,out,-,println(),"Fail"</td><td>6</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>5</td><td>else</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>System.out.println("Pass");</td><td>System,-,out,-,println(),"Pass"</td><td>6</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>public static void main(String args[]){</td><td>void,main()</td><td>2</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>8</td><td>Result r=new Result()</td><td>Result,r,=,new,Result()</td><td>5</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>9</td><td>r. outresult(50)</td><td>r,-,outresult()</td><td>3</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>WCC Value</td><td></td><td></td><td></td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148553.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FCB3sMGfxHej6oix9r26D%2FC%2FcHo%3D&Expires=1788667948' alt='OCR图片'/></div>

## Weighted Complexity for a Single Statement (WC)

It tells us how complex that one line is by factoring in:

- How many tokens it contains (Size S)

- How "heavy" or complex its context is (Total Weight Wt)

$$
W C = S \times W t
$$

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148558.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GEaJeNT3XgN47sqW5zfELWCWuc0%3D&Expires=1788667948' alt='OCR图片'/></div>

<table border="1"><tr><td>Line No</td><td>Program Statements</td><td>Tokens</td><td>S</td><td>Wc</td><td>Wn</td><td>Wi</td><td>Wt</td><td>WC</td></tr><tr><td>1</td><td>public class Result{</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td>public void outresult(int marks){</td><td>void, outresult()</td><td>2</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>3</td><td>if(marks&gt;-1&&marks&lt;50)</td><td>if-else(),marks,&gt;,-1,&&,marks,&lt;,50</td><td>8</td><td>1</td><td>1</td><td>1</td><td>3</td><td>24</td></tr><tr><td>4</td><td>System.out.println("Fail");</td><td>System,·,out,·,println(),"Fail"</td><td>6</td><td>0</td><td>1</td><td>1</td><td>2</td><td>12</td></tr><tr><td>5</td><td>else</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>System.out.println("Pass");</td><td>System,·,out,·,println(),"Pass"</td><td>6</td><td>0</td><td>1</td><td>1</td><td>2</td><td>12</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>public static void main(String args[]){</td><td>void,main()</td><td>2</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>8</td><td>Result r=new Result()</td><td>Result,r,=,new,Result()</td><td>5</td><td>0</td><td>0</td><td>1</td><td>1</td><td>5</td></tr><tr><td>9</td><td>r. outresult(50);</td><td>r,·,outresult()</td><td>3</td><td>0</td><td>0</td><td>1</td><td>1</td><td>3</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148562.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XAQ8gO4hMdAFsQukb%2FCRHmw%2F9Zc%3D&Expires=1788667948' alt='OCR图片'/></div>

## Weighted Composite Complexity for the Program (WCC)

The final WCC is the sum of all WC values for each line.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148568.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HwSDD9DIN0NZlQukppH7vnFjFN4%3D&Expires=1788667948' alt='OCR图片'/></div>

<table border="1"><tr><td>Line No</td><td>Program Statements</td><td>Tokens</td><td>S</td><td>Wc</td><td>Wn</td><td>Wi</td><td>Wt</td><td>WC</td></tr><tr><td>1</td><td>public class Result{</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td>public void outresult(int marks){</td><td>void, outresult()</td><td>2</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>3</td><td>if(marks&gt;-1&&marks&lt;50)</td><td>if-else(),marks,&gt;,-1,&&,marks,&lt;,50</td><td>8</td><td>1</td><td>1</td><td>1</td><td>3</td><td>24</td></tr><tr><td>4</td><td>System.out.println("Fail");</td><td>System,·,out,·,println(),"Fail"</td><td>6</td><td>0</td><td>1</td><td>1</td><td>2</td><td>12</td></tr><tr><td>5</td><td>else</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>System.out.println("Pass");</td><td>System,·,out,·,println(),"Pass"</td><td>6</td><td>0</td><td>1</td><td>1</td><td>2</td><td>12</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>public static void main(String args[]){</td><td>void,main()</td><td>2</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>8</td><td>Result r=new Result()</td><td>Result,r,=,new,Result()</td><td>5</td><td>0</td><td>0</td><td>1</td><td>1</td><td>5</td></tr><tr><td>9</td><td>r. outresult(50);</td><td>r,·,outresult()</td><td>3</td><td>0</td><td>0</td><td>1</td><td>1</td><td>3</td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>WCC Value</td><td></td><td></td><td></td><td></td><td></td><td>60</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301211599e9c38abdf554b7d%2Fcrop_1_1788063148573.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=f5%2BWiuyzg%2BHQRHGaCUbq%2FzyQaMY%3D&Expires=1788667948' alt='OCR图片'/></div>

THANK YOU!