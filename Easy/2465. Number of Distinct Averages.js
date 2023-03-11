/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b);
  const res = new Set([]);
  while (nums.length) {
    const minValue = nums[0];
    const maxValue = nums[nums.length - 1];

    nums.splice(0, 1);
    nums.splice(nums.length - 1, 1);

    res.add((minValue + maxValue) / 2);
  }

  return res.size;
};
