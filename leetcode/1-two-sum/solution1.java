import java.util.HashMap;

class Solution {
  public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> hm = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      hm.put(nums[i], i);
    }

    for (int i = 0; i < nums.length; i++) {
      int remain = target - nums[i];
      if (hm.containsKey(remain) && i != hm.get(remain)) {
        return new int[]{i, hm.get(remain)};
      }
    }
    return new int[2];
  }
}
