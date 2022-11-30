// -------------------------- functions -------------------------

        // =========== function declaration ===========

                // console.log("happy birthday to you .....");
                // console.log("happy birthday to you .....");

                // function singHappyBirthday(){

                //     console.log("happy birthday to you .....");

                // }
                // singHappyBirthday();

            // ============ function expression =============

                const singHappyBirthday= function (){

                    console.log("happy birthday to you .....");
                
                }
                singHappyBirthday();

            // =========== function declaration ===========

                // function sumTwoNumbers(number1 , number2){

                //     return number1 + number2;

                // }

                // const addition = sumTwoNumbers(2,4);

                // console.log(addition);

            // ============ function expression =============    
            
                const sumTwoNumbers = function (number1 , number2){

                    return number1 + number2;
                
                }
                
                const addition = sumTwoNumbers(2,4);
                
                console.log(addition);

            // =========== function declaration ===========

                // function sumThreeNumbers(number1 , number2 ,number3 ){

                //     return number1 + number2 + number3;

                // }

                // const addition_of_three_number = sumThreeNumbers(2,4,6);

                // console.log(addition_of_three_number);

            // ============ function expression =============    

                const sumThreeNumbers = function (number1 , number2 ,number3 ){

                    return number1 + number2 + number3;

                }

                const addition_of_three_number = sumThreeNumbers(2,4,6);

                console.log(addition_of_three_number);


                        // -- function iseven --

                        // input : 1 number

                        // output : true , false

            // =========== function declaration ===========


                // function isEven(number){

                //     if(number % 2 === 0){

                //         return true;

                //     }else{

                //         return false;

                //     }

                // }

            // ============ function expression =============    

                // const isEven = function(number){

                //     if(number % 2 === 0){

                //         return true;

                //     }else{

                //         return false;

                //     }

                // }

                            // -- short way -- 

            // =========== function declaration ===========

                        // function isEven(number){

                        //     return number % 2 === 0;

                        // }

                        // console.log(isEven(6));

            // ============ function expression =============    

                    const isEven = function(number){

                            return number % 2 === 0;

                    }

                    console.log(isEven(6));

                    // ---- example of functions ----

                        // input : string 
                        // output : firstcharacter

            // =========== function declaration ===========

                    // function firstCharacter(anystring){

                    //     return anystring[0];

                    // }
                    // console.log(firstCharacter("xyz"));

            // ============ function expression =============    

                    const firstCharacter = function(anystring){

                        return anystring[0];

                    }
                    console.log(firstCharacter("xyz"));

                //input : array , target(number)
                //output : index of target if target present in array

            // =========== function declaration ===========

                // function findTarget(array , target){

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

            // ============ function expression =============    

            const findTarget = function(array , target){

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
