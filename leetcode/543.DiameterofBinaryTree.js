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
const diameterOfBinaryTree = root => {
  const postOrder = node => {
    if(node === null) {
      return {
        depth: -1,
        diameter: 0
      };
    }
    const { depth: leftDepth, diameter: leftDiameter } = postOrder(node.left);
    const { depth: rightDepth, diameter: rightDiameter } = postOrder(node.right);
    const curDiameter = leftDepth + rightDepth + 2;
    return {
      depth: Math.max(leftDepth, rightDepth) + 1,
      diameter: Math.max(curDiameter, leftDiameter, rightDiameter)
    };
  };
  return postOrder(root).diameter;
};