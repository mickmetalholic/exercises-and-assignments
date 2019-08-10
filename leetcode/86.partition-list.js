/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  const small = new ListNode(), large = new ListNode();
  let node = head, p1 = small, p2 = large;
  while (node) {
    if (node.val < x) {
      p1.next = node;
      p1 = node;
    } else {
      p2.next = node;
      p2 = node;
    }
    const next = node.next;
    node.next = null;
    node = next;
  }
  p1.next = large.next;
  return small.next;
}
