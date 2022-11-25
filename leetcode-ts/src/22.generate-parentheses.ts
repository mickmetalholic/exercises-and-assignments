/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis (n: number): string[] {
  const dp: string[][] = [
    ['']
  ]

  for (let i = 1; i <= n; i++) {
    const current: string[] = []
    for (let j = 0; j < i; j++) {
      const left = dp[j]
      const right = dp[i - 1 - j]
      for (const l of left) {
        for (const r of right) {
          current.push(`${l}(${r})`)
        }
      }
    }
    dp.push(current)
  }

  return dp[n]
}
// function generateParenthesis (n: number): string[] {
//   const res: string[] = []
//   _dfs('', n, n)
//   return res

//   function _dfs (current: string, left: number, right: number): void {
//     if (left > right) {
//       return
//     }
//     if (left === 0 && right === 0) {
//       res.push(current)
//       return
//     }
//     left > 0 && _dfs(`${current}(`, left - 1, right)
//     right > 0 && _dfs(`${current})`, left, right - 1)
//   }
// }
// @lc code=end
