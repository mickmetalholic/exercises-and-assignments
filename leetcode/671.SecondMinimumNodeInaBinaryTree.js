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
const findSecondMinimumValue = root => {
  if(
    root === null ||
    (root.left === null && root.right === null)
  ) {
    return -1;
  }
  
  let left = root.left.val;
  let right = root.right.val;
  if(root.left.val === root.right.val) {
    left = findSecondMinimumValue(root.left);
    right = findSecondMinimumValue(root.right);
    if(left === -1 && right === -1) {
      return -1;
    } else if(left === -1 && right !== -1) {
      return right;
    } else if(left !== -1 && right === -1) {
      return left;
    } else {
      return Math.min(left, right);
    }
  } else if(root.left.val === root.val) {
    left = findSecondMinimumValue(root.left);
    return left === -1 ? right : Math.min(left, right);
  } else {
    right = findSecondMinimumValue(root.right);
    return right === -1 ? left : Math.min(left, right);
  }
};