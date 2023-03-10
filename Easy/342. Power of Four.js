/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    for (let i = 1; i !== n; i *= 4) {
      if (i > n) {
        return false;
      }
    }
  
    return n > 0;
  };
  