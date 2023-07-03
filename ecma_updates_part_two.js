/* UPDATED CONCEPTS in this part

Object Key
Object Value
Spread operators
Rest operators
Destructureing

*/



/* Object - Key | Value | Entries 

Keys will show simple the keys of the object defined below
Values will show simply the value of the object
Entries will show the whole Object



*/


var myObject = {
    x:"java",
    y:"js",
    z:"c++",
    a:100
}

var showKeys = Object.keys(myObject)
var showValues = Object.values(myObject)
var showEntries =  Object.entries(myObject)

console.log(showKeys)
console.log(showValues)
console.log(showEntries)



carFunction = {
    name:"Volvo",
    year:2007,
    engine:"old"
}

var showValues =  Object.values(carFunction)
console.log(showValues)

var showKeys = Object.keys(carFunction)

var showEntries =  Object.entries(carFunction)
console.log(showEntries)


/* Spread operators

mostly used so that dev don't have to write too much info, 
it basically shortens the whole writing process and comes handy while coding with any framework

*/

let myCat = {
    food: "need to buy",
    milk:"already bought",
    weight: 5
}

let myDog = {
    food: "bought",
    milk: "no need",
    weight:10
}

//user of spread operator in above objects

console.log({
    ...myCat,...myDog
});


//use in array

var arrayOne = [1,2,3]
var arrayTwo = [4,5,6]

var array = [...arrayOne, ...arrayTwo, 3,4,5]

console.log(array);


// rest
//destructro