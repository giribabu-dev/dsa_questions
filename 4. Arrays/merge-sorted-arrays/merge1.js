var merge = function (nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
    console.log(nums1)
}

let arr1 = [1, 2, 3, 0, 0, 0]
let arr2 = [2, 5, 6]
merge(arr1, 3, arr2, 3)
