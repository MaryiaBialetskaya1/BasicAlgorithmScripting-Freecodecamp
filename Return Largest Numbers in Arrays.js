//Return Largest Numbers in Arrays.js

//TASK: Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(mainArray) {
    return mainArray.map(function(subArray) {
      return Math.max.apply(null, subArray);
    });
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  //The map() method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.

  //The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).

  //The Math.max() function returns the largest of zero or more numbers, and we can pass any number of arguments.