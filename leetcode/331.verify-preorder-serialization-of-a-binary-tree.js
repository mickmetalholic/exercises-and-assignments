/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */
/**
 * @param {string} preorder
 * @return {boolean}
 */
function isValidSerialization(preorder) {
  const preorderArr = preorder.split(',');

  const stack = [];
  for (const node of preorderArr) {
    if (stack.length > 0 && stack[0] === '#') return false;
    if (node === '#') {
      stack.push('#');
      while (
        stack.length >= 3
        && stack[stack.length - 1] === '#'
        && stack[stack.length - 2] === '#'
      ) {
        // pop the null node
        stack.pop();
        stack.pop();
        // pop the leaf node
        stack.pop();
        // mark as a handled node
        stack.push('#');
      }
    } else {
      stack.push(node);
    }
  }
  return stack.length === 1 && stack[0] === '#';
}
