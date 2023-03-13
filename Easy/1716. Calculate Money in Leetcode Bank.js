/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let start = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) {
      start += 1;
    }
    sum += start + (i % 7);
  }

  return sum;
};
