/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function(root) {
    let res = []; // 最终返回结果集
    if (!root) return res;
    const stack = [root]; // 初始化根节点直接插入模拟栈
    let cur = null;
    while (stack.length) {
        // 指针指向栈顶
        cur = stack.pop();
        res.push(cur.val);
        let nodes = cur.children;
        // 遍历所有子节点
        for (let i = 0; i < nodes.length; i++) {
            nodes[i] && stack.push(nodes[i]);
        }
    }
    return res.reverse();
};
// @lc code=end

