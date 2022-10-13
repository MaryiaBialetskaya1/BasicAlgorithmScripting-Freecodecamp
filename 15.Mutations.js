//Mutations.js

//TASK: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

//Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
    let str = arr[0].toLowerCase();
    let strChecker = arr[1].toLowerCase();

    for(let i = 0; i < strChecker.length; i++){
        if(str.indexOf(strChecker[i]) < 0){
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);

  //STEPS:
  //1. Because we ignoring the case it will be easier if we turn the string in lowercase.
  //2. Make loops through the second element of array.
  //3. Finally check if the second element array fits with the first element.

