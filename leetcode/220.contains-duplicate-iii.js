/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
  const orderedSet = new OrderedSet();
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i - j > k) {
      orderedSet.erase(nums[j]);
      j++;
    }
    const num = nums[i];
    orderedSet.insert(num);
    const prev = orderedSet.prev(num);
    const next = orderedSet.next(num);
    if (
      (prev !== null && num - prev <= t)
      || (next !== null && next - num <= t)
    ) return true;
  }
  return false;
}

// the time complexity could be log(n) when using binary tree
class OrderedSet {
  constructor() {
    this._data = [];
  }

  insert(n) {
    let i = 0;
    while (
      i < this._data.length
      && this._data[i] < n
    ) i++;
    this._data.splice(i, 0, n);
  }

  erase(n) {
    const index = this._data.indexOf(n);
    if (index !== -1) {
      this._data.splice(index, 1);
    }
  }

  prev(n) {
    const index = this._data.indexOf(n);
    if (index - 1 >= 0 && index - 1 < this._data.length) {
      return this._data[index - 1];
    } else {
      return null;
    }
  }

  next(n) {
    const index = this._data.indexOf(n);
    if (index + 1 >= 0 && index + 1 < this._data.length) {
      return this._data[index + 1];
    } else {
      return null;
    }
  }
}
// @lc code=end
