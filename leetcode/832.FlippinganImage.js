/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A => A.map(flip);

const flip = e => e.map((_, i, arr) => arr[arr.length - 1 - i] ^ 1);
