/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const res = n % 2 === 0 ? [] : [0];

  for (let i = 0; i < Math.floor(n / 2); i++) {
    res.push((i + 1) * -1);
    res.push(i + 1);
  }

  return res;
};
