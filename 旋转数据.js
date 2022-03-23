/**
* 有错误，没有找到解决办法
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) { 
    let a =    nums
    nums = a.concat(a.splice(0,a.length-k))
    console.log(nums)
    return nums
};