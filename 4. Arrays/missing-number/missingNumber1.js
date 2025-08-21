var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);

    if (nums[0] !== 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            return nums[i - 1] + 1;
        }
    }
    return nums.length;
}

let result = missingNumber([3, 0, 1])
console.log(result)
