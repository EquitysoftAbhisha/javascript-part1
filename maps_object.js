// Maps

    // -> map is an iterable
    // -> store data in oredered fashion
    // -> store key value pair (like object)
    // -> duplicate keys are not allowed like objects
    // -> different between maps and objects
    // -> objects can only have string or symbol 
    // -> as key
    // -> in maps you can use anything as key
    // -> like array, number, string


        // object literals
            
            // - keys in string
            // - keys in sybol

            const person = {

                firstName : 'Abhisha',
                age : 23,
                1 : "one"

            }
            // console.log(person.firstName);
            // console.log(person["firstName"]);

            console.log(person[1]);
            for(let key in person){
                console.log(typeof key);
            }
            
        // key value pair

            const human = new Map();

            human.set('firstName','Abhisha');
            human.set('age',7);
            human.set(1,'one');
            // human.set([1,2,3,4],'onetwothree');
            // human.set({1:'one'},'onetwothree');
            // console.log(human);
            // console.log(human.get(1));
            // for(let key of human.keys()){
            //     console.log(key,typeof key);
            // }

            for(let [key , value ] of human){
                console.log(key , value)
            }

            const example1 = {
                id : 1,
                name : 'abhisha'
            }
            const example2 = {
                id : 2,
                name : 'Zeel'
            }

            const userInfo = new Map();
            userInfo.set(example1,{age: 23,gender:'female'});
            userInfo.set(example2,{age: 21,gender:'male'});

            // console.log(userInfo);

            console.log(example1.id);

            console.log(userInfo.get(example1).gender);
            console.log(userInfo.get(example2).gender)


            // const example = new Map([['firstname','Abhisha'],['age',23]]);

            // console.log(example);



