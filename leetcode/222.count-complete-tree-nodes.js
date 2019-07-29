/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
 * @return {number}
 */
function countNodes(root) {
  if (!root) return 0;

  const leftHeight = _getHeight(root.left);
  const rightHeight = _getHeight(root.right);
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) + countNodes(root.right);
  } else {
    return countNodes(root.left) + Math.pow(2, rightHeight);
  }

  function _getHeight(node) {
    let n = node, height = 0;
    while (n) {
      n = n.left;
      height++;
    }
    return height;
  }
}
