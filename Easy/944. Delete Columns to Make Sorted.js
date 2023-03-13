/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let counter = 0;
  const itemLength = strs[0].length;

  for (let j = 0; j < itemLength; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j].charCodeAt(0) - strs[i - 1][j].charCodeAt(0) < 0) {
        counter++;
        break;
      }
    }
  }

  return counter;
};
