/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(original);
    if (index === -1) {
      break;
    } else {
      original *= 2;
    }
  }

  return original;
};
