/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var sumBase = function (n, k) {
  result = "";

  while (n > 0) {
    result += n % k;
    n = Math.floor(n / k);
  }

  return result
    .split("")
    .reverse()
    .map((item) => +item)
    .reduce((prev, next) => prev + next);
};
