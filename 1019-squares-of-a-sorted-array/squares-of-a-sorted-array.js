/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0; 
    let r = nums.length - 1;
    let k = nums.length - 1;
    let ans = [];

    while(l<=r){
        if(Math.abs(nums[l]) <= Math.abs(nums[r])){
            ans[k] = nums[r] * nums[r];
            r--;
        }
        else {
            ans[k] = nums[l] * nums[l];
            l++;
        }
        k--;
    }

    return ans;
};