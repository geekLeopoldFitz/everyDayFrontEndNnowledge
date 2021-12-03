/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


var getListLen = function (head) {
    let len = 0,
        cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    return len
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let curA = headA,
        curB = headB,
        lenA = getListLen(headA),
        lenB = getListLen(headB);
    // 让curA为最长链表的头，lenA为其长度
    if (lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    // 求长度差
    let i = lenA - lenB;
    // 让curA和curB在同一起点上（末尾位置对齐）
    while (i-- > 0) {
        curA = curA.next;
    }
    // 遍历curA 和 curB，遇到相同则直接返回
    while (curA && curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA
};