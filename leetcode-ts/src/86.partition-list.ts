/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
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

function partition (head: ListNode | null, x: number): ListNode | null {
  const head1 = new ListNode()
  const head2 = new ListNode()

  let node = head
  let node1 = head1
  let node2 = head2
  while (node !== null) {
    if (node.val < x) {
      node1.next = node
      node1 = node1.next
    } else {
      node2.next = node
      node2 = node2.next
    }
    node = node.next
  }

  node1.next = head2.next
  node2.next = null

  return head1.next
}
// @lc code=end
