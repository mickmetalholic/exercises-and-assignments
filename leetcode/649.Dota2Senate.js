/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  const dq = [], rq = [];
  for (let i = 0; i < senate.length; i++) {
    senate[i] === 'R' ? rq.push(i) : dq.push(i);
  }

  while (dq.length > 0 && rq.length > 0) {
    const indexD = dq.shift(), indexR = rq.shift();
    if (indexD < indexR) {
      dq.push(indexD + senate.length);
    } else {
      rq.push(indexR + senate.length);
    }
  }

  return dq.length === 0 ? 'Radiant' : 'Dire';
}
