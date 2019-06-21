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
const preorderTraversal = root => {
    if(root === null) { return []; }
    const result = [];
    const stack = [];
    stack.push(root);
    let node;
    while(stack.length !== 0) {
        node = stack.pop();
        result.push(node.val);
        if(node.right) { stack.push(node.right); }
        if(node.left) { stack.push(node.left); }
    }
    return result;
};