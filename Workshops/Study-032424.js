
/////////////////////////////////////////////////
//----------------Problem #1-------------------//
/////////////////////////////////////////////////

/*
Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

splitStrings('abc'); // should return ['ab', 'c_']
splitStrings('abcdef'); // should return ['ab', 'cd', 'ef'];

*/

function splitStrings(string){
    let array = []
    if ((string.length)%2 === 1){
        string = string + "_"
    }
    for (let i=0; i<string.length; i+=2){
        array.push(string[i] + string[i+1])
    }
    return array
}

let myString = "abc"
console.log(splitStrings(myString))


// Possible solution:
/*
function splitStrings(str) {
  //create placeholder for array
  let resultArr = [];
  //loop thru string
  if (str.length % 2 === 1) {
    str += "_";
  }
  for (let i = 0; i < str.length; i+=2){
    const pair = str[i] + str[i + 1];
    resultArr.push(pair);
  }
  return resultArr
}
//push pairs into result array
//if string length is odd add underscore
console.log(splitStrings('abc')); // should return ['ab', 'c_']
console.log(splitStrings('abcdef')); // should return ['ab', 'cd', 'ef'];


result.push(`${str[i]}${str[i+1] === undefined ? "_" : str[i + 1]}`);

*/


/////////////////////////////////////////////////
//----------------Problem #2-------------------//
/////////////////////////////////////////////////

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(num){
    let boolean
    if ((num + 1) <= 0){
        boolean = true
    } else if (num%2 === 0){
    	boolean = true
    } else {
        boolean = false
    }
    return boolean
}

let x = 9

console.log(negativeOrEven(x))
console.log(negativeOrEven(-x))


/////////////////////////////////////////////////
//----------------Problem #3-------------------//
/////////////////////////////////////////////////

/* 
Declare a recursive function 'applyToEachElement' that takes in at least two arguments (an array and a callback function). When invoked, 'applyToEachElement' should sequentially run the callback on each item in the passed-in array. It should not return anything.

Once complete, write some code to test your 'applyToEachElement' function.
*/
function addTwo(x){
    let result = x + 2
    return result
}

function applyToEachElement(array, callback){
    for (let i=0; i<array.length; i++){ 
        console.log(addTwo(array[i]))
    }
}

applyToEachElement([9,2,5], addTwo) // console logs: 11, 4, 7

// Solution

/*

const nums = [2, 6, 8, 9];

function printValue(value) {
  console.log(value);
}

// const addTwo = (value) => value + 2; 

function applyToEachElement(arr, cb, i = 0) {
  if (i >= arr.length) {
    return;
  }
  cb(arr[i]);
  applyToEachElement(arr, cb, i + 1);
}

applyToEachElement(nums, printValue);
// applyToEachElement(nums, printValue);
// applyToEachElement(nums, printValue);
// applyToEachElement(nums, printValue);

*/


/////////////////////////////////////////////////
//----------------Problem #4-------------------//
/////////////////////////////////////////////////

/*
Declare a function, 'UniqueQueue', which takes in an array as an argument and returns an instance of a 'UniqueQueue' object when invoked with the 'new' keyword.
'UniqueQueue' objects should function similarly to a queue, but they will only store UNIQUE values (no duplicates). Each value should be stored with an index representing its order in the queue.
All UniqueQueue objects should contain their own 'length' property, which keeps track of the number of items they contain.
When a UniqueQueue is first created, each array element should be enqueued, and the 'length' property updated accordingly. Duplicates in the initial array should be ignored.

Example:
Creating a UniqueQueue from [1, 2, 3] --> { 0: 1, 1: 2, 2: 3, length: 3 }
Creating a UniqueQueue from [1, 1, 2] --> { 0: 1, 1: 2, length: 2 }
*/

function UniqueQueue (array){
    let object = {}
    return object
}



// Possible solution

/*

UniqueQueue.prototype.enqueue = function(value){
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return this.length;
    }
  }
  this[this.length] = value;
  this.length++;
  return this.length;
}

console.log(test.enqueue("a")); // 3

console.log(test)// { 0: a, 1: b, 2: c, length: 3 }

console.log(test.enqueue("d")); // 4
console.log(test); // { 0: a, 1: b, 2: c, 3: d length: 4 }


*/