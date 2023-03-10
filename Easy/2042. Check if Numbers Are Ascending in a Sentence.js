/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const arr = s
    .split(" ")
    .filter((item) => item.match(/^\d+$/gi))
    .map((item) => +item);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
};
