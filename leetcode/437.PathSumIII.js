/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
  if(root === null) { return 0; }
  return getPathsCount(root, sum) + 
    pathSum(root.left, sum) +
    pathSum(root.right, sum);
};

// get number of paths that start with current node
function getPathsCount(node, diff) {
  if(node === null) { return 0; }
  return (node.val === diff ? 1 : 0) +
    getPathsCount(node.left, diff - node.val) +
    getPathsCount(node.right, diff - node.val);
};