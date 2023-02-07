/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let currentAverage = 0;
  let maxAverage = 0;

  for (let i = 0; i < k; i++) {
    currentAverage += nums[i];
  }

  maxAverage = currentAverage;

  for (let i = k; i < nums.length; i++) {
    currentAverage +=  nums[i] - nums[i - k];

    maxAverage = Math.max(maxAverage, currentAverage)
  }

  return maxAverage / k;
};
