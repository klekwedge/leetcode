/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }
  for (let item of Object.entries(obj)) {
    if (item[1] === 1) {
      return item[0];
    }
  }

  return null;
};
