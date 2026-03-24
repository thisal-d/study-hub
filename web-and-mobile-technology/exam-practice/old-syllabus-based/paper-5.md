1. What is the output of this subtraction involving two strings?

```javascript
console.log("5" - "2");
```

A) "5-2"
B) "3"
C) 3
D) NaN

**Answer:** C

2. What gets logged to the console?

```javascript
var a = [1];
var b = a;
b[0] = 5;
console.log(a[0]);
```

A) 1
B) 5
C) undefined
D) ReferenceError

**Answer:** B

3. What is the output of the following type check?

```javascript
console.log(typeof typeof 10);
```

A) "number"
B) "string"
C) "object"
D) NaN

**Answer:** B

4. What will this conditional statement output?

```javascript
if ("") {
    console.log("A");
} else {
    console.log("B");
}
```

A) A
B) B
C) undefined
D) SyntaxError

**Answer:** B

5. What is the output of modifying the array's length property?

```javascript
var arr = [1, 2, 3];
arr.length = 0;
console.log(arr[0]);
```

A) 1
B) 0
C) null
D) undefined

**Answer:** D

6. What will be the output when accessing a string index?

```javascript
var s = "hello";
console.log(s[1]);
```

A) "h"
B) "e"
C) "l"
D) undefined

**Answer:** B

7. What is the value of `i` outside the `for` loop?

```javascript
for(var i = 0; i < 5; i++) {
    if(i === 2) break;
}
console.log(i);
```

A) 0
B) 2
C) 5
D) undefined

**Answer:** B

8. What gets printed after this loop finishes?

```javascript
var count = 0;
for(var i = 0; i < 5; i++) {
    if(i === 2) continue;
    count++;
}
console.log(count);
```

A) 5
B) 4
C) 3
D) 2

**Answer:** B

9. What does the `push()` method return?

```javascript
var arr = [];
console.log(arr.push(1));
```

A) [1]
B) 1
C) 0
D) undefined

**Answer:** B

10. What is the result of loosely comparing `null` and `undefined`?

```javascript
console.log(null == undefined);
```

A) true
B) false
C) TypeError
D) NaN

**Answer:** A

11. What is the result of strictly comparing `null` and `undefined`?

```javascript
console.log(null === undefined);
```

A) true
B) false
C) TypeError
D) NaN

**Answer:** B

12. What gets evaluated by the logical AND operator?

```javascript
console.log(true && false);
```

A) true
B) false
C) null
D) undefined

**Answer:** B

13. What value is assigned to `x` due to short-circuiting?

```javascript
var x = 0 || 5;
console.log(x);
```

A) 0
B) 5
C) true
D) false

**Answer:** B

14. What is the output of reading the `length` property of a string?

```javascript
console.log("hello".length);
```

A) 4
B) 5
C) 6
D) undefined

**Answer:** B

15. What will be logged to the console respecting scope behavior?

```javascript
var x = 1;
{
    var x = 2;
}
console.log(x);
```

A) 1
B) 2
C) undefined
D) SyntaxError

**Answer:** B

16. What happens when you add a number to an uninitialized variable?

```javascript
var x;
console.log(x + 2);
```

A) 2
B) "undefined2"
C) NaN
D) null

**Answer:** C

17. What will this conditional block evaluate?

```javascript
if ([]) {
    console.log("Array is truthy");
} else {
    console.log("Array is falsy");
}
```

A) Array is truthy
B) Array is falsy
C) Error
D) undefined

**Answer:** A

18. What is the output of the `Math.max` passing multiple numbers?

```javascript
console.log(Math.max(1, 5, 3));
```

A) 1
B) 3
C) 5
D) NaN

**Answer:** C

19. What gets returned if you access an undefined property on an object?

```javascript
var obj = { a: 1 };
console.log(obj.b);
```

A) 1
B) null
C) undefined
D) ReferenceError

**Answer:** C

20. What is the output of applying the increment operator on a string number?

```javascript
var s = "2";
s++;
console.log(s);
```

A) "21"
B) "3"
C) 3
D) NaN

**Answer:** C

21. What gets logged with the strict inequality operator?

```javascript
console.log(5 !== "5");
```

A) true
B) false
C) undefined
D) TypeError

**Answer:** A

22. What gets logged when hoisting function declarations of the same name?

```javascript
function f() { return 1; }
function f() { return 2; }
console.log(f());
```

A) 1
B) 2
C) Error
D) undefined

**Answer:** B

23. What does `getElementById` return if the element doesn't exist?

```javascript
console.log(document.getElementById("nonexistent"));
```

A) undefined
B) null
C) false
D) ""

**Answer:** B

24. What happens when a return statement is empty?

```javascript
function run() {
    return;
    console.log(1);
}
console.log(run());
```

A) 1
B) null
C) undefined
D) SyntaxError

**Answer:** C

25. Does a multiline array initialization work without errors?

```javascript
var arr = [1,
2,
3];
console.log(arr.length);
```

A) 1
B) 3
C) undefined
D) SyntaxError

**Answer:** B
