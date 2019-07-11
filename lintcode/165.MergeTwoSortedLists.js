/**
 * @param l1: ListNode l1 is the head of the linked list
 * @param l2: ListNode l2 is the head of the linked list
 * @return: ListNode head of linked list
 */
function mergeTwoLists (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }

  let head1 = l1, head2 = l2;
  let res, cur;
  if (head1.val < head2.val) {
    res = head1;
    head1 = head1.next;
  } else {
    res = head2;
    head2 = head2.next;
  }
  cur = res;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      cur.next = head1;
      head1 = head1.next;
    } else {
      cur.next = head2;
      head2 = head2.next;
    }
    cur = cur.next;
  }
  if (head1) {
    cur.next = head1;
  } else if (head2) {
    cur.next = head2;
  }
  return res;
}
