/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 递归解法 --- 深度方式
/* var preorder = function (root) {
    let res = []; // 最终返回结果集
    // 确定递归函数的参数和返回值
    const traverse = function (root) {
        // 终止条件
        if (root === null) return;
        let nodes = root.children;
        res.push(root.val);
        nodes.forEach(item => {
            traverse(item);
        });
    }
    traverse(root);
    return res;
}; */

// 迭代解法 --- 深度方式（模拟栈）
var preorder = function (root) {
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
        for (let i = nodes.length; i > 0; i--) {
            nodes[i - 1] && stack.push(nodes[i - 1]);
        }
    }
    return res;
};
// @lc code=end

