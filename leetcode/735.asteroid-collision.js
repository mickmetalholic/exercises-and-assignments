/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  if (asteroids.length <= 1) return asteroids;

  const stack = [];
  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      let isValid = true;
      while (stack.length !== 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
        if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)) {
          stack.pop();
        } else if (Math.abs(stack[stack.length - 1]) > Math.abs(asteroid)) {
          isValid = false;
          break;
        } else {
          isValid = false;
          stack.pop();
          break;
        }
      }
      if (isValid) {
        stack.push(asteroid);
      }
    }
  }
  return stack;
}
// @lc code=end
