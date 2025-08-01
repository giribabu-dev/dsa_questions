/*
    Sum of All Numbers in Array
    Que: Sum of odd numbers in array using Recursion
*/

let arr = [5, 2, 0, 3, 6, 7]

function sum(n) {
    let isOdd = arr[n] % 2 != 0;

    if (n == 0) {
        if (isOdd) {
            return arr[n]
        }
        else {
            return 0
        }
    }

    if (isOdd) {
        return arr[n] + sum(n - 1)
    }
    else {
        return 0 + sum(n - 1)
    }
}

console.log(sum(arr.length - 1))
