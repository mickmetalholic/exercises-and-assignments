/**
 * @param root: The root of binary tree.
 * @return: True if the binary tree is BST, or false
 */
function isValidBST (root) {
  return _isValid(root).isValid;

  function _isValid(node) {
    if (!node) return { isValid: true, min: null, max: null };

    const { isValid: isLeftValid, min: leftMin, max: leftMax } = _isValid(node.left);
    const { isValid: isRightValid, min: rightMin, max: rightMax } = _isValid(node.right);

    let isValid = isLeftValid && isRightValid
      && (leftMax === null || leftMax < node.val)
      && (rightMin === null || rightMin > node.val);

    const min = leftMin === null ? node.val : leftMin;
    const max = rightMax === null ? node.val : rightMax;
    return { isValid, min, max };
  }
}
