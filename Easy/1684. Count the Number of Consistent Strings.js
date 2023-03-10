/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let counter = 0;
  const symbols = allowed.split("");

  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").every((item) => symbols.includes(item))) {
      counter++;
    }
  }

  return counter;
};
