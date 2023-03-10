/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  for (let i = 1; i !== n; i *= 3) {
    if (i > n) {
      return false;
    }
  }

  return n > 0;
};
