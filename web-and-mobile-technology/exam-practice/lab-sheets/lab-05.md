<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_1_1773343781742.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PJmJQ4k2n9ViprGjBTvs5%2BDKeV8%3D&Expires=1773948581' alt='OCR图片'/></div>

<div align="center">

# Faculty of Computing

</div>

<div align="center">

# BSc (Hons) in Software Engineering Year 2 Semester 2 (2026)

</div>

SE2020 - Web and Mobile Technologies

Lab 05

## Practical Lab 05: Advanced HTML DOM Manipulation

## 1. Scenario: Interactive Travel Registration Portal (Extended)

In Lab 01, you converted a static travel web page into an interactive page using basic DOM methods and events.

In this lab, you will extend the same application by adding:

- Advanced DOM traversal

- Dynamic counters

- Conditional styling

- Event delegation

- Input validation

This lab focuses on improving user experience using DOM logic.

## 2. What You Will Learn

By completing this lab, you will be able to:

- Traverse the DOM using parent, child, and sibling relationships

- Dynamically create and remove HTML elements

- Apply conditional styling using JavaScript

- Validate form inputs using DOM events

- Handle events efficiently using event delegation

3. Starter Files

Use the same files from Lab 01:

- index.html

- script.js

- Do not change the existing HTML structure unless mentioned

- All logic must be written inside script.js

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_2_1773343781805.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lNOHRuFfyy3AR09%2BSyh2OqHKrZ8%3D&Expires=1773948581' alt='OCR图片'/></div>

## 4. DOM Traversal (New Concept)

Task 1 - Access Elements Using DOM Relationships

Add the following code to script.js:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_1_1773343781817.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nJZ%2FBGLQw3CdyHuU2vF6KxLJYV0%3D&Expires=1773948581' alt='OCR图片'/></div>

## Explanation

- parentNode accesses the parent element

- children returns all child elements

- Looping allows bulk DOM manipulation

## 5. Creating Dynamic Elements

Task 2 - Display Total Registered Travelers Add the following code below existing DOM logic:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_2_1773343781826.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8dK3KINX0Aq%2F14hhWXk3sC9g7nc%3D&Expires=1773948581' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_3_1773343781834.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gW3qHnleyCHPgGYduV2wDTF%2Byo4%3D&Expires=1773948581' alt='OCR图片'/></div>

Call updateCount():

- After adding a traveler

- After deleting a traveler

## 6. Conditional Styling Using DOM

Task 3 - Highlight Rows Based on Age

Update your addTraveler() function:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_1_1773343781859.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=E6L1j2oG80HCea%2FaPS%2BxiCLB4D0%3D&Expires=1773948581' alt='OCR图片'/></div>

Explanation

- DOM styles change dynamically

- Conditions improve visual feedback

## 7. Real-Time Form Validation

Task 4 - Validate Inputs While Typing

Task 4.1 - Selecting Elements Using querySelector()

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_2_1773343781911.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c5FiE%2FrGHcyKAOQzHsWVbWoG1e0%3D&Expires=1773948581' alt='OCR图片'/></div>

- querySelector() selects the first matching element

- Uses CSS selector syntax

- Can select:

- By ID -> #id

- By type $ \to $ input

- By attribute $ \rightarrow $ input[type="submit"]

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_3_1773343781960.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7Ln%2BSFxNxD%2Fqh%2BHnClA59IBRgAU%3D&Expires=1773948581' alt='OCR图片'/></div>

<div align="center">

Task 4.2 - Applying querySelector() in Form Validation

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_1_1773343781967.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UsLfMwwmDJYfT8RQMBCYI9SjOSc%3D&Expires=1773948581' alt='OCR图片'/></div>

8. Dynamic Filtering Using DOM Task 5 - Filter Travelers by Age Group Add a dropdown in HTML above the table:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_2_1773343781975.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2R8dINHg%2FQUjrQLnL%2BcIi3Vyhl8%3D&Expires=1773948581' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_3_1773343781981.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Z%2BZtD30%2FVMZ8ftR7d8MhbIld1SM%3D&Expires=1773948581' alt='OCR图片'/></div>

Add the following code to script.js:

```javascript

// Task 5: Dynamic filtering by age group

// --------------------------

document.getElementById("ageFilter").onchange = function () {

  let filter = this.value;

  let rows = table.rows;

  for (let i = 1; i < rows.length; i++) {

    let age = parseInt(rows[i].cells[i].innerText, 10);

    rows[i].style.display = "table-row";

    if (filter === "under18" && age >= 18) rows[i].style.display = "none";

    if (filter === "adult" && (age < 18 || age >= 60)) rows[i].style.display = "none";

    if (filter === "senior" && age < 60) rows[i].style.display = "none";

  }

};

```

## 9. Event Delegation (Best Practice)

Task 6 - Handle Delete Buttons Efficiently

Replace individual onclick handlers with:

```javascript

// Task 6: Event delegation for delete buttons

// ------------------------------------

table.addEventListener("click", function (e) {

  if (e.target.tagName === "BUTTON") {

    let row = e.target.parentNode.parentNode;

    row.remove();

    updateCount();

  }

});

```

## Explanation

- One listener handles all delete buttons

- Improves performance and scalability

## 10. Expected Output

After completing this lab:

- Travelers are added and removed dynamically

- Table rows change color based on age

- Form validates inputs in real time

- Traveler count updates automatically

- Filtering works without page reload

## 11. Submission

- Submit:

- index.html

- script.js

- Follow naming conventions

- Comment your JavaScript code

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130329328c90f404da6e4010%2Fcrop_1_1773343781988.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=66ZDB%2BXnrRnJ9e2yNM8vOwZfC2o%3D&Expires=1773948581' alt='OCR图片'/></div>