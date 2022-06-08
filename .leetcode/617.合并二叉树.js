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
var mergeTrees = function (root1, root2) {
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
// 迭代方法---队列方法：模拟层序遍历
var mergeTrees = function (root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    const queue = [];
    queue.push(root1);
    queue.push(root2);
    while (queue.length) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        // 这里永远都不会为空，则直接相加
        node1.val += node2.val;
        // 如果树1，2左右子节点都不为空，则继续插入队列中
        if (node1.left !== null && node2.left !== null) {
            queue.push(node1.left);
            queue.push(node2.left);
        }
        if (node1.right !== null && node2.right !== null) {
            queue.push(node1.right);
            queue.push(node2.right);
        }
        // 如果树1、2左右子节点有一个为空，则赋值过去
        if (node1.left === null && node2.left !== null) {
            node1.left = node2.left
        }
        if (node1.right === null && node2.right !== null) {
            node1.right = node2.right;
        }
    }
    return root1;
}
// 迭代方法---栈方法：模拟前序遍历
var mergeTrees = function (root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    const stack = [];
    // 栈是先进后出
    stack.push(root2);
    stack.push(root1);
    while (stack.length) {
        // 这里永远都不会为空，则直接相加
        let node1 = stack.pop();
        let node2 = stack.pop();
        node1.val += node2.val;
        // 如果树1，2左右子节点都不为空，则继续插入队列中
        if (node1.left !== null && node2.left !== null) {
            stack.push(node2.left);
            stack.push(node1.left);
        }
        if (node1.right !== null && node2.right !== null) {
            stack.push(node2.right);
            stack.push(node1.right);
        }
        // 如果树1、2左右子节点有一个为空，则赋值过去
        if (node1.left === null && node2.left !== null) {
            node1.left = node2.left
        }
        if (node1.right === null && node2.right !== null) {
            node1.right = node2.right;
        }
    }
    return root1;
}
// @lc code=end

