/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }

  return Object.entries(obj).filter(
    (item) => item[1] === nums.length / 2
  )[0][0];
};
