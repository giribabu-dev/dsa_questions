/* Count Negative Numbers in an Array */

function countNegativeNumbers(arr) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    return count
};

console.log(countNegativeNumbers([5, -15, -7, 1, 20, -25]));
