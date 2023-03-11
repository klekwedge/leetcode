/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }

  const res = Object.entries(obj).filter((item) => item[1] === 1);

  return res.length >= k ? res[k - 1][0] : "";
};
