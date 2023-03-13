/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  const odd = [];
  const even = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  odd.sort((a, b) => b - a);
  even.sort((a, b) => a - b);

  const res = [];

  for (let i = 0, j = 0, k = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res.push(even[j]);
      j++;
    } else {
      res.push(odd[k]);
      k++;
    }
  }

  return res;
};
