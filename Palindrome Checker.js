//Palindrome Checker.js

//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


function palindrome(str) {
    let re = /[^A-Za-z0-9]/g; // /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
palindrome("eye");


//EXPLANATION:

/*step 1: use RegExp to remove unwanted characters from it -> let re = /[^A-Za-z0-9]/g;

let lowRegStr = str.toLowerCase().replace(re, ''); ->

str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"

str.replace([^A-Za-z0-9]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"

let lowRegStr = "amanaplanacanalpanama";
  */

/*step 2: Use chaining methods with built-in functions

let reverseStr = lowRegStr.split('').reverse().join(''); ->

lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]


["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]

["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"

So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";

And, let reverseStr = "amanaplanacanalpanama";

*/

/*
Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean

return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
 */







