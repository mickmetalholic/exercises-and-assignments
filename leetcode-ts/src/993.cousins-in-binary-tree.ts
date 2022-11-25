/*
 * @lc app=leetcode id=993 lang=typescript
 *
 * [993] Cousins in Binary Tree
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

function isCousins (root: TreeNode | null, x: number, y: number): boolean {
  if (root === null) {
    return false
  }

  let currentLevel: TreeNode[] = [root]
  let nextLevel: TreeNode[] = []
  while (currentLevel.length > 0) {
    let hasX = false
    let hasY = false

    for (const node of currentLevel) {
      if (
        (node.left?.val === x && node.right?.val === y) ||
        (node.right?.val === x && node.left?.val === y)
      ) {
        return false
      }

      if (node.val === x) {
        hasX = true
      }
      if (node.val === y) {
        hasY = true
      }

      node.left !== null && nextLevel.push(node.left)
      node.right !== null && nextLevel.push(node.right)
    }

    if ((hasX && !hasY) || (!hasX && hasY)) {
      return false
    }
    if (hasX && hasY) {
      return true
    }

    currentLevel = nextLevel
    nextLevel = []
  }

  return false
}
// @lc code=end
