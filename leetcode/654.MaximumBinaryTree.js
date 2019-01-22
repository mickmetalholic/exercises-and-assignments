/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
  if (nums.length === 0) {
    return null;
  }
  const maxIndex = nums.reduce((maxIndex, e, index, arr) =>
    arr[maxIndex] < e ? index : maxIndex, 0);
  const root = new TreeNode(nums[maxIndex]);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return root;
};
