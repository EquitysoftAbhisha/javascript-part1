    //   ===== analysis =====

        // class key word


        class user{
            constructor(firstName,lastName,email,age,address){

                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.age = age;
                this.address = address;

            }
            about(){
                return `${this.firstName} is ${this.age} year old`;
            }
            is18(){
                return this.age >= 18
            }
            sing(){
                return 'hhh hhhhhh aaaaa aaaaaaaaaaaaaaaaa';
            }
        }
        
        const userInfo = new user('abhisha','bhesaniya','abhisha@gmail.com',23,'ahmedabad');

        console.log(userInfo.about());

        console.log(Object.getPrototypeOf(userInfo));


        // examples :--

            class Animal{
                constructor(name,age){
                    this.name = name;
                    this.age = age;
                }

                eat(){
                    return `${this.name} is eating`;
                }

                isSuperCute(){
                    return this.age <=1;
                }

                isCute(){
                    return true;
                }

            }

            const animal = new Animal('tiger',1);
            console.log(animal);
            console.log(animal.eat());
            console.log(animal.isSuperCute());

            class Dog extends Animal{
                constructor(name,age,speed){
                    super(name,age);
                    this.speed = speed;
                }

                eat(){
                    return `Modified Eat : ${this.name} is eating`;
                }

                run(){
                    return `${this.name} is running at ${this.speed}kmph`
                }
            }

            // const tommy = new Dog("tommy",3,45);
            // console.log(tommy);
            // console.log(tommy.isCute());
            // console.log(tommy.run());
            // console.log(tommy.eat());
            
            const animal1 = new Animal('sheru' ,2);
            console.log(animal1.eat());

