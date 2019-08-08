/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
  let res1, count1 = 0, res2, count2 = 0;
  for (const num of nums) {
    if (num === res1) {
      count1++;
    } else if (num === res2) {
      count2++;
    } else if (count1 === 0) {
      res1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      res2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;
  for (const num of nums) {
    if (num === res1) {
      count1++;
    } else if (num === res2) {
      count2++;
    }
  }
  const res = [];
  if (count1 > Math.floor(nums.length / 3)) {
    res.push(res1);
  }
  if (count2 > Math.floor(nums.length / 3)) {
    res.push(res2);
  }
  return res;
}
