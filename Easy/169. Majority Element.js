/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (const el of Object.entries(obj)) {
    if (el[1] >= Math.round(nums.length / 2)) {
      return el[0];
    }
  }
};
