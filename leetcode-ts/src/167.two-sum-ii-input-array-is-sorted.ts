/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum (numbers: number[], target: number): number[] {
  let p1 = 0
  let p2 = numbers.length - 1

  let sum = numbers[p1] + numbers[p2]
  while (sum !== target) {
    if (sum > target) {
      p2--
    } else {
      p1++
    }
    sum = numbers[p1] + numbers[p2]
  }
  return [p1 + 1, p2 + 1]
}
// @lc code=end
