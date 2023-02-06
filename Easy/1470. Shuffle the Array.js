/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const a = nums.slice(0, n);
  const b = nums.slice(n);
  const res = [];

  for (let i = 0; i < a.length; i++) {
    res.push(a[i]);
    res.push(b[i]);
  }
  return res;
};
