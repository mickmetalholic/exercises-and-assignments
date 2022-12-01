/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
// function lengthOfLIS (nums: number[]): number {
//   const lengths = [1]
//   let longest = 1

//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i]
//     let length = 1
//     for (let j = 0; j < i; j++) {
//       if (num > nums[j]) {
//         length = Math.max(length, lengths[j] + 1)
//       }
//     }
//     lengths[i] = length
//     longest = Math.max(longest, length)
//   }

//   return longest
// }
function lengthOfLIS (nums: number[]): number {
  const min: number[] = []
  min[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const index = _search(num, min)
    min[index] = num
  }

  return min.length

  /**
   * search for the first position larger than or equal the searched value
   * @param n searched value
   * @param arr array
   * @returns the first position larger than or equal the searched value
   */
  function _search (n: number, arr: number[]): number {
    let i = 0
    let j = arr.length
    while (i < j) {
      const m = Math.floor((i + j) / 2)
      if (arr[m] < n) {
        i = m + 1
      } else {
        j = m
      }
    }
    return i
  }
}
// @lc code=end
