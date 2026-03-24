## Practice Paper 7

### Questions

**1. What is the modern, highly recommended DOM method to attach a listener behavior to an element without destructively overwriting pre-existing handlers?**  
A) `attachEvent()`  
B) `addEventListener()`  
C) `setEventHandler()`  
D) `bindEvent()`  

**Answer:** B

**2. When utilizing `addEventListener` exclusively for a mouse click, what is the syntactically correct first parameter assignment?**  
A) `"onclick"`  
B) `"mouseclick"`  
C) `"click"`  
D) `"clicking"`  

**Answer:** C

**3. What serves as the fundamental architectural advantage of using `addEventListener()` instead of relying on inline `<button onclick="...">`?**  
A) It natively executes code faster than inline scripting.  
B) It allows multiple listeners for the exact same event type to be chained on a single element.  
C) It automatically encrypts the local JavaScript payload inside the console network tab.  
D) It completely strips out anonymous functions for heightened security.  

**Answer:** B

**4. Which precise event fundamentally triggers when an HTML structured form is actively validated and fired via a generic submit button?**  
A) `onchange`  
B) `onfocus`  
C) `onsubmit`  
D) `onblur`  

**Answer:** C

**5. Which HTML DOM event successfully registers the exact moment a user clicks entirely away from an input text box, consequently losing system focus?**  
A) `onblur`  
B) `onchange`  
C) `onfocus`  
D) `onreset`  

**Answer:** A

**6. Evaluating keyboard mapping, what logically takes place if you bind a listener tracking the `keyup` event?**  
A) It fires relentlessly in a loop while the physical key remains compressed down.  
B) It executes immediately on the first millimeter of the keystroke.  
C) It solely triggers precisely when the depressed key is eventually released physically.  
D) It prevents character printing explicitly on the browser viewport.  

**Answer:** C

**7. In the baseline syntax configuration `element.addEventListener(event, function, useCapture);`, what specific functionality does the `useCapture` boolean parameter govern?**  
A) Whether the form strictly intercepts user keystroke patterns.  
B) Whether the script natively activates backend server analytics telemetry.  
C) Whether to engage event bubbling logic opposed to event capturing propagation logic.  
D) Whether the target function forcibly throws a runtime error upon calculation failure.  

**Answer:** C

**8. By default hierarchy, if the `useCapture` parameter is completely omitted when declaring `addEventListener()`, what is its underlying default status?**  
A) `true`  
B) `false`  
C) `undefined`  
D) `null`  

**Answer:** B

**9. When analyzing an event listener's callback function configured as `function(e) { }`, what structure does the parameter `e` natively encapsulate?**  
A) An Error extraction payload object.  
B) Simply the standalone HTML DOM node itself.  
C) The comprehensive Event Object encapsulating specific meta-information regarding the action context.  
D) The local browser environment's cache iteration identifier.  

**Answer:** C

**10. How do you syntactically detach a specific registered listener so that an element no longer perpetually tracks an interaction?**  
A) `element.deleteEventListener()`  
B) `element.removeEventListener()`  
C) `element.clearEventListener()`  
D) `element.stopListening()`  

**Answer:** B

**11. Which DOM event correctly fires specifically when the content of an `<input>`, `<select>`, or `<textarea>` has changed and confirmed?**  
A) `onchange`  
B) `onselect`  
C) `onblur`  
D) `onsubmit`  

**Answer:** A

**12. What keyword fundamentally functions as a self-referential variable pointing to the exact DOM element that triggered an inline call, such as `<button onclick="this.style.display='none'">`?**  
A) `document`  
B) `element`  
C) `self`  
D) `this`  

**Answer:** D

**13. In a callback function bound directly to a user keyboard input sequence, typing `event.target.value.length` achieves what calculated objective?**  
A) Dynamically resolving an aggregate character string count present inside the input block physically.  
B) Constraining the user text entry against a max-length barrier dynamically.  
C) Tallying up the numerical count of sibling input elements inside the structural form.  
D) Bypassing the native boolean empty-state validation algorithms.  

**Answer:** A

**14. If you deploy a function parameter exactly as `btn.addEventListener("click", calculate());`, what core semantic issue actively occurs preventing expected logic flow?**  
A) Nothing fundamentally; the standard syntax inherently tolerates it perfectly.  
B) The parser throws a rigid JS compilation error blocking overall execution.  
C) The JavaScript engine executes the target function instantly on loading phase, instead of passively waiting for a click trigger.  
D) The routine entirely isolates itself, circumventing DOM manipulation variables natively.  

**Answer:** C

**15. Which property mapping on the standard Event object natively identifies the explicit key character hit during a keyboard stroke transmission loop?**  
A) `event.press`  
B) `event.stroke`  
C) `event.button`  
D) `event.key`  

**Answer:** D

**16. The `onkeydown` native hook fires in what specific iterative circumstance when a user is typing normally?**  
A) Moving the mouse across a UI keyboard icon layout vertically.  
B) Continuously firing while a physical keyboard key is depressed and held solidly down.  
C) Releasing a key abruptly stopping typing processing.  
D) Sending a right-click hook onto a text `<p>` link.  

**Answer:** B

**17. Which function directly restricts a variable number exactly rounding to two tight decimal frames natively useful for currency/DOM wage calculation string outputs?**  
A) `toFixed(2)`  
B) `roundUp(2)`  
C) `setDecimals(2)`  
D) `math.float(2)`  

**Answer:** A

**18. What string parsing utility function securely sanitizes and translates numbers trapped conceptually as text outputs from `document.getElementById("cost").value` toward functional mathematical calculations?**  
A) `toNumber()`  
B) `StringToMath()`  
C) `parseInt()`  
D) `math.parse()`  

**Answer:** C

**19. When writing a string literal to feed raw DOM `innerText`, which literal syntax natively evaluates JavaScript string template dynamic interpolation variables flawlessly?**  
A) `#{variableName}`  
B) `${variableName}`  
C) `{{variableName}}`  
D) `%variableName%`  

**Answer:** B

**20. In what native data structural format does HTML DOM fundamentally absorb and read values derived inside generic form fields strictly originally?**  
A) Integer Numbers  
B) Boolean logic  
C) String expressions  
D) Core mapped Objects  

**Answer:** C

**21. You maintain a `<select>` graphical element tracking categories. What serves as the absolute most reliable DOM event bind matching user choice variance logic seamlessly?**  
A) `"keydown"`  
B) `"change"`  
C) `"click"`  
D) `"scroll"`  

**Answer:** B

**22. Through conceptual DOM taxonomy, how do you correctly define the term "Live Collection" behavior strictly representing NodeList outputs derived from methods like `getElementsByClassName`?**  
A) The returned structural list streams instantaneous WebSocket payload data over real-time WebRTC ports.  
B) The arrays recursively brute-force check browser payload sizing every active user second sequentially.  
C) Elements dynamically deleted or built via JavaScript autonomously propagate corresponding sizing updates identically throughout attached node variables held conceptually.  
D) Arrays remain permanently static reflecting historical snapshots from execution timing boundaries.  

**Answer:** C

**23. Which explicit listener type executes correctly the instance an interactive input node achieves direct visual user engagement natively via keyboard tabbing manipulation?**  
A) `onactive`  
B) `onfocus`  
C) `onselect`  
D) `onblur`  

**Answer:** B

**24. When grouping inputs through a DOM `<fieldset>` parameter container formally, what secondary tag routinely specifies the title mapping to define its enclosed caption context universally?**  
A) `<caption>`  
B) `<title>`  
C) `<legend>`  
D) `<header>`  

**Answer:** C

**25. Which inline logic snippet securely and natively invokes a mapped function specifically transferring the active field's own user inputted sequence string explicitly as a tracked argument element?**  
A) `<select onchange="showCity(this.value)">`  
B) `<select onchange="showCity(select.value)">`  
C) `<select onchange="showCity(self)">`  
D) `<select onchange="showCity()">`  

**Answer:** A
