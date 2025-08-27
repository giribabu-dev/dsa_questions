let arr = [5, 2, 6, 1, 3];

function sum(n) {
    let isOdd = arr[n] % 2 !== 0;
    if (n === 0) return isOdd ? arr[0] : 0;
    return (isOdd ? arr[n] : 0) + sum(n - 1);
}

console.log(sum(arr.length - 1));
