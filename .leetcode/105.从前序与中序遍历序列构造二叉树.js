/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder // 前序
 * @param {number[]} inorder // 中序
 * @return {TreeNode}
 */
var buildTree = function (postorder, inorder) {
    // 如果前序为空，则无法确定根节点，所以为空
    if (!postorder.length || !inorder.length) return null;
    // 递归三部曲
    // 1:确认递归函数参数和返回值，参数：前后序的数组，返回值:二叉树
    const generateTree = function (before, middle) {
        // 2: 确定终止条件
        if (!before.length || !middle.length) return null;
        // 根节点是前续数组的第一个元素,并且从数组中删除
        const rootVal = before[0];
        // 中序遍历根节点的左右数组就是左右子树
        let rootIndex = middle.indexOf(rootVal);
        // 创建中间节点
        const root = new TreeNode(rootVal);
        if (before.length === 1) return root; // 叶子结点
        // 3:确认单层递归条件
        // 创建左节点
        root.left = generateTree(before.slice(1, rootIndex + 1), middle.slice(0, rootIndex));
        // 创建右节点
        root.right = generateTree(before.slice(rootIndex + 1), middle.slice(rootIndex + 1));
        return root;
    }
    return generateTree(postorder, inorder);
};
// @lc code=end

