function countNegativeNumbers(arr) {
    let counter = 0

    for (let ele of arr) {
        if (ele < 0) {
            counter++
        }
    }
    return counter
}

let arr = [2, -6, 4, 8, 1, -9]
let result = countNegativeNumbers(arr)
console.log("Result:", result)
