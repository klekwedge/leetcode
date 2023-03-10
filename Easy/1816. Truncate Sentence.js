/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  return s
    .split(" ")
    .filter((item, index) => index < k)
    .join(" ");
};
