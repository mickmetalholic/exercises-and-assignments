/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findMinHeightTrees(n, edges) {
  if (n <= 2) return Array.from({ length: n }, (_, i) => i);

  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let next = new Set(Array.from({ length: n }, (_, i) => i));
  while (next.size > 1) {
    const cur = [...next].filter(e => graph[e].length === 1);
    if (cur.length === 2) {
      if (graph[cur[0]][0] === cur[1]) {
        return cur;
      }
    }
    next = new Set();
    for (const leaf of cur) {
      const parent = graph[leaf].pop();
      graph[parent].splice(graph[parent].indexOf(leaf), 1);
      next.add(parent);
    }
  }
  return [...next];
}
