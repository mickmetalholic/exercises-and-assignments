/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd (head, n) {
  let p1 = head, p2 = head;
  while (n > 0) {
    p2 = p2.next;
    n--;
  }

  if (p2) {
    p2 = p2.next;
    while (p2) {
      p1 = p1.next;
      p2 = p2.next;
    }
    p1.next = p1.next.next;
    return head;
  } else {
    // should remove head
    return head.next;
  }
};
