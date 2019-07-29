/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  return find(root, k).res;

  function find(node, k) {
    if (!node) return { count: 0, res: null };
    
    const { count: leftCount, res: leftRes} = find(node.left, k);
    if (leftCount + 1 === k) {
      return { count: leftCount + 1, res: node.val };
    } else if (leftCount >= k) {
      return { count: leftCount + 1, res: leftRes };
    } else if (leftCount < k) {
      const { count: rightCount, res: rightRes } = find(node.right, k - leftCount - 1);
      return { count: leftCount + 1 + rightCount, res: rightRes };
    }
  }
}
