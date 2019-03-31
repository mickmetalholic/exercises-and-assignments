/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
  const hasVisited = new Array(rooms.length).fill(false);

  let cur = [];
  cur.push(0);

  while (cur.length) {
    const next = [];
    cur.forEach(num => {
      hasVisited[num] = true;
      const keys = rooms[num].filter(e => !hasVisited[e]);
      next.push(...keys);
    });
    cur = next;
  }

  return hasVisited.every(e => e);
}
