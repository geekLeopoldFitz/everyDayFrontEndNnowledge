/*
 * @Author: LeoFitz
 * @Date: 2021-08-19 13:43:07
 * @LastEditTime: 2021-08-20 16:16:36
 * @Description: 
 * @FilePath: \everyDayFrontEndNnowledgec:\Users\sundan\.leetcode\70.爬楼梯.js
 */
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [1, 2]
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    console.log(dp)
    return dp[n-1]
};
// @lc code=end

