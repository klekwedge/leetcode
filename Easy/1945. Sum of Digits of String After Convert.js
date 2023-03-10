/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let res = s
    .split("")
    .map((item) => item.charCodeAt(0) - 96)
    .join("");

  for (let i = 0; i < k; i++) {
    res = String(
      res
        .split("")
        .map((item) => +item)
        .reduce((prev, next) => prev + next)
    );
  }

  return Number(res);
};
