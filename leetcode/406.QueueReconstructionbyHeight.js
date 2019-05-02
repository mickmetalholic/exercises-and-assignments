/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function reconstructQueue(people) {
  const sorted = people.slice().sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      return a[1] - b[1];
    }
  });

  const res = [];
  sorted.forEach(p => {
    res.splice(p[1], 0, p);
  });
  return res;
}
