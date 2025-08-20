function countDigits(n) {
    if (n == 0) return 1;

    n = Math.abs(n)

    let count = 0
    while (n > 0) {
        n = Math.floor(n / 10);
        console.log(n)
        count++;
    }
    return count;
}

console.log(countDigits(259))
// console.log(countDigits(1035))
// console.log(countDigits(0))
