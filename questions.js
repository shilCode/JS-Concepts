/*  Write a function to validate if a given string is a palindrome */


function isPalindrome(str){
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr;
}

console.log(isPalindrome("racecar"))


/* Write a function to find the maximum value in a list of integers. */


function findMaxValue(arr){
    return Math.max(...arr)
}

console.log(findMaxValue([1,2,3,4,5,6]));


/* Implement a function to calculate the factorial of a given number.
 */


function calculateFactorial(num){
    if(num===0||num===1){
        return 1;
    }
    return num*calculateFactorial(num-1)
}

console.log(calculateFactorial(5));


/* remove dupelicate from a list */

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  console.log(removeDuplicates([2, 4, 3, 2, 6, 3, 9, 4])); // Output: [2, 4, 3, 6, 9]


  /* Character count in a string */

  function countCharacters(str) {
    const charCount = {};
    for (const char of str) {
      charCount[char] = charCount[char] + 1 || 1;
    }
    return charCount;
  }
  
  console.log(countCharacters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
  

  /* sorting a list of strings */
  function sortStrings(arr) {
    return arr.sort();
  }
  
  console.log(sortStrings(['apple', 'banana', 'cherry', 'date'])); // Output: ['apple', 'banana', 'cherry', 'date']
  

  /* sum of Even numbers in a list */

  function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
      if (num % 2 === 0) {
        return sum + num;
      }
      return sum;
    }, 0);
  }
  
  console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
  