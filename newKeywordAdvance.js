// new key word in advance

    function CreateUsers(firstName,lastName,email,age,address){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;

    }

    // console.log(CreateUsers.prototype);

    CreateUsers.prototype.about = function(){
        return `${this.firstName} is ${this.age} year old`;
    }
    CreateUsers.prototype.is18 = function(){
        return this.age >= 18
    }
    CreateUsers.prototype.sing = function(){
        return 'hhh hhhhhh aaaaa aaaaaaaaaaaaaaaaa';
    }

    const userDetails = new CreateUsers('abhisha','bhesaniya','abhisha@gmail.com',23,'ahmedabad');

    for(let key in userDetails){
        // console.log(key);
        if(userDetails.hasOwnProperty(key)){
            console.log(key)
        }
    }




