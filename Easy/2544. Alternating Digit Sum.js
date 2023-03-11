/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  return String(n)
    .split("")
    .map((item, index) => (index % 2 === 0 ? +item : -+item))
    .reduce((prev, next) => prev + next);
};
