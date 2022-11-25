/*
 * @lc app=leetcode id=938 lang=typescript
 *
 * [938] Range Sum of BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rangeSumBST (root: TreeNode | null, low: number, high: number): number {
  if (root == null) {
    return 0
  }

  const { val, left, right } = root

  if (val < low) {
    return rangeSumBST(right, low, high)
  } else if (val <= high) {
    return rangeSumBST(left, low, high) + val + rangeSumBST(right, low, high)
  } else {
    return rangeSumBST(left, low, high)
  }
}
// @lc code=end
