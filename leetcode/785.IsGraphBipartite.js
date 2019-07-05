/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  let curSet = new Set(), nextSet = new Set();
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length === 0) {
      curSet.add(i);
    }
  }

  while (curSet.size + nextSet.size < graph.length) {
    let i = 0;
    while (i < graph.length && (curSet.has(i) || nextSet.has(i))) {
      i++;
    }
    if (i === graph.length) return true;
    let curLevel = [], nextLevel = [];
    curLevel.push(i);

    while (curLevel.length) {
      for (const node of curLevel) {
        const neighbors = graph[node];
        for (const neighbor of neighbors) {
          if (curSet.has(neighbor)) {
            return false;
          } else if (!nextSet.has(neighbor)) {
            nextSet.add(neighbor);
            nextLevel.push(neighbor);
          }
        }
      }
      [curSet, nextSet] = [nextSet, curSet];
      curLevel = nextLevel;
      nextLevel = [];
    }
  }
  return true;
}
