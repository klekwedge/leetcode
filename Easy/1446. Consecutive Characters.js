/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 1;
  let current = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      current++;
    } else {
      max = max < current ? current : max;
      current = 1;
    }
  }

  return max;
};
