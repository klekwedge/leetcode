/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let res = 0;
  let str = "";

  for (let i = 0; i < 3; i++) {
    str += s[i];
  }

  if (new Set(str.split("")).size === 3) {
    res++;
  }

  for (let i = 3; i < s.length; i++) {
    str = str.slice(1) + s[i];

    if (new Set(str.split("")).size === 3) {
      res++;
    }
  }

  return res;
};
