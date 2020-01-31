/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function mergeTrees(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;

  const newTree = new TreeNode(t1.val + t2.val);
  newTree.left = mergeTrees(t1.left, t2.left);
  newTree.right = mergeTrees(t1.right, t2.right);
  return newTree;
}
// @lc code=end
