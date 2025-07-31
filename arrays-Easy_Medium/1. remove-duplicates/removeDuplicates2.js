/*
    Remove Duplicates
    Que: Remove duplicate elements from a sorted array.
*/

function removeDuplicates(arr) {
    arr.sort((a, b) => a - b)

    const result = arr.filter((ele, index) => {
        if (index === 0 || arr[index] !== arr[index - 1]) return ele
    })
    return result;
}

console.log(removeDuplicates([10, 5, 2, 7, 3, 2, 2, 5]))
console.log(removeDuplicates([9, 3, 9, 8, 2, 4, 8, 9, 3, 6]))