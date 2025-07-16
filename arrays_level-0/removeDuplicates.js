/* 
    Remove Duplicates
    Q: Remove duplicate elements from a sorted array
*/

const input = [1, 2, 3, 2, 4, 1, 5];

// sort the array in numerical order
const sortedArray = input.sort((a, b) => a - b);

let output = [];

// Loop through sorted array and skip duplicates
for (let i = 0; i < sortedArray.length; i++) {

    // Only add the element if it is not equal to previous element
    if (i === 0 || sortedArray[i] !== sortedArray[i - 1]) {
        output.push(sortedArray[i]);
    }
}

console.log(output);