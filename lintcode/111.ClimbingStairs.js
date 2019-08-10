/**
 * @param n: An integer
 * @return: An integer
 */
function climbStairs(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1, prev1 = 2, cur;
  for (let i = 3; i <= n; i++) {
    cur = prev1 + prev2;
    prev2 = prev1;
    prev1 = cur;
  }
  return cur;
}
