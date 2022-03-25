/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 逻辑为：从右边开始循环匹配，一个大配一个小的。直到等于0返回
 */
 var twoSum = function(nums, target) {
    for(let i =nums.length-1;i>=0;i--){
        for(let j = 0;j<i;j++){
            if(nums[j]+nums[i]==target){
                return [j,i]
            }
        }
    }
};