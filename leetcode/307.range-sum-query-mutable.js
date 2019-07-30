/*
 * @lc app=leetcode id=307 lang=javascript
 *
 * [307] Range Sum Query - Mutable
 */
/**
 * @param {number[]} nums
 */
class NumArray {
  constructor (nums) {
    this.nums = nums;
    this.sums = nums.reduce((sums, num) =>
      sums.length === 0 ? sums.concat(num) :
        sums.concat(sums[sums.length - 1] + num), []);
  }

  /** 
   * @param {number} i 
   * @param {number} val
   * @return {void}
   */
  update(i, val) {
    const diff = val - this.nums[i];
    for (let j = i; j < this.sums.length; j++) {
      this.sums[j] += diff;
    }
    this.nums[i] = val;
  }

  /** 
   * @param {number} i 
   * @param {number} j
   * @return {number}
   */
  sumRange(i, j) {
    return this.sums[j] - (i === 0 ? 0 : this.sums[i - 1]);
  }
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
