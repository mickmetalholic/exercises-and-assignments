/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let max = 0;
  let maxHeight = 0;
  for (let i = 0; i < height.length - 1; i++) {
    if (maxHeight <= height[i]) {
      maxHeight = height[i];
      for (let j = height.length - 1; j > i; j--) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
        if (height[j] >= height[i]) {
          break;
        }
      }
    }
  }
  return max;
};
