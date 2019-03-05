/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let index1 = 0, index2 = numbers.length - 1;
  while(index1 < index2) {
    if (numbers[index1] + numbers[index2] < target) {
      index1++;
    } else if (numbers[index1] + numbers[index2] > target) {
      index2--;
    } else {
      return [index1 + 1, index2 + 1];
    }
  }
}
