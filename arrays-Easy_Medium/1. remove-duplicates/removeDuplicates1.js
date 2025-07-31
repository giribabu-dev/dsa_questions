/*
    Remove Duplicates
    Que: Remove duplicate elements from a sorted array
*/

function removeDuplicates(arr) {
    arr.sort((a, b) => a - b)

    let result = []
    arr.forEach(ele => {
        if (!result.includes(ele)) {
            result.push(ele)
        }
    })
    return result
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))
console.log(removeDuplicates([1, 1, 5, 0, 7, 2, 4, 2, 0, 2, 5]))
