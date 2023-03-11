/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  nums.sort(function (a, b) {
    if (a !== 0 && b === 0) {
      return -1;
    }

    if (a === 0 && b !== 0) {
      return 1;
    }

    return 0;
  });

  return nums;
};
