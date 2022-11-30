// ================ functions inside function =================

const  app = () => {

    const myFunction = () => {

        console.log("hello from mu function")

    }

    const addTwo = (num1 , num2) =>{

        return num1 + num2 ;

    }

    const multiplication = (num1 , num2) => num1 * num2 ;

    console.log("inside app");
    myFunction();
    console.log(addTwo(6,5));
    console.log(multiplication(6,5));


}
app();


// ==================== lexical scope =====================
const myvar = "value1";

function myApp(){

    // const myvar = "value1";
    function myFunc(){

        // const myvar = 69;
        console.log("inside myFunc",myvar);

    }
    console.log(myvar);
    myFunc();

}
myApp();



// ================= block scope vs function scope ==================

        // let and const are block scope

            // -- block - 1 --

            {
            
                let firstname = "abhisha";
                console.log(firstname);

            }
            
            // console.log(firstname);

            // -- block - 2 --

            {

                let firstname = "patel";
                console.log(firstname);

            }

            // global scope 

            const firstname = "abhilasha";
            console.log(firstname);

        // var is function scope

            // -- block - 3 --

            {
                
                var fname = "xyz";
                console.log(fname);

            }

            
            // -- block - 4 --
            {
                
                console.log(fname);
            
            }

    //  how we will used block variable in real time

        // if(true){
            
        //    let finame = "abhisha";
        //     console.log(finame);

        // }
        // console.log(finame);

        function myapp(){
            
            if(true){
            
                var finame = "abhisha";
                console.log(finame);
    
            }
            console.log(finame);

        }
        myapp();

    // ======= default parameters ========


        function addTwo(a,b=0){
        
            return a + b;
        
        }
        const ans = addTwo(4,8);
        console.log(ans);
      
    // ======= rest parameters ========

        // function myFunc(a,b,...c){

        //     console.log(`a is ${a}`);
        //     console.log(`b is ${b}`);
        //     console.log(`c is `,c);

        // }
        // myFunc(3,4,5,6,7,8,9);

            function addall(...numbers){
                
                let total = 0;

                for(let number of numbers){

                    total = total + number;

                }
                return total;

            }
            const answer = addall(1,2,3,4,5,6);
            console.log(answer);

        
        