function move(n, a, b, c) {
  if (n === 1) {
    c.plates.push(a.plates.pop());
    console.log(`move from ${a.id} to ${c.id}`);
    [a, b, c].sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      })
      .forEach(d => console.log(d));
    return;
  }

  move(n - 1, a, c, b);
  move(1, a, b, c);
  move(n - 1, b, a, c);
}


const a = {
  id: 'a',
  plates: ['4', '3', '2', '1'],
};
const b = {
  id: 'b',
  plates: [],
};
const c = {
  id: 'c',
  plates: [],
};
move(4, a, b, c);
