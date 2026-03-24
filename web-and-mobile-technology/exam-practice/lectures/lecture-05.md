<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975438.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jr8qQrYhyegae1dLroKhmzMlTfs%3D&Expires=1773948775' alt='OCR图片'/></div>

## Sri Lanka Institute of Information Technology Faculty of Computing

<div align="center">

# SE2020 - Web Technologies and Mobile

</div>

Ms. Dilani Lunugalage

BSc (Hons) in Information Technology

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975490.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=sANe94sF1i3bH371FMtnxO%2FAuDs%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_3_1773343975496.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cmlhQKtFz4gHH7RBk6kj%2BiT3mGY%3D&Expires=1773948775' alt='OCR图片'/></div>

## Lecture 05 More on Manipulating the DOM

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975502.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ITiSPoLLMBHUMWBq75tO5aV6QxA%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975511.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=d2kU4qnd4Necgv4K%2F1g6wMJk66s%3D&Expires=1773948775' alt='OCR图片'/></div>

## Manipulating the DOM

- as seen last week, we can use JavaScript to access elements in the DOM

- retrieve and store a reference to the element

```javascript

const txtIn = document.getElementById("in");

const txtOut = document.getElementById("out");

```

- get the value of field using the value attribute

let input = txtIn.value;

- display results using the innerText attribute

```c

txtOut.innerText = "result";

```

- we can also manipulate other attributes of the element

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975517.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=T0reZSlJXlYQJj8dCGpYXvy3bP8%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975523.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9PKJzmO7Z7wG7lztvOOzV471qUc%3D&Expires=1773948775' alt='OCR图片'/></div>

## How to access DOM elements

- every element in the DOM can be accessed using JavaScript

- we have seen how to do this for elements with a unique ID:

```javascript

const element1 = document.getElementById("id");

```

- can also be done using querySelector()

- returns first element that matches the criteria

```javascript

const element2 = document.querySelector("#id");

const element3 = document.querySelector(".class");

//paragraph inside div

const element4 = document.querySelector("div p");

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975530.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=59QSSq%2Bd9ylDxglQw0iCT%2Bb7sGc%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975535.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LwjH9VTjmbn5ATlZjUmi72xQl3Y%3D&Expires=1773948775' alt='OCR图片'/></div>

## querySelector() - CSS

```html

<button onClick="checkVal()">Click Me</button>

<p class="para">Hello World</p>

<h3 class="para">Hello World</h3>

<script>

Function checkVal(){

const element3 = document.querySelector(".para");

paragraph.textContent = "Button Clicked!"

}

</script>

```

- → selects by class

- querySelector() returns the first matching element

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975544.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tZ0TMlKxYdI%2B2mwpfkjC6DcTUdo%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975552.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BL2OTs2aD7fgesOUACfMs7Kfbqs%3D&Expires=1773948775' alt='OCR图片'/></div>

## How to work with attribute nodes

once required element has been retrieved you can modify attribute node using:

- getAttribute(<attribute>)

- return the value of the attribute

- setAttribute(<attribute>, <value>)

- if attribute exist, overwrites its value, otherwise, add attribute-value pair to the element

- removeAttribute(<attribute>)

- delete attribute from element

- hasAttribute(<attribute>)

- if attribute exists, returns true, otherwise, returns false

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975560.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zeQ43f2%2Ft3DaZ%2FRnwtqp6h5UOmQ%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975567.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=K2PdQScKKIGz490EgmerPzMDAeg%3D&Expires=1773948775' alt='OCR图片'/></div>

## TO DO: change attribute nodes

- what is the effect of these JavaScript statements? Why?

```javascript

const pic = document.querySelector("img");

console.log(pic.hasAttribute("src"));

console.log(pic.getAttribute("src"));

```

## Changing the attribute value

```javascript

pic.setAttribute("src", "images/happy.jpg");

console.log(pic.getAttribute("src"));

```

▶ □ ▶

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975572.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IF1Yk8HY3F0geyqGwcqF0qb6D7M%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975577.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dORzHZ%2F%2FZF4gL2DdV4Nt0%2FBvPmc%3D&Expires=1773948775' alt='OCR图片'/></div>

## Changing CSS rules

- can easily change appearance of elements by adding, changing or removing class attribute

- get element to be targeted

- use setAttribute to add or change class attribute

- use removeAttribute to remove class attribute

```javascript

element1.setAttribute("class", "cssRule");

element2.removeAttribute("class");

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975585.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Uwz0vA1eGwB12qOYHvmEMtodj6I%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975599.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Ki8XocFDn1lJWAXrSTi184JjMh0%3D&Expires=1773948775' alt='OCR图片'/></div>

## TO DO: change class attribute nodes

- what is the effect of these JavaScript statements? Why?

let first = document.getElementById("first");

first.removeAttribute("class");

let second = document.getElementById("second");

second.setAttribute("class", "blue");

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975605.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EM%2Bm4WP8%2FALwY1ANv4%2FiBctcbaM%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975611.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lK9ZQ8rFUUi3kRx8T5bREHDCkDA%3D&Expires=1773948775' alt='OCR图片'/></div>

## Retrieving multiple elements

- examples so far have only retrieved a single element using:

- getElementById()

- querySelector()

- can also retrieve multiple elements using:

- getElementsByTagName()

- getElementsByName()

- getElementsByClassName()

live node list

- querySelectorAll()

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975617.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ISilDrWocTdys%2BRy%2BeFU9HMkljI%3D&Expires=1773948775' alt='OCR图片'/></div>

non-live node list

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975624.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MjWdRuKdtjgRNmbggpWtWiQshA0%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_3_1773343975630.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=teKf4XwEieOIo5JVlEmXs2lKPqg%3D&Expires=1773948775' alt='OCR图片'/></div>

## Accessing elements

- get all matching elements. Check this using console.log

```javascript

const allParas = document.querySelectorAll("p");

```

- access single element specifying its index

allParas[0].setAttribute("class", "green");

- loop through all elements using for loop

```javascript

for (let i = 0; i < allParas.length; i++) {

    allParas[i].setAttribute("class", "blue");

}

```

▯ ▯ ▯ ▯ ▯ ▯

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975636.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jaD85c3LGb3P4rHj4fhIQUICqao%3D&Expires=1773948775' alt='OCR图片'/></div>

## Live lists and non-live lists

- all these methods return node-list of objects

- can access individual elements

- can loop through elements

- but there are no methods to add new elements or remove elements

- querySelectorAll() returns a non-live list any changes to the DOM do not modify the original node list returned

```javascript

document.querySelectorAll(".card.active")

document.querySelectorAll("#container > p")

document.querySelectorAll("ul li:first-child")

document.querySelectorAll("input[type='text']")

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975641.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AS9uV2AzgdXkC5B%2FsPm70%2FnOXbo%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975646.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NB9VcWd8GSYZgCgArZRI82IeWnA%3D&Expires=1773948775' alt='OCR图片'/></div>

## Live List and Non-Live list

```javascript

let live = document.getElementsByClassName("box");

let staticList = document.querySelectorAll(".box");

console.log("Live:", live.length);

console.log("Static:", staticList.length);

```

Now add this code through dev tools

```html

<div class="box"></div>

```

Live list updated instantly but not the static list

▯ ▯ ▯ ▯ ▯ ▯

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975651.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qYtey7%2BQq%2BbwHzIRrgr%2B9yPSK8A%3D&Expires=1773948775' alt='OCR图片'/></div>

## TO DO: access multiple elements

- what is the effect of these JavaScript statements? Why?

```javascript

let x = document.getElementsByTagName("p")

for (let i = 0; i < x.length; i+=2)

{

    x[i].setAttribute("class", "green");

}

let y = document.querySelectorAll("div p");

for (let i = 0; i < y.length; i++) {

    y[i].setAttribute("class", "green");

}

let z = document.querySelectorAll("div, p");

for (let i = 0; i < z.length; i++) {

    z[i].setAttribute("class", "green");

}

```

▯ ▯ ▯ ▯ ▯ ▯

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975658.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=55aN1Lz%2FbA8xhBrVFZ5jh586wGg%3D&Expires=1773948775' alt='OCR图片'/></div>

## Add Event Listeners

- We have used DOM events previously by adding listeners directly in the html element.

- However, in order to totally separate the HTML from the JavaScript code, it is better practice to add the event Listener inside the JavaScript code by using the addEventListener() method.

- This improves separation of concerns, readability and allows you to add the event listeners and effects even if you do not have control over the HTML code.

- The addEventListener() method attaches an event handler to a specified element.

- It will not overwrite existing event handlers on that element, so it is possible to add many event handlers to one element, including more than one identical event handler (e.g. you can add two click event listeners to the same element).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975665.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=f6ZiZXdkPebVcWwpf0hm8qlWbMo%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975671.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=d2kRJRKL%2Bm%2B31c8nnb%2BqD8OWEOk%3D&Expires=1773948775' alt='OCR图片'/></div>

- The other advantage of using the addEventListener() method, is that you get control of the event bubbling (how the event propagates through the DOM nodes).

- You can remove an event listener by using the removeEventListener() method.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975690.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fPCa8AS%2Br63oMSbXkbFllQlNN5U%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975699.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=N1mDRjwSSXFvm5tttOhKEM6c5%2FI%3D&Expires=1773948775' alt='OCR图片'/></div>

## The addEventListener() method

## Syntax

element.addEventListener(event, function, useCapture);

Where:

- element is the element on which we add the eventListener

- event is the event that we are listening for

- function is the function that gets called when the event is triggered. This can be a defined function or an anonymous function.

-сессуар is a boolean that specifies whether we use the event bubbling (false, also default option) or event capturing (true). This parameter is optional.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975706.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wjKZaxqf9VWtoqcdnMM9fZ4ErCI%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975711.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1vhxijXgZ46BDaQQApnc7PsAwqc%3D&Expires=1773948775' alt='OCR图片'/></div>

## Example - Change Background color

```html

<div id="turnPurple" style="height:150px; width:150px; border: solid thin black; margin: 10px;

</div>

<div id="clearPurple" style="height:150px; width:150px; border: solid thin black; margin: 10px;

</div>

<script>

document.getElementById( "turnPurple" ).addEventListener( "click", function() {

    document.getElementById( "turnPurple" ).style.backgroundColor = "purple";

});

document.getElementById( "clearPurple" ).addEventListener( "click", function() {

    document.getElementById( "turnPurple" ).style.backgroundColor = "white";

});

</script>

```

Click Me I'll turn purple

Click Me to clear purple

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975715.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dRbePpGZEvfIYL2%2BwyJafMtKPsQ%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975731.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=54fhPKq0%2B4GjzUBKJqmthcuGndM%3D&Expires=1773948775' alt='OCR图片'/></div>

## Example 1 - Simple Counter

## Click Counter

## Click Counter

Click Me

```html

<h2>Click Counter</h2>

<button id="btn">Click Me</button>

<div id="count">0</div>

<script>

const button = document.querySelector("#btn");

const counterDisplay = document.querySelector("#count");

let count = 0;

button.addEventListener("click", function() {

    count++;

    counterDisplay.textContent = count;

});

</script>

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975735.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nHEtCsanh9jRc7unC%2BAAs2rMegY%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975741.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ubIGQHtrA%2BvYmMnXoIjbQMBlnKE%3D&Expires=1773948775' alt='OCR图片'/></div>

## Example 2 -Character Count

## Live Character Counter

## Live Character Counter

hi there,

Characters:10

```html

<h2>Live Character Counter</h2>

<textarea id="textBox"></textarea>

<div id="charCount">Characters: 0</div>

<script>

    const textBox = document.querySelector("#textBox");

    const charCount = document.querySelector("#charCount");

    textBox.addEventListener("input", function(event) {

        charCount.textContent =

            "Characters: " + event.target.value.length;

    });

</script>

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975747.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UXSvDRxfPOOSvogLXdWGbSbmakY%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975752.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=x6V0cfa3ViK0cEL%2BHtCya%2F4dtGQ%3D&Expires=1773948775' alt='OCR图片'/></div>

## Example 03 - add form to index.html

- add following under <!-- form --> comment in index.html

```html

<!-- form -->

<form method="get">

  <fieldset>

    <legend>Calculate wages</legend>

    <p>

      <label for="name">Name:</label>

      <input type="text" id="name" name="name">

    </p>

    <p>

      <label for="hours">Hours worked:</label>

      <input type="number" id="hours" min="0" name="hours">

    </p>

  </fieldset>

  <button type="button" id="calculate">Calculate</button>

</form>

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975763.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dI7pyIH6Lo2sd4vL1hpKZPz8qB8%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975779.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JoSpoipp0USPE40rw6um2QeRwW0%3D&Expires=1773948775' alt='OCR图片'/></div>

## identify interactive elements

- user can interact with:

- text field with id=name

- text field with id=hours

- button with id=calculate

- Hourly rate = Rs.550

- program can output values to:

- paragraph with id=output

- need to listen for events:

- click calculate button

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975785.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xsNuGvUVkJPgCPSVD%2FMBnAMl2W8%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975791.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dr7XtUkOBinT62nHVaDaOlVq52w%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_3_1773343975795.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eQ382aANVAd5US0N0rw0PeEB4hk%3D&Expires=1773948775' alt='OCR图片'/></div>

## TO DO: get reference, add event listener

- First in your code in main.js we are getting the references to the interactive elements

```javascript

const btnCalculate = document.getElementById("calculate");

```

- Next append the following code to main.js to listen for when the user clicks the btnCalculate and execute calculate when they do

```javascript

//add event listener

btnCalculate.addEventListener("click", calculate);

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975800.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=h2gFZTDWfzp0uyFakOxHh%2BPgx5A%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975805.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=j3h2o5XBBdKM91ap6%2FtZiqWyVsc%3D&Expires=1773948775' alt='OCR图片'/></div>

## TO DO: implement event handler

- append the following code to main.js to handle the click event btnCalculate

```javascript

//implement calculate event handler

function calculate() {

    console.log("calculate");

}

```

## refresh index.html in browser

- click calculate button to check that calculate is called correctly

- calculate should be displayed in the Console window each time the button is clicked

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975809.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5R7pyV%2FxF%2FHqntdjpbcxtT41Vfw%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975816.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BpjqC2MibKREjCJOFLKJs0k6OsU%3D&Expires=1773948775' alt='OCR图片'/></div>

## TO DO: encode calculate

- calculate function with the following:

- One line is missing , complete that line as well.

```javascript

const hourlyRate= 550;

const name= document.getElementById("name").value;

let hours = parseInt(document.getElementById("hours").value);

const takeHome=hourlyRate * hours;

txtOutput.innerText = `${name} worked ${hours} hours

Take home pay is: £${takeHome.toFixed(2)}`;

```

- refresh index.html in browser

- enter data in the required fields and click the calculate button

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975823.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=C3fd644DikZJQh6kv9T2HyRUm%2BM%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975830.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dsG%2BzrZW3RiHbeaJXo6h1qqkGsc%3D&Expires=1773948775' alt='OCR图片'/></div>

## Thank You!

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_1_1773343975838.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PaoPRrYAR1x2K8pElQL8Z7ot7dY%3D&Expires=1773948775' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202603130332431d190ae1c6b8415d%2Fcrop_2_1773343975847.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XFOV5ufiiq2PBrQJQ4pzunAWKjs%3D&Expires=1773948775' alt='OCR图片'/></div>