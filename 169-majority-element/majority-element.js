/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let count = 0; 
    let curr = 0;

    for(let i = 0 ; i < n ; i++){
        if(count === 0 ){
            curr = nums[i];
            count++;
        }
        else if(nums[i] === curr){
            count++;
        }
        else if(nums[i] !== curr){
            count--;
        }
    }
    
    return curr;
};