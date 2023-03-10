/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  for (let i = 1; i !== n; i *= 2) {
    if (i > n) {
      return false;
    }
  }

  return n > 0;
};
