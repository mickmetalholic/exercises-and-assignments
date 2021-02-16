/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (preorder.length === 0) return null;

  const root = preorder[0];
  const rootNode = new TreeNode(root);

  const leftLength = inorder.indexOf(root);
  rootNode.left = buildTree(preorder.slice(1, 1 + leftLength), inorder.slice(0, leftLength));
  rootNode.right = buildTree(preorder.slice(1 + leftLength), inorder.slice(1 + leftLength));

  return rootNode;
}
