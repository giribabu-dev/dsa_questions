/* Count the number of digits in an integer */

let input = 31007092025;

function countDigits(num) {

    if (num == 0) return 1;

    num = Math.abs(num);

    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    };

    return count;
};

const result = countDigits(input);

console.log(result);

