/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    if (i !== 0) {
      leftSum = nums.slice(0, i).reduce((prev, next) => prev + next);
    }

    let rightSum = 0;
    if (i !== nums.length - 1) {
      rightSum = nums.slice(i + 1).reduce((prev, next) => prev + next);
    }

    res.push(Math.abs(leftSum - rightSum));
  }

  return res;
};

