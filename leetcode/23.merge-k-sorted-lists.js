/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  lists = lists.filter(e => e !== null)
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const heap = [];
  for (const head of lists) {
    insert(head);
  }
  const res = heap[0];
  let cur = res;
  while (heap.length) {
    cur.next = pop();
    cur = cur.next;
  }
  return res;

  function insert(node) {
    heap.push(node);
    let curIndex = heap.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (node.val < heap[parentIndex].val) {
        heap[curIndex] = heap[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = node;
  }

  function pop() {
    const res = heap[0];
    const newNode = res.next || heap.pop();
    if (heap.length === 0) return res;

    let curIndex = 0;
    while (curIndex * 2 + 1 < heap.length) {
      let minIndex = curIndex * 2 + 1;
      if (
        minIndex + 1 < heap.length
        && heap[minIndex + 1].val < heap[minIndex].val
      ) {
        minIndex++;
      }
      if (heap[minIndex].val < newNode.val) {
        heap[curIndex] = heap[minIndex];
        curIndex = minIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = newNode;
    return res;
  }
}
