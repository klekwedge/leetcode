/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let counter = 1;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === 1) {
      counter++;
    } else {
      max = max < counter ? counter : max;
      counter = 1;
    }
  }

  return nums.some((item) => item === 1) ? max : 0;
};
