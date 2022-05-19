/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
// 解法1：递归法
var sumOfLeftLeaves = function (root) {
    // 递归三部曲
    // 1: 确认递归函数的参数和返回值---后序遍历
    const nodesSum = function (node) {
        // 2：确定终止条件
        if (node === null) return 0;
        // 3：确定单层递归条件
        let leftSums = sumOfLeftLeaves(node.left); // 左
        let rightSums = sumOfLeftLeaves(node.right); // 右
        let midvalue = 0;
        if (node.left && node.left.left === null && node.left.right === null) {
            midvalue = node.left.val;
        }
        let sum = midvalue + leftSums + rightSums;
        return sum;
    }
    return nodesSum(root);
};

// 解法2：广度优先遍历---层序遍历（模拟队列思想）
var sumOfLeftLeaves = function (root) {
    // 如果根节点为空，则直接返回
    if (!root) return null;
    let queue = [root]; // 模拟队列
    let sum = 0; // 左子树的和
    while (queue.length) {
        let node = queue.shift();
        if (node.left && node.left.left === null && node.left.right === null) {
            sum += node.left.val;
        }
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return sum;
}

// 解法2：深度优先遍历---后序遍历（模拟栈思想）
var sumOfLeftLeaves = function (root) {
    // 如果根节点为空，则直接返回
    if (!root) return null;
    let stack = [root]; // 模拟队列
    let sum = 0; // 左子树的和
    while (stack.length) {
        let node = stack.pop();
        if (node.left && node.left.left === null && node.left.right === null) {
            sum += node.left.val;
        }
        node.left && stack.push(node.right);
        node.right && stack.push(node.left);
    }
    return sum;
}
// @lc code=end

