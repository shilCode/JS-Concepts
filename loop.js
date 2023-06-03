//Basics of JS

//if condition

const flag = false; // if condition is true it will run and break

if(!flag){
    console.log("condition satisfied")
}
else{
    console.log('condtion not satisfied');
}

//while loop

let required=true; //var is set here
while(required){ //condition goes here
   console.log(required)
   required=false;
}

//do while - it will definitely run before while loop, can be useful for automation if scenario is based on that
let i=0
do{
    i++
}while(i<10)
console.log(i);

//for loop
let n=0
for(let k=0;k<100;k++){
    if(k%2===0 && k%5==0){
        n++
        console.log(k)
        
        if(n==4){
            break
        }
        
    }
    
}

//when to use for loop and when to use while?
// while = if there is condition until it broke off its better to use while
//for = certain amount of time it needs to iterate its better to use for