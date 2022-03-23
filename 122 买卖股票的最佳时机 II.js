/**
 * @param {number[]} prices
 * @return {number}
*  这是贪心算法。还有一个是动态规划
 */
var maxProfit = function(prices) {
    let new_arr = [];
    let a=0;
    for(let i=1;i<prices.length;i++){
        a +=Math.max(0, prices[i] - prices[i - 1]);
    }
    return a
};

//var maxProfit = function(prices) {
//    const n = prices.length;
//    let dp0 = 0, dp1 = -prices[0];
//    for (let i = 1; i < n; ++i) {
//        let newDp0 = Math.max(dp0, dp1 + prices[i]);
//        let newDp1 = Math.max(dp1, dp0 - prices[i]);
//        dp0 = newDp0;
//        dp1 = newDp1;
    //}
   // return dp0;
//};
//
//作者：LeetCode-Solution
//链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/mai-mai-gu-piao-de-zui-jia-//shi-ji-ii-by-leetcode-s/
//来源：力扣（LeetCode）
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。