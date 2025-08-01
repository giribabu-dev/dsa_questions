/*
    Recursion 101
    Que: Print numbers from n to 1 using recursion
*/

function printNumbers(n) {
    if (n > 0) {
        console.log(n)
        printNumbers(n - 1)
    }
}

printNumbers(10)
