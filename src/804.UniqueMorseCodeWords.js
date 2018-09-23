/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
  const lookUpTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];  
  return words.map(word => word
    .split('')
    .map(e => lookUpTable[e.charCodeAt(0) - 97])
    .join('')
  )
  .reduce((set, e) => set.add(e), new Set())
  .size;
};