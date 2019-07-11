/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const finishedList = Array.from({ length: numCourses }, _ => true);
  const prerequisitesMap = prerequisites.reduce((res, [course, preCourse]) => {
    res[course] = res[course] || [];
    res[course].push(preCourse);
    finishedList[course] = false;
    return res;
  }, {});

  const res = [];
  finishedList.forEach((isFinished, course) => {
    if (isFinished) {
      res.push(course);
    }
  });

  if (res.length === 0) return [];

  let finished = true;
  while (finished) {
    finished = false;
    finishedList.forEach((isFinished, course, arr) => {
      if (!isFinished && prerequisitesMap[course].every(e => finishedList[e])) {
        arr[course] = true;
        res.push(course);
        finished = true;
      }
    });
  }

  return finishedList.every(e => e) ? res : [];
}
