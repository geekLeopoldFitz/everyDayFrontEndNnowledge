/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // 解题思路：每一层单独放入一个数组，最后再插入结果集
    // 需要注意的是：这里是n个节点，所以不止左右节点
    let res = [], queue = [];
    queue.push(root);
    if (!root) return res;
    while (queue.length !== 0) {
        let length = queue.length;
        let curLevel = []; // 每一层的数组合集
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 因为这里子节点数是n,不止左右，所有直接插入所有子节点
            queue.push(...node.children);
        }
        res.push(curLevel);
    }
    return res;
};
// @lc code=end

