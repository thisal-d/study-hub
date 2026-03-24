## Practice Paper 3
### Questions

**1. Which of the following URLs exhibits a malformed protocol syntax?**  
A) `https://www.google.com`  
B) `http:/www.example.com`  
C) `ftp://192.168.1.1`  
D) `http://localhost:3000`  

**2. What distinguishes a Virtual Private Network (VPN) connection from a standard Wide Area Network (WAN) transfer?**  
A) VPNs do not scale globally, WANs do.  
B) A VPN relies on encryption explicitly to simulate a secure, private tunnel over public architecture.  
C) VPNs entirely bypass the Internet, functioning locally.  
D) WANs only utilize HTTP paths, whereas VPNs use FTP.  

**3. During authentication, why is the `POST` method strictly preferred over `GET` for submitting user credentials?**  
A) POST encrypts data on the database level spontaneously.  
B) GET restricts forms strictly to 55 characters in total length.  
C) POST embeds the data directly inside the HTTP Request body, avoiding URL exposure.  
D) GET disables server-side cookies.  

**4. In network structures, a standard proxy server acts predominately as:**  
A) An intermediary hub for requests originating from clients seeking resources from peripheral servers.  
B) A local storage drive for backup systems.  
C) The authoritative DNS entity for global top-level domains.  
D) The central processor of an intranet backbone.  

**5. Which protocol establishes standard rules for directly uploading files to, or downloading architectures from, a web server?**  
A) IMAP  
B) UDP  
C) SMTP  
D) FTP  

**6. Can a generic HTML `<div>` element inherently utilize a `value` attribute for form calculation?**  
A) Yes, if specified dynamically by custom IDs.  
B) Yes, by default all HTML elements support `value`.  
C) No, `value` is an attribute specifically intended for form `<input>` interfaces.  
D) No, `value` is deprecated entirely in HTML5.  

**7. From an accessibility and SEO standpoint, what is the semantic implication of opting for `<em>` text instead of standard `<i>` text?**  
A) `<em>` emphasizes semantic meaning and importance, while `<i>` strictly applies visual italicization.  
B) `<em>` creates larger fonts, `<i>` creates smaller fonts.  
C) `<em>` guarantees CSS priority overriding, whereas `<i>` fails.  
D) There is no structural formatting difference; they are redundant.  

**8. If a rendered `<img>` tag lacks both explicit `width` and `height` dimensional attributes, how does the browser process it upon execution?**  
A) The browser ignores the image outright and displays raw text.  
B) The browser scales it automatically to fit exactly 1/4 of the viewport window.  
C) The browser forces a dimension of `100px` by default.  
D) The browser initially renders it at its native absolute pixel size, potentially causing layout disruption during loading.  

**9. Which specific HTML5 form input type enforces algorithmic validation checking to ensure an "at" (@) symbol exists within the inputted text string?**  
A) `type="string"`  
B) `type="username"`  
C) `type="email"`  
D) `type="text@"`  

**10. Implementing the `target="_blank"` attribute inside an active `<a>` anchor tag produces what behavioral result?**  
A) It deletes previous cookies associated with the target domain.  
B) It triggers the linked document to open securely within a separate, new browser tab or window.  
C) It forces the element to remain hidden until hovered.  
D) It reloads the document with a blank, white background layout.  

**11. Which boolean HTML attribute, when applied, ensures that a designated input field cannot be bypassed before form finalization?**  
A) `autocomplete`  
B) `mandatory`  
C) `required`  
D) `enforce`  

**12. Based on standard CSS box-sizing principles, if an element is designated `width: 100px; padding: 10px; border: 5px solid black;`, what is its total rendered horizontal width?**  
A) 100px  
B) 115px  
C) 120px  
D) 130px  

**13. Which CSS selector explicitly targets any `<p>` element that is a direct, immediate child of a parent `<div>` element?**  
A) `div + p`  
B) `div > p`  
C) `div p`  
D) `div ~ p`  

**14. Implementing the CSS `float` property fundamentally does what to an element?**  
A) Shrinks the element horizontally to center alignment.  
B) Makes the element hover above the text sequentially.  
C) Pushes the element to the specified margin edge (left/right), allowing surrounding inline text elements to wrap around it dynamically.  
D) Anchors the element securely to the viewport during absolute scrolling.  

**15. Which specific CSS property allows manipulation of the background canvas color beneath specific HTML elements?**  
A) `back-color`  
B) `bgcolor`  
C) `background-color`  
D) `color-bg`  

**16. What syntax denotes an inactive block comment within an external CSS `.css` stylesheet?**  
A) `<!-- Comment -->`  
B) `// Comment`  
C) `/* Comment */`  
D) `# Comment`  

**17. What layout-solving mechanism is applied by invoking the CSS `clear` property?**  
A) It erases internal padding within floated divs.  
B) It triggers transparency visibility for surrounding sibling elements.  
C) It mandates that an element pushes vertically down to reset positioning below corresponding active floating elements.  
D) It clears locally cached CSS variables.  

**18. Trace the output of the following JavaScript snippet:**
```javascript
var x = 10; 
function test() { 
   var x = 5; 
} 
test(); 
console.log(x);
```
A) `Undefined`  
B) `5`  
C) `10`  
D) `Error`  

**19. Given the string formulation `let text = "Apple, Banana, Kiwi"; let part = text.slice(7, 13);`, identify the explicit substring isolated inside the variable `part`.**  
A) `"Apple"`  
B) `"Banana"`  
C) `", Bana"`  
D) `"Kiwi"`  

**20. Applying the `break` statement internally within a looping structure executes what fundamental action?**  
A) Pauses the code pending user interaction natively.  
B) Exits the loop dynamically entirely and moves to execution statements directly pursuing the loop.  
C) Restarts the loop entirely from index 0.  
D) Skips merely the current iteration execution block and proceeds toward the proceeding iteration sequentially.  

**21. Upon execution, what value format does the JavaScript DOM method `document.querySelector(".myClass")` exclusively return?**  
A) An Array containing all NodeList elements maintaining the designated class.  
B) Strictly the first matching element found sequentially retaining the designated class.  
C) Always an explicit integer identifying class counts.  
D) A Boolean depending dynamically on existence.  

**22. Observe the asynchronous pattern: `setTimeout(function(){ console.log("A"); }, 0); console.log("B");`. What is the true sequential console output execution order?**  
A) A, then B  
B) They deploy identically concurrent.  
C) B, then A  
D) Execution halts returning an endless loop error.  

**23. Evaluating type casting, what is the processed JavaScript result of `Boolean("false")`?**  
A) `true`  
B) `false`  
C) `NaN`  
D) `undefined`  

**24. Which explicit array method strictly attaches a deployed new element dynamically toward the absolute end of the array sequence?**  
A) `pop()`  
B) `shift()`  
C) `push()`  
D) `unshift()`  

**25. How do you properly integrate an active Event Listener to an isolated button dynamically referencing DOM objects without destructively overwriting pre-existing inline scripted event conditions?**  
A) `button.onclick = myFunction;`  
B) `button.setAttribute("onclick", "myFunction()");`  
C) `button.addEventListener('click', myFunction);`  
D) `button.eventAssign('click', myFunction);`  

### Answer Sheet – Paper 3
1. B
2. B
3. C
4. A
5. D
6. C
7. A
8. D
9. C
10. B
11. C
12. D
13. B
14. C
15. C
16. C
17. C
18. C
19. B
20. B
21. B
22. C
23. A
24. C
25. C
