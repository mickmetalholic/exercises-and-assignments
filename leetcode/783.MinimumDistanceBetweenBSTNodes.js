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
const maxVal = root =>
    root.right !== null ? maxVal(root.right) : root.val;

const minVal = root =>
    root.left !== null ? minVal(root.left) : root.val;

const minDiffInBST = root => {
    if(root.left === null && root.right === null) {
        return null;
    }
    const diffs = [];
    if(root.left !== null) {
        diffs.push(root.val - maxVal(root.left));
        diffs.push(minDiffInBST(root.left));
    }
    if(root.right !== null) {
        diffs.push(minVal(root.right) - root.val);
        diffs.push(minDiffInBST(root.right));
    }
    return Math.min(...diffs.filter(d => d !== null));
};