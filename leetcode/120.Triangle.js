/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    triangle[i][0] += triangle[i - 1][0];
    triangle[i][triangle[i].length - 1] += triangle[i - 1][triangle[i].length - 2];
    for (let j = 1; j < triangle[i].length - 1; j++) {
      triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
}
