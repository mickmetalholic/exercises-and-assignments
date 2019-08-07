/*
 * @lc app=leetcode id=464 lang=javascript
 *
 * [464] Can I Win
 */
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
function canIWin(maxChoosableInteger, desiredTotal) {
  if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false;

  const res = {};
  return dfs(desiredTotal, 0);

  /**
   * whether the first person can win in the current situation
   * @param {number} target
   * @param {number} used
   */
  function dfs(target, used) {
    if (res.hasOwnProperty(used)) return res[used];

    // iterate from largest one because the condition
    // i >= target would fulfill earlier
    for (let i = maxChoosableInteger; i >= 1; i--) {
      if ((used & (1 << (i - 1))) === 0) {
        if (
          target <= i
          || !dfs(target - i, used + (1 << (i - 1)))
        ) {
          return res[used] = true;
        }
      }
    }
    return res[used] = false;
  }
}
