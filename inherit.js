 //inheritance is the Main pillar in OOP
 //One class can inherit/acquire the properties,Methods of another class
 //The class which inherits the properties of other is known as subclass(derived class,child class)
 //the class whose properties are inherited is known as superclass

 const Person = require('./class')
//  const person = new Person();

  class Pet extends Person{

    constructor(firstName,lastName){
        //always need to call the parent class constructor
        super(firstName,lastName)

    }
    //overrides the getter method and use the child one over the main inherited class
    get location(){
        return "blueCross"
    }

  }

  let pet = new Pet("sam","san")
console.log(pet.fullName())
console.log(pet.location);