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
  return dfs(desiredTotal, new Array(maxChoosableInteger + 1).fill(0).join(''));

  /**
   * @param {number} target
   * @param {number[]} used
   */
  function dfs(target, used) {
    if (res.hasOwnProperty(used)) return res[used];

    for (let i = maxChoosableInteger; i > 0; i--) {
      if (used[i] === '0') {
        if (i >= target) {
          res[used] = true;
          return true;
        } else {
          const nextUsed = used.split('');
          nextUsed[i] = 1;
          if (!dfs(target - i, nextUsed.join(''))) {
            res[used] = true;
            return true;
          }
        }
      }
    }
    res[used] = false;
    return false;
  }
}
