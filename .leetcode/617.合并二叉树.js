/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 递归解法---前序遍历（中、左、右）
var mergeTrees = function(root1, root2) {
    // 递归三部曲
    // 1.确定参数和返回值
    const buildTree = function (tree1, tree2) {
        // 2：确定终止条件
        // 如果树1为空，则返回树2
        if (tree1 === null) return tree2;
        // 如果树2为空，则返回树1
        if (tree2 === null) return tree1;
        // 如果树1、2都为空，则就返回空，不用做特殊处理
        // 3：确认单层递归条件
        tree1.val += tree2.val;
        tree1.left = buildTree(tree1.left, tree2.left);
        tree1.right = buildTree(tree1.right, tree2.right);
        return tree1;
    }
    return buildTree(root1, root2);
};
// @lc code=end

