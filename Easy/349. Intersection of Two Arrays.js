/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];

  const res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      res.push(nums2[i]);
    }
  }

  return res;
};
