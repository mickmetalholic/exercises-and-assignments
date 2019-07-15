/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) return null;

  const dummyHead = new ListNode();
  dummyHead.next = head;

  let node = dummyHead;
  while (node && node.next && node.next.next) {
    let cur = node.next, curVal = cur.val;
    if (cur.val === cur.next.val) {
      do {
        cur = cur.next;
      } while (cur && curVal === cur.val)
      node.next = cur;
    } else {
      node = node.next;
    }
  }
  return dummyHead.next;
}
