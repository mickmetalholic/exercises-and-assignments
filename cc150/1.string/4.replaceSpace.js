function replaceSpace(s) {
  return s.replace(/\s/g, '%20');
}


console.log(replaceSpace('1 2 3') === '1%202%203');
