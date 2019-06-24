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
const findTilt = root => {
  const getTiltAndSum = node => {
    if(node === null) {
      return { tilt: 0, sum: 0 };
    }
    const leftTiltAndSum = getTiltAndSum(node.left);
    const rightTiltAndSum = getTiltAndSum(node.right);
    return {
      tilt: leftTiltAndSum.tilt + rightTiltAndSum.tilt + Math.abs(leftTiltAndSum.sum - rightTiltAndSum.sum),
      sum: leftTiltAndSum.sum + rightTiltAndSum.sum + node.val
    };
  }
  
  
  return getTiltAndSum(root).tilt;
};