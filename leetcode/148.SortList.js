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
function sortList(head) {
  if (!head || !head.next) return head;

  let p1 = head, p2 = head.next;
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next && p2.next.next;
  }

  const right = sortList(p1.next);
  p1.next = null;
  const left = sortList(head);

  let r = right, l = left, res;
  if (r.val > l.val) {
    res = l;
    l = l.next;
  } else {
    res = r;
    r = r.next;
  }
  let p = res;
  while (r && l) {
    if (r.val > l.val) {
      p = p.next = l;
      l = l.next;
    } else {
      p = p.next = r;
      r = r.next;
    }
  }
  while (l) {
    p = p.next = l;
    l = l.next;
  }
  while (r) {
    p = p.next = r;
    r = r.next;
  }
  return res;
}
