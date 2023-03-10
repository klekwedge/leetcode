/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (let i = 1; ; i++) {
    if (i * i > num) {
      return false;
    }

    if (i * i === num) {
      return true;
    }
  }
};
