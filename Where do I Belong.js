//Where do I Belong.js

//TASK: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

//1. Insert num into arr.
//2. Sort arr from least to greatest.
//3. Return the index of num.

function getIndexToIns(arr, num) {

    let newArray = arr.concat(num);
       //   [40, 60].concat(50)
       //   [40, 60, 50]

    newArray.sort((a,b) => a -b);

    return newArray.indexOf(num);
  }

  getIndexToIns([40, 60], 50);

//.indexOf() returns the first index at which an element is present in an array, or a -1 if the element is not present at all.

//We’re also going to be using .concat() here instead of .push(). Because when you add an element to an array using .push(), it returns the length of the new array. When you add an element to an array using .concat(), it returns the new array itself.