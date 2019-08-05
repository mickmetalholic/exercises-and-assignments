/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  return _delete(root, key);

  function _delete(node, key) {
    if (!node) return null;

    const rootVal = node.val;
    if (rootVal > key) {
      node.left = _delete(node.left, key);
      return node;
    } else if (rootVal < key) {
      node.right = _delete(node.right, key);
      return node;
    } else {
      if (node.left) {
        let maxNode = node.left, maxVal;
        while (maxNode) {
          maxVal = maxNode.val;
          maxNode = maxNode.right;
        }
        node.val = maxVal;
        node.left = _delete(node.left, maxVal);
        return node;
      } else {
        return node.right;
      }
    }
  }
}
