// ========== important array methods ==========

// -- forEach --
// -- map --
// -- filter --
// -- reduce --

    // -- forEach --

        const numbers = [1,2,3,4,5];

        // function myFunc(number,index){

        //     console.log(`index is ${index} number is ${number}`);
        
        // }

        // // for(let i = 0 ; i < numbers.length ; i++){
        // //     // console.log(i);
        // //     myFunc(numbers[i],i);
        // // }

        // numbers.forEach(myFunc);


        // -- or --

        numbers.forEach(function(number,index){

            console.log(`index is ${index} number is ${number}`);

        });
        numbers.forEach(function(number){
            console.log(number * 3 );
        });

        const users = [

            {
                firstname : "abhisha",
                age : 23
            },

            {
                firstname : "zeel",
                age : 21
            },

            {
                firstname : "nency",
                age : 22
            },

        ]

        users.forEach(function(user){

            console.log(user.firstname);
        
        });

        // using arrow function

        users.forEach(user => {

            console.log(user.firstname);
        
        });


        // using for of

        for( let user of users){
            
            console.log(user.firstname);
        
        }
    
    // -- map --

        const num1 = [3,4,5,6];

        // const square = function(number){
            
        //     return number * number ;

        //     // console.log (number * number) ;
        
        // }

        const squareNumber = num1.map((number,index)=> {
            
            return ` index : ${index} , number: ${number} , squareNumber: ${number * number}` ;
        
        });

        console.log(squareNumber);

        // realistick example


        const users1 = [

            {
                firstname : "abhisha",
                age : 23
            },

            {
                firstname : "zeel",
                age : 21
            },

            {
                firstname : "nency",
                age : 22
            },

        ]
    
        const usersName =  users1.map(user => {
            
            return user.firstname;
        
        });

        console.log(usersName);

        // -- filter --