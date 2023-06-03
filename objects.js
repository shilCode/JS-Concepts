//simple object and calling from it
let person = {
    firstName:'mohat',
    lastName:'shil',
    age:20

}

console.log(person.lastName); // dot notation
console.log(person['lastName']); //array notation
person.firstName='coolMohat'//chainng the property
console.log(person.firstName);
person.gender='male'//add new property
console.log(person);//visible on print
delete person.gender
console.log(person);


console.log("gender" in person);//present in object or not

//printing all the values of JS object
for(let key in person){
    console.log(person[key]);
}