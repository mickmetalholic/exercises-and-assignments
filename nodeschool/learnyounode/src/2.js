const sum = process.argv.slice(2).map(Number).reduce((res, arg) => res + arg);
console.log(sum);
