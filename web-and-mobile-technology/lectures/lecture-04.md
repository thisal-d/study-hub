<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900201.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ywWZeJexT7Z6efmw4n3jyhEqkVY%3D&Expires=1773948700' alt='OCR图片'/></div>

## SE2020-Web Technologies and Mobile

Lecture 04

Html DOM

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_2_1773343900256.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RNl%2FG%2Fx0woVE3n7N5Gy8I5Ygxt0%3D&Expires=1773948700' alt='OCR图片'/></div>

## Introduction to the HTML DOM (Document Object Model)

- We will only cover aspects of the DOM that we need to read/change form element values/settings, document content and document style attributes

- The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents.

- The document can be further processed and the results of that processing can be incorporated back into the presented page. This is an overview of DOM-related materials here at W3C and around the web. (W3C)

- The HTML DOM model is constructed as a tree of Objects, created by the browser, so we can quickly find HTML elements using JavaScript

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900262.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=M%2FSeyBhKe20lsKnUxRlRcvSNfPo%3D&Expires=1773948700' alt='OCR图片'/></div>

## DOM

```html

<html>

<head>

<title>Webpage Title</title>

</head>

<body>

<div>

<h1>This is Heading Tag</h1>

<p>Some Text Content</p>

<ul>

<li>List Item</li>

</ul>

</div>

</body>

</html>

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900268.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ICLSyTCEc%2BpqSpLCi7ii6FWgZFA%3D&Expires=1773948700' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_2_1773343900276.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bBQ2rsSduVppaW59F%2FOqNR%2FunMA%3D&Expires=1773948700' alt='OCR图片'/></div>

## JavaScript and the DOM

## JavaScript can be used to

change HTML elements in the page

change HTML attributes in the page

change the CSS styles in the page

react to the events in the page

## in order to do that JavaScript should find element in an html page.

## Finding HTML Elements

finding HTML elements by id

finding HTML elements by tag name

finding HTML elements by class name

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900291.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=p2AOb%2BwxWqHr0KynSm6ylXZzQEs%3D&Expires=1773948700' alt='OCR图片'/></div>

## DOM-Methods-in camel case

## Document Object Methods

<table border="1"><tr><td>Method</td><td>Description</td><td>W3C</td></tr><tr><td>close()</td><td>Closes the output stream previously opened with document.open()</td><td>Yes</td></tr><tr><td>getElementsByName()</td><td>Accesses all elements with a specified name</td><td>Yes</td></tr><tr><td>getElementById()</td><td>Accesses the element with the specified id</td><td>Yes</td></tr><tr><td>getElementsByClassName()</td><td>Accesses all elements with a specified class name</td><td>Yes</td></tr><tr><td>getElementsByTagName()</td><td>Accesses all elements with a specified tag name</td><td>Yes</td></tr><tr><td>open()</td><td>Opens an output stream to collect the output from document.write() or document.writeln()</td><td>Yes</td></tr><tr><td>write()</td><td>Writes HTML expressions or JavaScript code to a document</td><td>Yes</td></tr><tr><td>writeln()</td><td>Same as write(), but adds a newline character after each statement</td><td>Yes</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900304.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PoJDk5cxq8x2lrRP46986IhDCKI%3D&Expires=1773948700' alt='OCR图片'/></div>

## getElementById()

```html

<label>Enter first number</label>

<input type="text" id="num1"/>

<br>

<label>Enter second number</label>

<input type="text" id="num2"/>

<button onclick="addNumber()">+ </button>

<p id="sumValue"></p>

<script>

function addNumber(){

    let num1=document.getElementById("num1").value;

    let num2=document.getElementById("num2").value;

    let results=parseInt(num1)+ parseInt(num2);

    document.getElementById("sumValue").innerHTML =num1 + " + " + num2 + " = "+results;

}

```

Now shall we create a simple calculator to do addition Multifaction, division and subtraction

## Simple Calculator

Enter first number

Enter second number

Result:

## getElementByTagName()

```html

<!-- Change color html code - getElementByTagName-->

<p>This is the First paragraph</p>

<p>This is the Second paragraph</p>

<p>This is the Third paragraph</p>

<button onclick="changeColor()">Change Text Color</button>

<script>

function changeColor() {

  let paragraphs = document.getElementsByTagName("p");

  paragraphs[0].style.color = "pink";

  paragraphs[1].style.color = "aqua";

  paragraphs[2].style.color = "purple";

}

</script>

```

This is the First paragraph

This is the Second paragraph

This is the Third paragraph

Change Text Color

Now Shall we change html content Dynamically as follows with a button click

Updated first paragraph

Updated second paragraph

Updated third paragraph

Change Text Color Change Text Content

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900311.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Gm6f8Da2OUh1b4f8kgkYAMCMwKA%3D&Expires=1773948700' alt='OCR图片'/></div>

## getElementByName()

- Returns a NodeList

- Mostly used for form inputs

- Access using index

```html

<!-- getElementByName -->

<form>

<input type="text" name="username" placeholder="Enter username">

<input type="text" name="username" placeholder="Re-enter username">

<button type="button" onclick="showName()">Show</button>

</form>

<p id="output"></p>

<script>

function showName() {

  let inputs = document.getElementsByName("username");

  document.getElementById("output").textContent = inputs[0].value;

}

```

</script>

```html

<h3>Select Gender</h3>

<input type="radio" name="gender" value="Male"> Male

<input type="radio" name="gender" value="Female"> Female

<br><br>

<button onclick="showGender()">Show Gender</button>

<p id="result"></p>

function showGender() {

    let gender = document.getElementsByName("gender");

    for (let i = 0; i < gender.length; i++) {

        if (gender[i].checked) {

            document.getElementById("result").textContent =

                "Selected: " + gender[i].value;

        }

    }

}

```

Try this code

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900319.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Hy0YyPNKXLJRfeWtqONXNpVljxA%3D&Expires=1773948700' alt='OCR图片'/></div>

## getElementByClassName()

- Returns an HTMLCollection (classlist)

- Very fast

- Live collection (updates automatically)

```html

<!-- getElementByClassName-->

<h3>Choose a Course</h3>

<div class="course">Web Development</div>

<div class="course">Mobile App Development</div>

<div class="course">Data Science</div>

<button onclick="highlight()">Highlight Courses</button>

<script>

function highlight() {

  let courses = document.getElementsByClassName("course");

  for (let i = 0; i < courses.length; i++) {

    courses[i].classList.add("active");

  }

}

</script>

```

```css

<style>

.course {

padding: 10px;

margin: 5px 0;

border: 1px solid #ccc;

}

```

```css

.active {

  background-color: #d1e7ff;

  font-weight: bold;

}

</style>

```

## Choose a Course

Web Development

Mobile App Development

Data Science

Highlight Courses

## Choose a Course

Web Development

Mobile App Development

Data Science

Highlight Courses

Try this code

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900327.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=w%2BpPyI0cLeHK3mXIyoyYCHaXGwU%3D&Expires=1773948700' alt='OCR图片'/></div>

## Changing HTML Style with the HTML DOM Style Object

<div align="center">

Text properties

</div>

<table border="1"><tr><td>Property</td><td>Description</td><td>W3C</td></tr><tr><td>color</td><td>Sets or returns the color of the text</td><td>Yes</td></tr><tr><td>direction</td><td>Sets or returns the text direction</td><td>Yes</td></tr><tr><td>font</td><td>Sets or returns font-style, font-variant, font-weight, font-size, line-height, and font-family in one declaration</td><td>Yes</td></tr><tr><td>fontFamily</td><td>Sets or returns the font face for text</td><td>Yes</td></tr><tr><td>fontSize</td><td>Sets or returns the font size of the text</td><td>Yes</td></tr><tr><td>fontSizeAdjust</td><td>Sets or returns the font aspect value</td><td>Yes</td></tr><tr><td>fontStyle</td><td>Sets or returns whether the style of the font is normal, italic or oblique</td><td>Yes</td></tr><tr><td>fontVariant</td><td>Sets or returns whether the font should be displayed in small capital letters</td><td>Yes</td></tr><tr><td>fontWeight</td><td>Sets or returns the boldness of the font</td><td>Yes</td></tr><tr><td>letterSpacing</td><td>Sets or returns the space between characters in a text</td><td>Yes</td></tr><tr><td>lineHeight</td><td>Sets or returns the distance between lines in a text</td><td>Yes</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900336.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wDPJYx0RVrRCa7cmigtqDqeUP2c%3D&Expires=1773948700' alt='OCR图片'/></div>

## Background properties

<table border="1"><tr><td>Property</td><td>Description</td><td>W3C</td></tr><tr><td>background</td><td>Sets or returns all the background properties in one declaration</td><td>Yes</td></tr><tr><td>backgroundAttachment</td><td>Sets or returns whether a background-image is fixed or scrolls with the page</td><td>Yes</td></tr><tr><td>backgroundColor</td><td>Sets or returns the background-color of an element</td><td>Yes</td></tr><tr><td>backgroundImage</td><td>Sets or returns the background-image for an element</td><td>Yes</td></tr><tr><td>backgroundPosition</td><td>Sets or returns the starting position of a background-image</td><td>Yes</td></tr><tr><td>backgroundRepeat</td><td>Sets or returns how to repeat (tile) a background-image</td><td>Yes</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900355.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qcJbG8w20dy9q8GSXftYu6UGmSU%3D&Expires=1773948700' alt='OCR图片'/></div>

## HTML DOM Events - (all in simple letters)

- HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

- Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

- Some common uses of events

- When a user clicks the mouse

- When a web page has loaded

- When an image has been loaded

- When the mouse moves over an element

- When an input field is changed

- When an HTML form is submitted

- When a user strokes a key

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900361.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jnoTebJpQ5hHATuDJ7eNNFr4bCI%3D&Expires=1773948700' alt='OCR图片'/></div>

## Key Board Events

<table border="1"><tr><td>Attribute</td><td>Description</td></tr><tr><td>onkeydown</td><td>The event occurs when the user is pressing a key</td></tr><tr><td>onkeypress</td><td>The event occurs when the user presses a key</td></tr><tr><td>onkeyup</td><td>The event occurs when the user releases a key</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900369.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nw05GiF8l%2FoRqJHfMqq4nw01Y%2BI%3D&Expires=1773948700' alt='OCR图片'/></div>

## Form Events

<table border="1"><tr><td>Attribute</td><td>Description</td></tr><tr><td>onblur</td><td>The event occurs when a form element loses focus</td></tr><tr><td>onchange</td><td>The event occurs when the content of a form element,the selection,or the checked state have changed(for&lt;input&gt;,&lt;select&gt;,and&lt;textarea&gt;)</td></tr><tr><td>onfocus</td><td>The event occurs when an element gets focus(for&lt;label&gt;,&lt;input&gt;,&lt;select&gt;,textarea&gt;,and&lt;button&gt;)</td></tr><tr><td>onreset</td><td>The event occurs when a form is reset</td></tr><tr><td>onselect</td><td>The event occurs when a user selects some text(for&lt;input&gt;and&lt;textarea&gt;)</td></tr><tr><td>onsubmit</td><td>The event occurs when a form is submitted</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900376.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=opS%2B0LMJQiTvWzYMcmANovgaI5o%3D&Expires=1773948700' alt='OCR图片'/></div>

## onkeydown

## onchange

```html

!--keyboard onkeydown -->

<h3>Press any key</h3>

<input type="text" onkeydown="showKey(event)">

<p id="result"></p>

<script>

function showKey(e) {

    document.getElementById("result").textContent =

    "Key pressed: " + e.key;

}

</script>

```

```html

<h3>Select your city</h3>

<select onchange="showCity(this.value)">

  <option value="">-- Select City --</option>

  <option value="Colombo">Colombo</option>

  <option value="Kandy">Kandy</option>

  <option value="Galle">Galle</option>

</select>

<p id="result"></p>

<script>

function showCity(city) {

  document.getElementById("result").textContent =

    "You selected: " + city;

}

</script>

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900382.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=n29ubN0R8%2FalTrrc7Zi3TJ%2B87Ew%3D&Expires=1773948700' alt='OCR图片'/></div>

## Image Replacement

- Image Properties

<table border="1"><tr><td>Property</td><td>Description</td></tr><tr><td>align</td><td>Sets or returns the value of the align attribute of an image</td></tr><tr><td>alt</td><td>Sets or returns the value of the alt attribute of an image</td></tr><tr><td>border</td><td>Sets or returns the value of the border attribute of an image</td></tr><tr><td>complete</td><td>Returns whether or not the browser is finished loading an image</td></tr><tr><td>height</td><td>Sets or returns the value of the height attribute of an image</td></tr><tr><td>hspace</td><td>Sets or returns the value of the hspace attribute of an image</td></tr><tr><td>longDesc</td><td>Sets or returns the value of the longdesc attribute of an image</td></tr><tr><td>lowsrc</td><td>Sets or returns a URL to a low-resolution version of an image</td></tr><tr><td>name</td><td>Sets or returns the name of an image</td></tr><tr><td>src</td><td>Sets or returns the value of the src attribute of an image</td></tr><tr><td>useMap</td><td>Sets or returns the value of the usemap attribute of an image</td></tr><tr><td>vspace</td><td>Sets or returns the value of the vspace attribute of an image</td></tr><tr><td>width</td><td>Sets or returns the value of the width attribute of an image</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900388.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DSuINyolKYeaohcLiVgO6YuxzIs%3D&Expires=1773948700' alt='OCR图片'/></div>

## A Simple Example

- Changing the URL of the image using the src property causes the new image to be loaded gradually onto the page.

- Replacement is not immediate.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900400.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=N%2BlRWVS6Upd6vmwlKpGZ75XWalM%3D&Expires=1773948700' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_2_1773343900413.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nwI9pXBgF5Nb2OsLUZDxgpRbQ%2FY%3D&Expires=1773948700' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_1_1773343900418.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fFTbbyFpr3qK%2FI5GaBJv%2Boqqino%3D&Expires=1773948700' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033124a94a30c06c5a4e6e%2Fcrop_2_1773343900437.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VLV7ZxPPQcQSYzbkx7F5VVdxMD0%3D&Expires=1773948700' alt='OCR图片'/></div>