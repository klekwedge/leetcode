/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const res = [];
  text = text.split(" ");
  for (let i = 2; i < text.length; i++) {
    if (text[i - 2] === first && text[i - 1] === second) {
      res.push(text[i]);
    }
  }

  return res;
};
