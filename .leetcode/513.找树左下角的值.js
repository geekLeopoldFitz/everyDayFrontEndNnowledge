/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 广度优先遍历---层序遍历
var findBottomLeftValue = function (root) {
    if (!root) return null;
    let queue = [root];
    let result = null;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (i === 0) {
                result = node.val;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return result;
};

var findBottomLeftValue = function (root) {
    if (!root) return null;
    //首先考虑递归遍历 前序遍历 找到最大深度的叶子节点即可
    let maxLength = 0; // 最大深度
    let resultValue = null; // 最终值
    // 递归三部曲
    // 1：确定返回值和返回值
    const findLeftValue = function (node, curLength) {
        // 2:确定终止条件
        if (node.left === null && node.right === null) {
            if (curLength > maxLength) {
                maxLength = curLength;
                resultValue = node.val;
            }
        }
        // 确定单层递归条件
        node.left && findLeftValue(node.left, curLength + 1);
        node.right && findLeftValue(node.right, curLength + 1);
    }
    // 这里深度为什么是1?
    findLeftValue(root, 1);
    return resultValue;
}
// @lc code=end

