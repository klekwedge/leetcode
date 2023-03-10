/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  return [...new Set(sentence.replace(/[^a-z]/, "").split(""))].length === 26;
};
