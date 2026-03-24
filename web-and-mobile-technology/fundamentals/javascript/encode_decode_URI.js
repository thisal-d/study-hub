let encoded = encodeURI("https://google.com/sentenct//with space")
console.log(encoded)


let decoded = decodeURI(encoded)
console.log(decoded)


let encodedC = encodeURIComponent("https://google.com/sentenct//with space")
console.log(encodedC)


let decodedC = decodeURIComponent(encodedC)
console.log(decodedC)


let google = "https://www.google.com/search?q=";
let query = "car/van photos";

let url = google + encodeURIComponent(query);
console.log(url);