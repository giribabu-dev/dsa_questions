/*
    Move Zeros
    Question: Move all zeros to the end of the array without changing order.
*/

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Move all non-zero element to front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    };

    // Fiil the remaining positions with zeros
    while (nonZeroIndex < arr.length) {
        arr[nonZeroIndex] = 0;
        nonZeroIndex++
    };

    return arr;
};

console.log(moveZerosToEnd([0, 0, 1, 11, 3, 0, 7, 0, 2, 5]));
console.log(moveZerosToEnd([0, 1, 0, 2]));
