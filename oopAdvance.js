    // -- prototype --
    
    
        // const userMethods = {

        // about: function(){

        //     return `${this.firstName} is ${this.age} year old`;

        // },
        // is18:  function(){
        //     return this.age >= 18
        // },
        // sing : function(){
        //     return 'hhh hhhhhh aaaaa aaaaaaaaaaaaaaaaa';
        // }

        // }

        function createUser(firstName,lastName,email,age,address){

            const user = Object.create(createUser.prototype);
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.age = age;
            user.address = address;
            return user;

        }

        console.log(createUser.prototype);
        createUser.prototype.about = function(){
            return `${this.firstName} is ${this.age} year old`;
        }
        createUser.prototype.is18 = function(){
            return this.age >= 18
        }
        createUser.prototype.sing = function(){
            return 'hhh hhhhhh aaaaa aaaaaaaaaaaaaaaaa';
        }

        const userDetails =  createUser('abhisha','bhesaniya','abhisha@gmail.com',23,'ahmedabad');
        // console.log(userDetails);
        // console.log(userDetails.about());
        // console.log(userDetails.is18());
        // console.log(userDetails.sing());


    // -- new keyword --
6
        // 1.) create empty this = {}
        // 2.) return this {}
        // 3.) 

            function createuser(firstName,age){
                this.firstName = firstName;
                this.age = age;
            }
            createuser.prototype.about = function(){
                console.log(this.firstName, this.age);
            }
            const user = new createuser("abhisha",23);
            // console.log(user);
            user.about();

            // constructor function

            function CreateUsers(firstName,lastName,email,age,address){

                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.age = age;
                this.address = address;

            }

            console.log(CreateUsers.prototype);

            CreateUsers.prototype.about = function(){
                return `${this.firstName} is ${this.age} year old`;
            }
            CreateUsers.prototype.is18 = function(){
                return this.age >= 18
            }
            CreateUsers.prototype.sing = function(){
                return 'hhh hhhhhh aaaaa aaaaaaaaaaaaaaaaa';
            }

            const uDetails = new CreateUsers('abhisha','bhesaniya','abhisha@gmail.com',23,'ahmedabad');
            console.log(uDetails);
            console.log(uDetails.is18())