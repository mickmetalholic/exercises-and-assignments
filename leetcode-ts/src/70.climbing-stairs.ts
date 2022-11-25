/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function climbStairs (n: number): number {
  let last = 1
  let current = 1

  if (n === 1) {
    return 1
  }

  for (let i = 2; i <= n; i++) {
    const _last = last
    last = current
    current = _last + last
  }

  return current
}
// @lc code=end
