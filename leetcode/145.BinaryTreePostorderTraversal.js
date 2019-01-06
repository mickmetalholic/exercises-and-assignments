/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = root => {
  if (!root) return [];
  return [].concat(
    postorderTraversal(root.left),
    postorderTraversal(root.right),
    root.val
  );
};