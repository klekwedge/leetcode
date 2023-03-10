/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const arr = sentence.split(" ");

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    if (i === arr.length - 1 && currentEl[currentEl.length - 1] !== arr[0][0]) {
      return false;
    } else if (
      i !== arr.length - 1 &&
      currentEl[currentEl.length - 1] !== arr[i + 1][0]
    ) {
      return false;
    }
  }

  return true;
};
