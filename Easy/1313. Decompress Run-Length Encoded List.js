/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length - 1; i += 2) {
    res.push(...Array(nums[i]).fill(nums[i + 1]));
  }
  return res;
};
