//Truncate a String.js

//TASK: Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//Let’s talk about .slice() for a second:

//.slice() extracts a section of a string and returns it as a new string. If you call

//.slice() on a string without passing it any additional information, it will return the whole string.

//We have the option of passing .slice() a beginIndex and endIndex, like so - .slice(beginIndex, endIndex)

//This tells .slice() where to start the slicing and where to end the slicing. Keep in mind that strings are zero-indexed! So if we wanted to return from the 2-indexed letter of “Bastian” until but not including the 5-indexed letter of “Bastian”, we could do this: - "Bastian".slice(2, 5) - returns "sti"


function truncateString(str, num){
    if(str.length <= num){
        return str;
    }

    return str.slice(0, num) + '...'
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//If the length of str is less than or equal to num, just return str--don't truncate it

//Return str truncated with '...' concatenated to the end of str.