/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // // 新建虚拟节点，避免处理头结点特殊情况;快慢指针都指向虚拟节点
    let ret = new ListNode(0, head),
        fast = ret,
        slow = ret;
    // 快指针指向第n个节点
    while (n--) fast = fast.next;
    // 如果第n个元素是null,就是超出链表长度，直接返回头结点
    if (!fast) return ret.next;
    // 否则继续走，快慢指针一起，直到快指针指向null,慢指针后边的就是要删除的节点
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return ret.next;
};
// @lc code=end