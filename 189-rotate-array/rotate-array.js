/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function splitReversal(arr,l,r){
    while(l<=r){
        let temp = arr[r];
        arr[r] = arr[l];
        arr[l]= temp;
        l++;
        r--;
    }
}

var rotate = function(nums, k) {
    let n = nums.length;
    let l = 0;
    let r = k % n ;

    splitReversal(nums,l,n-r-1);
    splitReversal(nums,n-r,n-1);
    splitReversal(nums,0,n-1);

};