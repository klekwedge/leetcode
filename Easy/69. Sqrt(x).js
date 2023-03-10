/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  for (let i = 1; ; i++) {
    if (i * i > x) {
      return i - 1;
    }

    if (i * i === x) {
      return i;
    }
  }
};
