/* 
    Remove Duplicates
    Q: Remove duplicate elements from a sorted array
*/

function removeDuplicates(arr) {

    // Sort the array in numerical order
    arr.sort((a, b) => a - b)

    let output = []
    for (let i = 0; i < arr.length; i++) {

        // Only add element if it is not equal to previous element
        if (i === 0 || arr[i] !== arr[i - 1]) {
            output.push(arr[i]);
        }
    }
    return output
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))
console.log(removeDuplicates([1, 1, 5, 0, 7, 2, 4, 2, 0, 2, 5]))
