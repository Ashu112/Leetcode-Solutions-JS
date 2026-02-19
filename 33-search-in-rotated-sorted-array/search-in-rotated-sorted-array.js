/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 1. calculate the mid
    // 2. check which half is sorted 
    //   i. check if target is in sorted side
    //   ii. else go to next half.
    let l = 0 ;
    let r = nums.length - 1 ;
    //binary search
    while(l<=r){
       let mid = Math.floor((l + r) / 2);
        // target match 
        if(nums[mid] === target)return mid;
        // left part is sorted
        if(nums[l] <= nums[mid]){
            // target is in left part
            if(nums[l] <= target && target < nums[mid]){
                r = mid -1 ;
            }else {
                l = mid+1;
            }
        }
        // right part is sorted
        else{
            if(nums[mid] < target && target <= nums[r] ){
                l = mid+1;
            }else {
                r= mid-1;
            }
        }
    }
    return -1;
};