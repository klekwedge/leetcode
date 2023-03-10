/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const res = [];
  for (let i = left; i <= right; i++) {
    const nums = String(i)
      .split("")
      .map((item) => +item);
    if (nums.every((item) => i % item === 0)) {
      res.push(i);
    }
  }

  return res;
};
