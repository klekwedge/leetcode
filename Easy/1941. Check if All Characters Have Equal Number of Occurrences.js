/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] + 1 || 1;
  }

  return Object.entries(obj).every((item, i, arr) => item[1] === arr[0][1]);
};
