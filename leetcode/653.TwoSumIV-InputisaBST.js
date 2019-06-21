/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
  const inOrder = root => {
    if(root === null) { return; }
    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
  }
  const arr = [];
  inOrder(root);
  let i = 0, j = arr.length - 1;
  while(i < j) {
    if(arr[i] + arr[j] < k) {
      i++;
    } else if(arr[i] + arr[j] > k) {
      j--;
    } else {
      return true;
    }
  }
  return false;
};