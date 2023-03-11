/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  const arr = new Array(n).fill(0).map((item, index) => index + 1);

  for (let i = 0; i < n; i++) {
    if (
      arr.slice(0, i + 1).reduce((prev, next) => prev + next) ===
      arr.slice(i).reduce((prev, next) => prev + next)
    ) {
      return arr[i];
    }
  }

  return -1;
};
