/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  const res = [n];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      res.push(i);
    }
  }

  return res.length === 3;
};
