/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    const prevSum = nums.slice(i, i + 2).reduce((prev, next) => prev + next);
    for (let j = i + 1; j < nums.length - 1; j++) {
      const nextSum = nums.slice(j, j + 2).reduce((prev, next) => prev + next);
      if (prevSum === nextSum) {
        return true;
      }
    }
  }

  return false;
};
