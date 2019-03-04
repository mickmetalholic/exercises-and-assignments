/**
 * @param {string} formula
 * @return {string}
 */
function countOfAtoms(formula) {
  const res = _count(formula);
  return Object.keys(res).sort().reduce((str, key) =>
    res[key] > 1 ? `${str}${key}${res[key]}` : `${str}${key}`, '');

  function _count(formula) {
    const res = {};
    let subFormula = '', depth = 0, name = '', count = '';
    for (let i = 0; i < formula.length; i++) {
      if (depth > 0) {
        if (formula[i] === ')') {
          depth--;
          if (depth === 0) {
            name = _count(subFormula);
            subFormula = '';
          } else {
            subFormula += formula[i];
          }
        } else {
          if (formula[i] === '(') {
            depth++;
          }
          subFormula += formula[i];
        }
      } else {
        if (/[0-9]/.test(formula[i])) {
          count += formula[i];
        } else if (formula[i] === '(') {
          _calculate(count, name, res);
          count = '';
          depth++;
        } else if (formula[i] === ')') {
          throw new Error('Illegel Expression');
        } else if (/[A-Z]/.test(formula[i])) {
          _calculate(count, name, res);
          count = '';
          name = formula[i];
        } else {
          name += formula[i];
        }
      }
    }

    _calculate(count, name, res);
    return res;
  }

  function _calculate(count, name, res) {
    count = count.length ? Number(count) : 1;
    if (typeof name === 'string' && name.length) {
      res[name] = res[name] || 0;
      res[name] += count;
    } else if (typeof name === 'object') {
      for (let [key, val] of Object.entries(name)) {
        res[key] = res[key] || 0;
        res[key] += val * count;
      }
    }
  }
}
