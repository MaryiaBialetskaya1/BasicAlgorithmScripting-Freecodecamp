//Boo who.js

//Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.

function booWho(bool){
    return typeof bool === "boolean";
}
booWho(null);

//the operator typeof checks if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false

//another example

function booWho2(bool){
    if(bool === true || bool === false){
        return true;
    } else {
        return false;
    }
}

booWho2(null);

//edit above with ternary operator

function booWho3(bool) {
    return (bool === true || bool === false) ? true : false;
}
booWho3(null);