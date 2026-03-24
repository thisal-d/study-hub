## Practice Paper 6

### Questions

**1. What does the Document Object Model (DOM) represent an HTML document as?**  
A) A flat text file  
B) A tree of Objects  
C) A relational database  
D) A strict array  

**Answer:** B

**2. Which method returns the first matching element in the DOM based on a CSS selector?**  
A) `getElementById()`  
B) `getElementsByClassName()`  
C) `querySelector()`  
D) `querySelectorAll()`  

**Answer:** C

**3. What is the correct way to select an element with the exact ID of "header"?**  
A) `document.querySelector("header")`  
B) `document.getElementById("#header")`  
C) `document.getElementById("header")`  
D) `document.getElementsByName("header")`  

**Answer:** C

**4. Which of the following methods returns a live collection of elements matching a specific tag?**  
A) `getElementByTagName()`  
B) `querySelector()`  
C) `getElementsByTagName()`  
D) `querySelectorAll()`  

**Answer:** C

**5. If you want to change the text color of an element retrieved via DOM to blue, which syntax is correct?**  
A) `element.color = "blue";`  
B) `element.style.textColor = "blue";`  
C) `element.style.color = "blue";`  
D) `element.cssColor = "blue";`  

**Answer:** C

**6. How can you retrieve the text content of a form input field in the DOM?**  
A) `inputElement.innerText`  
B) `inputElement.innerHTML`  
C) `inputElement.value`  
D) `inputElement.content`  

**Answer:** C

**7. Which DOM method is usually used to read the value of an existing HTML attribute, such as an image's `src`?**  
A) `readAttribute("src")`  
B) `getProperty("src")`  
C) `extractAttribute("src")`  
D) `getAttribute("src")`  

**Answer:** D

**8. How would you dynamically remove an applied CSS class named "hidden" from an element?**  
A) `element.deleteClass("hidden")`  
B) `element.removeAttribute("class")`  
C) `element.dropAttribute("class")`  
D) `element.style.class = "none"`  

**Answer:** B

**9. To change the background color of a container div to purple using JavaScript, what property do you use?**  
A) `element.style.bgcolor`  
B) `element.style.backgroundColor`  
C) `element.style.background-color`  
D) `element.background = "purple"`  

**Answer:** B

**10. What does `document.querySelectorAll("p")` return?**  
A) A live HTMLCollection  
B) A single HTML paragraph element  
C) A non-live NodeList  
D) A string of all paragraph texts  

**Answer:** C

**11. Which method checks if a specific attribute exists on an element and returns a boolean?**  
A) `checkAttribute()`  
B) `hasAttribute()`  
C) `containsAttribute()`  
D) `isAttribute()`  

**Answer:** B

**12. If `document.getElementsByClassName("box")` finds 3 elements, how do you access the second element in the returned collection?**  
A) `boxes.2`  
B) `boxes[1]`  
C) `boxes[2]`  
D) `boxes.get(1)`  

**Answer:** B

**13. How do you append or forcefully set an attribute, such as changing an `<img src="old.jpg">` to a new image?**  
A) `img.setAttribute("src", "new.jpg")`  
B) `img.putAttribute("src", "new.jpg")`  
C) `img.updateAttribute("src", "new.jpg")`  
D) `img.src("new.jpg")`  

**Answer:** A

**14. In DOM nomenclature, what directly represents HTML characteristics like `id`, `class`, and `src` attached to HTML nodes?**  
A) Value nodes  
B) Element nodes  
C) Attribute nodes  
D) Property nodes  

**Answer:** C

**15. Which character is used with `querySelector` to explicitly query by a CSS class name?**  
A) `#` (Hash)  
B) `.` (Dot)  
C) `@` (At symbol)  
D) `*` (Asterisk)  

**Answer:** B

**16. What is the fundamental difference between `querySelector` and `querySelectorAll`?**  
A) `querySelector` only works on IDs, while `querySelectorAll` works on classes.  
B) `querySelector` returns a boolean, while `querySelectorAll` returns an array.  
C) `querySelector` returns exactly the first matching element, while `querySelectorAll` returns all matching elements.  
D) There is no difference; they are aliases of the same function.  

**Answer:** C

**17. Which DOM property is most suited to overwrite or retrieve the enclosed text content of a `<p>` tag?**  
A) `element.textValue`  
B) `element.innerText`  
C) `element.htmlContent`  
D) `element.nodeText`  

**Answer:** B

**18. When using `getElementsByName()`, what types of HTML elements are you predominantly targeting?**  
A) `<div>` layouts  
B) `<img>` graphics  
C) `<br>` line breaks  
D) `<input>` or form elements  

**Answer:** D

**19. If `let cols = document.getElementsByTagName("div");` executes, and later a new `<div>` is added to the HTML dynamically via code, what happens to the `cols` variable?**  
A) It triggers a JavaScript error.  
B) It remains unchanged because it acts as a static snapshot.  
C) It automatically updates to reflect the new DOM tree because it is a live collection.  
D) It gets securely garbage collected.  

**Answer:** C

**20. When dealing with inline styles through DOM via `element.style`, CSS properties containing hyphens (like `font-size`) are converted into what syntax format?**  
A) PascalCase (e.g. `FontSize`)  
B) snake_case (e.g. `font_size`)  
C) camelCase (e.g. `fontSize`)  
D) literal string (e.g. `"font-size"`)  

**Answer:** C

**21. To safely change the title of the browser tab utilizing the DOM, which property is modified?**  
A) `window.pageTitle`  
B) `document.title`  
C) `element.head.title`  
D) `document.tabName`  

**Answer:** B

**22. Which DOM function allows writing a raw HTML output stream directly to the document, mostly invoked during initial page loading?**  
A) `document.print()`  
B) `document.echo()`  
C) `document.write()`  
D) `document.push()`  

**Answer:** C

**23. What does `document.getElementsByClassName("active")` realistically return if absolute zero elements successfully map to that specific class on the page?**  
A) `null`  
B) `undefined`  
C) An empty collection (length 0)  
D) `False`  

**Answer:** C

**24. If using `querySelector("div p")`, what element logic exactly is being structurally targeted?**  
A) Any paragraph (`<p>`) that is a descendant child of a container `<div>`.  
B) A `<div>` that natively implements a CSS class of "p".  
C) A `<div>` element and a `<p>` element targeted simultaneously.  
D) A paragraph `<p>` that features the specific ID of "div".  

**Answer:** A

**25. Which dedicated statement accurately strips an element's `class` attribute entirely from the rendering node?**  
A) `element.class = "";`  
B) `element.deleteAttribute("class");`  
C) `element.removeAttribute("class");`  
D) `element.clearClass();`  

**Answer:** C
