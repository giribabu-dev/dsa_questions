/*
    Remove Element
    Q: Remove specific elements from an array
*/

function removeElement(arr, ele) {
    let output = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ele) {
            output.push(arr[i]);
        }
    }
    return output
}

console.log(removeElement([10, 32, 7, 17, 20, 25], 20))
console.log(removeElement([3, 16, 7, 25, 20, 25], 16))
