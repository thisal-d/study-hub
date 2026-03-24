<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033343aabd4e7f6a8a46de%2Fcrop_1_1773344031737.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HshocyWwaZptqsD45DCBiW2cQOc%3D&Expires=1773948831' alt='OCR图片'/></div>

COMPUTING BUSINESS ENGINEERING

<div align="center">

# SE2020 - Web and Mobile Technologies

</div>

## Tutorial 02

You are creating a simple university course webpage with:

- A navigation bar

- Two-column layout

- Course table

- Image section

- Registration form

Project Setup

Create files:

/project

index.html

styles.css

Link external CSS

Link external CSS

<link rel="stylesheet" href="styles.css">

CSS Selectors & Colors

HTML

<h1 class="title">Web Technologies</h1>

<p id="intro">Advanced HTML and CSS</p>

CSS

.title {

  color: #2c3e50;

  font-family: Arial;

}

#intro {

  color: rgb(52, 152, 219);

}

Add contextual selector

div p {

  font-size: 16px;

}

Navigation Menu using Lists

## HTML

```html

<ul class="nav">

  <li><a href="#">Home</a></li>

  <li><a href="#">Courses</a></li>

  <li><a href="#">Register</a></li>

</ul>

```

## CSS

```css

.nav {

  list-style: none;

  padding: 0;

}

.nav li {

  display: inline;

  padding: 10px;

}

.nav a {

  text-decoration: none;

  color: white;

  background: #34495e;

  padding: 8px 12px;

}

```

## Box Model & Two-Column Layout

## HTML

```html

<div class="container">

  <div class="left">Content</div>

  <div class="right">Sidebar</div>

</div>

```

CSS

.container {

 width: 100%;

}

.left {

 float: left;

 width: 60%;

 padding: 2%;

 box-sizing: border-box;

}

.right {

 float: right;

 width: 40%;

 padding: 2%;

 box-sizing: border-box;

}

Clear float

.container::after {

 content: "";

 display: block;

 clear: both;

}

## Image

<img src="course.jpg" alt="Course Image" width="300">

## Table

```html

<html>

<body>

<table>

  <tr>

    <th>Course</th>

    <th>Credits</th>

  </tr>

  <tr>

    <td>Web Tech</td>

    <td>3</td>

  </tr>

</table>

```

## Table styling

```css

table {

  border-collapse: collapse;

}

td, th {

  border: 1px solid #333;

  padding: 8px;

}

```

HTML Forms + Styling

## HTML

```html

<form>

  <label for="name">Name</label>

  <input type="text" id="name" placeholder="Enter name">

  <label for="email">Email</label>

  <input type="email" id="email">

  <input type="submit" value="Register">

</form>

```

## CSS

input[type=text],

input[type=email] {

  width: 100%;

  padding: 8px;

  margin-bottom: 10px;

}

input[type=submit] {

  background: #27ae60;

  color: white;

  padding: 10px;

  border: none;

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313033343aabd4e7f6a8a46de%2Fcrop_1_1773344031748.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wzf7UHNdIvUm9zIS%2BPW%2BIifLSxU%3D&Expires=1773948831' alt='OCR图片'/></div>