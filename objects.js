//-------- objects ---------

//arrays are good but not sufficient for real world data

//objects store key value pairs 
//objects don't have index
//objects is a reference type same as a array type stored the value in memory

//how to create objects

const person = {
    
    name:"abhisha",
    // "name":"abhisha",
    age:23,
    hobbies:["reading","dancing"],
    
} //its also called object litteral

// console.log(typeof person);

console.log(person);

// how to access data from objects

console.log(person.name);
// console.log(person["name"]);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);

// how to add key value pair to objects

person.gender = "female";

// person["gender"] = "female";

console.log(person);


// ----- difference between dot and bracket notation -----

//if we used the space in object property name that time use the bracket notation just becuase javascript doesn't allow the space in object property name

// for rexample

const key = "email";
const customer = {

    name : "xyz",
    age : 22,
    "person hobbies": ["reading","traveling"],

}

console.log(customer["person hobbies"]);
customer[key] = "xyz@gmail.com";
console.log(customer);



// ---- how to iterate object ----  
    // 1. for in loop
    // 2. object.keys

    const employee = {

        name : "Abhisha",
        salary : 20000,


    }
    for (let key in employee){

        // console.log(`${key} : ${employee[key]}`);
        console.log(key , " : " , employee[key]);

    }

  console.log(typeof (Object.keys(employee)));
  console.log(Object.keys(employee));
  const val = Array.isArray((Object.keys(employee)));
  console.log(val);

  for(let key of Object.keys(employee)){
    console.log(employee[key]);
  }