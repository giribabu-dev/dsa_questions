var findMaxConsecutiveOnes = function (nums) {
    let currentCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currentCount++;
        }
        else {
            maxCount = Math.max(currentCount, maxCount);
            currentCount = 0;
        }
    }
    return Math.max(currentCount, maxCount)
}

let arr = [1, 1, 0, 1, 1, 1]
let result = findMaxConsecutiveOnes(arr)
console.log(result)
