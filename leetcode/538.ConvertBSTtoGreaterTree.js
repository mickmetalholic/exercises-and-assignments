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
const convertBST = root => {
  let sum = 0
  const convertToGreaterTree = (node) => {
    if(node === null) { return; }
    convertToGreaterTree(node.right);
    node.val += sum;
    sum = node.val;
    convertToGreaterTree(node.left);
    return sum;
  };
  convertToGreaterTree(root);
  return root;
};