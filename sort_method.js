// ===== sort method ===== 

       // ASCII VALUE
       
       // '0' : 48              // ':' : 58
       // '1' : 49              // ';' : 59 
       // '2' : 50              // '<' : 60
       // '3' : 51              // '=' : 61
       // '4' : 52              // '>' : 62
       // '5' : 53              // '?' : 63
       // '6' : 54              // '@' : 64
       // '7' : 55
       // '8' : 56
       // '9' : 57


        // 'A' : 65             // 'O' : 79                 // '[' : 91
        // 'B' : 66             // 'P' : 80                 // '\' : 92
        // 'C' : 67             // 'Q' : 81                 // ']' : 93
        // 'D' : 68             // 'R' : 82                 // '^' : 94
        // 'E' : 69             // 'S' : 83                 // '_' : 95
        // 'F' : 70             // 'T' : 84                 // '`' : 96
        // 'G' : 71             // 'U' : 85
        // 'H' : 72             // 'V' : 86
        // 'I' : 73             // 'W' : 87
        // 'J' : 74             // 'X' : 88
        // 'K' : 75             // 'Y' : 89
        // 'L' : 76             // 'Z' : 90
        // 'M' : 77
        // 'N' : 78


        // 'a' : 97             // 'o' : 111                // '{' : 123 
        // 'b' : 98             // 'p' : 112                // '/' : 124
        // 'c' : 99             // 'q' : 113                // '}' : 125
        // 'd' : 100            // 'r' : 114              
        // 'e' : 101            // 's' : 115                 
        // 'f' : 102            // 't' : 116              
        // 'g' : 103            // 'u' : 117
        // 'h' : 104            // 'v' : 118
        // 'i' : 105            // 'w' : 119
        // 'j' : 106            // 'x' : 120
        // 'k' : 107            // 'y' : 121
        // 'l' : 108            // 'z' : 122
        // 'm' : 109
        // 'n' : 110


        const xyz = [5,9,4,3,8,2,40,35,29];
                    
        xyz.sort((a,b) => {

            return a-b;

        });

        console.log(xyz);

        // const Name = ["Abhisha","abhisha","Patel","patel"];

        // Name.sort();

        // console.log(Name);

        // product price low to high And high to low

            const products = [

                {
                    productId : 1,
                    productName : "mobile",
                    price : 25000
                },
    
                {
                    productId : 2,
                    productName : "laptop",
                    price : 95000
                },
    
                {
                    productId : 3,
                    productName : "Tv",
                    price : 45000
                }
              
            ];

            // low to high 

                const lowTohigh = products.slice(0).sort((a,b) => {

                    return a.price - b.price

                });

                console.log(lowTohigh);

            // high to low

            const highTolow = products.slice(0).sort((a,b) => {

                return b.price - a.price

            });

            console.log(highTolow)

        
    // find method 

        const array = ["Hello","cat","dog","lion"];
        
        const ans = array.find((string) => {
            return string.length  === 3;
        });
        
        console.log(ans);

        // -- realistick example --

            const users = [
                
                {
                    user_id : 1,
                    user_name : "Abhsha"
                },
                {
                    user_id : 2,
                    user_name : "Zeel"
                },
                {
                    user_id : 3,
                    user_name : "nency"
                }
            
            ];
            const userDetails = users.find((user) => {
               
                return user.user_id === 3;
            
            });
            
            console.log(userDetails)
    
    // -- every method -- 

        const numbers = [2,4,6,8,10];

        const answer = numbers.every((number) => {
        return number % 2 === 0
        });

        console.log(answer);

        // -- realistick example --

            const userCart = [

                {productId : 1, productName : "mobile", price : 12000},
                {productId : 2, productName : "laptop", price : 20000},
                {productId : 3, productName : "tv", price : 15000}

            ];

            const ansI = userCart.every((cartItem) => {
                return cartItem.price < 30000;
            });
            
            console.log(ansI);
    // -- some method -- 

        const oddNumber = [3,5,8,9];

        const answ = oddNumber.some((num1) => num1 % 2 === 0);

        console.log(answ);

        // -- realistick method -- 

        const usersCart = [

            {productId : 1, productName : "mobile", price : 12000},
            {productId : 2, productName : "laptop", price : 20000},
            {productId : 3, productName : "tv", price : 15000},
            {productId : 4, productName : "macbook", price : 150000}

        ];

        const check = usersCart.some((cart) => {
            return cart.price > 1000000;
        });

        console.log(check);

    // fill method
     
    
        const Array = [1,2,3,4,5,6,7,8,9];

        const result = Array.fill(0);

        console.log(result);

        const myArray = [2,4,6,8,10,12,14];

        const r = myArray.fill(1,2,5);

        console.log(r);

    // splice method

        const Array1 = [1,2,3,4,5,6,7,8,9];

        Array1.splice(1,1);

        console.log(Array1);

        const myArray2 = [2,4,6,8,10,12,14];

        myArray2.splice(1,1,5);

        console.log(myArray2);

    // iterables 

        // string and array are iterable

        // objects are not iterable
        
            const firstName = "Abhisha"; // string example

            for(let char of firstName){

                console.log(char);

            }

            const items = ['item1','item2','item3','item4']; // array example

            for(let item of items){

                console.log(item);

            }


            // const item = {

            //     'key1' : 'value1',
            //     'key2' : 'value2'
            // }                               // object example
            //                                 // object not iterable

            // for(let i of item){

            //     console.log(i);

            // }

    // Array like Object

        // -> which have length property
        // -> and which we can access from index
        // -> For example :- string

        const lastName = "bhesaniya"

        console.log(lastName.length);

        console.log(lastName[2]);

    // sets (it is iterable)

        // -> store the data
        // -> sets also have its own method
        // -> no index-based access
        // -> order is not gauranted
        // -> unique items only(no duplicatea value allowed)

        const num = new Set([1,2,3,4,5]);
        console.log(num);

        const example = new Set();
        
        example.add(1);
        example.add(2);
        example.add(num);
        example.add([3,4,5,6]);

        // if(example.has(1)){
        //     console.log("1 is present");
        // }else{
        //     console.log("1 is not present");
        // }

        // console.log(example);

        for(let exe of example){
            console.log(exe);
        }

        const myarray = [1,2,3,3,4,5,5,6,6,7,7,8,8,9];

        const uniqueElement = new Set(myarray);

        console.log(uniqueElement);

        let length = 0 ; // count length for unique length
         
        for(let element of uniqueElement){
            length ++;
        }
        console.log(length);