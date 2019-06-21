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
const sumOfLeftLeaves = root => {
  const getSum = (node, isLeft) => {
    if(node === null) { return 0; }
    return isLeft &&
          node.left === null &&
          node.right === null ?
      node.val + getSum(node.left, true) + getSum(node.right, false) :
      getSum(node.left, true) + getSum(node.right, false);
  };
  return getSum(root, false);
};