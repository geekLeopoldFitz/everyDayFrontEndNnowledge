/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length // 纵列长度
    const n = obstacleGrid[0].length // 横列长度
    // 生成二维数组，同时每一项默认是设为走到走后的方法数为0
    const dp = Array(m).fill().map(item => Array(n).fill(0))
    // 纵列数据赋值
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1
        
    }
    // 横列数据赋值
    for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1
        
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
// @lc code=end

