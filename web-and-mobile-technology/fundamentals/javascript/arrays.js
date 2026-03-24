function checkAge(age){
    if (age > 1 ) return true;
    else return false;
}

let checkAge2 = function (age){
    if (age > 1 ) return true;
    else return false;
}

let checkAge3 = (age) => {
    if (age > 1 ) return true;
    else return false;
}

ages = [0,10, 12, 32, 70, 10, 20, 32]
// Every
console.log(ages.every(checkAge))

// Fill method
fruits = ["a", "b", "C", "D"]
fruits.fill("z", 1, 3);
console.log(fruits) // [a, z, z, D]

// Filter method
function isEven(num){
    if (num%2 == 0) return true;
    else return false;
}

let numbers = [21,3 ,32, 21,312,31 ,234]
letEvennumbers = numbers.filter(isEven)
console.log(letEvennumbers) // [32, 312, 234]

// Find
function isDivideBy4(num){
    return num%4 == 0;
}
numbers = [21,3 ,32, 21,312,31 ,234]
let number = numbers.find(isDivideBy4) // 32
let index = numbers.findIndex(isDivideBy4) // 2

// for each
function printNamesStartWithA(name){
    if (name.charAt(0) == "A"){
        console.log(name);
    }
}
let names = ["Dilshan", "Kamal", "Amal", "Asma", "Kamal", "Dilshan"]
names.forEach(printNamesStartWithA)  // Amal, Asma

// Index of
// search works with forward
console.log(names.indexOf("Asma")) // 3
console.log(names.indexOf("Asma", 4)) // -1
// search works with backword
console.log("Dislahn found at : " + names.lastIndexOf("Dilshan", 5)) // 5

// join
let ints = [1, 2, 3, 4, 5]
let str = ints.join("Asma");
console.log(str); // 1Asma2Asma3Asma4Asma5

// Map
function capitalize(fruit){
    let name = fruit.charAt(0).toUpperCase() + fruit.substring(1, fruit.length);
    return name;
}
let words = ["apple", "orange", "tomato", "papaya"]
let capitalizeWords = words.map(capitalize)
console.log(capitalizeWords) // [ 'Apple', 'Orange', 'Tomato', 'Papaya' ]

// Pop
let vehicles = ["car", "van", "bike"]
let popValue = vehicles.pop()
// Shift : pop start by front
console.log(popValue); // bike
console.log(vehicles); // [ 'car', 'van' ]

// push | push to front : unshift
vehicles.push("lorry", "boat")
console.log(vehicles); // [ 'car', 'van', "lorry", "boat" ]

// Reduce
let rewards = [10, 20, 50, -10, 32]

function addRewards(prev, current){
    return prev + current;
}

let total_reward = rewards.reduce(addRewards, 100) // reward start with 100 then add up to array values
console.log(total_reward)

// 
let allVehicles = vehicles.reduce(addRewards) // 
console.log(allVehicles)

// Slice
numbers = [10, 20, 30, 40, 50]
console.log(numbers.slice(4)) // 50
console.log(numbers.slice(2, 4)) // 30, 40

// Sort
let arr = ["Amma", "amma", "bbb", "BBB"]
arr.sort()
console.log(arr)

// Splice
fruits = ["Papaya", "Apple", "Orange", "Tomato", "Watermelon"]
let value = fruits.splice(2, 2, "Lemon", "Orange", "Kiwi")
console.log(value)
console.log(fruits)

// toString
number = [1, 2, 3,]
console.log(number.toString()) // 1,2,3
console.log(number.join()) // 1,2,3
console.log(number.join(",")) // 1,2,3
console.log(number.join("*")) // 1*2*3