/*
 * @lc app=leetcode id=382 lang=javascript
 *
 * [382] Linked List Random Node
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
class Solution {
  constructor(head) {
    const nodes = [];
    let node = head;
    while (node) {
      nodes.push(node);
      node = node.next;
    }
    this._nodes = nodes;
  }
  /**
   * Returns a random node's value.
   * @return {number}
   */
  getRandom() {
    const index = Math.floor(Math.random() * this._nodes.length);
    return this._nodes[index].val;
  }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
