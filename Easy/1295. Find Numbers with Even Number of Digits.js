/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.filter((item) => String(item).length % 2 === 0).length;
};
