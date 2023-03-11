/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums = [...new Set(nums)].sort((a, b) => b - a);
  return nums.length < 3
    ? Math.max(...nums)
    : nums[2];
};
