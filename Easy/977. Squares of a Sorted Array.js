/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((item) => Math.abs(item) ** 2).sort((a, b) => a - b);
};
