/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0 ; 
    let n = nums.length;

    for(let i = 0; i < n ;i++){
        if( k<2 || nums[i] !== nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
    }

    console.log(nums,k);

    return k;
};