/**
 * @param {number[]} nums
 */
function NumArray(nums) {
  this._nums = nums;
  this._sum = nums.reduce((sum, num) => sum + num, 0);

  const left = [];
  left[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] + nums[i - 1];
  }
  const right = [];
  right[nums.length - 1] = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] + nums[i + 1];
  }
  this._left = left;
  this._right = right;
}

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this._sum - this._left[i] - this._right[j];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */