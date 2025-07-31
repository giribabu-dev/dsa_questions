/*
    Merge Sorted Arrays
    Question: Merge two sorted arrays into one sorted array.
*/

function mergeSortedArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
};

console.log(mergeSortedArrays([1, 2, 8], [3, 4, 10]));
console.log(mergeSortedArrays([10, 38, 7], [27, 2025]));
