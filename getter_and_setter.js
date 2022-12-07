 // getter and setters 


    class person{
        constructor(firstname,lastname,age){
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        get fullname(){
            return `${this.firstname} ${this.lastname}`;
        }

        set fullname(fullname){

            const[firstname , lastname] = fullname.split(" ");
            this.firstname = firstname;
            this.lastname = lastname;

        }

        setName(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }

    }

    const person1 = new person("abhisha","patel",23);
    console.log(person1);
    console.log(person1.fullname);
    console.log(person1.firstname);
    console.log(person1.lastname);
    person1.setName("zeel","bhardwaj");
    console.log(person1.firstname);
    console.log(person1.lastname);

    person1.fullname = "zeel bhardwaj";
    console.log(person1);