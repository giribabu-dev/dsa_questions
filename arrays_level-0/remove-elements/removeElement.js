/*
    Remove Element
    Q: Remove specific elements from an array
*/

const input = [10, 32, 7, 17, 20, 25];

function removeElement(arr, ele) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ele) {
            output.push(arr[i]);
        }
    };

    console.log(output);
};

removeElement(input, 20);