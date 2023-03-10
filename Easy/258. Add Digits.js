/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let res = String(num);

  while (res.length !== 1) {
    res = String(
      res
        .split("")
        .map((item) => +item)
        .reduce((prev, next) => prev + next)
    );
  }

  return Number(res);
};
