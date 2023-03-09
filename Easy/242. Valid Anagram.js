/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const objS = {};
  const objT = {};

  for (let char of s) {
    objS[char] = objS[char] + 1 || 1;
  }

  for (let char of t) {
    objT[char] = objT[char] + 1 || 1;
  }

  if (Object.keys(objS).length !== Object.keys(objT).length) {
    return false;
  }

  for (const el in objS) {
    if (objT[el] !== objS[el]) {
      return false;
    }
  }

  return true;
};
