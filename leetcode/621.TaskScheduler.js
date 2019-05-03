/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  const counts = tasks.reduce((res, task) => {
    res[task] = res[task] || 0;
    res[task]++;
    return res;
  }, {});

  const maxFreq = Math.max(...Object.values(counts));
  const p = Object.values(counts).filter(count => count === maxFreq).length;

  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + p);
}
