/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
function fib(N) {
  if (N === 0) return 0;
  if (N === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= N; i++) {
    const res = a + b;
    a = b;
    b = res;
  }

  return b;
}
// @lc code=end
