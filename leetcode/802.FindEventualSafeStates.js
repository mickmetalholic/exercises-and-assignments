/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  const hasCycle = new Array(graph.length).fill(null);
  for (let i = 0; i < graph.length; i++) {
    hasCycle[i] = dfs(i, new Set());
  }
  return hasCycle.map((e, i) => e ? null : i).filter(e => e !== null);

  function dfs(node, visited) {
    if (hasCycle[node] !== null) return hasCycle[node];
    if (visited.has(node)) {
      hasCycle[node] = true;
    } else {
      visited.add(node);
      if (graph[node].length === 0) {
        hasCycle[node] = false;
      } else {
        let currentNodeHasCycle = false;
        for (const neighbor of graph[node]) {
          currentNodeHasCycle = currentNodeHasCycle || dfs(neighbor, visited);
        }
        hasCycle[node] = currentNodeHasCycle;
      }
    }
    return hasCycle[node];
  }
}
