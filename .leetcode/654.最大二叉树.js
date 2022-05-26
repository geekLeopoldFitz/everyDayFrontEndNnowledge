/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 递归解法
var constructMaximumBinaryTree = function (nums) {
    // 递归三部曲
    // 1：确定递归函数的参数和返回值
    const buildTree = function (arr, left, right) {
        // 2:确定终止条件
        if (left > right) return null;
        let maxIndex = -1;
        let maxValue = -1;
        for (let i = left; i <= right; ++i) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        const root = new TreeNode(maxValue);
        // 确定单层递归条件
        root.left = buildTree(arr, left, maxIndex - 1);
        root.right = buildTree(arr, maxIndex + 1, right);
        return root;
    }
    return buildTree(nums, 0, nums.length - 1)
};
// @lc code=end

