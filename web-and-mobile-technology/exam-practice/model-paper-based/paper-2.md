# Web and Mobile Technology - Practice Paper 2

## Instructions
* **Time Allowed:** 1 Hour
* **Number of Questions:** 25 MCQs
* **Syllabus Coverage:** Lecture 1 to Lecture 5
* **Format:** Choose the single or multiple best options where specified.

---

### Question 1
Which of the following components uniquely identifies a machine on the Internet?  <br>
A. MAC Address <br>
B. IP Address <br>
C. Browser Name <br>
D. Subnet Mask <br>

### Question 2
DNS translates:  <br>
A. MAC addresses to IP addresses. <br>
B. Domain names to Host names. <br>
C. Domain names to IP addresses. <br>
D. IP addresses to Domain names. <br>

### Question 3
An organization uses a subset of its internal network and provides restricted access to external suppliers. This is known as:  <br>
A. Internet <br>
B. Intranet <br>
C. Extranet <br>
D. Wide Area Network <br>

### Question 4
In the HTML structure, which of the following tags is used to place metadata, CSS links, and page title?  <br>
A. `<body>` <br>
B. `<footer>` <br>
C. `<head>` <br>
D. `<section>` <br>

### Question 5
Which tag is correctly enclosed to create a table row in HTML?  <br>
A. `<td>` <br>
B. `<table>` <br>
C. `<th>` <br>
D. `<tr>` <br>

---
### Question 6
You have the following HTML structure:
```html
<form method="get" action="/submit">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>
```
How is the form data transmitted?  <br>
A. In the HTTP POST request body. <br>
B. Attached to the URL as query parameters. <br>
C. Hidden in cookies. <br>
D. Securely without exposure. <br>

### Question 7
To make a hyperlink open in a new browser tab or window, what attribute and value pair should be used?  <br>
A. `href="_blank"` <br>
B. `target="_new"` <br>
C. `target="_blank"` <br>
D. `open="new"` <br>

### Question 8
```css
#container p { color: #333; }
p.text-muted { color: #999; }
```
In the above CSS, which selector has the highest specificity?  <br>
A. `#container p` <br>
B. `p.text-muted` <br>
C. Both have equal specificity <br>
D. Neither <br>

### Question 9
What does the "C" in CSS stand for?  <br>
A. Cascading <br>
B. Creative <br>
C. Computer <br>
D. Colorful <br>

### Question 10
If you want to remove the underline from an HTML hyperlink using CSS, which rule should you apply?  <br>
A. `text-decoration: no-underline;` <br>
B. `text-decoration: none;` <br>
C. `font-style: un-italic;` <br>
D. `font-weight: normal;` <br>

---
### Question 11
Consider the following HTML & CSS:
```html
<style>
 .box { width: 100px; padding: 10px; border: 5px solid black; margin: 5px; }
</style>
<div class="box"></div>
```
Assuming standard `box-sizing: content-box`, what is the total horizontal width taken up by the browser for this element?  <br>
A. 100px <br>
B. 120px <br>
C. 130px <br>
D. 140px <br>

### Question 12
You are using JavaScript inside your HTML page. A correct way to link an external JS file is:  <br>
A. `<script src="script.js"></script>` <br>
B. `<script href="script.js"></script>` <br>
C. `<link rel="javascript" src="script.js">` <br>
D. `<js src="script.js" />` <br>

### Question 13
```javascript
let num = 10;
if(num == "10") {
   console.log("Equal");
} else {
   console.log("Not Equal");
}
```
The console will display:  <br>
A. Equal <br>
B. Not Equal <br>
C. Error <br>
D. Nothing <br>

### Question 14
Which popup box method is used to allow a user to type in a value?  <br>
A. `window.alert()` <br>
B. `window.prompt()` <br>
C. `window.confirm()` <br>
D. `window.input()` <br>

### Question 15
```html
<!DOCTYPE html>
<html>
<body>
<script>
function checkCars() {
  var cars = ["Honda", "Toyota", "Ford"];
  var result = "";
  for (var i = 0; i < cars.length; i++) {
    if (cars[i] == "Toyota") {
      continue;
    }
    result += cars[i] + " ";
  }
  document.write(result);
}
checkCars();
</script>
</body>
</html>
```
What is the output?  <br>
A. Honda Toyota Ford <br>
B. Honda Ford <br>
C. Toyota Ford <br>
D. Honda <br>

---
### Question 16
What happens when you declare a variable inside a JavaScript function using `var`?  <br>
A. It becomes a global variable. <br>
B. It becomes a block-scoped variable. <br>
C. It becomes a function-scoped variable scoped only to that function. <br>
D. It is inaccessible. <br>

### Question 17
Select the correct event handler when an input field loses focus.  <br>
A. `onchange` <br>
B. `onfocus` <br>
C. `onblur` <br>
D. `onfocusexit` <br>

### Question 18
```javascript
let elements = document.getElementsByTagName("p");
for(let i=0; i< elements.length; i++) {
   elements[i].style.backgroundColor = "yellow";
}
```
What does this JavaScript code snippet accomplish?  <br>
A. Selects exactly one `<p>` element and changes its background to yellow. <br>
B. Selects all `<p>` elements and causes an error because NodeList cannot be modified. <br>
C. Changes the background color of every `<p>` element on the page to yellow. <br>
D. Creates new `<p>` elements painted yellow. <br>

### Question 19
Which function is used to convert a string `"15.5"` to a floating-point number in JavaScript?  <br>
A. `Number.parseFloat()` <br>
B. `parseInt()` <br>
C. `toString()` <br>
D. `typeof` <br>

### Question 20
To modify the text content strictly (ignoring HTML tags embedded within) of an element with `id="heading"`, the best property to use is:  <br>
A. `innerHTML` <br>
B. `outerHTML` <br>
C. `textContent` <br>
D. `value` <br>

---
### Question 21
```javascript
let x = [10, 20, 30];
x.push(40);
x.pop();
console.log(x.length);
```
What is printed?  <br>
A. 3 <br>
B. 4 <br>
C. 5 <br>
D. 2 <br>

### Question 22
A very large Web site may be spread over a number of ___ in different geographic locations.  <br>
A. Workstations <br>
B. Servers <br>
C. Hard drives <br>
D. Routers <br>

### Question 23
When you try to use `document.getElementById('missing')` where no element has the id "missing", what is the returned value?  <br>
A. `0` <br>
B. `false` <br>
C. `null` <br>
D. `undefined` <br>

### Question 24
In JavaScript, single-line comments begin with:  <br>
A. `/*` <br>
B. `<--` <br>
C. `//` <br>
D. `#` <br>

### Question 25
```html
<div class="test">Item 1</div>
<div class="test">Item 2</div>
<script>
  document.querySelector(".test").style.color = "red";
</script>
```
What occurs?  <br>
A. Both Items 1 and 2 become red. <br>
B. Only Item 1 becomes red. <br>
C. Only Item 2 becomes red. <br>
D. An error is thrown. <br>


<br><br><br><br>

---
## Answer Sheet
1. B
2. C
3. C
4. C
5. D
6. B
7. C
8. A (ID carries a weight of 100, class is 10)
9. A
10. B
11. D (100 width + 10L+10R padding + 5L+5R border = 130px visible. With margins it's 140px total horizontal space)
12. A
13. A
14. B
15. B
16. C
17. C
18. C
19. A
20. C
21. A
22. B
23. C
24. C
25. B (`querySelector` returns only the first matched element)
