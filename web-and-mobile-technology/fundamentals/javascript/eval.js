console.log(eval("10+4-2/12*32"));

let level1 = 100
let level2 = "level1"
let level3 = "level2"

console.log(eval(eval("level3"))) // console.log(eval(eval("level3"))) // console.log(eval("level2")) // console.log("level1")
console.log(eval(eval(level3)))   // console.log(eval(eval("level2"))) // console.log(eval("level1"))  // console.log(100)


var match4 = 140;
var match3 = 30;
var match = 3;

match = "match" + match;
console.log(match)
console.log("You  win: $ "+ eval(match));
