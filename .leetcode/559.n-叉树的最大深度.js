/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
// 解法1：广度：层序遍历方法
var maxDepth = function (root) {
    let maxDepth = 0;
    let queue = [root];
    if (!root) return maxDepth;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            node.children.forEach(item => {
                queue.push(item)
            });
        }
        maxDepth++;
    }
    return maxDepth;
};
// 解法2：递归
var maxDepth = function (root) {
    // 1：确定递归参数和返回值
    const getDepth = function (node) {
        // 2: 确认终止条件
        if (node === null) {
            return 0
        }
        let depth = 0; //二叉树深度
        // 3:确认单层递归逻辑
        for (let each of node.children) {
            depth = Math.max(depth, maxDepth(each))
        }
        return 1 + depth;
    }
    return getDepth(root);

}

// 解法2：递归简写
var maxDepth = function (root) {
    if (!root) return 0;
    let depth = 0; //二叉树深度
    // 3:确认单层递归逻辑
    for (let node of root.children) {
        depth = Math.max(depth, maxDepth(node))
    }
    return 1 + depth;

}
// @lc code=end

