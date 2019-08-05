/*
 * @lc app=leetcode id=433 lang=javascript
 *
 * [433] Minimum Genetic Mutation
 */
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
function minMutation(start, end, bank) {
  const graph = {};
  for (const key of bank) {
    graph[key] = [];
  }
  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      const source = bank[i], target = bank[j];
      if (isConnected(source, target)) {
        graph[source].push(target);
        graph[target].push(source);
      }
    }
  }

  let res = 0, cur = bank.filter(gen => isConnected(gen, start));
  const visited = new Set();
  while (cur.length) {
    res++;
    const next = [];
    for (const gen of cur) {
      visited.add(gen)
      if (gen === end) {
        return res;
      } else {
        graph[gen].forEach(e => {
          if (!visited.has(e)) {
            next.push(e);
          }
        });
      }
      cur = next;
    }
  }
  return -1;

  /**
   * @param {string} gen1 gen1
   * @param {string} gen2 gen2
   * @return {boolean}
   */
  function isConnected(gen1, gen2) {
    let diff = 0;
    for (let i = 0; i < gen1.length; i++) {
      if (gen1[i] !== gen2[i]) {
        diff++;
      }
      if (diff > 1) {
        return false;
      }
    }
    return true;
  }
}
