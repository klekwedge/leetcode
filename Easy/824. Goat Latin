/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const arr = sentence.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (/^[aeiou]{1}/gi.test(arr[i])) {
      arr[i] += "ma";
    } else {
      arr[i] = arr[i].slice(1) + arr[i][0] + "ma";
    }

    arr[i] += "a".repeat(i + 1);
  }

  return arr.join(" ");
};
