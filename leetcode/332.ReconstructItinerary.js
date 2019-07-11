/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
  const graph = {};
  for (const [from, to] of tickets) {
    graph[from] = graph[from] || [];
    graph[from].push(to);
  }
  for (const [_, dests] of Object.entries(graph)) {
    dests.sort();
  }

  const stack = ['JFK'], res = [];
  while (stack.length) {
    const from = stack[stack.length - 1];
    if (!graph[from] || graph[from].length === 0) {
      res.unshift(from);
      stack.pop();
    } else {
      const dest = graph[from].shift();
      stack.push(dest);
    }
  }
  return res;
}
