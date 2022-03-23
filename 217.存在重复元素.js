/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = Array.from(new Set(nums))
    if(arr.length==nums.length){
        return false
    }else{
        return true
    }
};