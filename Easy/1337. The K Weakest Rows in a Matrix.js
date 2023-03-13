/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const obj = {};

  for (let i = 0; i < mat.length; i++) {
    obj[i] = mat[i].filter((item) => item === 1).length;
  }

  return Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0])
    .slice(0, k);
};
