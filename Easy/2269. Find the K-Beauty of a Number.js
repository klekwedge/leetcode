/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const str = String(num);
  let res = 0;

  for (let i = 0; i < str.length - k + 1; i++) {
    const subStr = str.slice(i, i + k);
    if (num % +subStr === 0) {
      res++;
    }
  }

  return res;
};
