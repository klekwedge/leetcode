/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const el = words[i];

    if (el === el.split("").reverse().join("")) {
      return el;
    }
  }

  return "";
};
