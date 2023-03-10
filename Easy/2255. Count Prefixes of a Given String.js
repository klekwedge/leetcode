/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */

var countPrefixes = function (words, s) {
  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    const el = words[i];
    const regex = new RegExp(`^${el}`, "gi");
    if (s.match(regex)) {
      counter++;
    }
  }

  return counter;
};
