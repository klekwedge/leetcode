/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1;
  for (let i = 0; i < nums.length; i++) {
    sign = Math.sign(nums[i] * sign);
  }
  return sign;
};
