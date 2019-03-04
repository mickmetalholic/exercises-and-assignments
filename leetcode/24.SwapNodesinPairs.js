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
function swapPairs(head) {
  if (!head || !head.next) return head;

  const newHead = head.next;
  let p1 = head, p2 = p1.next;
  while (p2) {
    const { next } = p2;
    p2.next = p1;
    p1.next = next && (next.next ? next.next : next);
    p1 = next;
    p2 = next && next.next;
  }

  return newHead;
}
