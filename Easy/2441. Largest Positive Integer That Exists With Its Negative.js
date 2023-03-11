/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max && nums.indexOf(-nums[i]) !== -1) {
      max = nums[i];
    }
  }

  return max;
};
