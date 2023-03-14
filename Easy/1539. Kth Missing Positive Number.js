/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const res = [];

  for (let i = 0; res.length !== k; i++) {
    if (!arr.includes(i + 1)) {
      res.push(i + 1);
    }
  }
  return res[k - 1];
};
