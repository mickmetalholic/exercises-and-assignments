/*
 * @lc app=leetcode id=337 lang=typescript
 *
 * [337] House Robber III
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

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

function rob (root: TreeNode | null): number {
  const dp1 = new Map()
  const dp2 = new Map()
  return Math.max(
    _robCurrentNode(root),
    _notRobCurrentNode(root)
  )

  function _robCurrentNode (node: TreeNode | null): number {
    if (node === null) {
      return 0
    }
    if (dp1.has(node)) {
      return dp1.get(node)
    }
    const { val, left, right } = node
    const res = val + _notRobCurrentNode(left) + _notRobCurrentNode(right)
    dp1.set(node, res)
    return res
  }

  function _notRobCurrentNode (node: TreeNode | null): number {
    if (node === null) {
      return 0
    }
    if (dp2.has(node)) {
      return dp2.get(node)
    }
    const { left, right } = node
    const res = Math.max(
      _robCurrentNode(left),
      _notRobCurrentNode(left)
    ) + Math.max(
      _robCurrentNode(right),
      _notRobCurrentNode(right)
    )
    dp2.set(node, res)
    return res
  }
}
// @lc code=end
