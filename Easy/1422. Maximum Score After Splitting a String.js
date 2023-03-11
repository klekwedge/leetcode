/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = Number.MIN_VALUE;
  for (let i = 1; i < s.length; i++) {
    const score =
      s
        .slice(0, i)
        .split("")
        .filter((item) => item === "0").length +
      s
        .slice(i)
        .split("")
        .filter((item) => item === "1").length;
    max = max < score ? score : max;
  }

  return max;
};
