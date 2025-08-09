function smallestNumber(arr) {
    let smallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}

const arr = [2, -6, 4, 8, 1, -9]
let result = smallestNumber(arr)
console.log("Smallest:", result)
