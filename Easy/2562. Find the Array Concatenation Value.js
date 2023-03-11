/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  const res = [];
  while (nums.length) {
    const firstEl = nums.splice(0, 1);
    const lastEl = nums.splice(nums.length - 1, 1);
    res.push(Number(String(firstEl) + String(lastEl)));
  }

  return res.reduce((prev, next) => prev + next);
};
