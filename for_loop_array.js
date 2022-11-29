// using for loop print array items

let fruits = ["apple","mango","banana","grapes"];
let fruits2 =[];
console.log(fruits.length);
// console.log(fruits[3])

// for(let i = 0 ; i < fruits.length ; i++){

//     console.log(fruits[i]);
    
// }

for(let i = 0 ; i < fruits.length ; i++){

    fruits2.push(fruits[i].toUpperCase());

}
console.log(fruits2);

// use const for creating array

    // const pi = 3.14;

    // pi = 12;

    // console.log(pi);

const fruit = ["apple","banana"];

fruit.push("mango");

console.log(fruit);

// while loop in array

const veg = ["cucumber","onion","cabbage"];

const veg2 = [];

let i = 0;

while(i<veg.length){
    veg2.push(veg[i].toUpperCase());
    i++;
}
console.log(veg2);

// for of loop in array

const numbers = [1,2,3,4,5,6,7,8,9];
const numbers2 = [];

for(let number of numbers){

    numbers2.push(number);

}
console.log(numbers2)

// for in loop in array

const products = ["product1","product2","product3","product4"];

for(let product in products ){

    console.log(products[product]);
    
}

// array destructuring

const myarray = ["value1","value2","value3","value4"];

// let myvar1 = myarray[0];
// let myvar2 = myarray[1];
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);

// short variable declaration

let [var1,var2,var3,...mynewarray] = myarray;
// let mynewarray = myarray.slice(2);
console.log(mynewarray);
console.log("value of myvar1",var1);
console.log("value of myvar2",var2);
console.log("value of myvar3",var3);



