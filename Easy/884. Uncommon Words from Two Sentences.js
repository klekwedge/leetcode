/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const arr1 = s1.split(" ");
  const arr2 = s2.split(" ");

  const res = [];

  for (let i = 0; i < arr1.length; i++) {
    if (
      arr1.indexOf(arr1[i]) === arr1.lastIndexOf(arr1[i]) &&
      !arr2.includes(arr1[i])
    ) {
      res.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (
      arr2.indexOf(arr2[i]) === arr2.lastIndexOf(arr2[i]) &&
      !arr1.includes(arr2[i])
    ) {
      res.push(arr2[i]);
    }
  }

  return res;
};
