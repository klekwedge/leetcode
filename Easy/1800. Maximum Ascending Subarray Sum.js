/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let sum = Number.MIN_VALUE;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i, k = i + 1; j < nums.length; k++, j++) {
      if (j === i) {
        sum = nums[i];
      }

      if (nums[j] < nums[k]) {
        sum += nums[k];
      } else {
        max = sum > max ? sum : max;
        break;
      }
    }
  }

  return max;
};
