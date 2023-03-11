/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    const currentNum = num.slice(0, i + 1);
    if (Number(currentNum[currentNum.length - 1]) % 2 === 1) {
      return currentNum;
    }
  }

  return "";
};
