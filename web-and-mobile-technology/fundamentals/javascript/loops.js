for (let i=0; i<10; i++){
    console.log(i);
}

let fruits = ["Apple", "Orange", "Mango"]
for (let index in fruits){
    console.log(index); // 0, 1, 2
    console.log(fruits[index]); // Apple, Orange, Mango
} 

let student = {
    name : "Dilshan",
    age : 20
}
 
for (let key in student){
    console.log(key); // name, age
    console.log(student[key]); // Dilshan, 20
}


for (let fruit of fruits){
    console.log(fruit); // Apple, Orange, Mango
} // fruit names

let i = 0; 
while (i<4){
    console.log(i);
    i++;    
}

let c = 0;
do{
    console.log(c);
    c++;
}while(c<10);