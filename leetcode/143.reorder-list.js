/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  if (!head || !head.next || !head.next.next) return head;

  const stack = [];
  let node = head;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let cur = head;
  const length = stack.length;
  for (let i = 0; i < Math.floor((length - 1) / 2); i++) {
    const next = cur.next;
    const newNext = stack.pop();
    cur.next = newNext;
    newNext.next = next;
    cur = next;
  }
  if (length % 2) {
    cur.next = null;
  } else {
    cur.next.next = null;
  }
}
