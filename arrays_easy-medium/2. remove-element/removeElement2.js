/*
    Remove Element
    Que: Remove specific element from an array
*/

function removeElement(arr, ele){
    return arr.filter(item => item != ele);
};

console.log(removeElement([10, 37, 7, 17, 20], 37));
console.log(removeElement([1, 2, 3, 4, 5], 5));
