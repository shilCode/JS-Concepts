//basic of class which is used quite a lot while testing

class Person{
    age = 25;

    //property
    get location(){
        return 'canada'
    }

    //use of constructor
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;

    }

    //methods
    fullName(){
        console.log(this.firstName+this.lastName);
    }

}

let person = new Person('mohat','shil')
// console.log(person.age);

// console.log(person.location);   
console.log(person.fullName())


module.exports=Person;