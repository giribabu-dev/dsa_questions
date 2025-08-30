let arr = [1, 3, 5, 7, 9];

var binarySearch = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        }
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return -1;
};

let result = binarySearch(arr, 7);
console.log(result);
