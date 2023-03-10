/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(
      ...String(nums[i])
        .split("")
        .map((item) => +item)
    );
  }
  return res;
};
