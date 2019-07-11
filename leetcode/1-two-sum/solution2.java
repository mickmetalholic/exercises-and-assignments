class Solution {

  public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> hm = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int remains = target - nums[i];
      if (hm.containsKey(remains)) {
        return new int[]{i, hm.get(remains)};
      }
      hm.put(nums[i], i);
    }
    return new int[2];
  }
}
