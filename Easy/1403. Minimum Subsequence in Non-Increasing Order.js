/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const res = [];

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums.slice(0, i + 1).reduce((prev, next) => prev + next);
    const other = nums.slice(i + 1).reduce((prev, next) => prev + next);

    res.push(nums[i]);

    if (current > other) {
      return res;
    }
  }

  return nums;
};
