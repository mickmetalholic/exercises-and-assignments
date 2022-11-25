/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares (nums: number[]): number[] {
  let pivot = 0
  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i]) < Math.abs(nums[pivot])) {
      pivot = i
    }
  }

  const res = [_sqr(nums[pivot])]

  let i = pivot - 1
  let j = pivot + 1
  while (i >= 0 && j < nums.length) {
    const ii = _sqr(nums[i])
    const jj = _sqr(nums[j])
    if (ii <= jj) {
      res.push(ii)
      i--
    } else {
      res.push(jj)
      j++
    }
  }
  while (i >= 0) {
    res.push(_sqr(nums[i--]))
  }
  while (j < nums.length) {
    res.push(_sqr(nums[j++]))
  }

  return res

  function _sqr (n: number): number {
    return n * n
  }
}
// @lc code=end
