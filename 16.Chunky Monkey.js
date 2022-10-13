//Chunky Monkey.js
//TASK: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let group = [];

    while(arr.length > 0){
        group.push(arr.splice(0, size));
    }
    return group;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);