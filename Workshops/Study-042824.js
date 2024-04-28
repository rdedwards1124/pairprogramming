/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
*/

// Create a function labeled amplify, with a parameter
function amplify(number){
    //create an array and let it be empty for now
    let array = []
    // Create a for loop, the conditional must include the number parameter
    for(let i=0; i<number; i++){
        // Need to check if number is divisible by 4 before pushing it to the array
        let a = i+1
        if(a%4 === 0){
          a=a*10
        }
        // Push value of a to the array
      	array.push(a)
    }
    return array
}

let answer = amplify(10)
console.log(answer)

// SOLUTION:
/*
function amplify(number){
  const array = [];
  //if number divisible by 4, then execute multiplication by 10
  for (let i = 1; i <= number; i++){
    if (i % 4 === 0){
      array.push(i*10);
    } else {
      array.push(i);
   }
  //else push the number into an array
  //return the array
	}
  return array;
}  

let number = 8
console.log(amplify(number))
*/

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

function addNumbers(number){
    //create a variable for the sum, this will eventually be the result
    let sum = 0
    // make a forloop and loop it "number" times
    for(let i=1; i<=number; i++){
        // everytime you loop add that to sum
        sum = sum + i
    }
    return sum
}

let answer2 = addNumbers(4)
console.log(answer2)



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/* 
Declare a function, 'List', which takes in no arguments and returns an instance of a 'List' object when invoked with the 'new' keyword.
All List objects should contain their own 'length' property, which keeps track of the number of items they contain. When a List is first created, it should have a length of 0.
*/


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


/* 
List objects should function similarly to an array - i.e., they will store values at numbered indexes, starting at 0.
Declare a function, 'add', which is accessible to ALL instances of 'List'. 'add' should take in a single argument, and when invoked on a List instance, should add the argument to the end of that particular List (i.e. at the highest index), increment the List's length property, and return the new length.

Example:
Adding 'dog' to an empty List --> List { 0: 'dog', length: 1 } --> return 1
Adding 'cat' to the same List --> List { 0: 'dog', 1: 'cat', length: 2 } --> return 2
*/

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/* 
Declare a function 'record', which takes a callback function as an argument and returns another function.
The returned function takes in a number, and when invoked, will run the callback on this number. The function should keep a record of all previous results of running the callback (and if it is invoked more than once with the same argument, it should not run the callback again on that argument). 
On each invocation, it should return the *highest value so far* among all previous calls. Once complete, make sure to test your function.

Example:
const multiplyBy2 = record((n) => n * 2);
multiplyBy2(2) // --> 4;
multiplyBy2(10) // --> 20;
multiplyBy2(5) // --> 20;
multiplyBy2(15) // --> 30; 
*/


// SOLUTION:
/*
function record(cb) {
  //input to inner func: num output: invocation of cb on num
  //declare an empty obj to store results
  const result = {};
  let max = -Infinity;
  return function(num) {
    // if this is the first time I see this number
      if (result[num] === undefined) { // hasOwnProperty || in operator
        result[num] = cb(num);
        if (result[num] > max) max = result[num];
      } 
     return max;
  }
  
  
  //do not run cb on same num more than once
  //return the highest valuem
}

const multiplyBy2 = record((n) => n * 2);

console.log(multiplyBy2(2)) // --> 4;
console.log(multiplyBy2(10)) // --> 20;
console.log(multiplyBy2(5)) // --> 20;
console.log(multiplyBy2(15)) // --> 30; 
*/

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


/* 
Declare a recursive function 'findIndex', which takes in at least two arguments (an array and a value).
'findIndex' should search the array for the passed-in value. If found, it should return the first index number at which the value appears. If not, it should return -1.

Example: findIndex([1, 2, 3, 4, 5, 3], 3) --> 2

*/

// create the findIndex function with 2 parameters
function findIndex(array, value){
    // this should loop thru the array and find a number that equals "value"
    for(let i=0; i<array.length; i++){
        // for each loop compare the number in current index to "value"
        if(array[i] === value){
            let a = array[i]
        } else {
            let a = -1
        }
    }
    // then return the index number of that array where u found "value"
    return a
}

let b = findIndex([1,2,3,4,5], 3)
console.log(b)

