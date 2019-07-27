public class Solution {
  /*
   * @param nums: a list of integers
   * @return: find a  majority number
   */
  public int majorityNumber(List<Integer> nums) {
    int cur = 0, count = 0;
    for (int num:nums) {
      if (count == 0) {
        cur = num;
        count = 1;
      } else if (cur == num) {
        count++;
      } else {
        count--;
      }
    }
    return cur;
  }
}
