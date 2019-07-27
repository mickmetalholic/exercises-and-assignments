/**
 * @param root: The root of binary tree.
 * @return: True if this Binary tree is Balanced, or false.
 */
function isBalanced(root) {
  return _isBalanced(root).isBalanced;

  function _isBalanced(node) {
    if (!node) return { isBalanced: true, height: 0 };

    const { isBalanced: isLeftBalanced, height: leftHeight } = _isBalanced(node.left);
    const { isBalanced: isRightBalanced, height: rightHeight } = _isBalanced(node.right);

    return {
      isBalanced: isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1,
      height: Math.max(leftHeight, rightHeight) + 1,
    };
  }
}
