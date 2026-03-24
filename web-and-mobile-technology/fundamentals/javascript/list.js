

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
console.log(fruits[0]) // Apple

let veges = new Array("Carrot", "Broccoli", "Spinach", "Peas", "Cabbage")


// Oirigin array will not be changes, it will return new array with added elements
fruits_and_veges = fruits.concat(veges)

// contacted array will be stored in new variable, original array will not be changed
console.log(fruits_and_veges)

let every_fruit_have_5 = fruits.every((fruit) => {return fruit.length == 5})
console.log(every_fruit_have_5) // 

var frts = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
console.log(frts.valueOf()) // true