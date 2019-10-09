/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
  if (m === n) return head;

  const dummyHead = new ListNode();
  dummyHead.next = head;

  let prev = dummyHead;
  for (let i = 0; prev && i < m - 1; i++) {
    prev = prev.next;
  }

  const first = prev.next;
  let p1 = first, p2 = p1.next, p3 = p2.next;
  // make head[i + 1] -> head[i]
  for (let i = m; i < n; i++) {
    p2.next = p1;
    p1 = p2;
    p2 = p3;
    p3 = p3 && p3.next;
  }
  // first is the new tail
  first.next = p2;
  // p1 is the new head
  prev.next = p1;

  return dummyHead.next;
}
