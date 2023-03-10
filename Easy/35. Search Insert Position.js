/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (target <= nums[0]) {
    return 0;
  }

  if (target >= nums[nums.length - 1]) {
    return nums.length;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (target >= nums[i] && target <= nums[i + 1]) {
      return i + 1;
    }
  }
};
