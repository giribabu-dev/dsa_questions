/*
    Merge Sorted Arrays
    Question: Merge two sorted arrays into one sorted array.
*/

const input1 = [1, 2, 8];
const input2 = [3, 4, 10];

function mergeSortedArrays(arr1, arr2) {
    let output = arr1.concat(arr2).sort((a, b) => a - b);

    console.log(output);
};

mergeSortedArrays(input1, input2);