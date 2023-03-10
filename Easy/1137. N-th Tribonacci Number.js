/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const res = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 3] + res[i - 2] + res[i - 1];
  }

  return res[n];
};
