/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Two Pointer approach
    // one to access element and one for position
    
    let k = 1 ; 
    let n = nums.length; 
    for (let i = 1 ; i < n; i++){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++
        }
    }
    return n === 0 ? 0 : k ;
};