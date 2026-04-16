<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033345131ae249588b41ae%2Fcrop_1_1773344031430.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WeZ4Qw7xab7CzuPci7x0vXbUOJk%3D&Expires=1773948831' alt='OCR图片'/></div>

COMPUTING BUSINESS ENGINEERING

<div align="center">

# SE2020 - Web and Mobile Technologies

</div>

## Tutorial 03

Instructions

- Use the same index.html and styles.css from Tutorial 02

- Do NOT change the layout or CSS

- Only add JavaScript

Part A-Adding JavaScript to the Page

Step 1: Add <script> tag

At the bottom of index.html, before </body>:

```javascript

<script>

    console.log("JavaScript connected successfully");

</script>

```

Open browser $ \rightarrow $ Right click $ \rightarrow $ Inspect $ \rightarrow $ Console

## Part B - Button Click Interaction

Task

Add a button that displays a message when clicked.

HTML (inside content section)

```html

<button id="welcomeBtn">Click Me</button>

<p id="message"></p>

```

```javascript

<script>

    document.getElementById("welcomeBtn").onclick = function () {

        document.getElementById("message").innerHTML =

        "Welcome to Web Technologies!";

    };

</script>

```

## Task

Change background color when button is clicked.

Part C - Form Validation Use the registration form created in Tutorial 02.

Step 1: Add id attributes to form fields

```html

<input type="text" id="name">

<input type="email" id="email">

<button type="button" onclick="validateForm()">Register</button>

<p id="error"></p>

```

Write JavaScript Validation Logic, show error messages in red.

## Part D: Simple Calculation

## Task

Calculate total registered students (dummy counter)

## HTML

```html

<button onclick="addStudent()">Add Student</button>

<p id="count">Total Students: 0</p>

```

Complete the JavaScript code