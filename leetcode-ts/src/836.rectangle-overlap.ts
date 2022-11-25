/*
 * @lc app=leetcode id=836 lang=typescript
 *
 * [836] Rectangle Overlap
 */

// @lc code=start
function isRectangleOverlap (rec1: number[], rec2: number[]): boolean {
  const [x11, y11, x12, y12] = rec1
  const [x21, y21, x22, y22] = rec2

  if (
    (x12 <= x21) ||
    (x11 >= x22) ||
    (y12 <= y21) ||
    (y11 >= y22)
  ) {
    return false
  }

  return true
}
// @lc code=end
