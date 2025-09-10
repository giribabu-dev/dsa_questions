var singleNumber = function (nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
        console.log(xor)
    }

    return xor;
}

let result = singleNumber([2, 3, 5, 2, 3])
console.log(result)
