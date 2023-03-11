/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i === arr.length - 1 ? -1 : Math.max(...arr.slice(i + 1));
  }

  return arr;
};
