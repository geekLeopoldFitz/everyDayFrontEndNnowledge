/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// 递归解法
var isValidBST = function (root) {
    // 因为二叉搜索树中序遍历应该是一个递增数组
    const arr = [];
    // 递归三部曲
    // 1:确定参数和返回值
    const getterTree = function (node) {
        // 2:确定终止条件
        if (!node) return true;
        // 3:确认单层递归条件
        getterTree(node.left);
        arr.push(node.val);
        getterTree(node.right);
    }
    getterTree(root);
    for (i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false
        }
    }
    return true;
};
// @lc code=end

