//Confirm the Ending.js

//Check if a string (first argument, str) ends with the given target string (second argument, target).

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

//Why are you using string.substr(-target.length)?

//If the target.length is negative, the substr() method will start the counting from the end of the string, which is what you want in this code challenge.

//So here string.substr(-target.length) will get the last index of the string ‘Bastian’ which is ‘n’.

//Then you check whether string.substr(-target.length) equals the target (true or false).



function confirmEnding(str, target){
    return (str.substr(-target.length)===target) ? true : false;
}
confirmEnding('Bastian', 'n');


// What does "if (string.substr(-target.length) === target)" represents?
  // The string is 'Bastian' and the target is 'n'
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')

