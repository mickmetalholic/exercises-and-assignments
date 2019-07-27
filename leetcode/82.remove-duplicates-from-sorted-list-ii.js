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
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead;
  while (prev.next && prev.next.next) {
    let cur = prev.next;
    const val = cur.val;
    if (cur.next.val === val) {
      while (cur && cur.val === val) {
        cur = cur.next;
      }
      prev.next = cur;
    } else {
      prev = cur;
    }
  }
  return dummyHead.next;
}
