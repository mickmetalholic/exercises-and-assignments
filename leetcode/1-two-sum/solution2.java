import java.util.HashMap;

/*
 * @lc app=leetcode id=1 lang=java
 *
 * [1] Two Sum
 */
class Solution {
  public int[] twoSum(int[] nums, int target) {
    int[] res = new int[2];
    HashMap hm = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; i++) {
      if (hm.containsKey(target - nums[i])) {
        res[0] = (int) hm.get(target - nums[i]);
        res[1] = i;
        return res;
      }
      hm.put(nums[i], i);
    }
    return res;
  }
}
