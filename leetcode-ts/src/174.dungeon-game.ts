/*
 * @lc app=leetcode id=174 lang=typescript
 *
 * [174] Dungeon Game
 */

// @lc code=start
function calculateMinimumHP (dungeon: number[][]): number {
  const m = dungeon.length
  const n = dungeon[0].length

  const health = Array.from(
    { length: m },
    () => Array.from<number>({ length: n })
  )

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const current = dungeon[i][j]
      if (i === m - 1 && j === n - 1) {
        health[i][j] = current > 0 ? 1 : 1 - current
      } else if (i === m - 1) {
        health[i][j] = health[i][j + 1] - current > 0 ? health[i][j + 1] - current : 1
      } else if (j === n - 1) {
        health[i][j] = health[i + 1][j] - current > 0 ? health[i + 1][j] - current : 1
      } else {
        health[i][j] = Math.min(
          health[i][j + 1] - current > 0 ? health[i][j + 1] - current : 1,
          health[i + 1][j] - current > 0 ? health[i + 1][j] - current : 1
        )
      }
    }
  }

  return health[0][0]
}
// @lc code=end
