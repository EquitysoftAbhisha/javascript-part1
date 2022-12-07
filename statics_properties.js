// static methods and properties

class person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    static classInfo(){
        return "this is person class";
    }

    static desc = "static property";

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

const person1 = new person("abhisha","bhesaniya",24);
const info = person.classInfo();
console.log(person.desc); // onjects can't access static property
console.log(info);
