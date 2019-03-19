/**
 * @param {string[]} A
 * @return {string}
 */
function shortestSuperstring(A) {
  const { length } = A;

  // g[i][j] := the cost of append A[j] to A[i]
  const g = [];
  for (let i = 0; i < length; i++) {
    g[i] = [];
    for (let j = 0; j < length; j++) {
      for (let k = 0; k < Math.min(A[i].length, A[j].length); k++) {
        if (A[i].slice(A[i].length - k) === A[j].slice(0, k)) {
          g[i][j] = A[j].length - k;
        }
      }
    }
  }

  // dp[s][i] := min distance to node i
  const dp = [], parent = [];
  const pathCount = 1 << length;
  for (let s = 1; s < pathCount; s++) {
    dp[s] = [];
    parent[s] = [];
    for (let i = 0; i < length; i++) {
      if (1 << i === s) {
        dp[s][i] = A[i].length;
      } else if (1 << i & s) {
        const prevS = s & ~(1 << i);
        for (let j = 0; j < length; j++) {
          if (!dp[s][i] || dp[prevS][j] + g[j][i] <= dp[s][i]) {
            dp[s][i] = dp[prevS][j] + g[j][i];
            parent[s][i] = j;
          }
        }
      }
    }
  }

  let minIndex = 0;
  for (let i = 1; i < length; i++) {
    if (dp[pathCount - 1][i] < dp[pathCount - 1][minIndex]) {
      minIndex = i;
    }
  }

  let res = '', path = pathCount - 1, cur = minIndex;
  while (path) {
    let prev = parent[path][cur];
    if (prev !== undefined) {
      res = `${A[cur].slice(A[cur].length - g[prev][cur])}${res}`;
    } else {
      res = `${A[cur]}${res}`;
    }
    path -= 1 << cur;
    cur = prev;
  }
  return res;
}
