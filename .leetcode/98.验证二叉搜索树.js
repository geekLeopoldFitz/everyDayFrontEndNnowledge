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
        // 访问左子树
        getterTree(node.left);
        // 访问当前节点：如果当前节点小于等于中序遍历的前一个节点，说明不满足BST，返回 false；否则继续遍历。
        arr.push(node.val);
        // 访问右子树
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
// 迭代方法，模拟中序遍历 --- 左中右
var isValidBST = function (root) {
    const stack = []; // 模拟栈
    let pre = -Infinity; // 记录上一个节点
    while (root !== null || stack.length > 0) {
        // 左子树
        while (root !== null) {
            stack.push(root);
            root = root.left; // 一直往左节点找，直到null
        }
        // 中
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= pre) {
            return false;
        }
        pre = root.val;
        root = root.right;
    }
    return true;
}
// @lc code=end

