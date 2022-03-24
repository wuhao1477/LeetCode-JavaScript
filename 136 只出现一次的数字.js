/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
    // for(let i = 0;i<nums.length;i++){
    //     if(nums.indexOf(nums[i])==nums.lastIndexOf(nums[i])){return nums[i]}
    // }
    let ans = 0;
    for(let i = 0; i < nums.length; i++){
        ans ^= nums[i];
    }
    return ans;


    // return nums.reduce((t,n)=>{return t^n})
};