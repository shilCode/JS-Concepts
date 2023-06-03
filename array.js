//reduce || filter  || map -- pratice 


//not the way to do it, but this sort of array is also used
// let mark = Array(6)
// var marks = new Array(20,40,35,12,37,100)

let marks =[20,40,35,12,37,100]
// marks[7]
console.log(marks);
console.log(marks[5])
console.log(marks.length)
marks.push(65)//adding new element to the array
console.log(marks)
marks.pop()//deleting last ele from the array
console.log(marks)
marks.unshift(12)//adding new ele in the begining
console.log(marks)


console.log(marks.indexOf(100)) //tells us location of array

console.log(marks.includes(1200)) //includues or not, this is very helpfuly while testing
console.log(marks.includes(100));

subMarks=marks.slice(2,5);
var sum=0
console.log(subMarks); //slices the array and then can be used for automation
for(let i=0;i<subMarks.length;i++){
//    console.log( marks[i])
   sum=sum+marks[i]
   console.log(sum);
}


//reduce || filter  || map
const total = marks.reduce((sum,mark)=>sum+mark,0) // helps big time to understand array in testing, this simply sums up the whole array
console.log(total);

//array with even number, skipping odd number
var scores=[12,13,14,16]
var evenScores=[]
for(let i =0;i<scores.length;i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores);

//simpler way of doing the same thing, instead of going though a lot it just compile the same thing within 2 lines of code; helps while testing
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores);

//problem - array with even numbers of scores and multiply each value with array [] and sum them up
//solve using map
let newMapArray = newFilterEvenScores.map(score=>score*3)
console.log(newMapArray);
let sumOfArray=newMapArray.reduce((sum,val)=>sum+val,0)
console.log(sumOfArray);

//chaining
let scoresNew = [12,13,14,16]
let sumValue = scoresNew.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue);

// sorting array

let fruits =["banana","mango","apple"]


console.log(fruits.sort()) //asc
console.log(fruits.reverse()); //dsc

var scores3=[12,13,14,12,11231,12312,11,21321,1231312,2,1]
let  bubbleSort= scores3.sort((a,b)=>{return a-b;}) // bubble sort
console.log(bubbleSort);