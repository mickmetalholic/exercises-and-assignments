/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  if (root === null) {
    return [];
  }
  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  }
  return searchBST(root.right, val);
};
