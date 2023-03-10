/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      min = min > Math.abs(i - start) ? Math.abs(i - start) : min;
    }
  }

  return min;
};
