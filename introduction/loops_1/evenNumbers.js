/* 
    Loops 1
    Print all even numbers in an array
*/

function printEvenNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }
};

printEvenNumbers([5, 10, 7, 1, 20, 25]);
