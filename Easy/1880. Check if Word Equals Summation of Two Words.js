/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

const calcSum = (str) => {
  let sum = "";
  for (let i = 0; i < str.length; i++) {
    sum += str[i].charCodeAt(0) - 97;
  }

  return Number(sum);
};

var isSumEqual = function (firstWord, secondWord, targetWord) {
  const firstSum = calcSum(firstWord.toLowerCase());
  const secondSum = calcSum(secondWord.toLowerCase());
  const targetSum = calcSum(targetWord.toLowerCase());

  return firstSum + secondSum === targetSum;
};
