/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    let j = i;
    const currentRes = [];

    while (j > 0) {
      currentRes.push(j % 2);
      j = Math.floor(j / 2);
    }

    res.push(currentRes.filter((item) => item === 1).length);
  }

  return res;
};
