var merge = function (nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);

    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}

let arr1 = [1, 2, 3, 0, 0, 0]
let arr2 = [2, 5, 6]
let result = merge(arr1, 3, arr2, 3)
console.log(result)
