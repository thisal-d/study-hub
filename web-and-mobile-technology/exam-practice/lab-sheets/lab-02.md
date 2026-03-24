<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_1_1773343764508.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oE1dYazWjIowiHldwb8XAlYVNRI%3D&Expires=1773948564' alt='OCR图片'/></div>

<div align="center">

# Faculty of Computing

</div>

## BSc (Hons) in Software Engineering Year 2 Semester 2 (2026)

Lab 02

## Lab Exercise 02 - Enhancing a web page using advanced HTML and CSS

What you will learn:

At the end of this lab session, you will be able to:

- Use lists to create a navigation bar

- Improve forms using <fieldset> and <legend>

- Apply inline, embedded, and external CSS

- Enhance tables and images using basic CSS

## Prerequisites:

- Completion of Lecture 01 Lab

- Basic knowledge of:

- HTML structure

Headings, paragraphs, lists, tables, images, and forms

- Basic CSS properties

## Inline CSS

Inline CSS is a method of applying styles directly inside an HTML element using the style attribute.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_2_1773343764564.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ui0DiVM%2Ff%2BdTHhJqJBKhe%2F254mI%3D&Expires=1773948564' alt='OCR图片'/></div>

Inline CSS is useful when:

- Styling a single element

- Demonstrating quick changes

- Learning how CSS properties work

Inline CSS affects only the element where it is used and is written inside the HTML tag itself.

## ```html

<h1 style="color: blue; text-align:center;">Welcome</h1>

```

- Inline CSS is not recommended for large projects, but it is useful for learning purposes and small adjustments.

- Inline CSS uses the style attribute.

- Multiple CSS properties can be written inside one style attribute.

- Inline CSS applies only to the specific element.

## Part A: Using Inline CSS

Follow the instructions below:

1. Locate the main heading ( <h1> ) of the web page.

- Use inline CSS to center the text.

- Apply a suitable text color.

```html

<h1 style="text-align:center; color: #003366; margin-top:20px;">Travel Adventures</h1>

```

2. Locate the introductory paragraph below the main heading.

- Use inline CSS to center the paragraph.

- Adjust the margin or spacing if necessary.

```html

<p style="text-align:center; margin:15px; line-height:1.6;">

    <b>Travel Adventures</b> helps you explore new destinations and plan your journey

    in a simple and organized way. It also provides <i>useful tips and cost estimates</i> to make your travel stress-free.

</p>

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_1_1773343764578.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=O3yQ75XB8mOCEZNN8ccmlU9OjpY%3D&Expires=1773948564' alt='OCR图片'/></div>

3. - Apply inline CSS on the <div> to center both the image and the hyperlink within it.

- Apply inline CSS to add a border and padding around the image.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_1_1773343764584.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=L4S3%2FH2NmDP8anVo0%2F%2BF0aDXR3c%3D&Expires=1773948564' alt='OCR图片'/></div>

## Embedded CSS

- Embedded CSS is written inside a <style> tag within the <head> section of your HTML file.

## Why use Embedded CSS?

- Useful when styling one HTML page only.

- Keeps CSS separate from individual HTML elements (unlike inline CSS).

- Makes it easy to style multiple elements consistently on the same page.

## How to use Embedded CSS?

- Place a <style> tag inside the <head> section of your HTML.

- Write CSS rules inside the <style> tag.

- Target HTML elements by tag name, class, or ID.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_2_1773343764591.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Rj1WydaNFecqR83bXFWHfU9TN%2B4%3D&Expires=1773948564' alt='OCR图片'/></div>

## Ex: Styling a table with embedded CSS CSS:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_1_1773343764597.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LmKXh8KyXWaMot4ZgCBME6zqKKM%3D&Expires=1773948564' alt='OCR图片'/></div>

<div align="center">

Html code:

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_2_1773343764614.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3wQm%2Fn3oz3BswteCoJZeZGC0eng%3D&Expires=1773948564' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_3_1773343764621.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QUb0EHPqp5gCl0ejPnOUK%2FurH%2Bw%3D&Expires=1773948564' alt='OCR图片'/></div>

## Part B: Navigation Bar using Lists

1. Create an unordered list ( <ul> ) to represent a navigation bar.

2. Add at least three navigation links such as:

- Home

- Destinations

- Contact

3. Style the navigation bar using embedded CSS to:

- Remove bullet points

- Display items horizontally

- Add background color and spacing

## Html code:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_1_1773343764640.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=X1U5MCSjX4P27xEYhTMHZFsZFNI%3D&Expires=1773948564' alt='OCR图片'/></div>

CSS (embedded):

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_2_1773343764648.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qJ5PBa3mwW0cApc1%2Bx2Vexwx%2B0o%3D&Expires=1773948564' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_3_1773343764659.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=woqDVRxy117L6v9bNojDi0lmups%3D&Expires=1773948564' alt='OCR图片'/></div>

## External CSS

- External CSS is used to apply styles to a web page from a separate CSS file.

- This helps keep the HTML structure and design styles separate, making the code easier to read and maintain.

## Why use External CSS?

- One CSS file can style multiple HTML pages

- Keeps HTML files clean and organized

- Makes future style changes easier

## How is External CSS linked?

- External CSS is linked inside the <head> section using the <link> tag.

## ```html

<link rel="stylesheet" href="styles.css">

```

## How are CSS class names declared?

- Class names are defined in the CSS file using a dot (.） before the name.

- The same class name is then used in the HTML element.

CSS file:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_1_1773343764679.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KQIa6UGAXQFRNuDhet9GyKDOUUg%3D&Expires=1773948564' alt='OCR图片'/></div>

HTML file:

<table class="table-style">

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_2_1773343764704.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=em6liU4LvikLUiqUmatXbPKGLOw%3D&Expires=1773948564' alt='OCR图片'/></div>

## Important Rules

- Class names can contain letters, numbers, and hyphens.

- Class names should be meaningful.

- The same class can be reused on multiple elements.

## Part C: Table enhancement using external CSS

Use the Trip Cost Overview table created and modified in Lab 01 in-class test.

Follow the instructions below:

1. Locate the Trip Cost Overview table in your HTML file. Use external CSS to apply the table styles.

2. Apply a CSS class to the table to improve its appearance (width, border collapse, alignment).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_1_1773343764713.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9nI9GTbBRSKP3qv1QZ8mauDkLxU%3D&Expires=1773948564' alt='OCR图片'/></div>

3. Apply two different background colors to table rows using CSS classes.

- One color should be applied to the header row.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_2_1773343764721.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=feP9%2F3CW50MUqHhzku7DVkkUXQk%3D&Expires=1773948564' alt='OCR图片'/></div>

- Another color should be applied to the data rows.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_3_1773343764729.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AVMiBc6UFsslaRNJ3YWbIzsf9BA%3D&Expires=1773948564' alt='OCR图片'/></div>

4. Ensure the table remains readable and well-structured after applying CSS.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260313032915fb030ac08d154cb3%2Fcrop_4_1773343764735.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Bd%2B3eNUFvT3vFJLw%2B2jvaA%2FhdEY%3D&Expires=1773948564' alt='OCR图片'/></div>