/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      return s[i];
    } else {
      obj[s[i]] = 1;
    }
  }
};
