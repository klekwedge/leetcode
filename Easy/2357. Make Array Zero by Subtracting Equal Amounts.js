/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let counter = 0;

  while (!nums.every((item) => item === 0)) {
    let min;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        min = nums[i];
        break;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[i] -= min;
      }
    }

    counter++;
  }

  return counter;
};
