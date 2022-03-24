/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function (nums1, nums2) {
    let len1 = nums1.length, len2 = nums2.length;
    let len = len1 < len2 ? len1 : len2;
    let ans = [];
    if (len1 == 0 || len2 == 0) {  //处理边界条件
        return ans;
    }
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let i = 0, j = 0, k = 0;
    while (i < len1 && j < len2) {
        if (nums1[i] == nums2[j]) {
            ans[k++] = nums1[i];
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return ans;
};