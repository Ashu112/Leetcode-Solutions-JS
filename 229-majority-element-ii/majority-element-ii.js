/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n = nums.length;

    let curr1 = null;
    let curr2 = null;

    let count1 = 0;
    let count2 = 0;

    let ans = [];

    for(let i = 0 ; i<n ; i++){
       if( curr1 === nums[i]){
        count1++;
       }
       else if(curr2 === nums[i]){
        count2++;
       }
       else if(count1 === 0){
        curr1 = nums[i];
        count1++;
       }
       else if( count2 === 0){
        curr2 = nums[i];
        count2++;
       }
       else{
        count1--;
        count2--;
       }
    }

    count1 = 0; 
    count2 = 0;

    for(let i = 0 ; i < n ; i++){
        if(nums[i] === curr1)count1++;
        else if(nums[i] === curr2)count2++;
    }

    if(count1 > Math.floor(n/3)){
        ans.push(curr1);
    }

    if(count2 > Math.floor(n/3)){
        ans.push(curr2);
    }

    return ans;
};