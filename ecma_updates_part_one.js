/* UPDATED CONCEPTS in this part

Fat operator
This keyword
Ternary Operator
Array find method 
Array find index
Array filter
Array Slice
Array Splice
Array Concat
Array Push
Array Map
Array Reduce

*/


//normal function
function myFunction(n){
    return n;
}

console.log(myFunction())

//fat operator

let number = ()=>{
    return 10;
}
console.log(number())

//if 1 statement it can be much simpler

let number1 = (n)=>10; //no return is needed if one liner, we MUST remove return keyword
console.log(number1())

let sumofNumber = (a,b)=> a+b;
console.log(sumofNumber(100,200))


// this keyword

var javascript={
    name:'javaScript',
    libraries:['react','angular','vue'],
    printLibraries: function(){
        let self=this; 

        /*fat operator helps to avoid confusion 
        between developers and makes it easier */

        this.libraries.forEach(function(a){
            console.log(`${self.name} loves ${a}`)
        })
    }
}

var myCar={
    brand:'Mercedes',
    window:['front','back','side'],
    string:'window',
    countWindows: function(){
        this.window.forEach((a)=>console.log(`${this.brand} has ${a} ${this.string}`)) 
        // use of fat operator
    }
}


javascript.printLibraries()
myCar.countWindows()

/*one cannot use NEW for arrow function, it doesn't work */



//truthy falsy

/* 
In the example below anything but below six param are passed it would automatically mean truthy.
false | 0 | "" | undefined | NaN
TRY THIS OUT IN THE CODE BELOW

*/

var myVar = [];
if(myVar){
    console.log('i am truthy')
} else {
    console.log('i am falsy')
}


/* Ternary Operator

Its basically if else statements but more optimized

() is the condition
? means if
: means else

ternary operation can be complex, 
they should be used to make life easier 
sbut if used extensively can be cryptic to read



*/

// using if and else
var age = 30;

var type;

if(age>=18){
    type = "adult";
} else{
    type ="child";
}

console.log(type)

//using ternary operator
var type = (age>=18) ? type="adult" : type ="child";

console.log(type)

var a =5
var access = a > 5; // simplified ternary 

/* explanation
instead of writing var access = a> 5 ? true:false;
"true:false" can be skipped;
*/

console.log(access)

/* Array find method 

Array.prototype.find()
    lets say I want to find a particular thing and there I want to do some stuff,
    find() method will help me achive that, I can simply go on till I find that thing and then execute
    what I was looking for, example below


*/

var numbers = [1,2,3,4,5]

var results = numbers.find(function(currentValue, currentIndex, arr){ //finds these three value
    return currentValue>4;

})

console.log(results)



/* Array.prototype.findIndex() 

does the same thing as find but find where the value stands
find() - shows the current value
findIndex() - shows the index where the current value is located

*/

var results = numbers.findIndex(function(currentValue, currentIndex, arr){ 
    return currentValue>2;

})

console.log(results)

/* Array.prototype.filter()

filters after condition is met
filters does not change the main array

*/

var results = numbers.filter(function(currentValue, currentIndex, arr){ 
    return currentValue>2;

})

console.log(results)
console.log(numbers)

/* Array.prototype.slice()


slice of cake!

-1 would mean it will slice from the right side

*/

var cake = [2,4,6,8,10]

var cakeSlice = cake.slice(0,4)

var cakeSlicefromRight = cake.slice(2,-2)

console.log(cakeSlice)
console.log(cakeSlicefromRight)



/* Array.prototype.splice()
takes three param

- firstIndex
- Element to eradicate
- what to add

SPLICE CHANGES MAIN ARRAY

*/

var cake = [2,4,6,8,10,11,21]

var results = cake.splice(1,2,3,44,1)

console.log(results)





/* Array.prototype.concat()

*/

var numbers1 = [1,2,3,4,5,6]
var numbers2 = [1,2,3,4,5,6]
var numbers3 = [1,2,3,4,5,6]
var numbers4 = [1,2,3,4,5,6]
var numbers5 = [1,2,3,4,5,6]
var numbers6 = [1,2,3,4,5,6]

var results =  numbers1.concat(numbers2, numbers3, numbers4)

console.log(results)


/* Array.prototype.push()

if passed array inside it will be pass as is
*/


var n = [1,2,3]

n.push([4,5,6])

console.log(n);


/* Array.prototype.map()

doesn't change anything in the main array 
returns value for each ele in a new array

*/

var x = [1,2,3,4]
var results = x.map((num)=>{
    return 2*num;
})
console.log(results);


/* Array.prototype.reduce()

doesn't change the main array


*/


var y = [1,2,3,4]

var sum = y.reduce((previousVal, currentVal, currentIndex, array)=>{
        return previousVal + currentVal;
},10)

console.log(sum);
