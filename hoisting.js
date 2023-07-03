/* HOISTING 

var v let and const
function



to understand hoisting scope knowledge is needed

hoisting in bangla is uttolon 

hoisting with keyword var can be complicated, 
coding with let keywords give users the same type of error as other languages which is easy to debug


*/

console.log(a)
var a;

a = 'bangladesh'
console.log(a)


let b = 'bangladesh';
console.log(b)


//practical example

let LANGUAGE = 'Java';
let language = 'javascript'

function getLanguage(){
    if(!language){ 
        let language = LANGUAGE;
    }

    return language;
}

/* if we use var then output will be java why?
answer: scope! its hoisting  */

console.log(`I love ${getLanguage()}`)


// how does hoisting works for functions

myFunc()
function myFunc(){
    console.log(`I love Javascript!`)
}
/* All the function definition would go up cos its hoisted */


function newFunction(){
    language = 'Javascript' // it will goto the parent and set it as var 
    var language
    console.log(language)
}

newFunction()


/* using const */

// constFunc()  declaring here would give error due to hoisting
const constFunc = function(){
    let b = 'money'
    console.log(b);
}