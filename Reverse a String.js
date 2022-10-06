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

function reverseString2(str) {
    return str
        .split("")
        .reverse()
        .join("");
}
reverseString2("hello");


