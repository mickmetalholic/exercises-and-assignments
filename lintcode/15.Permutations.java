import java.util.*;

public class Solution {
  /*
   * @param nums: A list of integers.
   * @return: A list of permutations.
   */
  public List<List<Integer>> permute(int[] nums) {
    if (nums.length == 0) {
      List<List<Integer>> res = new ArrayList<>();
      res.add(new ArrayList<Integer>());
      return res;
    }
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();
    List<Integer> cur = new ArrayList<>();
    for (int i = 0; i < nums.length; i++) {
      cur.add(nums[i]);
    }
    while (cur != null) {
      res.add(cur);
      cur = next(cur);
    }
    return res;
  }

  private List<Integer> next(List<Integer> nums) {
    int i = nums.size() - 1;
    while (i > 0 && nums.get(i - 1) >= nums.get(i)) {
      i--;
    }

    if (i == 0) return null;

    int tmp = nums.get(i - 1);
    List<Integer> right = new ArrayList<>(nums.subList(i, nums.size()));
    int j = 0;
    while (j + 1 < right.size() && tmp < right.get(j + 1)) {
      j++;
    }
    right.set(j, tmp);
    Collections.reverse(right);

    List<Integer> res = new ArrayList<>(nums.subList(0, i - 1));
    res.add(nums.get(i + j));
    res.addAll(right);
    return res;
  }
}
