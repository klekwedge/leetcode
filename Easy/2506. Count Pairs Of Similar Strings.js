/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let counter = 0;

  words = words.map((item) => [...new Set(item.split(""))]);

  console.log(words);

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (
        words[i].every((item) => words[j].includes(item)) &&
        words[j].every((item) => words[i].includes(item))
      ) {
        counter++;
      }
    }
  }

  return counter;
};
