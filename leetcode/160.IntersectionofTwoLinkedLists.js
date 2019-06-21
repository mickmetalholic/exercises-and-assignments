/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  let pA = headA, lengthA = 0;
  while (pA) {
    lengthA++;
    pA = pA.next;
  }
  let pB = headB, lengthB = 0;
  while (pB) {
    lengthB++;
    pB = pB.next;
  }

  const diff = lengthA - lengthB;
  pA = headA;
  pB = headB;
  for (let i = 0; i < diff; i++) {
    pA = pA.next;
  }
  for (let i = 0; i < -diff; i++) {
    pB = pB.next;
  }

  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
}
