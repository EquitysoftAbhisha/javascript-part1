//premitive vs reference type

//premitive data type

let num1 = 10;
let num2 = num1;

console.log("num1",num1);
console.log("num2",num2);

num1++;

console.log("after increment value of num 1");
console.log("num1",num1);
console.log("num2",num2);

//reference data type

let array1 = ["value1","value2","value3"];
let array2 = array1;

console.log("array 1",array1);
console.log("array 2",array2);

array1.push("value4");

console.log("after pushing element to array 1");
console.log("array 1",array1);
console.log("array 2",array2);


//how to clone array


// using same value

let a1 = ["v1","v2","v3"];
let a2 = ["v1","v2","v3"];

a1.push("v4");

console.log("after pushing element to array 1");
console.log("array1",a1);
console.log("array2",a2);

//using slice

let n1 = ["n1","n2","n3"];
let n2 = n1.slice(0);

n1.push("n4");

console.log("after pushing element to n 1");
console.log("n1",n1);
console.log("n2",n2);

// using concat array

let x1 = ["x1","x2","x3"];
let x2 = [].concat(x1)
x1.push("x4");

console.log("after pushing element to x 1");
console.log("x1",x1);
console.log("x2",x2);