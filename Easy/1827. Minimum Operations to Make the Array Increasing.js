/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const diff = nums[i - 1] - nums[i] + 1;
      nums[i] += diff;
      operations += diff;
    }
  }

  return operations;
};
