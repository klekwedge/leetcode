/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
      res.push(nums[i]);
    }
  }
  return res.length
    ? Math.floor(res.reduce((prev, next) => prev + next) / res.length)
    : 0;
};
