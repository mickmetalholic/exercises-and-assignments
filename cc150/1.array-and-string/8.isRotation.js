function isRotation(str1, str2) {
  const length = str1.length;
  if (length > 0 && length === str2.length) {
    return _isSubString(`${str1}${str1}`, str2);
  }
  return false;
}

function _isSubString(str, subString) {
  return str.includes(subString);
}


console.log(isRotation('waterbottle', 'erbottlewat'));
