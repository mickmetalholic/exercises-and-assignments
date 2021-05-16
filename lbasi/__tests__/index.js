const interpreter = require('..');

const res = interpreter('7 + 3 * (10 / (12 / (3 + 1) - 1)) / (2 + 3) - 5 - 3 + (8)');
console.log(JSON.stringify(res, ' ', 2));
