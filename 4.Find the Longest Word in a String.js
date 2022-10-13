//TASK: Return the length of the longest word in the provided sentence.

//Your response should be a number.

function findLongestWord(str){
    let strSplit = str.split(" ");

    let longestWord = 0;

    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}