/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  if (inorder.length === 0) return null;

  const rootVal = postorder[postorder.length - 1];
  const res = new TreeNode(rootVal);

  const rootIndex = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndex);
  const leftPostorder = postorder.slice(0, leftInorder.length);
  res.left = buildTree(leftInorder, leftPostorder);

  const rightInorder = inorder.slice(rootIndex + 1);
  const rightPostorder = postorder.slice(leftInorder.length, -1);
  res.right = buildTree(rightInorder, rightPostorder);

  return res;
}
