/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  if (!root) return '';
  if (!root.left && !root.right) {
    return `${root.val}`;
  } else if (root.left && !root.right) {
    return `${root.val}-${serialize(root.left)}`;
  } else {
    return `${root.val}-${serialize(root.left)}-${serialize(root.right)}`;
  }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  if (data === '') return null;

  const nodes = data.split('-');
  const rootVal = Number(nodes[0]);
  const root = new TreeNode(rootVal);
  let left = 1;
  while (left < nodes.length && (nodes[left] === '' || Number(nodes[left]) < rootVal)) {
    left++;
  }
  if (left > 1) {
    root.left = deserialize(nodes.slice(1, left).join('-'));
  }
  if (left < nodes.length) {
    root.right = deserialize(nodes.slice(left).join('-'));
  }
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
