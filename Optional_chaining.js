// optional chaining

    const user = {
        firstName : 'Abhisha',
        address : {city : 'ahemdabad'}
    }

    console.log(user?.firstName);
    console.log(user?.address?.city);

// methods 

    // -> function inside onject

    function personInfo(){

        console.log(`person name is ${this.firstName} and person age is ${this.age}`);

    }

    const person1 = {
        
        firstName :'abhisha',
        age : 23,
        about : personInfo
    
    }
    const person2 = {
        
        firstName :'Zeel',
        age : 21,
        about : personInfo
    
    }
    const person3 = {
        
        firstName :'nency',
        age : 22,
        about : personInfo
    
    }
    person1.about();
    person2.about();
    person3.about();



    // call , apply, bind 

        // call

            function about(hobby,favmusician){
                
                console.log( this.firstName,this.age,hobby,favmusician);

            }

            const user1 = {
                
                firstName :'abhisha',
                age : 23
            
            }

            const user2 = {
                
                firstName :'Zeel',
                age : 21,
            
            }

            const user3 = {
                
                firstName :'Nency',
                age : 22,
            
            }

            about.call(user2,"gitar","kishorda");

        // apply

            about.apply(user1,['guitar','arijit']);

       // bind
            
            const func = about.bind(user3,"gitar","kishorda");
            func();
       
       // dont do this mistake
       
       // user1.about();

            // const myfunc = user1.about.bind(user1);
            // myfunc();

      

            