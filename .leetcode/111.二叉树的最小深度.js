/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 解法1：广度：层序遍历方法
var minDepth = function (root) {
    let depth = 0;
    let queue = [root];
    if (!root) return depth;
    while (queue.length) {
        let length = queue.length;
        depth++;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            // 如果左右节点有一个是null，则该节点深度最小
            if (node.left === null && node.right === null) {
                return depth;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return depth;
};

// 解法2：迭代
var minDepth = function (root) {
    // 1：确定递归参数和返回值
    const getDepth = function (node) {
        // 2: 确认终止条件
        if (node === null) {
            return 0
        }
        // 3: 确认单层递归逻辑
        if (!node.left && !node.right) return 1;
        let leftDepth = getDepth(node.left);
        let rightDepth = getDepth(node.right);
        // 只有右节点，递归右节点
        if (!node.left) return 1 + rightDepth;
        // 只有左节点、递归左节点
        if (!node.right) return 1 + leftDepth;
        return depth = 1 + Math.min(leftDepth, rightDepth);
    }
    return getDepth(root);

}
// @lc code=end

