// Challenge 3
function map(array, callback) {
	const result = [];
  for(let i=0; i<array.length; i++){
    result.push(callback(array[i]))
  }
  return result;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4

// Challenge 6
function reduce(array, callback, initialValue) {
    let accum = array[initialValue];
    for(let i = initialValue + 1 ; i < array.length; i++){
      accum = callback(accum,array[i])
    }
    return accum
  
  }
  const nums = [4, 1, 3];
  const add = function(a, b) { return a + b; }
  console.log(reduce(nums, add, 0));