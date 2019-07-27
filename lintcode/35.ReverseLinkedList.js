/**
 * @param head: n
 * @return: The new head of reversed linked list.
 */
function reverse(head) {
  if (!head || !head.next) return head;

  let p1 = head, p2 = head.next, p3 = head.next.next;
  p1.next = null;
  while (p2) {
    p2.next = p1;
    p1 = p2;
    p2 = p3;
    p3 = p3 && p3.next;
  }
  return p1;
}
