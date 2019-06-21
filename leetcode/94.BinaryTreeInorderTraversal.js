/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
    if(root === null) {
        return [];
    }
    const stack = [];
    const result = [];
    stack.push(root);
    let node;
    while(stack.length) {
        node = stack.pop();
        if(node.right !== null && node.right !== undefined) {
            stack.push(node.right);
        }
        if(node.left !== null && node.left !== undefined) {
            stack.push(node.val);
            stack.push(node.left);
        } else {
            result.push(node.val === undefined ? node : node.val);
        }
    }
    return result;
};