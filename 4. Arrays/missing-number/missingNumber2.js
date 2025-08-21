var missingNumber = function (nums) {
    let n = nums.length;

    total_sum = (n * (n + 1)) / 2;

    let sum_of_array = 0;

    for (let ele of nums) {
        sum_of_array += ele;
    }

    return total_sum - sum_of_array;
}

let result = missingNumber([3, 0, 1])
console.log(result)
