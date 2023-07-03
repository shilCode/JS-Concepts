// Write a function to add two numbers.
function addNum(a,b){
    return a + b;
}
console.log(addNum(29,31));

// Write a function to check if a number is even or odd.
function checkEvenOdd(number){
    
    if(number%2==0){
        console.log('number is even')
    }else console.log('number is odd')

    return;

}

console.log(checkEvenOdd(40));//input the number


// Write a function to find the maximum of three numbers.

//array solution
function maxNumfinder(a,b,c){
    i = [4,5,6]
    console.log("maximum",Math.max(...i))
    console.log("minimum",Math.min(...i)) //to get minium of three number
    return i;

}
maxNumfinder()

//simple solution
function maxNum(a,b,c){
    return Math.max(a,b,c)
}
console.log("maximum number",maxNum(21,39,11))


// Write a function to reverse a string.





// Write a function to calculate the factorial of a number.

// Write a function to check if a string is a palindrome.

// Write a function to find the sum of all numbers in an array.

// Write a function to find the average of numbers in an array.

// Write a function to remove duplicate elements from an array.


// Write a function to check if a given year is a leap year.



// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an AudioParam(YYYYMMDD). The parameter "userDate" and the return value are string



function formatDate(userDate) {
    // Split the user date into month, day, and year
    const [month, day, year] = userDate.split('/');
  
    // Pad single-digit month and day with leading zeros if necessary
    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');
  
    // Concatenate the formatted date parts in the desired format
    const formattedDate = `${year}${formattedMonth}${formattedDay}`;
  
    return formattedDate;
  }
  
  console.log(formatDate("12/31/2014")); // Output: 20141231