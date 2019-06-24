/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  let newHead = head;
  while (newHead && newHead.val === val) {
    newHead = newHead.next;
  }

  let p = newHead;
  while (p) {
    if (p.next && p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return newHead;
}
