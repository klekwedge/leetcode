/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let max = -1;
  for (let i = 0; i < strs.length; i++) {
    const checkNum = strs[i].replace(/\D/gi, "");
    const currentValue =
      checkNum.length === strs[i].length ? Number(strs[i]) : strs[i].length;

    max = max < currentValue ? currentValue : max;
  }

  return max;
};
