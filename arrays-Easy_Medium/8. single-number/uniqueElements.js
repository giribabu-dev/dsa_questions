/*
    Single Number
    Que: Find the unique element in an array where all others are repeated.
*/

function findUniqueElement(arr) {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        result = result ^ arr[i]
    }
    return result
};

console.log(findUniqueElement([2, 3, 5, 4, 5, 3, 4]))
console.log(findUniqueElement([2, 3, 2, 4, 4]))
