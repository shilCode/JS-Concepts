
"use strict"
/* if used strict then implicitly it will go downwards and compile there
in this code below console.log would be 10 cos global variable will be changed strictly */
var x=23;

//parent er dunia
function myFunc(){
    // myFunc er dunia
    var y = 10;
     x= 10;
     /* if not defined then x is not changed but if its defined then its not replaced
     var x = 10; */
    console.log(`${x} from myFunc()` )
    /* accessing x from outter dunia happens is JS
    which is weird in other programming languages but
     in JS its completely normal */
}

myFunc();
console.log(x)