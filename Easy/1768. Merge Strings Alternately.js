/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";

  for (let i = 0, j = 0; i < word1.length || j < word2.length; i++, j++) {
    if (word1[i] && word2[j]) {
      res += word1[i] + word2[j];
    } else if (word1[i]) {
      res += word1[i];
    } else {
      res += word2[j];
    }
  }

  console.log(res);

  return res;
};
