/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针方式
var reverseList = function (head) {
    if (!head || !head.next) return head
    let temp = null,
        pre = null,
        cur = head
    while (cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre
};


// 递归写法
var reverse = function (pre, head) {
    if (!head) return pre;
    const temp = head.next; // 使用temp存储头结点的下一节点
    head.next = pre; // 反转头结点的下一节点指向上一节点
    pre = head; // 后边指针移向头结点
    return reverse(pre, temp)
}
var reverseList = function (head) {
    return reverse(null, head)
}
// @lc code=end