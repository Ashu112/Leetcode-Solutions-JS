/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0 ; 
    let n = nums.length; 
    for (let i = 0 ; i < n; i++){
        if(nums[i] !== nums[i+1]){
            nums[k] = nums[i];
            k++
        }
    }
    return k ;
};