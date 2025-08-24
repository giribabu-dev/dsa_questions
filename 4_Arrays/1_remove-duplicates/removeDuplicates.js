var removeDuplicates = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[k]) {
            k++;
            nums[k] = nums[i]
        }
    }
    return k + 1;
}

let arr = [1, 1, 2, 3, 3, 5]
let result = removeDuplicates(arr)
console.log(result)
