// introduction of array


let fruits = ["apple","mango","grapes"];

console.log(fruits);
// replace array value

fruits[1] = "banana";
console.log(fruits);

//number array

let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers);

//mixed array

let mixed = ["string",1.2,45,undefined ,null];

console.log(mixed);

//type of array how to known

console.log(typeof fruits);

let object = {};

console.log|(typeof object);

//using function known type of array 

console.log(Array.isArray(fruits));

console.log(Array.isArray(object));