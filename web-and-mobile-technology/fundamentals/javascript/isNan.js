console.log(isNaN(undefined)) // true
console.log(isNaN(NaN)) // true
console.log(isNaN(null)) // false

console.log("abc" / 2);        // NaN, cannot divide a string by a number
console.log(0 / 0);            // NaN, 0 divided by 0 is not a number
console.log(Math.sqrt(-1));    // NaN, square root of negative number