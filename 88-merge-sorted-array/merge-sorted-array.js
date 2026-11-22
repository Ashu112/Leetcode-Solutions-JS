/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Two Pointers 
    // Take two pointers both at last index of both the arrays 
    // on pointer at last of first array for position
    // place the bigger value pointer at kth index and move pointers accordingly
    let p1 = m-1;
    let p2 = n-1;
    let k = m+n-1;
    while(p1 >= 0 && p2 >= 0){
        if(nums1[p1] >= nums2[p2]){
            nums1[k] = nums1[p1];
            p1--;
            k--;
        }else if(nums2[p2] > nums1[p1]){
            nums1[k] = nums2[p2];
            p2--;
            k--;
        }
    }

    while(p2 >= 0){
        nums1[k] = nums2[p2];
        p2--;
        k--;
    }
};