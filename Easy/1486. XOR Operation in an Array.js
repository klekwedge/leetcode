/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const arr = new Array(n).fill(0).map((item, i) => start + 2 * i);
  return arr.reduce((prev, next) => prev ^ next);
};
