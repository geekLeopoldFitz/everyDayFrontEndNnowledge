/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 递归简易版本
var buildTree = function (inorder, postorder) {
    if (!inorder.length) return null;
    const rootVal = postorder.pop(); // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
    let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
    const root = new TreeNode(rootVal); // 创建中间节点
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex)); // 创建左节点
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex)); // 创建右节点
    return root;
};
// 递归完整版
var buildTree = function (inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;
    // 递归三部曲
    // 1:确认递归函数参数和返回值，参数：前后序的数组，返回值:二叉树
    const generateTree = function (before, after) {
        // 2: 确定终止条件
        if (!before.length || !after.length) return null;
        // 根节点是后续数组的最后一个元素
        const rootVal = after.pop();
        // 中序遍历根节点的左右数组就是左右子树
        let rootIndex = before.indexOf(rootVal);
        // 创建中间节点
        const root = new TreeNode(rootVal);
        // 如果之后一个元素，则直接返回，不做其他操作了
        if (root.length === 1) return root;
        // 3:确认单层递归条件
        // 创建左节点
        root.left = generateTree(before.slice(0, rootIndex), after.slice(0, rootIndex));
        // 创建右节点
        root.right = generateTree(before.slice(rootIndex + 1), after.slice(rootIndex));
        return root;
    }
    return generateTree(inorder, postorder);
};
// @lc code=end

