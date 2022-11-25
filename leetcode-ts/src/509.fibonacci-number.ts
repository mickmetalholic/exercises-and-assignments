/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib (n: number): number {
  if (n === 0) {
    return 0
  }

  let prev1 = 0
  let prev2 = 1

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2
    prev1 = prev2
    prev2 = current
  }

  return prev2
}
// @lc code=end
