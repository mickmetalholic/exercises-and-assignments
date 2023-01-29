/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween (head: ListNode | null, left: number, right: number): ListNode | null {
  const dummyHead = new ListNode()
  dummyHead.next = head

  let index = 0
  let leftNode: ListNode | null = dummyHead
  while (leftNode !== null && index < left - 1) {
    leftNode = leftNode.next
    index++
  }

  if (leftNode === null || leftNode.next === null) {
    return head
  }

  const betweenTail = leftNode.next
  index++
  let p1: ListNode | null = betweenTail
  let p2: ListNode | null = null
  while (p1 !== null && index <= right) {
    const next = p1.next
    p1.next = p2
    p2 = p1
    p1 = next
    index++
  }

  leftNode.next = p2
  betweenTail.next = p1

  return dummyHead.next
}
// @lc code=end
