/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let res = "";
  while (n > 0) {
    res = `${n % 2}${res}`;
    n = Math.floor(n / 2);
  }

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] === res[i + 1]) {
      return false;
    }
  }

  return true;
};
