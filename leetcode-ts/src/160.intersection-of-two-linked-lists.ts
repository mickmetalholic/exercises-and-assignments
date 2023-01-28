/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode (headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let lengthA = 0
  let nodeA = headA
  while (nodeA !== null) {
    lengthA++
    nodeA = nodeA.next
  }

  let lengthB = 0
  let nodeB = headB
  while (nodeB !== null) {
    lengthB++
    nodeB = nodeB.next
  }

  nodeA = headA
  nodeB = headB
  if (lengthA > lengthB) {
    let diff = lengthA - lengthB
    while (nodeA !== null && diff > 0) {
      nodeA = nodeA.next
      diff--
    }
  } else {
    let diff = lengthB - lengthA
    while (nodeB !== null && diff > 0) {
      nodeB = nodeB.next
      diff--
    }
  }

  while (nodeA !== null && nodeB !== null && nodeA !== nodeB) {
    nodeA = nodeA.next
    nodeB = nodeB.next
  }

  return nodeA
}
// @lc code=end
