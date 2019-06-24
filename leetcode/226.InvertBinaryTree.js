/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = root => {
  if(root === null) { return root; }
  const left = root.left;
  const right = root.right;
  root.left = invertTree(right);
  root.right = invertTree(left);
  return root;
};