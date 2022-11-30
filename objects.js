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

// ------- computed properties -------


const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }


const obj = {};

obj[key1] = value1;
obj[key2] = value2;

console.log(obj);


//spread operator 

    // const array1 = [1,2,3];
    // const array2 = [5,6,7];

    // const newarray = [..."123456789"];
    // console.log(newarray);

// ---- spread operator in object ----

    const obj1 = {

        key1 : "value1",
        key2 : "value2",

    }

    const obj2 = {

        key1 : "valueunique",
        key3 : "value3",
        key4 : "value4",

    }

    // const newobj3 = {...obj1,...obj2}
    const newobj = {...obj1,...obj2,key26 : "value26"}; // override the same keyname value
    console.log(newobj);

    const newObject = {..."abcdefghijklmnopqrstuvwxyz"};
    console.log(newObject);

    const newObject1 = {...["item1","item2"] };
    console.log(newObject1);


    // ------- object destructuring -------

    const band = {

        bandName : "led zeppelin",
        famousSong : "stairway to heaven",
        anotherFamousSong : "kashmir",
        year : 1968

    };
// ---- normal way using ----
    // const bandName = band.bandName;

    // const famousSong = band.famousSong;

    // console.log(bandName,famousSong);

// ---- using object destructuring ----

const { bandName: var3,famousSong , ...restprops} = band;

console.log(var3);
console.log(restprops)