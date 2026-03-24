# Web and Mobile Technology - Practice Paper 3

## Instructions
* **Time Allowed:** 1 Hour
* **Number of Questions:** 25 MCQs
* **Syllabus Coverage:** Lecture 1 to Lecture 5
* **Format:** Choose the single or multiple best options where specified.

---

### Question 1
Which statement accurately describes a Virtual Private Network (VPN)?  <br>
A. A connection that simulates a private network over a public network. <br>
B. A server dedicated solely to converting domain names into IP addresses. <br>
C. A network entirely confined within a single physical office building. <br>
D. A set of protocols that defines email transmission. <br>

### Question 2
What does FTP stand for in web terminology?  <br>
A. File Transfer Protocol <br>
B. Folder Text Protocol <br>
C. Forward Transfer Process <br>
D. File Transmission Process <br>

### Question 3
An HTTP response code of '404' generally indicates:  <br>
A. Success <br>
B. Server Error <br>
C. Not Found <br>
D. Method Not Allowed <br>

### Question 4
```html
<a href="example.html">
  <img border="0" src="myfile.gif" width="50" height="100">
</a>
```
The above code snippet will display:  <br>
A. A standard text link that says "myfile.gif". <br>
B. An image that acts as a hyperlink. <br>
C. An image positioned correctly with an invisible border but without link capability. <br>
D. A broken image. <br>

### Question 5
Which HTML tag is employed to create a dropdown list?  <br>
A. `<list>` <br>
B. `<input type="dropdown">` <br>
C. `<select>` <br>
D. `<dropdown>` <br>

---
### Question 6
What does the `<br>` tag denote in an HTML layout?  <br>
A. A bold text line <br>
B. A line break <br>
C. The breaking point for responsive CSS <br>
D. A horizontal rule <br>

### Question 7
```css
p {
  color: green !important;
}
#myText {
  color: red;
}
```
If an HTML paragraph has `id="myText"`, what color is the paragraph?  <br>
A. Red <br>
B. Green <br>
C. Black <br>
D. Error due to conflict <br>

### Question 8
Which of the following is NOT a valid CSS selector?  <br>
A. `.navigation > li` <br>
B. `body:hover` <br>
C. `div~span` <br>
D. `style="css"` <br>

### Question 9
In CSS positioning, an element whose `position` property is set to `absolute`:  <br>
A. is positioned relative to its normal position. <br>
B. is positioned relative to the browser window. <br>
C. is positioned relative to its closest positioned ancestor. <br>
D. stays in the same place in the normal document flow. <br>

### Question 10
If `box-sizing: border-box;` is applied to an element, the `width` property determines:  <br>
A. Only the content width. <br>
B. The content width plus padding and border. <br>
C. The full width including margin. <br>
D. Only the margin width. <br>

---
### Question 11
Which of the following describes the behavior of `document.querySelectorAll()`?  <br>
A. Returns the first matching element. <br>
B. Returns a live HTMLCollection. <br>
C. Returns a static NodeList of all matching elements. <br>
D. Modifies all matching elements. <br>

### Question 12
You have a `<button onclick="testFunction()">Click Me</button>`. 
Which of the following JavaScript correctly defines `testFunction` to show an alert?  <br>
A. `function testFunction() { window.alert("Clicked!"); }` <br>
B. `const testFunction = window.alert("Clicked!");` <br>
C. `def testFunction(): print("Clicked!")` <br>
D. Both A and B <br>

### Question 13
```javascript
let i = 2;
let text = "";
while (i <= 6) {
  if (i == 4) {
    i++;
    continue;
  }
  text += i + " ";
  i++;
}
console.log(text);
```
What is the exact output of the code?  <br>
A. "2 3 5 6 " <br>
B. "2 3 6 " <br>
C. "2 3 4 5 6 " <br>
D. "2 3 5 " <br>

### Question 14
In JavaScript, arrays can hold:  <br>
A. Only Numbers <br>
B. Only Strings <br>
C. Only Objects <br>
D. Any mix of data types <br>

### Question 15
```javascript
let divset = document.getElementsByTagName("div");
for(let i=0 ;i<divset.length;i++){
    if(i%2==0) divset[i].style.color="pink";
    else divset[i].style.color="blue";
}
```
Select the correct outcome:  <br>
A. The very first `<div>` (index 0) becomes blue. <br>
B. Even indexed `<div>` elements become pink and odd indexed `<div>` elements become blue. <br>
C. Odd indexed `<div>` elements become pink and even indexed `<div>` elements become blue. <br>
D. An error occurs because style cannot be set this way. <br>

---
### Question 16
What will `typeof []` evaluate to in JavaScript?  <br>
A. "array" <br>
B. "object" <br>
C. "list" <br>
D. "undefined" <br>

### Question 17
```javascript
let buttons = document.querySelectorAll(".btn");
buttons.addEventListener("click", function(){
    console.log("Clicked");
});
```
What is true about the above code snippet?  <br>
A. The event listener correctly applies to all `.btn` elements. <br>
B. `addEventListener` cannot be applied directly to a NodeList returned by `querySelectorAll`. <br>
C. It will only apply the click event to the first item. <br>
D. `.btn` selector is fundamentally illegal in JS. <br>

### Question 18
Which JavaScript operator performs a strict comparison (checking value AND data type)?  <br>
A. `=` <br>
B. `==` <br>
C. `===` <br>
D. `!==` <br>

### Question 19
Which of the HTML `<input>` types automatically validates if the value contains an "@" symbol?  <br>
A. `type="text"` <br>
B. `type="password"` <br>
C. `type="email"` <br>
D. `type="url"` <br>

### Question 20
To wrap text beautifully around an image in CSS, which property do you use?  <br>
A. `clear` <br>
B. `position` <br>
C. `float` <br>
D. `display` <br>

---
### Question 21
```html
<style>
 .highlight { color: blue; }
 div { color: red; }
</style>
<div class="highlight">Item 1</div>
```
Which is the resulting color of Item 1?  <br>
A. Red because it is the last declared rule affecting divs. <br>
B. Blue because the class selector outweighs the elemental selector. <br>
C. Black as a fallback. <br>
D. Purple because colors blend. <br>

### Question 22
A JavaScript `prompt()` function returns:  <br>
A. `Boolean` only. <br>
B. `Number` if a number is typed, otherwise `String`. <br>
C. `String` (or `null` if cancelled). <br>
D. `Undefined`. <br>

### Question 23
```javascript
let y = "7";
let z = 2;
console.log(y - z);
```
What is the outcome of this subtraction in JavaScript?  <br>
A. "72" <br>
B. 5 <br>
C. NaN <br>
D. TypeError <br>

### Question 24
In the DOM hierarchy, the topmost object that represents the browser window is:  <br>
A. `document` <br>
B. `navigator` <br>
C. `window` <br>
D. `body` <br>

### Question 25
When considering web architectures, the role of a DNS protocol is essentially to:  <br>
A. Encrypt data sent over connections. <br>
B. Function as a phonebook for the internet. <br>
C. Send web pages from server to client. <br>
D. Establish state via session cookies. <br>


<br><br><br><br>

---
## Answer Sheet
1. A
2. A
3. C
4. B
5. C
6. B
7. B (`!important` overrides everything)
8. D (This is an inline attribute, not a selector format inside a stylesheet)
9. C
10. B
11. C
12. A
13. A
14. D
15. B
16. B
17. B
18. C
19. C
20. C
21. B
22. C
23. B
24. C
25. B
