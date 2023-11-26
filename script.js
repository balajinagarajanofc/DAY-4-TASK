Do the below programs in anonymous function & IIFE (TASK)
-------------------------------------------------

a. Print odd numbers in an array


// anonymous function

var input = [1,2,3,4,5,6,7]; 

var odd = function(oddnumber)
{
    for (var i = 0; i < oddnumber.length; i++) {
        if (oddnumber[i] % 2 !== 0) {
          console.log(oddnumber[i]);
        }    
    }
};
odd(input);
-----------------------

// IIFE function

var input = [1,2,3,4,5,6,7];     

(function(oddnumber) {
    for (var i = 0; i < oddnumber.length; i++) {
      if (oddnumber[i] % 2 !== 0)
       {
      console.log(oddnumber[i]);
       }
    }
  })(input);

=========================================================

b. Convert all the strings to title caps in a string array


// anonymous function

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(titleCase("as usual hello world!"));

-------------------------------------------------------------
  
// IIFE function

let titleCase = (function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  })("as usual hello world!");
  
  console.log(titleCase);
  
=====================================================================

c. Sum of all numbers in an array

// anonymous function

	
function fullsum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum+arr[i];
    }
    return sum;
  }
  
  var numbers = [1, 2, 3, 4, 5];
  var result = fullsum(numbers);
  console.log(result);

---------------------------------------
  
// IIFE function
 
 var numbers = [1, 2, 3, 4, 5];

var result = (function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum+arr[i];
  }
  return sum;
})(numbers);

console.log(result);

=================================================

d. Return all the prime numbers in an array

// anonymous function

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function getPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
  }
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
  let primeNumbers = getPrimeNumbers(numbers);
  console.log(primeNumbers);

  -------------------------------------

// IIFE function



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  return arr.filter(num => isPrime(num));
})(numbers);

console.log(primeNumbers);

========================================================

e. Return all the palindromes in an array

// anonymous function

let strings = ["level", "deed", "hello", "radar", "world"];

let getPalindromes = function(arr) {
  return arr.filter(function(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  });
};

// Call the anonymous function
let palindromeStrings = getPalindromes(strings);
console.log(palindromeStrings);

-------------------------------------------------

// IIFE function

let strings = ["level", "deed", "hello", "radar", "world"];

let palindromeStrings = (function(arr) {
  return arr.filter(function(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  });
})(strings);

console.log(palindromeStrings);

=========================================================

Remove duplicates from an array


// anonymous func

const removeDuplicates = function(arr) {
  return Array.from(new Set(arr));
};

let originalArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);
---------------------------------------------

// IIFE function

const uniqueArray = (function(arr) {
  return Array.from(new Set(arr));
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);

=============================================================

Rotate an array by k times

// anonymous func


const rotateArray = function(arr, k) {
    k = k % arr.length; 
    return arr.slice(k).concat(arr.slice(0, k));
  };
  
  let originalArray = [1, 2, 3, 4, 5];
  let rotatedArray = rotateArray(originalArray, 2);
  console.log(rotatedArray);
   

----------------------------------------

// IIFE function

const rotatedArray = (function(arr, k) {
  k = k % arr.length; 
  return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray);



===================================================================================

part - 2

1. Print odd numbers in an array:


const printOddNumbers = arr => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(numbers);

---------------------


2. Convert all the strings to title caps in a string array:


const convertToTitleCaps = arr => {
  return arr.map(str => {
    return str.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });
};

let stringArray = ["hello world", "javascript is awesome", "title caps"];
let titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);

---------------------------------


3. Sum of all numbers in an array:

const sumArray = arr => arr.reduce((acc, num) => acc + num, 0);

let numbers = [1, 2, 3, 4, 5];
let result = sumArray(numbers);
console.log(result);

------------------------

4. Return all the prime numbers in an array:


const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);

----------------------


5. Return all the palindromes in an array:


const isPalindrome = str => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
};

const getPalindromes = arr => arr.filter(str => isPalindrome(str));

let strings = ["level", "deed", "hello", "radar", "world"];
let palindromeStrings = getPalindromes(strings);
console.log(palindromeStrings);

===================================================================================













