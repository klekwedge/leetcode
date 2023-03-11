/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort((a, b) => {
    if (a !== val && b === val) {
      return -1;
    }
    if (a === val && b !== val) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};
