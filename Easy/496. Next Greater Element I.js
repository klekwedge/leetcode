/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    const currentEl = nums1[i];
    const indexCurrentEl = nums2.indexOf(currentEl);

    for (let j = indexCurrentEl; j < nums2.length; j++) {
      if (currentEl < nums2[j]) {
        res.push(nums2[j]);
        break;
      } else if (j === nums2.length - 1) {
        res.push(-1);
      }
    }
  }

  return res;
};
