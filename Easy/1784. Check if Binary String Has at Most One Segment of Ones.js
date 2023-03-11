/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1" && s[i] !== s[i + 1]) {
      counter++;
    }
  }

  return counter === 1;
};
