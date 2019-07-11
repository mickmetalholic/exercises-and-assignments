/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
  const g = {};
  for (let i = 0; i < equations.length; i++) {
    const [from, to] = equations[i];
    g[from] = g[from] || {};
    g[to] = g[to] || {};
    g[from][to] = values[i];
    g[to][from] = 1 / values[i];
  }

  const res = [];
  for (const [from, dest] of queries) {
    const path = bfs(from, dest);
    if (path) {
      let div = 1;
      let curNode = from;
      for (const node of path) {
        div *= g[curNode][node];
        curNode = node;
      }
      res.push(div);
      g[from] = g[from] || {};
      g[dest] = g[dest] || {};
      g[from][dest] = div;
      g[dest][from] = 1 / div;
    } else {
      res.push(-1);
    }
  }
  return res;

  function bfs(from, dest) {
    const visited = new Set();
    visited.add(from);

    let curLevel = [{ node: from, path: [] }], nextLevel = [];
    while (curLevel.length) {
      for (const { node: curNode, path } of curLevel) {
        const neighbors = g[curNode];
        if (neighbors) {
          for (const to of Object.keys(neighbors)) {
            if (to === dest) {
              return path.concat(to);
            } else if (!visited.has(to)) {
              visited.add(to);
              nextLevel.push({ node: to, path: path.concat(to) });
            }
          }
        }
      }
      curLevel = nextLevel;
      nextLevel = [];
    }

    return null;
  }
}
