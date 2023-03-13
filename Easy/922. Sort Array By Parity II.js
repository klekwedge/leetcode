/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const odd = [];
  const even = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

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
