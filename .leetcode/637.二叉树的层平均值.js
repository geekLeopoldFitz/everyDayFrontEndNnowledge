/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 * @desc 算出每层的平均值，每层和处以数量长度9
 */
var averageOfLevels = function (root) {
    let res = [], queue = []; // 每层平均值结果集，队列集
    queue.push(root); // 第一层就root,直接插入
    if (!root) return res; // 为空就不进行其他操作
    while (queue.length !== 0) {
        let length = queue.length; // 队列长度
        let sum = 0; // 一层的数据和
        for (let i = 0; i < length; i++) {
            let node = queue.shift(); // 队列先进先出，所有弹出队列第一个节点
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(sum / length);
    }
    return res
};
// @lc code=end

