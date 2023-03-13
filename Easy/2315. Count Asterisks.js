/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  return s.replace(/\|.*?\|/gi, "").replace(/[^\*]/gi, "").length;
};
