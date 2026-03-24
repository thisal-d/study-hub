# Web and Mobile Technology - Practice Paper 1

## Instructions
* **Time Allowed:** 1 Hour
* **Number of Questions:** 25 MCQs
* **Syllabus Coverage:** Lecture 1 to Lecture 5
* **Format:** Choose the single or multiple best options where specified.

---

### Question 1
Which of the following best describes the process of translating a human-readable domain name (like www.google.com) into an IP address?  <br>
A. DHCP assigning <br>
B. IPv4 Routing <br>
C. DNS Resolution <br>
D. SSL Handshake <br>

### Question 2
You are tasked with setting up a private network for your university staff that uses web technology but is securely accessible only by employees on-site. The most appropriate setup is a(n):  <br>
A. Internet <br>
B. Intranet <br>
C. Extranet <br>
D. Wide Area Network <br>

### Question 3
What is the correct protocol used for secure data communication between a web browser and a website?  <br>
A. FTP <br>
B. HTTP <br>
C. HTTPS <br>
D. SMTP <br>

### Question 4
A Uniform Resource Locator (URL) consists of multiple components. In the URL `https://developer.mozilla.org/en-US/learn`, what does `developer.mozilla.org` represent?  <br>
A. The Protocol <br>
B. The Root Directory <br>
C. The Domain Name <br>
D. The Hyperlink <br>

### Question 5
Which web concept refers to data being temporarily stored in a browser to speed up sequential visits to the same website?  <br>
A. Cookies <br>
B. DOM Caching <br>
C. Web Browser Caching <br>
D. Sessions <br>

---
### Question 6
Which is the correct HTML way of creating an image link that takes you to "contact.html" when clicked?  <br>
A. `<a src="contact.html"><img href="envelope.png"></a>` <br>
B. `<a href="contact.html"><img src="envelope.png"></a>` <br>
C. `<img href="contact.html" src="envelope.png">` <br>
D. `<link href="contact.html"><img src="envelope.png"></link>` <br>

### Question 7
Which of the following attributes is necessary for an input field if you want the form data to be identified by the server when submitted using POST?  <br>
A. `class` <br>
B. `id` <br>
C. `name` <br>
D. `value` <br>

### Question 8
What type of HTML list creates items marked with bullets by default?  <br>
A. `<ol>` <br>
B. `<dl>` <br>
C. `<ul>` <br>
D. `<list>` <br>

### Question 9
In HTML5, which tag is intended specifically to denote navigation links?  <br>
A. `<menu>` <br>
B. `<nav>` <br>
C. `<ul>` <br>
D. `<header>` <br>

### Question 10
If you want a cell in an HTML table to span across three columns, which attribute should you use?  <br>
A. `rowspan="3"` <br>
B. `colspan="3"` <br>
C. `span="3"` <br>
D. `merge="3"` <br>

---
### Question 11
What is the correct syntax to link an external CSS file named "main.css" inside an HTML document?  <br>
A. `<style src="main.css"></style>` <br>
B. `<link rel="stylesheet" type="text/css" href="main.css">` <br>
C. `<stylesheet>main.css</stylesheet>` <br>
D. none of the mentioned <br>

### Question 12
You have a CSS rule `.highlight { color: blue; }` and `#error { color: red; }`. 
For an element `<p class="highlight" id="error">Warning</p>`, what color will the text be?  <br>
A. Blue <br>
B. Red <br>
C. Purple <br>
D. Black <br>

### Question 13
```css
div { border: 1px solid black; padding: 10px; margin: 20px; }
```
Which property provides the space *between* the element's border and its content?  <br>
A. border <br>
B. margin <br>
C. padding <br>
D. background <br>

### Question 14
Which selector targets all `<p>` elements nested exactly one level deep inside a `<div>`?  <br>
A. `div p` <br>
B. `div + p` <br>
C. `div > p` <br>
D. `div ~ p` <br>

### Question 15
If an HTML page specifies red text via inline style, blue text via internal `<style>` block, and green text via external stylesheet. What color does the text become?  <br>
A. Red <br>
B. Blue <br>
C. Green <br>
D. It depends on browser rendering. <br>

---
### Question 16
What type of dialog box in JavaScript requires a user to click either "OK" or "Cancel", and returns a boolean value?  <br>
A. alert box <br>
B. prompt box <br>
C. confirm box <br>
D. setup box <br>

### Question 17
Select the incorrect statement associated with JavaScript.  <br>
A. Script execute without preliminary compilation. <br>
B. It is a lightweight programming language. <br>
C. Usually embedded directly into HTML pages. <br>
D. Need computer processor for preliminary compilation. <br>

### Question 18
```javascript
let count = 0;
while (count < 4) {
  if(count === 2) { count++; continue; }
  console.log(count);
  count++;
}
```
What is the output displayed in the console?  <br>
A. 0, 1, 2, 3 <br>
B. 0, 1, 3 <br>
C. 0, 1, 3, 4 <br>
D. Syntax Error <br>

### Question 19
Which of the following array methods is used to add an element to the end of a JavaScript array?  <br>
A. `pop()` <br>
B. `unshift()` <br>
C. `push()` <br>
D. `splice()` <br>

### Question 20
```javascript
let fruits = ["Apple", "Mango", "Banana"];
fruits[1] = "Orange";
document.write(fruits.length);
```
What is printed to the browser screen?  <br>
A. 2 <br>
B. 3 <br>
C. 4 <br>
D. Apple, Orange, Banana <br>

### Question 21
Consider the mouse moving onto an HTML element containing a link. Which event handler detects this action?  <br>
A. `onClick` <br>
B. `onMouseOver` <br>
C. `onMouseEnter` <br>
D. Both B and C <br>

### Question 22
```javascript
function calculate() {
   let x = "5";
   let y = 3;
   let z = x + y;
   console.log(z);
}
```
What does the calculation yield?  <br>
A. 8 <br>
B. "53" <br>
C. NaN <br>
D. Error <br>

### Question 23
```html
<p id="demo">First</p>
<script>
  document.getElementById("demo").innerHTML = "Second";
</script>
```
What is visible on the web page?  <br>
A. First <br>
B. Second <br>
C. First and Second <br>
D. Undefined <br>

### Question 24
Which code correctly selects all elements with the class "btn"?  <br>
A. `document.querySelectorAll(".btn");` <br>
B. `document.getElementsByClassName(".btn");` <br>
C. `document.querySelector(".btn");` <br>
D. `document.getElementById("btn");` <br>

### Question 25
When attaching an event listener via `addEventListener`, what is best practice for attaching it to multiple elements retrieved via `querySelectorAll`?  <br>
A. Call `querySelectorAll(".btn").addEventListener("click", ...)` directly. <br>
B. Iterate through the NodeList with a loop (like `.forEach()`) and apply `addEventListener` to each node. <br>
C. `addEventListener` cannot be used with classes. <br>
D. Query the document by ID instead. <br>


<br><br><br><br>

---
## Answer Sheet
1. C
2. B
3. C
4. C
5. C
6. B
7. C
8. C
9. B
10. B
11. B
12. B (ID selector has higher specificity)
13. C
14. C
15. A (Inline styles typically have highest specificity)
16. C
17. D
18. B
19. C
20. B
21. D
22. B
23. B
24. A
25. B
