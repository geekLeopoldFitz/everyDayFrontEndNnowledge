/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // 设置一个虚拟头结点在进行移除节点操作
    const ret = new ListNode(0, head) // 新增虚拟头部的链表
    //  当前链表位置
    let cur = ret
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
            continue
        }
        cur = cur.next
    }
    return ret.next
};
// @lc code=end