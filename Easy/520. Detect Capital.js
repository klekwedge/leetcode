/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return (
    word.toLowerCase() === word ||
    word.toUpperCase() === word ||
    (word.slice(0, 1).toUpperCase() === word[0] &&
      word.slice(1).toLowerCase() === word.slice(1))
  );
};
