// arrow functions

    // const user1 = {
    //     firstName : 'abhisha',
    //     age : 8,
    //     about: () => {
    //         console.log(this. firstName,this.age);
    //     }
    // }
    // user1.about(user1);

// sort syntax

    const user1 = {
        firstName : 'abhisha',
        age : 22,
        about() {

            console.log(this.firstName,this.age);

        }
    }
    user1.about();

// ========================================= object oriented programing =============================================

    // object call

    const obj1 = {

        key1 : 'value1',
        key2 : 'value2',
        key3 : 'value3'

    }

    const obj2 = Object.create(obj1); // {} there is one more way to create object

    obj2.key3 = 'value3';
    console.log(obj2,obj2.__proto__);

    // how to use in realistick 

        const userInfo = {
            firstName : 'abhisha',
            lastName : 'bhesaniya',
            email : 'abhisha@gmail.com',
            age : 23,
            address : 'house number , colony , pincode ,state',
            about() {

                return `${this.firstName} is ${this.age} year old`

            },
            is18 : function(){
                return this.age >= 18;
            }
        }
        const aboutUser = userInfo.about();

        console.log(aboutUser);

        // 1.) function (that function create object)
        // 2.) add key value pair
        // 3.) return the object

        const userMethods = {

            about: function(){

                return `${this.firstName} is ${this.age} year old`;

            },
            is18:  function(){
                return this.age >= 18
            },
            sing : function(){
                return 'hhh hhhhhh aaaaa aaaaaaaaaaaaaaaaa';
            }

        }

        function createUser(firstName,lastName,email,age,address){

            const user = Object.create(userMethods);
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.age = age;
            user.address = address;
            return user;

        }
        
        const userDetails =  createUser('abhisha','bhesaniya','abhisha@gmail.com',23,'ahmedabad');
        console.log(userDetails);
        const is18 = userDetails.is18();
        const about = userDetails.about();
        console.log(about);
    
    // javascript function is a function but it also work as aobject

    // you can add your own properties

    // name property tells the function name
    
    // functions provides more usefull properties.

    // only function provides prototype property

    // functions give free space

    // examples for revision

    function hello(){
        return "hello world";
    }

    console.log(hello.name);

    hello.myownProperty = "very unique value";

    console.log(hello.myownProperty);

    console.log(hello.prototype); 

    // if(hello.prototype){
    //     console.log("prototype present");
    // }else{
    //     console.log("prototype is not present");
    // }
    
    // const hi = ['item1']; // array
   
    // if(hi.prototype){
    //     console.log("prototype present");
    // }else{
    //     console.log("prototype is not present");
    // }

    // const heyy = {
    //     key1 : 'value1',
    //     key2 : 'value2'
    // }                       // object

    // if(heyy.prototype){
    //     console.log("prototype present");
    // }else{
    //     console.log("prototype is not present");
    // }

    hello.prototype.abc = 'abc';
    hello.prototype.sing = function(){
       return 'lalala laaaaaa la laaaaa la';
    }
    console.log(hello.prototype.sing());