<div align="center">

# Web and Mobile Technology - SE2020

</div>

<table border="1"><tr><td colspan="2">This course is hidden and cannot be accessed by students. Click here to update settings</td></tr><tr><td>Question 1
Not yet answered
Marked out of 1.00</td><td></td></tr></table>

<table border="1"><tr><td>Which of the following is the correct syntax to link an external CSS file in HTML?</td></tr><tr><td>Select one:</td></tr><tr><td>a. script src="style.css"></script></td></tr><tr><td>b. link rel="stylesheet" type="text/css" href="style.css"></td></tr><tr><td>c. style src="style.css"></style></td></tr><tr><td>d. style href="style.css"></td></tr><tr><td>e. None of the mentioned.</td></tr></table>

Question 2

Not yet answered

Marked out of 1.00

```html

<!DOCTYPE html>

<html>

<head>

<style>

.container div {

  color: red;

}

.highlight {

  color: blue;

}

</style>

</head>

<body>

<div class="container">

  <div>Item 1</div>

  <div class="highlight">Item 2</div>

</div>

</body>

</html>

```

## What will be the color of the text displayed?

## Select one or more:

a. Item 2 will appear blue because the .highlight class overrides the inherited style.

b. Both Item 1 and Item 2 will appear blue.

c. The code will produce a CSS syntax error.

d. Item 1 will appear red.

e. Both Item 1 and Item 2 will appear red.

<table border="1"><tr><td>Question 3</td></tr><tr><td>Not yet answered</td></tr><tr><td>Marked out of 1.00</td></tr></table>

i. alert box

ii. confirm box

iii. set-up box

iv. prompt box

v. text box

Select one:

O a. i,ii and iii

O b. i and ii

O c. i, ii and iv

O d. ii and iv

O e. iii, iv and v

<table border="1"><tr><td>Question 4</td></tr><tr><td>Not yet answered</td></tr><tr><td>Marked out of 1.00</td></tr></table>

A very large Web site may be spread over a number of ___ in different geographic locations.

<table border="1"><tr><td>Question 5</td></tr><tr><td>Not yet answered</td></tr><tr><td>Marked out of 1.00</td></tr></table>

<a href="example.html">

<img border="0" src="myfile.gif" width="50" height="100">

</a>

Above code segment is used to display,

Select one:

a. An image only

b. An image in a table

c. An image as link

d. An image as an external css

e. An image as an external JavaScript

Question 6

Not yet answered

Marked out of 1.00

Consider the following code snippet , What will be the out put when you click on "Click to Change" button ?

<!DOCTYPE html>

```javascript

<button onclick="changeColor()">Click to change</button>

<script>

function changeColor(){

let divset= document.getElementsByTagName("div");

    for(let i=0 ;i<divset.length;i++){

        if(i%2==0)

            divset[i].style.color="pink";

        else

            divset[i].style.color="blue";

    }

}

</script>

```

What would be the output of this code?

Select one or more:

a. When the button is clicked, odd indexed <div>elements become pink and even indexed <div>elements become blue.

b. When the button is clicked, very first <div>elements become pink .

c. When the button is clicked, all <div> elements change their text color to pink

d. When the button is clicked, all <div> elements change their text color to blue

e. When the button is clicked, even indexed <div>elements become pink and odd indexed <div>elements become blue.

Question 7

Not yet answered

Marked out of 1.00

Consider the following code snippet , What will be the out put ?

<!DOCTYPE html>

<html>

<body>

<script>

function myFunction() {

  var cars = ["BMW", "Volvo", "Saab", "Ford", "Audi"];

  var text = "";

  var i;

  for (i = 0; i < cars.length; i++) {

    if (cars[i] == "Saab" || cars[i] == "Audi") {

      cars[i] = "Merc"

    }

    text += cars[i] + "<br>";

  } document.write(text);

}myFunction();

</script>

</body>

</html>

Select one:

○ a. BMW

Volvo

Merc

Ford

Merc

○ b. BMW

Volvo

Merc

Question 8 Not yet answered Marked out of 1.00

In case mouse moves over a link, ___ event will be detected.

Select one:

O a. All of the given

O b. onMouseOver

O c. onClick

O d. onRollOver

O e. overMouse

Question 9

Not yet answered

Marked out of 4.00

let buttons = document.querySelectorAll(".btn");

buttons.addEventListener("click", function(){

    console.log("Clicked");

});

What is/are true about above code segment?

A. function should implement explicitly

B. click event cannot be used here

C. querySelectorAll returns a NodeList

D. .btn selector is incorrect

E. addEventListener cannot be applied directly to NodeList

Question 10

Not yet answered

Marked out of 1.00

```javascript

let i = 1;

let text = "";

while (i <= 5) {

  if (i == 3) {

    i++;

    continue;

  }

  text += i + " ";

  i++;

}

console.log(text);

```

Which of the following statements are correct?

Select one or more:

a. The loop will stop when i becomes 3.

b. The output will be "1245".

c. The output will be "12345".

d. The output will be "123"

e. The number 3 is skipped because of the continue statement.

Question 11 Not yet answered Marked out of 1.00

Select the incorrect statement associated with javascripts.

Select one:

O a. Script execute without preliminary compilation

O b. It is a lightweight programming language

O c. Everyone can use it without purchasing a license

O d. Usually embedded directly into HTML pages

O e. Need computer processer for preliminary compilation

Question 12 Not yet answered Marked out of 1.00

## Select the most suitable setup to simulate a private network over a public network

Select one:

O a. A extranet

O b. A virtual private network

O c. A wide area network

O d. A intranet

O e. None of the answers

Question 13

Not yet answered

Marked out of 1.00

```html

<!DOCTYPE html>

<html>

<head>

<style>

#title {

  color: green;

}

.text {

  color: red;

}

p {

  color: blue;

}

</style>

</head>

<body>

<p id="title" class="text">Hello World</p>

</body>

</html>

```

Which of the following statements are correct?

## Select one or more:

a. The text "Hello World" will appear green.

b. The text will appear red because class selectors override ID selectors

c. The text will appear blue because element selectors override ID selectors.

d. The ID selector has higher specificity than class and element selectors.

e. The browser will throw a CSS error because both id and class are used together.

<table border="1"><tr><td>Question 14</td></tr><tr><td>Not yet answered</td></tr><tr><td>Marked out of 1.00</td></tr></table>

Select one:

O a. Opera

O b. Netscape Navigator

O c. Chrome

O d. Microsoft Bing

O e. FireFox