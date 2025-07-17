/*
    Remove Element
    Que: Remove specific element from an array
*/

const input = [10, 37, 7, 17, 20, 25];

function removeElement(arr, ele){
    let output = arr.filter(item => item != ele);

    console.log(output);
};

removeElement(input, 37);