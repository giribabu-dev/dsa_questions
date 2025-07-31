/*
    Recursion 101
    Que: Print numbers from n to 1 using recursion
*/

function printNumbers(num) {

    if (num > 0) {
        console.log(num)
        printNumbers(num - 1)
    }
}

printNumbers(10)