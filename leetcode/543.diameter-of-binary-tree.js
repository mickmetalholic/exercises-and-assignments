/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  if (!root) return 0;

  let res = 0;
  postOrder(root);
  return res;

  function postOrder(node) {
    if (!node) return 0;
    const heightLeft = postOrder(node.left);
    const heightRight = postOrder(node.right);
    res = Math.max(res, heightLeft + heightRight);
    return 1 + Math.max(heightLeft, heightRight);
  }
}
// @lc code=end
