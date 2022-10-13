//Title Case a Sentence.js

//TASK: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    const words = str.toLowerCase().split(" ");
    for(let i = 0; i <words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

titleCase("I'm a little tea pot");

//1.step: split the sentence into an array of words. So we can manipulate each word individually.

//2.step: after we split sentence, the variable 'words' is assigned an array with each word from the sentence.

//3.step: loop over the array of words and capitalize the first letter of each word.
//Every word is taken separately.
//Then it capitalizes the first letter, and in the end, it concatenates the capitalized first letter with the rest of the string


//str.substring(1): This excludes first character as the index 0 character (first character) is excluded.


//ANOTHER METHOD

function titleCase1(str) {
    const words = str.toLowerCase().split(" ");

    return words.map(word => {
        return word[0].toUpperCase() + word.substr(1);
    }).join(" ");
}

titleCase1("I'm a little tea pot");