/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = t => {
  if(t === null) { return ''; }
  const cur = `${t.val}`;
  const left = `${tree2str(t.left)}`;
  const right = `${tree2str(t.right)}`;
  if(left === '' && right === '') {
    return `${cur}`;
  } else if(right !== '') {
    return `${cur}(${left})(${right})`;
  } else {
    return `${cur}(${left})`;
  }
};