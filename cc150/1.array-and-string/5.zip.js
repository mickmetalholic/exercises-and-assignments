function zip(str) {
  let count  = 1;
  const zipped = str.split('').reduce((prev, cur) => {
    const last = prev[prev.length - 1];
    if (last === cur) {
      count++;
    } else {
      prev += count;
      prev += cur;
      count = 1;
    }
    return prev;
  }) + count;
  return zipped.length >= str.length ? str : zipped;
}
