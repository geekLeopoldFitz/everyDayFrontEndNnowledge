/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 实例化m个数组，fill默认值是0，就是从0开始，替换数组的项，
    const dp = Array(m).fill().map(item => Array(n))
    // 处理纵向所有初始化的值
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
        
    }
    // 处理横向所有初始化的值
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
        
    }
    // 这上边实际上就是创建了一个二维数组
    // 遍历
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
            
        }
    }
    return dp[m-1][n-1]
};
// @lc code=end

