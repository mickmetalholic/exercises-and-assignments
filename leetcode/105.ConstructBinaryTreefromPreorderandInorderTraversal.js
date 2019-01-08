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
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null;

  const rootVal = preorder[0];

  const rootIndex = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  const root = new TreeNode(rootVal);
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};