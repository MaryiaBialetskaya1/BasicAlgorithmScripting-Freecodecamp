//Reverse a String.js

//TASK: Reverse the provided string.

//You may need to turn the string into an array before you can reverse it.

//Your result must be a string.

function reverseString(str) {
    if(!str || str.length < 2 ||typeof str!== 'string') {
            return 'Not valid';
    }
    const revArray = [];
    const length = str.length - 1;

    for(let i = length; i >= 0; i--){
        revArray.push(str[i]);
    }
    return revArray.join('');;
}
reverseString("hello");

// or
//to solve this challenge need to create a new string (initializing it to a blank string “”) and then iterating the string starting from the last character through the first character and the concatenating each character to the new string. After iterating through all the characters in the string, you return the new string.

function reverseString1(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
reverseString1("hello");


// or
//Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character. Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

// Next we chain the reverse() function, which takes our array of characters and reverses them.

//Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

function reverseString2(str) {
    return str
        .split("")
        .reverse()
        .join("");
}
reverseString2("hello");


