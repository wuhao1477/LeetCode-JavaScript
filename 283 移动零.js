/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    var l = -1;//上一个非0数的位置
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != 0){
            let a = nums[l+1];
            nums[l+1] = nums[i];
            nums[i] = a;
            l++
        }
    }
    //版本二
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] == 0) {
    //         for (let j = i; j < nums.length - 1; j++) {
    //             if (nums[j] == 0 && j != nums.length - 1 && nums[j + 1] != 0) {
    //                 let a = nums[j + 1];
    //                 nums[j + 1] = nums[i];
    //                 nums[i] = a;
    //                 j = nums.length
    //             }
    //         }
    //     }
    // }
    //版本三
    // for(let i = nums.length-1; i>=0;i--){
    //     if(nums[i]==0){
    //         nums.splice(i,1);
    //         nums.push(0)
    //     }
    // }
    return nums
};