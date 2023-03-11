/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const maxValue = Math.max(...nums);
  const maxValueIndex = nums.indexOf(maxValue);

  return nums.every((item, index) =>
    index === maxValueIndex ? true : item * 2 <= maxValue
  )
    ? maxValueIndex
    : -1;
};
