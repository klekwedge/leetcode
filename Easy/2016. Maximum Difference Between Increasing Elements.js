/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j]);
      if (nums[i] < nums[j]) {
        max = max < diff ? diff : max;
      }
    }
  }

  return max;
};
