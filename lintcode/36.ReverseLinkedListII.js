/**
 * @param head: ListNode head is the head of the linked list 
 * @param m: An integer
 * @param n: An integer
 * @return: The head of the reversed ListNode
 */
function reverseBetween(head, m, n) {
  if (!head || !head.next || m === n) return head;

  const dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead;
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }
  let p1 = prev.next, p2 = p1.next, p3 = p1.next.next;
  for (let i = 0; i < n - m; i++) {
    p2.next = p1;
    p1 = p2;
    p2 = p3;
    p3 = p3 && p3.next;
  }
  prev.next.next = p2;
  prev.next = p1;
  return dummyHead.next;
}
