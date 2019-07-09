/**
 * @param root: The root of binary tree.
 * @return: True if the binary tree is BST, or false
 */
function isValidBST (root) {
  if (!root) return true;
  const { isValid } = _isValidBST(root);
  return isValid;

  function _isValidBST(node) {
    let isValid = true, max = node.val, min = node.val;
    if (isValid && node.left) {
      const { max: leftMax, min: leftMin, isValid: isLeftValid } = _isValidBST(node.left);
      isValid = isValid && isLeftValid && (node.val > leftMax);
      min = leftMin;
    }
    if (isValid && node.right) {
      const { max: rightMax, min: rightMin, isValid: isRightValid } = _isValidBST(node.right);
      isValid = isValid && isRightValid && (node.val < rightMin);
      max = rightMax;
    }
    return { isValid, max, min };
  }
}
