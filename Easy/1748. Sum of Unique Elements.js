/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }

  const arr = Object.entries(obj)
    .filter((item) => item[1] === 1)
    .map((item) => +item[0]);

  return arr.length ? arr.reduce((prev, next) => prev + next) : 0;
};
