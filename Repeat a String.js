//Repeat a String.js

//TASK: Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    if(num <= 0){
        return "";
    }
    if(num === 1){
        return str;
    }
    else{
        return str + repeatStringNumTimes(str, num -1);
    }
}

repeatStringNumTimes("abc", 3);


//anothor method

function repeatStringNumTimes(str, num) {
    if(num > 0){
        return str.repeat(num);
    }
    else{
        return "";
    }
}

repeatStringNumTimes("abc", 3);

//anothe method

function repeatStringNumTimes(str, num) {
    let repeatingString = "";

    while(num > 0){
        repeatingString +=str;
        times--;
    }

    return repeatingString
}