/*
    Print all even numbers in an array
*/

function printEvenNums(arr) {
    arr.forEach(ele => {
        if (ele % 2 == 0) {
            console.log(ele);
        }
    })
};

printEvenNums([11, 10, 7, 22, 20, 25]);
