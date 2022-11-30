                        // -- arrow functions --


            // ============ function expression =============    


                // const singHappyBirthday = function (){

                //     console.log("happy birthday to you .....");

                // }
                // singHappyBirthday();

            // ============ Arrow function  ============= 
            
            const singHappyBirthday =  () => {

                console.log("happy birthday to you .....");

            }
            singHappyBirthday();
            
            // ============ function expression =============    

                // const sumTwoNumbers = function (number1 , number2){

                //     return number1 + number2;

                // }

                // const addition = sumTwoNumbers(2,4);

                // console.log(addition);

            // ============ Arrow function  ============= 

                const sumTwoNumbers = (number1 , number2) => {

                    return number1 + number2;

                }

                const addition = sumTwoNumbers(2,4);

                console.log(addition);

            // ============ function expression =============    

                // const sumThreeNumbers = function (number1 , number2 ,number3 ){

                //     return number1 + number2 + number3;

                // }

                // const addition_of_three_number = sumThreeNumbers(2,4,6);

                // console.log(addition_of_three_number);

            // ============ Arrow function  ============= 

                const sumThreeNumbers = (number1 , number2 ,number3 ) => {

                    return number1 + number2 + number3;

                }

                const addition_of_three_number = sumThreeNumbers(2,4,6);

                console.log(addition_of_three_number);

            // ============ function expression =============    

                // const isEven = function(number){

                //     return number % 2 === 0;

                // }

                // console.log(isEven(6));

            // ============ Arrow function  ============= 

                const isEven = number =>  number % 2 === 0;

                console.log(isEven(6));

            // ============ function expression =============    

                // const firstCharacter = function(anystring){

                //     return anystring[0];

                // }
                // console.log(firstCharacter("xyz"));

            // ============ Arrow function  ============= 

                const firstCharacter = anystring => anystring[0];

                console.log(firstCharacter("xyz"));

            // ============ function expression =============    

                // const findTarget = function(array , target){

                //     for(let i = 0 ; i < array.length ; i++){

                //         if(array[i] === target){

                //             return i;
                        
                //         }

                //     }
                //     return -1;

                // }
                // const myArray = [1,3,5,9,169];
                // const ans = findTarget(myArray,9);
                // console.log(ans);

            // ============ Arrow function  ============= 

            const findTarget = (array , target) => {

                for(let i = 0 ; i < array.length ; i++){

                    if(array[i] === target){

                        return i;
                    
                    }

                }
                return -1;

            }
            const myArray = [1,3,5,9,169];
            const ans = findTarget(myArray,9);
            console.log(ans);

// ============= hoisting =============

// only function declaration through we are used the hoisting in function
// arrow function and expression in we cant use hoisting

            hello();

            function hello(){

                console.log("hello world");

            }
