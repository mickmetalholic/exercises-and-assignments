/**
 * @param {string[]} grid
 * @return {number}
 */
function regionsBySlashes(grid) {
  const visited = {};
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[`${i}-${j}`] || !visited[`${i}-${j}`].left) {
        res++;
        bfs(i, j, 'l');
      }
      if (!visited[`${i}-${j}`].right) {
        res++;
        bfs(i, j, 'r');
      }
    }
  }
  return res;

  function bfs(i, j, dir) {
    let q = [[i, j, dir]];
    while (q.length) {
      const next = [];
      for (let [i, j, dir] of q) {
        const id = `${i}-${j}`;
        if (grid[i][j] === '/') {
          if (
            !visited[id]
            || (!visited[id].left && (dir === 'l' || dir === 't'))
            || (!visited[id].right && (dir === 'r' || dir === 'b'))
          ) {
            if (dir === 't') {
              dir = 'l';
            } else if (dir === 'b') {
              dir = 'r';
            }
            visited[id] = visited[id] || { left: false, right: false };
            if (dir === 'l') {
              visited[id].left = true;
              next.push([i - 1, j, 'b']);
              next.push([i, j - 1, 'r']);
            } else if (dir === 'r') {
              visited[id].right = true;
              next.push([i + 1, j, 't']);
              next.push([i, j + 1, 'l']);
            }
          }
        } else if (grid[i][j] === '\\') {
          if (
            !visited[id]
            || (!visited[id].left && (dir === 'l' || dir === 'b')) 
            || (!visited[id].right && (dir === 'r' || dir === 't'))
          ) {
            if (dir === 't') {
              dir = 'r';
            } else if (dir === 'b') {
              dir = 'l';
            }
            visited[id] = visited[id] || { left: false, right: false };
            if (dir === 'l') {
              visited[id].left = true;
              next.push([i + 1, j, 't']);
              next.push([i, j - 1, 'r']);
            } else if (dir === 'r') {
              visited[id].right = true;
              next.push([i - 1, j, 'b']);
              next.push([i, j + 1, 'l']);
            }
          }
        } else {
          if (!visited[id]) {
            visited[id] = { left: true, right: true };
            next.push([i + 1, j, 't']);
            next.push([i - 1, j, 'b']);
            next.push([i, j - 1, 'r']);
            next.push([i, j + 1, 'l']);
          }
        }
      }
      q = next.filter(([i, j]) => (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length));
    }
  }
}
