/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) {
      res.push(i + 1);
    }
  }

  return res;
};
