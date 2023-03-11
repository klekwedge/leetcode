/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const arr = text.split(" ");
  counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split("").every((item) => !brokenLetters.includes(item))) {
      counter++;
    }
  }
  return counter;
};
