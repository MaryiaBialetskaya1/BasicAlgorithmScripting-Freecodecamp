//Falsy Bouncer.js

//TASK: Remove all falsy values from an array. Return a new array; do not mutate the original array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let onlyTruthyValues = arr.filter(element => Boolean(element) === true);

    return onlyTruthyValues;
}

bouncer([7, "ate", "", false, 9]);

//1. step:  Use filter to remove falsy elements from arr.
//2. step: Return the new array.


//falsy values in JavaScript are: false, null, 0, "", undefined, and NaN.

//.filter() creates a new array with all elements that pass the test implemented by the provided function.

//In other words, .filter() goes through each element in an array and preserves all the elements that pass a certain test. All the elements in the array that fail that test are filtered out — they’re removed.

//Boolean() : if the argument provided to Boolean() is truthy, then Boolean() will return true. If the argument provided to Boolean() is falsy, then Boolean() will return false.

//1. Determine which values in arr are falsy.
//2. Remove all falsy values.
//3. Return the new array that contains only truthy values.