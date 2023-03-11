/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const obj = {
    positive: 0,
    negtive: 0,
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      obj.positive++;
    }
    if (nums[i] < 0) {
      obj.negtive++;
    }
  }

  return Math.max(...Object.values(obj));
};
