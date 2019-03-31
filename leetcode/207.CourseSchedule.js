/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const finishedList = new Array(numCourses).fill(true);
  const prerequisiteMap = prerequisites.reduce((res, [a, b]) => {
    res[a] = res[a] || [];
    res[a].push(b);
    finishedList[a] = false;
    return res;
  }, {});

  if (Object.keys(prerequisiteMap).length === numCourses) return false;

  let finish = true;
  while (finish) {
    finish = false;
    finishedList.forEach((isFinished, course) => {
      if (!isFinished && prerequisiteMap[course].every(prerequisite => finishedList[prerequisite])) {
        finishedList[course] = true;
        finish = true;
      }
    });
  }

  return finishedList.every(e => e);
}
