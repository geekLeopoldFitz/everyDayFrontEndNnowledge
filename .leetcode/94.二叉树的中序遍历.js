/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 */
/* var inorderTraversal = function (root) {
    let res = [];
    const traverse = function (root) {
        if (root === null) return;
        traverse(root.left);
        res.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    return res;
}; */

// 递归解法
// 入栈 左 -> 右
// 出栈 左 -> 中 -> 右
/**
 * 栈S;
    p= root;
    while(p || S不空){
        while(p){
            p入S;
            p = p的左子树;
        }
        p = S.pop 出栈;
        访问p;
        p = p的右子树;
    }
 */

var inorderTraversal = function (root, res = []) {
    const stack = []; // 模拟栈---先进后出
    let cur = root; // 指向根节点的指针root
    while (stack.length || cur) {
        //不断往左子树方向走，每走一次就将当前节点保存到栈中
        //这是模拟递归的调用
        // 其实这里栈很重要，因为栈里基记住了在二叉树中的位置
        // 上一个被弹出后，就执行到下一个，之后再经历找左右子节点，循环上边过程
        if (cur) {
            stack.push(cur);
            // 左
            cur = cur.left;
            //当前节点为空，说明左边走到头了，从栈中弹出节点并保存
            //然后转向右边节点，继续上面整个过程
        } else {
            // --> 弹出 中
            cur = stack.pop();
            res.push(cur.val);
            // 右
            cur = cur.right;
        }
    };
    return res;
};
const root = [1, null, 2, 3, 5, 4, 6]
inorderTraversal(root)
// @lc code=end

