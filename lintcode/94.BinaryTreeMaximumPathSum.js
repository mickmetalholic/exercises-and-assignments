/**
 * @param root: The root of binary tree.
 * @return: An integer
 */
function maxPathSum(root) {
  if (!root) return 0;

  const { pathSum } = getSum(root);
  return pathSum;

  function getSum(node) {
    if (!node) return { pathSum: null, nodeToLeafSum: null };

    const { pathSum: leftPathSum, nodeToLeafSum: leftNodeToLeafSum } = getSum(node.left);
    const { pathSum: rightPathSum, nodeToLeafSum: rightNodeToLeafSum } = getSum(node.right);
    
    let maxChildNodeToLeafSum = null, pathSum = node.val;
    if (leftNodeToLeafSum !== null && leftNodeToLeafSum > 0) {
      pathSum += leftNodeToLeafSum;
      maxChildNodeToLeafSum = leftNodeToLeafSum;
    }
    if (rightNodeToLeafSum !== null && rightNodeToLeafSum > 0) {
      pathSum += rightNodeToLeafSum;
      maxChildNodeToLeafSum = Math.max(maxChildNodeToLeafSum, rightNodeToLeafSum);
    }
    const nodeToLeafSum = (maxChildNodeToLeafSum === null ? 0 : maxChildNodeToLeafSum) + node.val;

    if (leftPathSum !== null && leftPathSum > pathSum) {
      pathSum = leftPathSum;
    }
    if (rightPathSum !== null && rightPathSum > pathSum) {
      pathSum = rightPathSum;
    }
    return { pathSum, nodeToLeafSum };
  }
}
