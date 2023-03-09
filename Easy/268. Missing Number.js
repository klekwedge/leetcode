/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const currentSum = nums.reduce((prev, next) => prev + next);
  const requiredSum = Array(nums.length + 1)
    .fill(1)
    .map((a, i) => i)
    .reduce((prev, next) => prev + next);

  return requiredSum - currentSum;
};
