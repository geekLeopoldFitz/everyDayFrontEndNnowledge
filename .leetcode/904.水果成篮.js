/*
 * @Author: LeoFitz
 * @Date: 2021-08-31 11:28:24
 * @LastEditTime: 2021-09-10 10:28:54
 * @Description: 
 * @FilePath: \everyDayFrontEndNnowledgec:\Users\sundan\.leetcode\904.水果成篮.js
 */
/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (tree) {
    let i = 0,
        result = 0
    // 这里使用Map数据结构，能够解决对象无序的问题
    let fruit = new Map()
    for (let j = 0; j < tree.length; j++) {
        let fruitJ = fruit.get(tree[j])
        if (fruitJ) {
            fruit.set(tree[j], ++fruitJ)
        } else {
            fruit.set(tree[j], 1)
        }
        while (fruit.size > 2) {
            // 满足窗口滑动的条件则移动左边界
            let fruitI = fruit.get(tree[i])
            fruit.set(tree[i], --fruitI)
            if (fruit.get(tree[i]) === 0) {
                fruit.delete(tree[i])
            }
            i++
        }
        result = Math.max(j - i + 1, result)
    }
    return result
}
// @lc code=end