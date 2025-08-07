function secondLargest(arr) {
    if (arr.length < 2) return 'Array should have at least two numbers';

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let ele of arr) {
        if (ele > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = ele;
        }
        else if(ele > secondLargest && ele !== firstLargest){
            secondLargest = ele;
        }
    }

    return secondLargest === -Infinity ? "No second largest found" : secondLargest;
}

console.log(secondLargest([0, 3, 5, 2, 7, 9]))
console.log(secondLargest([4, 4, 4, 4]))
console.log(secondLargest([5]))
console.log(secondLargest([10, 20]))