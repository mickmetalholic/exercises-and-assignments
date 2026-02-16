class ListNode {
  val: number;
  next: ListNode | null;
  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

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

/**
 * solution 1
 */
// function hasCycle (head: ListNode | null): boolean {
//   const nodeSet = new Set();

//   let p = head;
//   while (p !== null) {
//     if (nodeSet.has(p)) {
//       return true;
//     }

//     nodeSet.add(p);
//     p = p.next;
//   }

//   return false;
// }

/**
 * solution 2
 */
function hasCycle (head: ListNode | null): boolean {
  let p1 = head?.next ?? null;
  let p2 = head?.next?.next ?? null;

  while (p2 !== null) {
    if (p1 === p2) {
      return true;
    }
    p1 = p1?.next ?? null;
    p2 = p2?.next?.next ?? null;
  }

  return false;
}
