/*
    Sum of All Numbers in Array
    Que: Sum of odd numbers in array using Recursion
*/

let arr = [5, 2, 1, 8, 3, 7]

function sum(n){
    let isOdd = arr[n] % 2 != 0;

    if(n == 0) return isOdd ? arr[n] : 0

    return (isOdd ? arr[n] : 0) + sum(n - 1)
}

console.log(sum(arr.length - 1))
