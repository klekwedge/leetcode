/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const currentRes = (nums[i] - 1) * (nums[j] - 1);
      res = res < currentRes ? currentRes : res;
    }
  }

  return res;
};
