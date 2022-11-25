/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class NumArray {
  private readonly _nums: number[]
  private readonly _sums: number[]

  constructor (nums: number[]) {
    this._nums = nums
    let sum = 0
    this._sums = nums.map(n => {
      sum += n
      return sum
    })
  }

  sumRange (left: number, right: number): number {
    if (left === 0) {
      return this._sums[right]
    }
    return this._sums[right] - this._sums[left] + this._nums[left]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
