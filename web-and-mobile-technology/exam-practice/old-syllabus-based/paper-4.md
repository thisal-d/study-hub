1. What is the output of the following code?

```javascript
let x = "5" + 2;
console.log(x);
```

A) 7
B) "7"
C) "52"
D) 52

**Answer:** C

2. What is the output of the following code?

```javascript
let result = 2 + 5 + "8";
console.log(result);
```

A) "258"
B) "78"
C) 15
D) NaN

**Answer:** B

3. What does the following code output?

```javascript
console.log(typeof null);
```

A) "null"
B) "undefined"
C) "object"
D) "string"

**Answer:** C

4. What will be logged to the console?

```javascript
console.log("5" == 5);
```

A) true
B) false
C) undefined
D) Error

**Answer:** A

5. What will be logged to the console?

```javascript
console.log("5" === 5);
```

A) true
B) false
C) undefined
D) Error

**Answer:** B

6. What is the output of the following code?

```javascript
console.log(typeof undefined);
```

A) "null"
B) "undefined"
C) "object"
D) "string"

**Answer:** B

7. What is the output of the following code snippet?

```javascript
console.log(a);
var a = 5;
```

A) 5
B) ReferenceError
C) undefined
D) null

**Answer:** C

8. What does the following code print?

```javascript
let y;
console.log(y);
```

A) 0
B) null
C) undefined
D) ReferenceError

**Answer:** C

9. What is the length of the array?

```javascript
var arr = [10, 20, 30];
console.log(arr.length);
```

A) 2
B) 3
C) 4
D) 30

**Answer:** B

10. What is the output of accessing an out-of-bounds array index?

```javascript
var arr = [1, 2];
console.log(arr[2]);
```

A) 2
B) null
C) undefined
D) Error

**Answer:** C

11. What does the following function return?

```javascript
function test() {
    let x = 10;
}
console.log(test());
```

A) 10
B) null
C) undefined
D) 0

**Answer:** C

12. What is the expected boolean output?

```javascript
console.log(0 == false);
```

A) true
B) false
C) undefined
D) null

**Answer:** A

13. What is the output of this prefix increment operation?

```javascript
let x = 1;
let y = ++x;
console.log(x, y);
```

A) 1 1
B) 1 2
C) 2 1
D) 2 2

**Answer:** D

14. What is the output of this postfix increment operation?

```javascript
let x = 1;
let y = x++;
console.log(x, y);
```

A) 1 1
B) 1 2
C) 2 1
D) 2 2

**Answer:** C

15. What will be logged?

```javascript
console.log(Boolean("false"));
```

A) true
B) false
C) "false"
D) NaN

**Answer:** A

16. What is the length of this array?

```javascript
var arr = [1, , 3];
console.log(arr.length);
```

A) 2
B) 3
C) 1
D) undefined

**Answer:** B

17. What will the following expression evaluate to?

```javascript
console.log(typeof NaN);
```

A) "NaN"
B) "undefined"
C) "number"
D) "object"

**Answer:** C

18. How many times will this loop run?

```javascript
for(let i = 0; i < 5; i++) {
   // loop body
}
```

A) 4
B) 5
C) 6
D) Infinite

**Answer:** B

19. How many times will the body of this while loop execute?

```javascript
let i = 0;
while (i < 0) {
    i++;
}
```

A) 0
B) 1
C) -1
D) Infinite

**Answer:** A

20. What is the output of the following string parsing?

```javascript
console.log(parseInt("10.5"));
```

A) 10.5
B) 10
C) 11
D) NaN

**Answer:** B

21. What happens when a subtraction operation involves a string number?

```javascript
let num = "10" - 2;
console.log(num);
```

A) "10-2"
B) "8"
C) 8
D) NaN

**Answer:** C

22. What is the result of re-declaring a variable with `var`?

```javascript
var a = 1;
var a = 2;
console.log(a);
```

A) 1
B) 2
C) undefined
D) SyntaxError

**Answer:** B

23. What is the result of re-declaring a variable with `let` in the same scope?

```javascript
let b = 1;
let b = 2;
console.log(b);
```

A) 1
B) 2
C) undefined
D) SyntaxError

**Answer:** D

24. What happens when a variable is assigned without being declared?

```javascript
function assignValue() {
    globalVar = 10;
}
assignValue();
console.log(globalVar);
```

A) 10
B) undefined
C) ReferenceError
D) null

**Answer:** A

25. What is the output of the following statement?

```javascript
console.log(typeof function(){});
```

A) "object"
B) "undefined"
C) "method"
D) "function"

**Answer:** D
