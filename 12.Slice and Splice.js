//Slice and Splice.js

//TASK: You are given two arrays and an index.

//Copy each element of the first array into the second array, in order.

//Begin inserting elements at index n of the second array.

//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let combinedArrays = arr2.slice();
    combinedArrays.splice(n,0, ...arr1);
    return combinedArrays;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//1. step: Create a copy of arr2
//2. step: Insert all the elements of arr1 into arr2 beginning at the index specified by n.
//3. step: use the spread operator to insert each individual element of arr1 instead of the whole array
//4. step: return the combined arrays.

// .slice() extracts a section of a string and returns it as a new string. If you call .slice() on a string without passing it any additional information, it will return the whole string.

//  .splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements.

//SOLUTION 2

function frankenSplice2(arr1, arr2, n) {
    let combinedArrays = arr2.slice(); //Create a copy of arr2


    // Using a for loop, insert each element of arr1
    // into combinedArrays starting at index n.
    for(let i = 0; i < arr1.length; i++){
        combinedArrays.splice(n, 0, arr1[i])
        n++; // increment n by 1 each time the loop runs
    }

    return combinedArrays; // Return the combined arrays.
}

frankenSplice2([1, 2, 3], [4, 5, 6], 1);

