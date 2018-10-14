/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = (times, N, K) => {
  const receiveTimes = Array(N + 1).fill(Infinity);
  const isDetermined = Array(N + 1).fill(false);
  receiveTimes[K] = 0;
  let currentNode;

  for (let n = 0; n < N; n++) {
    currentNode = receiveTimes.reduce((minIndex, e, i, arr) => {
      if (isDetermined[i]) { return minIndex; }
      if (minIndex === 0) { return i; }
      return e < arr[minIndex] ? i : minIndex;
    }, 0);
    isDetermined[currentNode] = true;
    times.forEach(time => {
      if (time[0] === currentNode) {
        const [, v, w] = time;
        if (receiveTimes[v] > receiveTimes[currentNode] + w) {
          receiveTimes[v] = receiveTimes[currentNode] + w;
        }
      }
    });
  }
  const maxTime = Math.max(...receiveTimes.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
};